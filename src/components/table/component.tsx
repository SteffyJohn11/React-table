import React, { useState, useEffect } from "react";
import { tableData } from '../../config/fields';
import { sortFilter, sortAssetClass, getClassName } from '../../utils/utilities'

function TableComponent() {
  const [data, setData] = useState(tableData);
  const [config, setConfig] = useState({ name: "", direction: "" });

  useEffect(() => {
    const assetClassFilter: any = sortAssetClass(tableData);
    setData(assetClassFilter)
  }, [])
  useEffect(() => {
    let sortableItems: any = [...data];
    if (config && config?.name !== '') {
      const { name, direction } = config
      const sortItems = sortFilter(sortableItems, name, direction)
      setData(sortItems)
    }
  }, [config]);

  const onSort = (name: any) => {
    let direction = 'ascending';
    if (config && config.name === name && config.direction === 'ascending') {
      direction = 'descending';
    }
    setConfig({ name, direction });
  }
  return (
    <div className="tableWrapper">
      <table>
        <thead>
          <tr>
            <th>
              Asset Class
            </th>
            <th className="sort-by" onClick={() => onSort('price')} >
              Price
            </th>
            <th className="sort-by" onClick={() => onSort('ticker')}>
              Ticker
            </th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, i) => (
            <tr key={i + 1} className={getClassName(item.assetClass)}>
              <td>{item.assetClass}</td>
              <td className={item.price > 0 ? 'equities' : 'negativePrice'}> {item.price}</td>
              <td>{item.ticker}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;