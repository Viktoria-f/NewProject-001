import { _decorator, Component, EditBox, instantiate, Node, Prefab, find, error, sp } from 'cc';
import { findCluster } from "./utils/findCluster";
const { ccclass, property } = _decorator;

@ccclass('GridManager')
export class GridManager extends Component {

    @property(EditBox) inputN: EditBox = null!;
    @property(EditBox) inputM: EditBox = null!;
    @property(EditBox) inputY: EditBox = null!;
    @property(EditBox) inputX: EditBox = null!;

    @property(Prefab) prefab: Prefab = null!;
    @property(Prefab) smbPrefabs: Prefab[] = [];
    @property(Prefab) glow: Prefab = null!;
    @property(Node) gridParent: Node = null!;
    @property(Prefab) popupPrefab: Prefab = null!;

    @property(Node) symbolsLayer: Node = null!;
    @property(Node) glowLayer: Node = null!;

    private symbols: Prefab[] = [];
    private gridOffsetX: number = 0;

    private static readonly CELL_WIDTH = 140;
    private static readonly CELL_HEIGHT = 110;
    private static readonly GRID_OFFSET_Y = 180;

    private n: number;
    private m: number;
    private x: number;
    private y: number;

    getN() { return this.n; };
    getM() { return this.m; };
    getX() { return this.x; };
    getY() { return this.y; };

    setN() { this.n = parseInt(this.inputN.string) || 0; };
    setM() { this.m = parseInt(this.inputM.string) || 0; };
    setX() { this.x = parseInt(this.inputX.string) || 0; };
    setY() { this.y = parseInt(this.inputY.string) || 0; };

    
    onUpdateInputs() {

        try {
            
            this.gridParent.removeAllChildren();
            this.symbolsLayer.removeAllChildren();
            this.glowLayer.removeAllChildren();

            this.setN();
            this.setM();
            this.setX();
            this.setY();

            if (
              !(this.getN() > 0 && this.getM() > 0 && this.getX() < this.smbPrefabs.length && this.getX() > 0 && this.getY() >= 0)
            ) {
              throw new Error();
            }

            this.gridOffsetX = (GridManager.CELL_WIDTH * this.getM()) / 2; 
            this.symbols = new Array(this.getM());

            for (let i = 0; i < this.getM(); i++) {
              this.symbols[i] = this.smbPrefabs[i];
            }
        
            this.createGrid(this.getN(), this.getM(), this.gridOffsetX);
   
        } catch (error) {
            this.showPopup();
        }

    }



    onSpin() {

        let symbolsValuesOnSpin: number[][] = Array.from({ length: this.getN() }, () => new Array(this.getM()).fill(0)); // массив символов
        
        let arrClusterOnSpin: number[][] = Array.from({ length: this.getN() }, () => new Array(this.getM()).fill(0));  // массив кластера
        
        let visitedOnSpin: boolean[][] = Array.from({ length: this.getN() }, () => new Array(this.getM()).fill(false));  // массив обхода
        
        this.gridParent.removeAllChildren();
        this.symbolsLayer.removeAllChildren();
        this.glowLayer.removeAllChildren();

        this.createGrid(this.getN(), this.getM(), this.gridOffsetX);        
        symbolsValuesOnSpin = this.createGridCells(this.getN(), this.getM(), this.getX(), this.gridOffsetX, this.symbols);

        arrClusterOnSpin = findCluster(this.getN(), this.getM(), this.getY(), symbolsValuesOnSpin, visitedOnSpin);;
        
        this.applyGlowToClusters(this.getN(), this.getM(), this.gridOffsetX, arrClusterOnSpin);
        this.applyAnimationOnCluster(this.getN(), this.getM(), arrClusterOnSpin);
        
    }

    

    showPopup() {
        if (this.popupPrefab) {

            const popup = instantiate(this.popupPrefab);
            const canvas = find('Canvas'); 
            if (canvas) {
                popup.parent = canvas;
            }

            popup.setPosition(0, 0);
        }
    }



    createGrid(n: number, m: number, gridOffsetX: number) {

        for (let j = 0; j < n; j++){
            for (let i = 0; i < m; i++){
                const cell = instantiate(this.prefab) as Node;
                this.gridParent.addChild(cell);

                cell.setPosition((GridManager.CELL_WIDTH * i) - gridOffsetX, (GridManager.CELL_HEIGHT * j) - GridManager.GRID_OFFSET_Y, 0)
                console.log(`Создан узел: ${cell.name}, позиция: ${cell.position}}`);
            }    
        }
        
    };



    createGridCells(n: number, m: number, x: number, gridOffsetX: number, symbols: Prefab[]): number[][] {
        let symbolsValues: number[][] = Array.from({ length: this.getN() }, () => new Array(this.getM()).fill(0));

        for (let j = 0; j < n; j++){
            for (let i = 0; i < m; i++){
                
                const randomIndex = Math.floor(Math.random() * x);
                const prefabToSpawn = symbols[randomIndex];

                const newNode = instantiate(prefabToSpawn) as Node;
                this.symbolsLayer.addChild(newNode);

                newNode.setPosition((GridManager.CELL_WIDTH * i) - gridOffsetX, (GridManager.CELL_HEIGHT * j) - GridManager.GRID_OFFSET_Y, 0)
                console.log(`Создан узел: ${newNode.name}, создан узел: ${randomIndex}`);

                symbolsValues[n-j-1][i] = randomIndex + 1;
            }    
        }

        return symbolsValues;
        
    };


    applyGlowToClusters(n: number, m: number, gridOffsetX: number, glowArr: number[][]) {

        for (let j = 0; j < n; j++){
            for (let i = 0; i < m; i++){
                if (glowArr[n-j-1][i]) {
                    const cell = instantiate(this.glow) as Node;
                    this.glowLayer.addChild(cell);

                    cell.setPosition((GridManager.CELL_WIDTH * i) - gridOffsetX, (GridManager.CELL_HEIGHT * j) - GridManager.GRID_OFFSET_Y, 0)
                    console.log(`Создан узел glow: ${cell.name}, позиция: ${cell.position}}`);
                }
            }   
        }
        
    };  
    

    applyAnimationOnCluster(n: number, m: number, glowArr: number[][]) {

        const symbolsArr = this.symbolsLayer.children;

        for (let j = 0; j < n; j++){
            for (let i = 0; i < m; i++){
                
                if (glowArr[n - j - 1][i]) {
                    let winSymbol = symbolsArr[(j*m) + i];
                    let spine = winSymbol.getComponent(sp.Skeleton);
                    spine.setAnimation(0, "win", true);
                }
            }    
        }
    }

}