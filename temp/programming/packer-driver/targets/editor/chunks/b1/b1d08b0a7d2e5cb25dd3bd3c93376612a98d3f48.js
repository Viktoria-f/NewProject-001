System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, NewComponent;

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
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f3683aZgDRO/pT8z4OjAQx8", "NewComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewComponent", NewComponent = (_dec = ccclass('NewComponent'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(Prefab), _dec5 = property(Node), _dec(_class = (_class2 = class NewComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "inputN", _descriptor, this);

          // Поле для строк
          _initializerDefineProperty(this, "inputM", _descriptor2, this);

          // Поле для столбцов
          _initializerDefineProperty(this, "cellPrefab", _descriptor3, this);

          // Префаб клетки
          _initializerDefineProperty(this, "gridParent", _descriptor4, this);
        }

        // Узел с компонентом Layout
        generateGrid() {
          // 1. Считываем значения
          const n = parseInt(this.inputN.string) || 0;
          const m = parseInt(this.inputM.string) || 0; // 2. Очищаем старое поле

          this.gridParent.removeAllChildren(); // 3. Настраиваем Layout (динамическое изменение размера)

          const layout = this.gridParent.getComponent(Layout);
          const cellWidth = 100; // Размер твоей клетки
          // Устанавливаем ширину контейнера, чтобы Layout знал, когда переносить клетки

          const parentTransform = this.gridParent.getComponent(UITransform);
          parentTransform.setContentSize(m * cellWidth, n * cellWidth); // 4. Создаем клетки

          for (let i = 0; i < n * m; i++) {
            const cell = instantiate(this.cellPrefab);
            this.gridParent.addChild(cell);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "inputN", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inputM", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gridParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1d08b0a7d2e5cb25dd3bd3c93376612a98d3f48.js.map