import { _decorator, Component, Node, Skeleton, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('spineAnimation')
export class spineAnimation extends Component {
  
    //@property(sp.Skeleton)
    public spine: sp.Skeleton = null!;
    

    playWin() {
        this.spine.setAnimation(0, 'win', false)
    }

    playIdle() {
        this.spine.setAnimation(0, 'idle', false);
        setTimeout(() => { this.playIdle() }, 4000)
    }

    fade() {
        this.spine.setAnimation(0, null, false);
    }


}


