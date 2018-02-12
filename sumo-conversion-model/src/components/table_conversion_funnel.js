import React from 'react';

const TableConversionFunnel = props => {
  return (
    <table className="pure-table pure-table-bordered">
      <thead>
        <tr>
          <th />
          <th># of Visits or Orders</th>
          <th colSpan="2">Conversion Rates</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monthly Website Traffic</td>
          <td>{props.data.traffic}</td>
          <th>You</th>
          <th>eComm Avg</th>
        </tr>
        <tr>
          <td>Added to Cart(visits)</td>
          <td>{props.data.data[0]}</td>
          <td
            style={{
              backgroundColor: props.data.avgs[0] > 11 ? '#5fb760' : '#ea3f31'
            }}
          >
            {props.data.avgs[0].toFixed(2) + '%'}
          </td>
          <td>11%</td>
        </tr>
        <tr>
          <td>Reached Checkout(visits)</td>
          <td>{props.data.data[1]}</td>
          <td
            style={{
              backgroundColor: props.data.avgs[1] > 5.5 ? '#5fb760' : '#ea3f31'
            }}
          >
            {props.data.avgs[1].toFixed(2) + '%'}
          </td>
          <td>5.5%</td>
        </tr>
        <tr>
          <td>Purchsed (orders)</td>
          <td>{props.data.data[2]}</td>
          <td
            style={{
              backgroundColor: props.data.avgs[2] > 2.75 ? '#5fb760' : '#ea3f31'
            }}
          >
            {props.data.avgs[2].toFixed(2) + '%'}
          </td>
          <td>2.75%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableConversionFunnel;
