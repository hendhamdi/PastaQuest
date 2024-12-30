import React from 'react';
import './BlogSection.css'; // Assurez-vous d'avoir ce fichier CSS pour le style

const BlogSection = () => {
  const blogPosts = [
    {
      date: "Août 3, 2024",
      title: "5 Astuces pour Cuisiner les Pâtes Parfaites à la Maison",
      description: "Découvrez nos conseils pour réussir vos pâtes à chaque fois. Que vous soyez fan de carbonara, de pesto ou de sauce tomate, ces astuces vous seront très utiles !",
      image: "https://i.pinimg.com/474x/00/bf/b5/00bfb507fb37fa175fde42be0c64eb0a.jpg",
    },
    {
      date: "Août 2, 2024",
      title: "Recette de Lasagnes Maison",
      description: "Une délicieuse recette de lasagnes qui plaira à toute la famille.",
      image: "/path/to/image2.jpg",
    },
    {
      date: "Août 1, 2024",
      title: "Comment Faire des Raviolis Frais",
      description: "Apprenez à faire vos propres raviolis avec cette recette simple.",
      image: "/path/to/image3.jpg",
    },
    {
      date: "Juillet 30, 2024",
      title: "Les Meilleurs Sauces pour les Pâtes",
      description: "Découvrez les meilleures sauces pour accompagner vos plats de pâtes.",
      image: "/path/to/image4.jpg",
    },
    {
      date: "Juillet 29, 2024",
      title: "Dîner Italien en Famille",
      description: "Idées de recettes pour un dîner italien en famille.",
      image: "/path/to/image5.jpg",
    },
  ];

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
          <div className="sub-card">
            <img src={blogPosts[1].image} alt={blogPosts[1].title} className="sub-blog-image" />
            <div className="sub-blog-details">
              <p className="blog-date">{blogPosts[1].date}</p>
              <h4 className="sub-blog-title">{blogPosts[1].title}</h4>
              <p className="sub-blog-description">{blogPosts[1].description}</p>
            </div>
          </div>
          <div className="sub-card">
            <img src={blogPosts[2].image} alt={blogPosts[2].title} className="sub-blog-image" />
            <div className="sub-blog-details">
              <p className="blog-date">{blogPosts[2].date}</p>
              <h4 className="sub-blog-title">{blogPosts[2].title}</h4>
              <p className="sub-blog-description">{blogPosts[2].description}</p>
            </div>
          </div>
        </div>
        <div className="sub-cards">
          <div className="sub-card">
            <img src={blogPosts[3].image} alt={blogPosts[3].title} className="sub-blog-image" />
            <div className="sub-blog-details">
              <p className="blog-date">{blogPosts[3].date}</p>
              <h4 className="sub-blog-title">{blogPosts[3].title}</h4>
              <p className="sub-blog-description">{blogPosts[3].description}</p>
            </div>
          </div>
          <div className="sub-card">
            <img src={blogPosts[4].image} alt={blogPosts[4].title} className="sub-blog-image" />
            <div className="sub-blog-details">
              <p className="blog-date">{blogPosts[4].date}</p>
              <h4 className="sub-blog-title">{blogPosts[4].title}</h4>
              <p className="sub-blog-description">{blogPosts[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
