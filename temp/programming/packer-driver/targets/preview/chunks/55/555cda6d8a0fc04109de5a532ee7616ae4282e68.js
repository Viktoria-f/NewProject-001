System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, instantiate, Node, Prefab, find, sp, findCluster, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3, _crd, ccclass, property, GridManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOffindCluster(extras) {
    _reporterNs.report("findCluster", "./utils/findCluster", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      find = _cc.find;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      findCluster = _unresolved_2.findCluster;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "554b3bwOfNPFLuD00wdHHhI", "GridManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'instantiate', 'Node', 'Prefab', 'find', 'error', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridManager", GridManager = (_dec = ccclass('GridManager'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(EditBox), _dec5 = property(EditBox), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Node), _dec10 = property(Prefab), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = (_class3 = class GridManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "inputN", _descriptor, this);

          _initializerDefineProperty(this, "inputM", _descriptor2, this);

          _initializerDefineProperty(this, "inputY", _descriptor3, this);

          _initializerDefineProperty(this, "inputX", _descriptor4, this);

          _initializerDefineProperty(this, "prefab", _descriptor5, this);

          _initializerDefineProperty(this, "smbPrefabs", _descriptor6, this);

          _initializerDefineProperty(this, "glow", _descriptor7, this);

          _initializerDefineProperty(this, "gridParent", _descriptor8, this);

          _initializerDefineProperty(this, "popupPrefab", _descriptor9, this);

          _initializerDefineProperty(this, "symbolsLayer", _descriptor10, this);

          _initializerDefineProperty(this, "glowLayer", _descriptor11, this);

          this.symbols = [];
          this.gridOffsetX = 0;
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

        setN() {
          this.n = parseInt(this.inputN.string) || 0;
        }

        setM() {
          this.m = parseInt(this.inputM.string) || 0;
        }

        setX() {
          this.x = parseInt(this.inputX.string) || 0;
        }

        setY() {
          this.y = parseInt(this.inputY.string) || 0;
        }

        onUpdateInputs() {
          try {
            this.gridParent.removeAllChildren();
            this.symbolsLayer.removeAllChildren();
            this.glowLayer.removeAllChildren();
            this.setN();
            this.setM();
            this.setX();
            this.setY();

            if (!(this.getN() > 0 && this.getM() > 0 && this.getX() < 9 && this.getX() > 0 && this.getY() >= 0)) {
              throw new Error();
            }

            this.gridOffsetX = GridManager.CELL_WIDTH * this.getM() / 2;
            this.symbols = new Array(this.getM());

            for (var i = 0; i < this.getM(); i++) {
              this.symbols[i] = this.smbPrefabs[i];
            }

            this.createGrid(this.getN(), this.getM(), this.gridOffsetX);
          } catch (error) {
            this.showPopup();
          }
        }

        onSpin() {
          var symbolsValuesOnSpin = Array.from({
            length: this.getN()
          }, () => new Array(this.getM()).fill(0)); // массив номеров символов

          var arrClusterOnSpin = Array.from({
            length: this.getN()
          }, () => new Array(this.getM()).fill(0)); // массив кластера

          var visitedOnSpin = Array.from({
            length: this.getN()
          }, () => new Array(this.getM()).fill(false)); // массив обхода

          this.gridParent.removeAllChildren();
          this.symbolsLayer.removeAllChildren();
          this.glowLayer.removeAllChildren();
          this.createGrid(this.getN(), this.getM(), this.gridOffsetX);
          symbolsValuesOnSpin = this.createGridCells(this.getN(), this.getM(), this.getX(), this.gridOffsetX, this.symbols);
          arrClusterOnSpin = (_crd && findCluster === void 0 ? (_reportPossibleCrUseOffindCluster({
            error: Error()
          }), findCluster) : findCluster)(this.getN(), this.getM(), this.getY(), symbolsValuesOnSpin, visitedOnSpin);
          ;
          this.applyGlowToClusters(this.getN(), this.getM(), this.gridOffsetX, arrClusterOnSpin);
          this.applyAnimationOnCluster(this.getN(), this.getM(), arrClusterOnSpin);
        }

        showPopup() {
          if (this.popupPrefab) {
            var popup = instantiate(this.popupPrefab);
            var canvas = find('Canvas');

            if (canvas) {
              popup.parent = canvas;
            }

            popup.setPosition(0, 0);
          }
        }

        createGrid(n, m, gridOffsetX) {
          for (var j = 0; j < n; j++) {
            for (var i = 0; i < m; i++) {
              var cell = instantiate(this.prefab);
              this.gridParent.addChild(cell);
              cell.setPosition(GridManager.CELL_WIDTH * i - gridOffsetX, GridManager.CELL_HEIGHT * j - GridManager.GRID_OFFSET_Y, 0);
              console.log("\u0421\u043E\u0437\u0434\u0430\u043D \u0443\u0437\u0435\u043B: " + cell.name + ", \u043F\u043E\u0437\u0438\u0446\u0438\u044F: " + cell.position + "}");
            }
          }
        }

        createGridCells(n, m, x, gridOffsetX, symbols) {
          var symbolsValues = Array.from({
            length: this.getN()
          }, () => new Array(this.getM()).fill(0));

          for (var j = 0; j < n; j++) {
            for (var i = 0; i < m; i++) {
              var randomIndex = Math.floor(Math.random() * x);
              var prefabToSpawn = symbols[randomIndex];
              var newNode = instantiate(prefabToSpawn);
              this.symbolsLayer.addChild(newNode);
              newNode.setPosition(GridManager.CELL_WIDTH * i - gridOffsetX, GridManager.CELL_HEIGHT * j - GridManager.GRID_OFFSET_Y, 0);
              console.log("\u0421\u043E\u0437\u0434\u0430\u043D \u0443\u0437\u0435\u043B: " + newNode.name + ", \u0441\u043E\u0437\u0434\u0430\u043D \u0443\u0437\u0435\u043B: " + randomIndex);
              symbolsValues[n - j - 1][i] = randomIndex + 1;
            }
          }

          return symbolsValues;
        }

        applyGlowToClusters(n, m, gridOffsetX, glowArr) {
          for (var j = 0; j < n; j++) {
            for (var i = 0; i < m; i++) {
              if (glowArr[n - j - 1][i]) {
                var cell = instantiate(this.glow);
                this.glowLayer.addChild(cell);
                cell.setPosition(GridManager.CELL_WIDTH * i - gridOffsetX, GridManager.CELL_HEIGHT * j - GridManager.GRID_OFFSET_Y, 0);
                console.log("\u0421\u043E\u0437\u0434\u0430\u043D \u0443\u0437\u0435\u043B glow: " + cell.name + ", \u043F\u043E\u0437\u0438\u0446\u0438\u044F: " + cell.position + "}");
              }
            }
          }
        }

        applyAnimationOnCluster(n, m, glowArr) {
          // let arrAll = this.gridParent.children;
          // const symbolsArr = arrAll.slice(n * m, n* m*2)
          var symbolsArr = this.symbolsLayer.children;

          for (var j = 0; j < n; j++) {
            for (var i = 0; i < m; i++) {
              if (glowArr[n - j - 1][i]) {
                var winSymbol = symbolsArr[j * m + i];
                var spine = winSymbol.getComponent(sp.Skeleton);
                spine.setAnimation(0, "win", true);
              }
            }
          }
        }

      }, _class3.CELL_WIDTH = 140, _class3.CELL_HEIGHT = 110, _class3.GRID_OFFSET_Y = 180, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "inputN", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inputM", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "inputY", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "inputX", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "smbPrefabs", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "glow", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gridParent", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "popupPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "symbolsLayer", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "glowLayer", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=555cda6d8a0fc04109de5a532ee7616ae4282e68.js.map