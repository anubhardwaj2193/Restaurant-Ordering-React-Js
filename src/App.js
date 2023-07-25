import React, { useState, useEffect } from 'react';
import BillEntryForm from './BillEntryForm';
import Table from './Table';

const App = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleAddToBill = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <div className="app-container">
      <BillEntryForm onAddToBill={handleAddToBill} />
      <div className="tables-container">
        <div className="table-container">
          <Table tableNo={1} orders={orders.filter((order) => order.tableNo === '1')} />
        </div>
        <div className="table-container">
          <Table tableNo={2} orders={orders.filter((order) => order.tableNo === '2')} />
        </div>
        <div className="table-container">
          <Table tableNo={3} orders={orders.filter((order) => order.tableNo === '3')} />
        </div>
      </div>
    </div>
  );
};

export default App;