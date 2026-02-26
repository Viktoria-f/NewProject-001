import { _decorator, Component, EditBox, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GridManager')
export class GridManager extends Component {


    @property(EditBox) inputN: EditBox = null!;
    @property(EditBox) inputM: EditBox = null!;
    @property(Prefab) prefab: Prefab = null!;
    @property(Node) gridParent: Node = null!;


    @property(EditBox) inputX: EditBox = null!;
    @property(Prefab) smb1: Prefab = null!;
    @property(Prefab) smb2: Prefab = null!;
    @property(Prefab) smb3: Prefab = null!;
    @property(Prefab) smb4: Prefab = null!;
    @property(Prefab) smb5: Prefab = null!;
    @property(Prefab) smb6: Prefab = null!;
    @property(Prefab) smb7: Prefab = null!;
    @property(Prefab) smb8: Prefab = null!;
    @property(Prefab) smb9: Prefab = null!;


    @property(EditBox) inputY: EditBox = null!;
    @property(Prefab) glow: Prefab = null!;

    

    generateGrid() {
        
        this.gridParent.removeAllChildren();
        
        const n = parseInt(this.inputN.string) || 0;
        const m = parseInt(this.inputM.string) || 0;

        
        let b = 140*m/2 - 70;


        const x = parseInt(this.inputX.string) || 0;
        const y = parseInt(this.inputY.string) || 0;


        const symbols: Prefab[] = [this.smb1, this.smb2, this.smb3, this.smb4, this.smb5, this.smb6, this.smb7, this.smb8, this.smb9];

        let arr: number[][] = Array.from({ length: n }, () => new Array(m).fill(0));

        let arrCluster: number[][] = Array.from({ length: n }, () => new Array(m).fill(0));

        let visited: boolean[][] = Array.from({ length: n }, () => new Array(m).fill(false));

 

        for (let j = 0; j < n; j++){
            for (let i = 0; i < m; i++){
                const cell = instantiate(this.prefab) as Node;
                this.gridParent.addChild(cell);

                cell.setPosition((140 * i ) - b, (110 * j) - 180, 0)
                console.log(`Создан узел: ${cell.name}, позиция: ${cell.position}, активен: ${cell.activeInHierarchy}`);


                const randomIndex = Math.floor(Math.random() * x);

                const prefabToSpawn = symbols[randomIndex];

                const newNode = instantiate(prefabToSpawn) as Node;
                this.node.addChild(newNode);

                newNode.setPosition((140 * i ) - b, (110 * j) - 180, 0)
                console.log(`Создан узел: ${randomIndex}`);

                arr[n-j-1][i] = randomIndex + 1;


            }
            
            b = 140*m/2 - 70;
        }


        console.log(arr);


        function cluster(arr, y: number) {


            for (let r = 0; r < n; r++) {
                for (let c = 0; c < m; c++) {
                    if (!visited[r][c]) {
                        const group = [];
                        const targetValue = arr[r][c];

                        const stack = [[r, c]];

                        while (stack.length > 0) {
                        const [currR, currC] = stack.pop();
                        group.push([currR, currC]);

                        
                        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
                        for (const [dr, dc] of directions) {
                            const nr = currR + dr;
                            const nc = currC + dc;

                            if (nr >= 0 && nr < n && nc >= 0 && nc < m &&
                            !visited[nr][nc] && arr[nr][nc] === targetValue) {
                                visited[nr][nc] = true;
                                stack.push([nr, nc]);
                                }
                            }
                        }

                        
                        if (group.length > y) {
                            for (const [gr, gc] of group) {
                               arrCluster[gr][gc] = 1;
                            }   
                        }
                    }
                }
            }
            return arrCluster;
        }
                    
                    


        let glowArr: number[][] = cluster(arr, y)
        console.log(cluster(arr, y));





        for (let j = 0; j < n; j++){
            for (let i = 0; i < m; i++){
                if (glowArr[n-j-1][i]) {
                    const cell = instantiate(this.glow) as Node;
                    this.gridParent.addChild(cell);

                    cell.setPosition((140 * i) - b, (110 * j) - 180, 0)
                    console.log(`Создан узел: ${cell.name}, позиция: ${cell.position}, активен: ${cell.activeInHierarchy}`);
                }



            }
            
            b = 140*m/2 - 70;
        }


    }
}


