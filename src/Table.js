import React from 'react';
import './Table.css';

const Table = ({ tableNo, orders }) => {
  return (
    <div>
      <h2>Table {tableNo}</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Price</th>
            <th>Dish</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.price}</td>
              <td>{order.dish}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;