System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, _dec, _class, _crd, ccclass, property, popupError;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "899f5S38YdJTqqCuL5iff2z", "popupError", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("popupError", popupError = (_dec = ccclass('popupError'), _dec(_class = class popupError extends Component {
        onClickClose() {
          tween(this.node).to(0.2, {
            scale: new Vec3(0, 0, 0)
          }, {
            easing: 'backIn'
          }).call(() => {
            this.node.destroy();
          }).start();
          console.log('add popup');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44f13734686ccbd4c4f4b9d446dfae7e3d6d4672.js.map