import React from 'react';
import ListArticles from '../listOfArticles/index';

const Report = ({ reportedArticles }) => {
  const reports = !reportedArticles.readreportedArticlesError
    ? reportedArticles.reportedArticles.myreportedArticles
    : [];
  return (
    reports.length > 0 ? (<ListArticles articles={reports} />) : (<h1>All clear</h1>)
  );
};

export default Report;
