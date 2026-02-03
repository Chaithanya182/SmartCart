import mongoose from "mongoose";
import productModel from "./models/productModel.js";
import dotenv from "dotenv";

dotenv.config();

// Sample products data - modify this array with your products
const products = [
    {
        name: "Men's Casual T-Shirt",
        description: "Comfortable cotton t-shirt perfect for everyday wear. Soft fabric with a relaxed fit.",
        price: 499,
        image: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Summer Dress",
        description: "Elegant floral summer dress. Lightweight and breathable fabric for hot days.",
        price: 1299,
        image: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Kids Denim Jeans",
        description: "Durable denim jeans for active kids. Comfortable stretch fabric with adjustable waist.",
        price: 799,
        image: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400"],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Men's Winter Jacket",
        description: "Warm and stylish winter jacket. Water-resistant outer shell with soft fleece lining.",
        price: 2499,
        image: ["https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL", "XXL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Yoga Pants",
        description: "High-waisted yoga pants with four-way stretch. Perfect for workouts or casual wear.",
        price: 899,
        image: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400"],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Kids Hoodie",
        description: "Cozy hooded sweatshirt for kids. Soft cotton blend with kangaroo pocket.",
        price: 699,
        image: ["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"],
        category: "Kids",
        subCategory: "Winterwear",
        sizes: ["4-5Y", "6-7Y", "8-9Y"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Formal Shirt",
        description: "Classic formal shirt in premium cotton. Wrinkle-resistant fabric for a polished look.",
        price: 1199,
        image: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Women's Cardigan",
        description: "Soft knit cardigan perfect for layering. Versatile style for any occasion.",
        price: 1499,
        image: ["https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L"],
        bestseller: true,
        date: Date.now()
    }
];

// Connect to MongoDB and seed data
const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected to MongoDB");

        // Optional: Clear existing products first
        // await productModel.deleteMany({});
        // console.log("🗑️ Cleared existing products");

        // Insert all products
        const result = await productModel.insertMany(products);
        console.log(`✅ Successfully added ${result.length} products!`);

        // Show inserted products
        result.forEach(product => {
            console.log(`   - ${product.name} (₹${product.price})`);
        });

        await mongoose.connection.close();
        console.log("✅ Database connection closed");

    } catch (error) {
        console.error("❌ Error seeding database:", error.message);
        process.exit(1);
    }
};

seedDatabase();
