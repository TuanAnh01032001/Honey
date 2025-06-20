import React, { useState } from "react";
import BlogCard from "@/components/Blog/blogCard";
import { SEO } from "@/components/SEO";
import { blog } from "@/data/blog";
import { products } from "@/data/product";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;
    const totalPages = Math.ceil(blog.length / blogsPerPage);
    const startIdx = (currentPage - 1) * blogsPerPage;
    const endIdx = startIdx + blogsPerPage;
    const currentBlogs = blog.slice(startIdx, endIdx);
    const navigate = useNavigate();

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleBlogClick = (id: number) => {
        navigate(`/blog/${id}`);
    };

    return(
        <> 
            <SEO
                title="5 Surprising Health Benefits of Raw Honey"
                description="Learn how raw honey improves your immune system, digestion, and energy levels naturally."
                image="https://hanahoney.com.au/images/blog-benefits.jpg"
                url="https://hanahoney.com.au/blog/health-benefits-raw-honey"
                type="blog"
            />
            
        <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex={-1}>
            <div className="main-site-container max-w-8xl mx-auto px-4 sm:px-6 lg:px-40">
                <span className="title--primary text-4xl font-extrabold ">Discover</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
                        {currentBlogs.map((item, index)=> {
                            return(
                                <div key={index} onClick={() => handleBlogClick(item.id)} className="cursor-pointer">
                                    <BlogCard blog={item} />
                                </div>
                            )
                        })}
                    </div>
                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8 mb-12 gap-4">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`px-3 py-1 rounded transition border-b-2 ${currentPage === i + 1 ? "border-black font-bold" : "border-transparent"}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
        </main>
        </>
    )
}

export default Blog;