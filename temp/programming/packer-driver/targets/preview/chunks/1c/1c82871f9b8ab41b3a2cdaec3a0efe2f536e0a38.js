System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _crd, ccclass, property;

  function applyGlowToClusters(n, m, gridOffsetX, glowArr) {
    for (var j = 0; j < n; j++) {
      for (var i = 0; i < m; i++) {
        if (glowArr[n - j][i]) {
          var cell = instantiate(this.glow);
          this.gridParent.addChild(cell);
          cell.setPosition(GridManager.CELL_WIDTH * i - gridOffsetX, GridManager.CELL_HEIGHT * j - GridManager.GRID_OFFSET_Y, 0);
          console.log("\u0421\u043E\u0437\u0434\u0430\u043D \u0443\u0437\u0435\u043B glow: " + cell.name + ", \u043F\u043E\u0437\u0438\u0446\u0438\u044F: " + cell.position + "}");
        }
      }
    }
  }

  _export("applyGlowToClusters", applyGlowToClusters);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e523wM1DVHa7gTleJzTllR", "applyGlowToClusters", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c82871f9b8ab41b3a2cdaec3a0efe2f536e0a38.js.map