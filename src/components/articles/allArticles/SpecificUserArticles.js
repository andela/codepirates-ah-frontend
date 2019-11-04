import React, { Component } from 'react';
import Pagination from 'rc-pagination';
import './SpecificUserArticles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import viewSpecificUserArticles from '../../../redux/actions/ViewSpecifiUserArticles/ViewSpecifiUserArticles';
import ListOfArticles from '../../common/listOfArticles/index';
import { paginate } from '../../article/viewArticleComponents';

class SpecificUserArticles extends Component {
  state = {
    articles: [],
    paginatedArticles: [],
    current: 1,
    pageSize: 5,
  };

  componentDidMount() {
    const { props } = this;
    props.viewSpecificUserArticles();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const { pageSize } = this.state;
    const currentArticles = paginate(data, 0, pageSize);
    this.setState((prevState) => ({
      ...prevState,
      articles: data,
      paginatedArticles: currentArticles,
    }));
  }

  onPageChange = (page) => {
    const { articles, pageSize } = this.state;
    const currentArticles = paginate(articles, page, pageSize);

    this.setState({
      current: page,
      paginatedArticles: currentArticles,
    });
  };

  render() {
    const {
      paginatedArticles, articles, pageSize, current,
    } = this.state;
    return (
      <div>
        <div className="">
          <ListOfArticles articles={paginatedArticles} />
        </div>
        <div className="pagination-div">
          <Pagination
            onChange={this.onPageChange}
            current={current}
            total={articles.length}
            pageSize={pageSize}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ articles: { data } }) => ({
  data,
});
SpecificUserArticles.propTypes = {
  viewSpecificUserArticles: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { viewSpecificUserArticles },
)(SpecificUserArticles);
