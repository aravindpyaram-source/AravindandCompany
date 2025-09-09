import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right CCTV System for Your Business",
      excerpt: "A comprehensive guide to selecting the perfect surveillance system based on your specific needs, budget, and security requirements.",
      category: "security",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      tags: ["CCTV", "Security", "Business"]
    },
    {
      id: 2,
      title: "Top 10 Network Security Best Practices for Small Businesses",
      excerpt: "Essential security measures every small business should implement to protect their network infrastructure from cyber threats.",
      category: "networking",
      date: "2025-01-10", 
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518001589401-1743b3ba6bb4?w=400",
      tags: ["Networking", "Security", "Best Practices"]
    },
    {
      id: 3,
      title: "Biometric vs Traditional Access Control: Which is Better?",
      excerpt: "Compare modern biometric systems with traditional key-card access control to determine the best security solution for your needs.",
      category: "biometric",
      date: "2025-01-05",
      readTime: "5 min read", 
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=400",
      tags: ["Biometric", "Access Control", "Comparison"]
    },
    {
      id: 4,
      title: "5 Signs Your Business Needs a Network Upgrade",
      excerpt: "Identify the warning signs that indicate your current network infrastructure may be holding back your business growth.",
      category: "networking",
      date: "2025-01-01",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400", 
      tags: ["Networking", "Upgrade", "Business"]
    },
    {
      id: 5,
      title: "CCTV Maintenance: Keeping Your Security System Running Smoothly",
      excerpt: "Learn the essential maintenance tasks that will extend the life of your CCTV system and ensure optimal performance year-round.",
      category: "security",
      date: "2024-12-28",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
      tags: ["CCTV", "Maintenance", "Tips"]
    },
    {
      id: 6,
      title: "The Future of Workplace Security: Trends to Watch in 2025",
      excerpt: "Explore emerging trends in workplace security technology and how they might impact your business security strategy.",
      category: "security", 
      date: "2024-12-20",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
      tags: ["Security", "Trends", "Future"]
    }
  ];

  const categories = [
    { key: "all", name: "All Posts", count: blogPosts.length },
    { key: "security", name: "Security", count: blogPosts.filter(p => p.category === "security").length },
    { key: "networking", name: "Networking", count: blogPosts.filter(p => p.category === "networking").length },
    { key: "biometric", name: "Biometric", count: blogPosts.filter(p => p.category === "biometric").length }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Security & Technology Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, tips, and trends in security systems, networking, and business technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
                  selectedCategory === category.key
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:text-blue-600 shadow-sm"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{formatDate(post.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Stay Updated with Security Insights
          </h2>
          <p className="text-blue-100 mb-6">
            Get the latest security tips, product updates, and industry news delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
