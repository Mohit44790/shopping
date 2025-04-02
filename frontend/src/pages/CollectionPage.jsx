import React, { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import SortOptions from './SortOptions';
import ProductGrid from '../components/Products/ProductGrid';
import FilterSidebar from './FilterSidebar';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);

    useEffect(() => {
        setTimeout(() => {
            const fetchProducts = [
                {
                    _id: 6,
                    name: "Product 6",
                    price: 112,
                    images: [{ url: "https://cdn.pixabay.com/photo/2015/10/26/06/51/designer-saree-1006688_640.jpg" }]
                },
                {
                    _id: 7,
                    name: "Product 7",
                    price: 112,
                    images: [{ url: "https://cdn.pixabay.com/photo/2015/04/13/15/30/saree-720716_640.jpg" }]
                },
                {
                    _id: 8,
                    name: "Product 8",
                    price: 112,
                    images: [{ url: "https://cdn.pixabay.com/photo/2015/10/26/06/51/designer-saree-1006688_640.jpg" }]
                },
            ];
            setProducts(fetchProducts);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row">
            {/* Mobile Filter Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden border p-2 flex justify-center items-center bg-gray-200 rounded-md"
            >
                <FaFilter className="mr-2" /> Filters
            </button>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed lg:static top-0 left-0 h-full bg-white shadow-md transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 p-4 w-64 z-50`}
            >
                <FilterSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4">
                <h2 className="text-xl font-semibold">All Collection</h2>
                
                {/* Sort Options */}
                <SortOptions />

                {/* Product Grid */}
                <ProductGrid products={products} />
            </div>
        </div>
    );
};

export default CollectionPage;
