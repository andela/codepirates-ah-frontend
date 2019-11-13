import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Jumbotron, Button } from 'react-bootstrap';
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
      {allSort.length === 0
        ? (
          <div
            className="container"
          >
            <Jumbotron>
              <h1>Ohhh OOps</h1>
              <p>
    Sorry there is no Articles tagged
                {' '}
                <b>{tag}</b>
                {' '}
tag.
              </p>
              <p>
                <Button variant="primary" href="/">Go To Homepage </Button>
              </p>
            </Jumbotron>
          </div>
        )
        : (

          <div
            className="container"
          >
            <h2 style={{ fontWeight: 'normal' }}>
All Articles with
              {' '}
              <b>{tag}</b>
              {' '}
tag
            </h2>
            <div className="col-12 col-md-6 offset-md-2">
              <ListOfArticles
                articles={allSort}
              />
            </div>
          </div>
        )}
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

