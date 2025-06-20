import { Blog } from "@/data/blog";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
 

  return (
    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden">
        {/* Main Image */}
        <img
          src={blog.image}
          alt={blog.name}
          className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        
        {/* Hover Image */}
        <img
          src={blog.hoverImage}
          alt={`${blog.name} - view 2`}
          className="absolute inset-0 w-full h-64 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      
      {/* Black footer with blog info */}
      <div className="bg-black text-white p-4">
        <h3 className="text-lg font-bold text-white text-center mb-2 uppercase tracking-wide">
          {blog.name}
        </h3>
        
     
        <div className="text-center">
          <span className="text-orange-400 font-bold text-lg">{blog.price}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
