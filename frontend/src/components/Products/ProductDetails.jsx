import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Jacket",
  price: 3223,
  originalPrice: 4555,
  description: "This is a stylish jacket",
  brand: "Fashion",
  materials: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Yellow"],
  images: [
    {
      url: "https://cdn.pixabay.com/photo/2025/01/30/18/57/ai-generated-9370836_640.png",
      altText: "Stylish jacket 1",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/08/18/23/03/people-4415189_640.jpg",
      altText: "Stylish jacket 2",
    },
  ],
};

const similarProducts =[
    {
        _id:1,
        name:"Product 1",
        price:112,
        images:[{url:"https://cdn.pixabay.com/photo/2019/08/18/23/03/people-4415189_640.jpg"}]
    },
    {
        _id:2,
        name:"Product 2",
        price:112,
        images:[{url:"https://cdn.pixabay.com/photo/2019/08/18/23/03/people-4415189_640.jpg"}]
    },
    {
        _id:3,
        name:"Product 3",
        price:112,
        images:[{url:"https://cdn.pixabay.com/photo/2019/08/18/23/03/people-4415189_640.jpg"}]
    },
    {
        _id:4,
        name:"Product 4",
        price:112,
        images:[{url:"https://cdn.pixabay.com/photo/2019/08/18/23/03/people-4415189_640.jpg"}]
    },
   
]

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

 

  const handleAddCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart");
      return;
    }
    setIsButtonDisabled(true);
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
      toast.success("Product added to cart successfully!");
      setIsButtonDisabled(false);
    }, 2000);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                onClick={() => setMainImage(image.url)}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Main Image Section */}
          <div className="relative">
            <div
              className="relative group overflow-hidden"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={mainImage}
                alt="Main product"
                className="w-full h-auto object-cover rounded-lg cursor-crosshair"
              />
              
              {/* Circular Zoom Lens */}
              {isZoomed && (
                <div
                  className="absolute w-32 h-32 rounded-full border-2 border-white shadow-lg"
                  style={{
                    top: `${zoomPosition.y}%`,
                    left: `${zoomPosition.x}%`,
                    transform: "translate(-50%, -50%)",
                    backgroundImage: `url(${mainImage})`,
                    backgroundSize: "200%",
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    pointerEvents: "none",
                  }}
                />
              )}
            </div>
          </div>

          {/* Mobile Thumbnails */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                onClick={() => setMainImage(image.url)}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice && `$${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-900 font-bold mb-2">${selectedProduct.price}</p>
            <p className="text-lg text-gray-600 mb-4">{selectedProduct.description}</p>

            {/* Colors */}
            <div className="flex gap-2 mt-2">
              {selectedProduct.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor === color ? "border-4 border-black" : "border-gray-300"
                  }`}
                  style={{
                    background: color.toLowerCase(),
                    filter: "brightness(0.5)",
                  }}
                ></button>
              ))}
            </div>

            {/* Sizes */}
            <div className="mb-4 mt-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    onClick={() => setSelectedSize(size)}
                    key={size}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size ? "bg-black text-white" : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                  onClick={() => handleQuantityChange("minus")}
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                  onClick={() => handleQuantityChange("plus")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="bg-black text-white py-2 px-6 rounded w-full mb-4 hover:bg-gray-800 transition"
              onClick={handleAddCart}
              disabled={isButtonDisabled}
            >
              {isLoading ? "Adding..." : "Add To Cart"}
            </button>

            {/* Characteristics */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1 font-semibold">Brand:</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-semibold">Materials:</td>
                    <td className="py-1">{selectedProduct.materials}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-2xl text-center font-medium mb04">You May Also Like</h2>
        <ProductGrid  products={similarProducts}/>
      </div>
    </div>
  );
};

export default ProductDetails;
