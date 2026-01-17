import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch('doctorName', e.target.value);
  };

  return (
    <div className="search-bar-wrapper position-relative mb-3">
      <i className="fas fa-search search-icon position-absolute"></i>
      <input
        type="text"
        placeholder="Search by doctor name"
        className="form-control search-input"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
