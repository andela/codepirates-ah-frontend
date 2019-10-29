import React, { Component } from 'react';
import './SpecificUserArticles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import viewSpecificUserArticles from '../../../redux/actions/ViewSpecifiUserArticles/ViewSpecifiUserArticles';
import ListOfArticles from '../../common/listOfArticles/index';

class SpecificUserArticles extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    const { props } = this;
    props.viewSpecificUserArticles();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    this.setState((prevState) => ({ ...prevState, articles: data }));
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="">
        <ListOfArticles articles={articles} />
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
