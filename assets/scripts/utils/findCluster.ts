import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export function findCluster(n: number, m: number, y: number, arr: number[][], visited: boolean[][]): number[][] {
    let arrCluster: number[][] = Array.from({ length: n }, () => new Array(m).fill(0));
    for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (!visited[r][c]) {
        const group = [];
        const targetValue = arr[r][c];

        const stack = [[r, c]];

        while (stack.length > 0) {
          const [currR, currC] = stack.pop();
          group.push([currR, currC]);

          const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
          ];
          for (const [dr, dc] of directions) {
            const nr = currR + dr;
            const nc = currC + dc;

            if (
              nr >= 0 &&
              nr < n &&
              nc >= 0 &&
              nc < m &&
              !visited[nr][nc] &&
              arr[nr][nc] === targetValue
            ) {
              visited[nr][nc] = true;
              stack.push([nr, nc]);
            }
          }
        }

        if (group.length > y) {
          for (const [gr, gc] of group) {
            arrCluster[gr][gc] = 1;
          }
        }
      }
    }
  }
  return arrCluster;
}


