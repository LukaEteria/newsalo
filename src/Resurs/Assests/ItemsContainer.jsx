// src/ItemsContainer.jsx

import React from 'react';
import './ItemsContainer.css'; // Import your styles

const itemsData = [
  { id: 1, title: 'Item 1', description: 'Description for Item 1' },
  { id: 2, title: 'Item 2', description: 'Description for Item 2' },
  { id: 3, title: 'Item 3', description: 'Description for Item 3' },
  { id: 4, title: 'Item 4', description: 'Description for Item 4' },
  { id: 5, title: 'Item 5', description: 'Description for Item 5' },
];

const ItemsContainer = () => {
  return (
    <div className="items-container">
      {itemsData.map(item => (
        <div key={item.id} className="item-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemsContainer;
