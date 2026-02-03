import mongoose from "mongoose";
import productModel from "./models/productModel.js";
import dotenv from "dotenv";

dotenv.config();

// 50+ Sample products data
const products = [
    // ========== MEN'S TOPWEAR ==========
    {
        name: "Men's Classic Cotton T-Shirt",
        description: "Premium cotton t-shirt with a comfortable regular fit. Perfect for everyday casual wear.",
        price: 499,
        image: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Polo Shirt Navy",
        description: "Classic polo shirt in navy blue. Features ribbed collar and two-button placket.",
        price: 799,
        image: ["https://images.unsplash.com/photo-1625910513413-5fc4fe6c5d4e?w=400"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Formal White Shirt",
        description: "Crisp white formal shirt in premium cotton. Wrinkle-resistant fabric for a polished look.",
        price: 1199,
        image: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Men's Striped Casual Shirt",
        description: "Trendy striped casual shirt. Perfect for weekend outings and casual Fridays.",
        price: 999,
        image: ["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Men's V-Neck T-Shirt Black",
        description: "Sleek black v-neck t-shirt. Soft cotton blend for maximum comfort.",
        price: 549,
        image: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Graphic Print Tee",
        description: "Bold graphic print t-shirt. Express your style with unique designs.",
        price: 699,
        image: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Men's Linen Summer Shirt",
        description: "Breathable linen shirt perfect for summer. Light and airy fabric.",
        price: 1299,
        image: ["https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Henley T-Shirt",
        description: "Classic henley with button placket. Versatile style for any occasion.",
        price: 649,
        image: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },

    // ========== MEN'S BOTTOMWEAR ==========
    {
        name: "Men's Slim Fit Jeans",
        description: "Modern slim fit jeans in classic blue. Stretch denim for comfort.",
        price: 1499,
        image: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["28", "30", "32", "34", "36"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Chino Pants Khaki",
        description: "Classic khaki chinos. Perfect for smart casual looks.",
        price: 1299,
        image: ["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400"],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["30", "32", "34", "36"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Cargo Pants",
        description: "Functional cargo pants with multiple pockets. Durable and stylish.",
        price: 1399,
        image: ["https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=400"],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["30", "32", "34", "36"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Men's Track Pants",
        description: "Comfortable track pants for workouts or lounging. Elastic waistband.",
        price: 899,
        image: ["https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400"],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Men's Formal Trousers Black",
        description: "Classic black formal trousers. Essential for professional wardrobe.",
        price: 1599,
        image: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400"],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["30", "32", "34", "36"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Shorts Casual",
        description: "Comfortable casual shorts for summer. Lightweight cotton fabric.",
        price: 699,
        image: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400"],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },

    // ========== MEN'S WINTERWEAR ==========
    {
        name: "Men's Wool Sweater",
        description: "Warm wool sweater in classic grey. Perfect for cold winter days.",
        price: 1899,
        image: ["https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Puffer Jacket Black",
        description: "Insulated puffer jacket. Lightweight yet incredibly warm.",
        price: 2999,
        image: ["https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL", "XXL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Fleece Hoodie",
        description: "Cozy fleece hoodie with kangaroo pocket. Ultimate comfort.",
        price: 1299,
        image: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Denim Jacket",
        description: "Classic denim jacket. Timeless style for layering.",
        price: 2199,
        image: ["https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Men's Leather Jacket",
        description: "Premium faux leather jacket. Rugged style statement.",
        price: 3499,
        image: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },

    // ========== WOMEN'S TOPWEAR ==========
    {
        name: "Women's Floral Blouse",
        description: "Elegant floral print blouse. Perfect for office or casual outings.",
        price: 999,
        image: ["https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Crop Top White",
        description: "Trendy white crop top. Pair with high-waisted bottoms.",
        price: 599,
        image: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Cotton Kurti",
        description: "Beautiful cotton kurti with traditional embroidery. Comfortable and stylish.",
        price: 899,
        image: ["https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=400"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Silk Blouse",
        description: "Luxurious silk blouse. Elegant drape and smooth finish.",
        price: 1599,
        image: ["https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=400"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Women's Casual T-Shirt",
        description: "Soft cotton t-shirt for everyday wear. Multiple colors available.",
        price: 449,
        image: ["https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=400"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Women's Off-Shoulder Top",
        description: "Stylish off-shoulder top. Perfect for parties and evenings.",
        price: 799,
        image: ["https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Printed Tunic",
        description: "Flowing printed tunic top. Bohemian style for free spirits.",
        price: 1099,
        image: ["https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        bestseller: false,
        date: Date.now()
    },

    // ========== WOMEN'S BOTTOMWEAR ==========
    {
        name: "Women's High-Waist Jeans",
        description: "Flattering high-waist jeans. Stretch denim for comfort and style.",
        price: 1699,
        image: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400"],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["26", "28", "30", "32"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Palazzo Pants",
        description: "Flowy palazzo pants. Comfortable and elegant for any occasion.",
        price: 999,
        image: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400"],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Yoga Leggings",
        description: "High-performance yoga leggings. Four-way stretch for flexibility.",
        price: 899,
        image: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400"],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Pleated Skirt",
        description: "Classic pleated midi skirt. Timeless elegance for your wardrobe.",
        price: 1199,
        image: ["https://images.unsplash.com/photo-1583496661160-fb5886a0aeae?w=400"],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Women's Denim Shorts",
        description: "Trendy denim shorts for summer. Perfect with any top.",
        price: 799,
        image: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400"],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["26", "28", "30", "32"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Women's Formal Trousers",
        description: "Sleek formal trousers for professional settings. Tailored fit.",
        price: 1399,
        image: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400"],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L"],
        bestseller: false,
        date: Date.now()
    },

    // ========== WOMEN'S WINTERWEAR ==========
    {
        name: "Women's Woolen Cardigan",
        description: "Soft woolen cardigan. Perfect for layering in cold weather.",
        price: 1499,
        image: ["https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Puffer Jacket Pink",
        description: "Stylish pink puffer jacket. Warm and fashionable.",
        price: 2799,
        image: ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Turtleneck Sweater",
        description: "Cozy turtleneck sweater. Essential winter staple.",
        price: 1299,
        image: ["https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Women's Long Coat",
        description: "Elegant long winter coat. Sophisticated warmth.",
        price: 3299,
        image: ["https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Fleece Hoodie",
        description: "Warm fleece hoodie. Casual comfort at its best.",
        price: 1199,
        image: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false,
        date: Date.now()
    },

    // ========== KIDS TOPWEAR ==========
    {
        name: "Kids Cartoon T-Shirt",
        description: "Fun cartoon print t-shirt for kids. Soft cotton fabric.",
        price: 399,
        image: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Kids Polo T-Shirt",
        description: "Classic polo for kids. Smart casual for little ones.",
        price: 549,
        image: ["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Kids Striped T-Shirt",
        description: "Colorful striped t-shirt. Bright and cheerful design.",
        price: 449,
        image: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Kids Floral Dress",
        description: "Pretty floral dress for girls. Perfect for parties.",
        price: 899,
        image: ["https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Kids Denim Shirt",
        description: "Cool denim shirt for kids. Trendy and durable.",
        price: 699,
        image: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        bestseller: false,
        date: Date.now()
    },

    // ========== KIDS BOTTOMWEAR ==========
    {
        name: "Kids Denim Jeans",
        description: "Durable denim jeans for active kids. Adjustable waist.",
        price: 799,
        image: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400"],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Kids Jogger Pants",
        description: "Comfortable joggers for kids. Perfect for play and school.",
        price: 599,
        image: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400"],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Kids Cotton Shorts",
        description: "Breathable cotton shorts. Ideal for summer activities.",
        price: 449,
        image: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400"],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Kids Leggings",
        description: "Soft cotton leggings for girls. Comfortable all day wear.",
        price: 399,
        image: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400"],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Kids Cargo Pants",
        description: "Adventure-ready cargo pants with pockets. Built to last.",
        price: 899,
        image: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400"],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        bestseller: false,
        date: Date.now()
    },

    // ========== KIDS WINTERWEAR ==========
    {
        name: "Kids Warm Hoodie",
        description: "Cozy hoodie for kids. Soft fleece lining for warmth.",
        price: 799,
        image: ["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"],
        category: "Kids",
        subCategory: "Winterwear",
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Kids Puffer Jacket",
        description: "Warm puffer jacket for kids. Lightweight and cozy.",
        price: 1499,
        image: ["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"],
        category: "Kids",
        subCategory: "Winterwear",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Kids Knit Sweater",
        description: "Adorable knit sweater. Keeps little ones warm and stylish.",
        price: 899,
        image: ["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"],
        category: "Kids",
        subCategory: "Winterwear",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Kids Fleece Jacket",
        description: "Soft fleece jacket. Perfect for outdoor activities.",
        price: 999,
        image: ["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"],
        category: "Kids",
        subCategory: "Winterwear",
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Kids Winter Coat",
        description: "Heavy-duty winter coat. Maximum warmth for harsh winters.",
        price: 1999,
        image: ["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"],
        category: "Kids",
        subCategory: "Winterwear",
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        bestseller: true,
        date: Date.now()
    }
];

// Connect to MongoDB and seed data
const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected to MongoDB");

        // Optional: Clear existing products first (uncomment if needed)
        // await productModel.deleteMany({});
        // console.log("🗑️ Cleared existing products");

        // Insert all products
        const result = await productModel.insertMany(products);
        console.log(`\n✅ Successfully added ${result.length} products!\n`);

        // Summary by category
        const menCount = result.filter(p => p.category === "Men").length;
        const womenCount = result.filter(p => p.category === "Women").length;
        const kidsCount = result.filter(p => p.category === "Kids").length;

        console.log(`📊 Summary:`);
        console.log(`   - Men's Products: ${menCount}`);
        console.log(`   - Women's Products: ${womenCount}`);
        console.log(`   - Kids Products: ${kidsCount}`);
        console.log(`   - Total: ${result.length}`);

        await mongoose.connection.close();
        console.log("\n✅ Database connection closed");

    } catch (error) {
        console.error("❌ Error seeding database:", error.message);
        process.exit(1);
    }
};

seedDatabase();
