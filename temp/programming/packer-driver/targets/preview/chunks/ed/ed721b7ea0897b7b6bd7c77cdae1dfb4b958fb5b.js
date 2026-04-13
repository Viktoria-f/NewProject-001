System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, parameters;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db711kJ49ZFGbJgj3HweSjn", "parameters", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("parameters", parameters = (_dec = ccclass('parameters'), _dec(_class = (_class2 = class parameters {
        constructor() {
          // private symbols: Prefab[] = [];
          // private gridOffsetX: number = 0;
          this.n = void 0;
          this.m = void 0;
          this.x = void 0;
          this.y = void 0;
        }

        getN() {
          return this.n;
        }

        getM() {
          return this.m;
        }

        getX() {
          return this.x;
        }

        getY() {
          return this.y;
        }

        setN(n) {
          this.n = n;
        }

        setM(m) {
          this.m = m;
        }

        setX(x) {
          this.x = x;
        }

        setY(y) {
          this.y = y;
        }

      }, _class2.CELL_WIDTH = 140, _class2.CELL_HEIGHT = 110, _class2.GRID_OFFSET_Y = 180, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed721b7ea0897b7b6bd7c77cdae1dfb4b958fb5b.js.map