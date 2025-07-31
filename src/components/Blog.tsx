import React from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "EDI Modernization: Moving from Legacy Systems",
      excerpt: "Learn how to successfully migrate from outdated EDI systems to modern cloud-based solutions.",
      category: "Migration",
      readTime: "5 min read"
    },
    {
      title: "AS2 vs SFTP: Choosing the Right Protocol",
      excerpt: "Compare the benefits and use cases of different EDI communication protocols.",
      category: "Technology",
      readTime: "7 min read"
    },
    {
      title: "EDI Compliance in Healthcare: HIPAA Requirements",
      excerpt: "Essential guidelines for maintaining HIPAA compliance in healthcare EDI implementations.",
      category: "Compliance",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600">Stay updated with EDI trends and best practices</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <img
                src={`https://readdy.ai/api/search-image?query=modern%20technology%20and%20business%20concepts%20with%20digital%20data%20and%20networking%20elements%20professional%20clean%20background&width=400&height=250&seq=blog-${index + 1}&orientation=landscape`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;