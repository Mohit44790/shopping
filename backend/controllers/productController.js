import Product from "../models/Product.js";

// Create a Product (Admin Only)
export const createProduct = async (req, res) => {
  try {
    const { 
      name, description, price, discountPrice, countInStock, sku, category, 
      brand, sizes, colors, collections, materials, gender, images, 
      isFeatured, isPublished, tags, dimensions, weight 
    } = req.body;

    const product = new Product({
      name, description, price, discountPrice, countInStock, sku, category,
      brand, sizes, colors, collections, materials, gender, images, 
      isFeatured, isPublished, tags, dimensions, weight,
      user: req.user._id, // Admin creating the product
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get Products with Query Filters
export const getquery = async (req, res) => {
  try { 
    const { 
      collection, size, brand, color, gender, minPrice, maxPrice, 
      sortBy, category, materials, page = 1, limit = 10, search 
    } = req.query;

    let query = {};

    if (collection && collection.toLowerCase() !== "all") {
      query.collections = collection;
    }
    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }
    if (brand) {
      query.brand = { $in: brand.split(",") };
    }
    if (size) {
      query.size = { $in: size.split(",") };
    }
    if (color) {
      query.color = { $in: color.split(",") };
    }
    if (gender) {
      query.gender = gender;
    }
    if (materials) {
      query.materials = { $in: materials.split(",") };
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } }
      ];
    }

    // Sorting
    let sortOption = { createdAt: -1 }; // Default: Newest first
    if (sortBy === "priceLow") sortOption = { price: 1 };
    if (sortBy === "priceHigh") sortOption = { price: -1 };
    if (sortBy === "name") sortOption = { name: 1 };

    // Pagination
    const pageNumber = Number(page);
    const pageSize = Number(limit) || 10;
    const skip = (pageNumber - 1) * pageSize;

    // Fetch products
    const products = await Product.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(pageSize);

    // Total count for pagination
    const totalProducts = await Product.countDocuments(query);

    res.json({
      products,
      totalProducts,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalProducts / pageSize),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get Single Product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update Product (Admin Only)
export const updateProduct = async (req, res) => {
  try {
    const { 
      name, description, price, discountPrice, countInStock, sku, category, 
      brand, sizes, colors, collections, materials, gender, images, 
      isFeatured, isPublished, tags, dimensions, weight 
    } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name, description, price, discountPrice, countInStock, sku, category,
          brand, sizes, colors, collections, materials, gender, images, 
          isFeatured, isPublished, tags, dimensions, weight
        }
      },
      { new: true } // Returns updated document
    );

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete Product (Admin Only)
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.deleteOne();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
