export const sortFilter = (array: [], name: any, direction: any) => {
    return array.sort((a: any, b: any) => {
        if (a[name] < b[name]) {
            return direction === 'ascending' ? -1 : 1;
        }
        if (a[name] > b[name]) {
            return direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });
};

export const sortAssetClass = (array: any) => {
    let _array = array.map((item: any) => ({
        ...item,
        id: item.assetClass === 'Equities' ? 1 : item.assetClass === 'Macro' ? 2 : 3
    }))
   return _array.sort(function (a: any, b: any) {
        return a.id - b.id
    });

};

export const getClassName = (assetClass: any) => {
    switch (assetClass) {
        case 'Macro':
            return 'macro'
        case 'Credit':
            return 'credit'
        case 'Equities':
            return "equities";
        default:
            break
    }
}