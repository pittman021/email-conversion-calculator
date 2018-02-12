import React from 'react';

const TableSalesRecovered = ({ data: { salesRecovered }, data: { recoveredRevenue } }) => {
  return (
    <table className="pure-table pure-table-bordered">
      <thead>
        <tr>
          <th>Sales Recovered</th>
          <th>Recovered Revenue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ backgroundColor: salesRecovered > 0 ? '#5fb760' : '#ea3f31' }}>{salesRecovered}</td>
          <td style={{ backgroundColor: recoveredRevenue > 0 ? '#5fb760' : '#ea3f31' }}>${recoveredRevenue.toLocaleString()}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableSalesRecovered;
