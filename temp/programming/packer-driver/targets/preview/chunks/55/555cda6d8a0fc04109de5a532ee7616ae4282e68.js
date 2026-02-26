System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, instantiate, Node, Prefab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, GridManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "554b3bwOfNPFLuD00wdHHhI", "GridManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridManager", GridManager = (_dec = ccclass('GridManager'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(EditBox), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec13 = property(Prefab), _dec14 = property(Prefab), _dec15 = property(Prefab), _dec16 = property(EditBox), _dec17 = property(Prefab), _dec(_class = (_class2 = class GridManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "inputN", _descriptor, this);

          _initializerDefineProperty(this, "inputM", _descriptor2, this);

          _initializerDefineProperty(this, "prefab", _descriptor3, this);

          _initializerDefineProperty(this, "gridParent", _descriptor4, this);

          _initializerDefineProperty(this, "inputX", _descriptor5, this);

          _initializerDefineProperty(this, "smb1", _descriptor6, this);

          _initializerDefineProperty(this, "smb2", _descriptor7, this);

          _initializerDefineProperty(this, "smb3", _descriptor8, this);

          _initializerDefineProperty(this, "smb4", _descriptor9, this);

          _initializerDefineProperty(this, "smb5", _descriptor10, this);

          _initializerDefineProperty(this, "smb6", _descriptor11, this);

          _initializerDefineProperty(this, "smb7", _descriptor12, this);

          _initializerDefineProperty(this, "smb8", _descriptor13, this);

          _initializerDefineProperty(this, "smb9", _descriptor14, this);

          _initializerDefineProperty(this, "inputY", _descriptor15, this);

          _initializerDefineProperty(this, "glow", _descriptor16, this);
        }

        generateGrid() {
          this.gridParent.removeAllChildren();
          var n = parseInt(this.inputN.string) || 0;
          var m = parseInt(this.inputM.string) || 0;
          var b = 140 * m / 2 - 70;
          var x = parseInt(this.inputX.string) || 0;
          var y = parseInt(this.inputY.string) || 0;
          var symbols = [this.smb1, this.smb2, this.smb3, this.smb4, this.smb5, this.smb6, this.smb7, this.smb8, this.smb9];
          var arr = Array.from({
            length: n
          }, () => new Array(m).fill(0));
          var arrCluster = Array.from({
            length: n
          }, () => new Array(m).fill(0));
          var visited = Array.from({
            length: n
          }, () => new Array(m).fill(false));

          for (var j = 0; j < n; j++) {
            for (var i = 0; i < m; i++) {
              var cell = instantiate(this.prefab);
              this.gridParent.addChild(cell);
              cell.setPosition(140 * i - b, 110 * j - 180, 0);
              console.log("\u0421\u043E\u0437\u0434\u0430\u043D \u0443\u0437\u0435\u043B: " + cell.name + ", \u043F\u043E\u0437\u0438\u0446\u0438\u044F: " + cell.position + ", \u0430\u043A\u0442\u0438\u0432\u0435\u043D: " + cell.activeInHierarchy);
              var randomIndex = Math.floor(Math.random() * x);
              var prefabToSpawn = symbols[randomIndex];
              var newNode = instantiate(prefabToSpawn);
              this.node.addChild(newNode);
              newNode.setPosition(140 * i - b, 110 * j - 180, 0);
              console.log("\u0421\u043E\u0437\u0434\u0430\u043D \u0443\u0437\u0435\u043B: " + randomIndex);
              arr[n - j - 1][i] = randomIndex + 1;
            }

            b = 140 * m / 2 - 70;
          }

          console.log(arr);

          function cluster(arr, y) {
            for (var r = 0; r < n; r++) {
              for (var c = 0; c < m; c++) {
                if (!visited[r][c]) {
                  var group = [];
                  var targetValue = arr[r][c];
                  var stack = [[r, c]];

                  while (stack.length > 0) {
                    var [currR, currC] = stack.pop();
                    group.push([currR, currC]);
                    var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

                    for (var [dr, dc] of directions) {
                      var nr = currR + dr;
                      var nc = currC + dc;

                      if (nr >= 0 && nr < n && nc >= 0 && nc < m && !visited[nr][nc] && arr[nr][nc] === targetValue) {
                        visited[nr][nc] = true;
                        stack.push([nr, nc]);
                      }
                    }
                  }

                  if (group.length > y) {
                    for (var [gr, gc] of group) {
                      arrCluster[gr][gc] = 1;
                    }
                  }
                }
              }
            }

            return arrCluster;
          }

          var glowArr = cluster(arr, y);
          console.log(cluster(arr, y));

          for (var _j = 0; _j < n; _j++) {
            for (var _i = 0; _i < m; _i++) {
              if (glowArr[n - _j - 1][_i]) {
                var _cell = instantiate(this.glow);

                this.gridParent.addChild(_cell);

                _cell.setPosition(140 * _i - b, 110 * _j - 180, 0);

                console.log("\u0421\u043E\u0437\u0434\u0430\u043D \u0443\u0437\u0435\u043B: " + _cell.name + ", \u043F\u043E\u0437\u0438\u0446\u0438\u044F: " + _cell.position + ", \u0430\u043A\u0442\u0438\u0432\u0435\u043D: " + _cell.activeInHierarchy);
              }
            }

            b = 140 * m / 2 - 70;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "inputN", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gridParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "inputX", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "smb1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "smb2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "smb3", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "smb4", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "smb5", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "smb6", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "smb7", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "smb8", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "smb9", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "inputY", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "glow", [_dec17], {
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