import { _decorator, Component, EditBox, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RandomImage')
export class RandomImage extends Component {
        
    @property(EditBox) inputX: EditBox = null!;
    @property(Prefab) prefab: Prefab = null!;
    @property(Prefab) smb1: Prefab = null!;
    @property(Prefab) smb2: Prefab = null!;
    @property(Prefab) smb3: Prefab = null!;
    @property(Prefab) smb4: Prefab = null!;
    @property(Prefab) smb5: Prefab = null!;
    @property(Prefab) smb6: Prefab = null!;
    @property(Prefab) smb7: Prefab = null!;
    @property(Prefab) smb8: Prefab = null!;
    @property(Prefab) smb9: Prefab = null!;

        
    
    generateImage() {
        const x = parseInt(this.inputX.string) || 0;

        const symbols: Prefab[] = [this.smb1, this.smb2, this.smb3, this.smb4, this.smb5, this.smb6, this.smb7, this.smb8, this.smb9];

        const randomIndex = Math.floor(Math.random() * x);

        const prefabToSpawn = symbols[randomIndex];

        const newNode = instantiate(prefabToSpawn) as Node;
        this.node.addChild(newNode);

    }

}
