import { useParams, useNavigate } from "react-router-dom";
import { blog } from "@/data/blog";
import { SEO } from "@/components/SEO";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blogItem = blog.find((b) => b.id === Number(id));

  if (!blogItem) {
    return <div className="text-center py-20 text-2xl">Bài viết không tồn tại.</div>;
  }

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-8">
       
        <img src={blogItem.image} alt={blogItem.name} className="w-full h-60 object-cover rounded-xl mb-8 mx-auto" />
        <h1 className="max-w-4xl text-3xl md:text-4xl font-bold mb-6 text-center mx-auto py-8">{blogItem.name}</h1>
        <div
          className="max-w-3xl mx-auto text-left prose prose-headings:text-black prose-h2:text-lg prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-3 prose-p:mb-4 prose-p:leading-relaxed prose-ul:mb-4 prose-li:mb-1 prose-strong:font-bold prose-b:font-bold"
          dangerouslySetInnerHTML={{ __html: blogItem.content || '' }}
        />
         <button
          onClick={() => navigate('/blog')}
          className="block mx-auto mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition-all"
        >
          ← Back to Blog
        </button>
      </main>
    </>
  );
};

export default BlogDetail;
