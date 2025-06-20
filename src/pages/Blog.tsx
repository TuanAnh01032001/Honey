import BlogCard from "@/components/Blog/blogCard";
import { SEO } from "@/components/SEO";
import { blog } from "@/data/blog";
import { products } from "@/data/product";

const Blog = () => {
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
                <span className="title--primary text-4xl font-semibold ">Discover</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
                        {blog.slice(0, 6).map((item, index)=> {
                            return(
                                <BlogCard blog={item} key={index} />
                            )
                        })}
                    </div>
                </div>
                
        </main>
        </>
    )
}

export default Blog;