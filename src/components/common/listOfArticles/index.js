import React from 'react';
import ArticleCard from '../articleCard';

export default function ListOfArticles({ articles, limitArticlesNumber }) {
  return articles.map((article, index) => {
    if (index >= limitArticlesNumber) return false;

    return (
      <a
        key={article && article.slug}
        href={`/article/${article
          && article.slug}`}
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
        />
      </a>
    );
  });
}
