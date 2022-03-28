function eatenApples(apples: number[], days: number[]): number {
  interface applesPile {
    endTime: number;
    count: number;
  }
  let eatNum: number = 0;
  let store: applesPile[] = new Array();
  for (let i: number = 0; i < apples.length; i++) {
    if (apples[i]) {
      store.push({
        endTime: i + days[i],
        count: apples[i],
      });
    }
    eatApples(i + 1);
    if (store[0] && store[0].count > 0) {
      store[0].count = (store[0].count as number) - 1;
      eatNum++;
    }
  }
  let remainingTime = apples.length;
  while (store.length) {
    remainingTime += 1;
    eatApples(remainingTime);
    if (store[0] && store[0].count > 0) {
      store[0].count = (store[0].count as number) - 1;
      eatNum++;
    }
  }

  function eatApples(i: number) {
    for (let j: number = 0; j < store.length; j++) {
      if (store[j].endTime < i || store[j].count === 0) {
        store.splice(j, 1);
        j--;
      }
    }
    store.sort((a, b) => {
      return a.endTime - b.endTime;
    });
  }
  return eatNum;
}
