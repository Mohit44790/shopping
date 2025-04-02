import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    materials: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear", "Footwear", "Accessories"];
  const colors = ["Red", "Yellow", "Blue", "Black", "White", "Green"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Wool", "Polyester", "Silk", "Denim"];
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Zara"];
  const genders = ["Men", "Women", "Unisex"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      materials: params.materials ? params.materials.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 100,
    });

    setPriceRange([Number(params.minPrice) || 0, Number(params.maxPrice) || 100]);
  }, [searchParams]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setSearchParams({ ...filters, [key]: value });
  };

  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange((prev) => [
      e.target.name === "min" ? value : prev[0],
      e.target.name === "max" ? value : prev[1],
    ]);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-56">
      <h3 className="text-xl font-bold mb-4">Filters</h3>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="font-semibold">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2 mt-1">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={() => handleFilterChange("category", category)}
            />
            <span>{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-4">
        <label className="font-semibold">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center space-x-2 mt-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filters.gender === gender}
              onChange={() => handleFilterChange("gender", gender)}
            />
            <span>{gender}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      {/* Color Filter */}
<div className="mb-4">
  <label className="font-semibold">Color</label>
  <div className="flex flex-wrap gap-2 mt-2">
    {colors.map((color) => (
      <div
        key={color}
        className={`w-4 h-4 rounded-full cursor-pointer border-2 ${
          filters.color === color ? "border-black" : "border-transparent"
        }`}
        style={{ backgroundColor: color.toLowerCase() }}
        onClick={() => handleFilterChange("color", color)}
      />
    ))}
  </div>
</div>


      {/* Size Filter */}
      <div className="mb-4">
        <label className="font-semibold">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center space-x-2 mt-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filters.size.includes(size)}
              onChange={() =>
                handleFilterChange("size", filters.size.includes(size) ? filters.size.filter(s => s !== size) : [...filters.size, size])
              }
            />
            <span>{size}</span>
          </div>
        ))}
      </div>

      {/* Materials Filter */}
      <div className="mb-4">
        <label className="font-semibold">Materials</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center space-x-2 mt-1">
            <input
              type="checkbox"
              name="materials"
              value={material}
              checked={filters.materials.includes(material)}
              onChange={() =>
                handleFilterChange("materials", filters.materials.includes(material) ? filters.materials.filter(m => m !== material) : [...filters.materials, material])
              }
            />
            <span>{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="font-semibold">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center space-x-2 mt-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={() =>
                handleFilterChange("brand", filters.brand.includes(brand) ? filters.brand.filter(b => b !== brand) : [...filters.brand, brand])
              }
            />
            <span>{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-4">
      <label className="font-semibold">Price Range</label>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-gray-700 font-medium">₹{priceRange[0]}</span>
        <input
          type="range"
          name="min"
          min="0"
          max="100"
          value={priceRange[0]}
          onChange={handleSliderChange}
          className="w-full"
        />
       
        <span className="text-gray-700 font-medium">₹{priceRange[1]}</span>
      </div>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
        onClick={() => {
          handleFilterChange("minPrice", priceRange[0]);
          handleFilterChange("maxPrice", priceRange[1]);
        }}
      >
        Apply
      </button>
    </div>

      {/* Reset Filters */}
      <button
        className="w-full bg-gray-500 text-white py-2 rounded mt-2 hover:bg-gray-600"
        onClick={() => {
          setFilters({
            category: "",
            gender: "",
            color: "",
            size: [],
            materials: [],
            brand: [],
            minPrice: 0,
            maxPrice: 100,
          });
          setSearchParams({});
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
