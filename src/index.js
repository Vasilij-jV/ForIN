const objectToSort = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(objectToSortParam, orderSort) {
  const orderSortUnit = [];
  for (const item in objectToSortParam) {
    if (!orderSort.includes(item)) {
      orderSortUnit.push(item);
    }
  }

  orderSortUnit.sort((a, b) => {
    if (a < b) {
      return -1;
    }

    return 1;
  });

  orderSort.push(...orderSortUnit);

  const plate = orderSort.map((item) => ({ key: item, value: objectToSort[item] }));

  return plate;
}

orderByProps(objectToSort, ['name', 'level']);
