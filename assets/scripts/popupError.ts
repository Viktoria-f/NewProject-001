import { _decorator, Component, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('popupError')
export class popupError extends Component {


    public onClickClose() {

        
        tween(this.node)
            .to(0.2, { scale: new Vec3(0, 0, 0) }, { easing: 'backIn' })
            .call(() => {
                this.node.destroy(); 
            })
            .start();
        
        console.log('add popup')
    }
}


