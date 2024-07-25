
import React, { useState } from 'react';

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setError('Name is required');
    } else {
      setError('');
   
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        
        <input
          type="text"
          value={name}
          onChange={handleChange}
          className="text-danger"
          
        />
      
      <dd className="text-danger"> {error}</dd>
      
      
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
