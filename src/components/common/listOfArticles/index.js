import React from 'react';
import ArticleCard from '../articleCard';

export default function ListOfArticles({ articles, limitArticlesNumber }) {
  return articles.map((article, index) => {
    if (index >= limitArticlesNumber) return false;

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        key={article && article.slug}
      >
        <ArticleCard
          coverImage={article && article.images && article.images[0]}
          description={article && article.description}
          title={article && article.title}
          views={article && article.views}
          readTime={article && article.readtime}
          userIcon={article && article.userImage}
          username={article && article.username}
          createdTime={article && article.timeCreated}
          slug={article && article.slug}
          claps={article && article.claps}
          rating={article && article.rating}
        />
      </a>
    );
  });
}
