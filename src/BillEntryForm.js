import React, { useState } from 'react';
import './BillEntryForm.css';

const BillEntryForm = ({ onAddToBill }) => {
  const [orderId, setOrderId] = useState('');
  const [price, setPrice] = useState('');
  const [dish, setDish] = useState('');
  const [tableNo, setTableNo] = useState('');

  const handleAddToBill = () => {
    if (orderId && price && dish && tableNo) {
      onAddToBill({ orderId, price, dish, tableNo });
      setOrderId('');
      setPrice('');
      setDish('');
      setTableNo('');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div>
      <h2>Add to Bill</h2>
      <div>
        <label>Unique Order ID:</label>
        <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Choose Dish:</label>
        <input type="text" value={dish} onChange={(e) => setDish(e.target.value)} />
      </div>
      <div>
        <label>Table No:</label>
        <input type="number" value={tableNo} onChange={(e) => setTableNo(e.target.value)} />
      </div>
      <button onClick={handleAddToBill}>Add to Bill</button>
    </div>
  );
};

export default BillEntryForm;