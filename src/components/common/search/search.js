import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import SearchPopover from '../popover/popover';
import fetchSearch from '../../../redux/actions/search/fetchSearch';
import './search.scss';


export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: {
        searchResults: {
          foundTags: [],
          foundArticles: [],
        },
      },
    };
  }

  handleChange = async (e) => {
    const { name } = e.target;
    let { value } = e.target;
    const { fetchSearch: search } = this.props;
    if (value === '') value = false;
    const pagination = true;
    const results = await search(value, pagination);
    this.setState({ [name]: value, searchResults: results });
  }

  renderPopover = (loading, foundArticles, foundTags) => (
    <Popover id="popover-basic" style={{ width: '30rem' }}>
      <Popover.Title as="h3">Search Results ...</Popover.Title>
      <Popover.Content className={classnames('ui', 'form', { loading })}>
        {foundArticles && (foundArticles.length > 0 ? <SearchPopover title="Stories" items={foundArticles} /> : <p>No Articles found</p>)}
        {foundTags && (foundTags.length > 0 ? <SearchPopover title="Tags" items={foundTags} /> : <p>No tags found</p>)}
      </Popover.Content>
    </Popover>
  )

  render() {
    const { searchResults } = this.state;
    const { loading } = this.props;
    const { searchResults: results } = searchResults;
    const { foundTags, foundArticles } = results;
    const popover = (
      this.renderPopover(loading, foundArticles, foundTags)
    );
    return (
      <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
        <div className="ui icon input" style={{ width: '100%' }}>
          <input
            type="text"
            id="query"
            name="query"
            onChange={this.handleChange}
            placeholder="Search..."
          />
          <i className="search icon" />
        </div>
      </OverlayTrigger>
    );
  }
}
const mapStateToProps = ({ search }) => ({
  error: search.searchError,
  search: search.searchResults,
  loading: search.searchPending,
});

Search.defaultProps = {
  fetchSearch: fetchSearch(),
  loading: true,
};

Search.propTypes = {
  fetchSearch: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  { fetchSearch },
)(Search);
