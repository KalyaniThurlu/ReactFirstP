import React from 'react';

const Navbar = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f8f8f8', borderBottom: '1px solid #ddd' }}>
      <h1 style={{ display: 'inline-block', marginRight: '20px' }}>Shopping</h1>
      <label htmlFor="category-select" style={{ marginRight: '10px' }}>Select Category: </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={onCategoryChange}
        style={{ padding: '5px' }}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;
