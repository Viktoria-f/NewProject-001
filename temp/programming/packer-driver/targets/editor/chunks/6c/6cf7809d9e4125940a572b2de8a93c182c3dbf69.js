System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, spineAnimation;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4af6thsLlFRY9cCPngMYfI", "spineAnimation", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Skeleton', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("spineAnimation", spineAnimation = (_dec = ccclass('spineAnimation'), _dec(_class = class spineAnimation extends Component {
        constructor(...args) {
          super(...args);
          //@property(sp.Skeleton)
          this.spine = null;
        }

        playWin() {
          this.spine.setAnimation(0, 'win', false);
        }

        playIdle() {
          this.spine.setAnimation(0, 'idle', false);
          setTimeout(() => {
            this.playIdle();
          }, 4000);
        }

        fade() {
          this.spine.setAnimation(0, null, false);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6cf7809d9e4125940a572b2de8a93c182c3dbf69.js.map