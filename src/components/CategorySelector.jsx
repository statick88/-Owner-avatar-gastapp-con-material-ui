// src/components/CategorySelector.jsx

import { useState } from "react";
import PropTypes from "prop-types";

function CategorySelector({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="">Select Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
        <option value="other">Other</option>
      </select>
      {selectedCategory === "other" && (
        <input type="text" placeholder="Enter Category" />
      )}
    </div>
  );
}

CategorySelector.propTypes = {
  categories: PropTypes.array.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategorySelector;
