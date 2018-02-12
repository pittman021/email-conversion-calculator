import React from 'react';

const TableLostSales = ({ data: { lostSales }, data: { lostRevenue } }) => {
  return (
    <div>
      <table className="pure-table">
        <thead>
          <tr>
            <th />
            <th># of Lost Sales</th>
            <th>Lost Revenue ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lost Sales in last 30 days</td>
            <td
              style={{
                backgroundColor: lostSales > 0 ? '#ea3f31' : ''
              }}
            >
              {lostSales.toLocaleString()}
            </td>
            <td
              style={{
                backgroundColor: lostRevenue > 0 ? '#ea3f31' : ''
              }}
            >
              {lostRevenue.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableLostSales;
