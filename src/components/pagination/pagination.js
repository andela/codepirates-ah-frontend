import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import SpecificUserArticles from '../articles/allArticles/SpecificUserArticles';

class Paginate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
    };
  }

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
  };

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={SpecificUserArticles}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Paginate;
