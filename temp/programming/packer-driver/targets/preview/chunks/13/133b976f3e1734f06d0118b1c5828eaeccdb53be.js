System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _crd, ccclass, property;

  function findCluster(n, m, y, arr, visited) {
    var arrCluster = Array.from({
      length: n
    }, () => new Array(m).fill(0));

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

  _export("findCluster", findCluster);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef1aawRUftPVrFtKfv/HVpy", "findCluster", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=133b976f3e1734f06d0118b1c5828eaeccdb53be.js.map