import React from 'react';
import './BlogSection.css';
import blogPosts from '../../Other/blogPosts.json';

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2 className="blog-title">Notre Blog et Articles</h2>
        <button className="read-all-button">Lire tous</button>
      </div>
      <div className="blog-content">
        <div className="main-card">
          <img src={blogPosts[0].image} alt={blogPosts[0].title} className="blog-image" />
          <div className="blog-details">
            <p className="blog-date">{blogPosts[0].date}</p>
            <h3 className="blog-post-title">{blogPosts[0].title}</h3>
            <p className="blog-description">{blogPosts[0].description}</p>
          </div>
        </div>
        <div className="sub-cards">
          {blogPosts.slice(1).map((post, index) => (
            <div className="sub-card" key={index}>
              <img src={post.image} alt={post.title} className="sub-blog-image" />
              <div className="sub-blog-details">
                <p className="blog-date">{post.date}</p>
                <h4 className="sub-blog-title">{post.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
