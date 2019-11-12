import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import displayArticles from '../../redux/actions/landingPage';
import ListOfArticles from '../common/listOfArticles';

export const Tags = (props) => {
  const [articles, setAtricle] = useState([]);
  const [articleNumber, setarticleNumber] = useState(3);
  const [loading, setLoading] = useState(true);
  const { location: { search }, displayArticles } = props;
  const { tag } = queryString.parse(search);
  let allSort = [];
  useEffect(() => {
    if (!tag) {
      window.location.replace('/');
    }
    displayArticles();
  }, []);
  useEffect(() => {
    const { data } = props;
    if (data && data !== null) {
      setLoading(false);
      setAtricle(data);
    }
  }, [props.data]);

  if (loading) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  allSort = articles.filter((data) => (data.taglist !== null && data.taglist.includes(tag)));
  return (
    <>
      <div
        className="container"
      >
        <h1>
All Article with
          {' '}
          {tag}
          {' '}
tag
        </h1>
        <div>
          <ListOfArticles
            articles={allSort}
          />
        </div>
      </div>
    </>
  );
};

Tags.propTypes = {
  displayArticles: PropTypes.func.isRequired,
  data: PropTypes.array,
};
Tags.defaultValues = {
  data: null,
};
const mapStateToProps = ({ articles }) => ({
  data: articles.data,
});
export default connect(mapStateToProps, { displayArticles })(Tags);

