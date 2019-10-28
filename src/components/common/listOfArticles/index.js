import React from 'react';
import ArticleCard from '../articleCard';

export default function ListOfArticles({ articles, limitArticlesNumber }) {
  return articles.map((article, index) => {
    let rating = 0;
    if (index >= limitArticlesNumber) return false;
    if (article.rating !== null) {
      rating = parseInt(article.rating, 0);
    }
    return (
      <div
        key={article && article.slug}
      >
        <ArticleCard
          coverImage={article && article.images && article.images[0]}
          description={article && article.description}
          title={article && article.title}
          views={article && article.views}
          claps={article && article.claps}
          readTime={article && article.readtime}
          userIcon={article && article.userImage}
          username={article && article.username}
          createdTime={article && article.timeCreated}
          slug={article && article.slug}
          rating={rating}
        />
      </div>
    );
  });
}
