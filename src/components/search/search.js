import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Tab, Tabs } from 'react-bootstrap';
import fetchSearch from '../../redux/actions/search/fetchSearch';
import PeopleCard from '../common/peopleCard/peopleCard';
import './search.scss';
import ListOfArticles from '../common/listOfArticles/index';

export class SearchDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: {
        searchResults: {
          foundTags: [],
          foundUsers: [],
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
    const results = await search(value);
    this.setState({ [name]: value, searchResults: results });
  }

  renderTabs = (loading, foundArticles, foundUsers, tags) => (
    <Tabs fill defaultActiveKey="stories" id="uncontrolled-tab-example">
      <Tab eventKey="stories" title="Search results" className="add">
        <div className="row">
          <div className={classnames('ui', 'col-12 col-md-8 offset-md-2', 'form', { loading })}>
            {foundArticles.length !== 0
              ? <ListOfArticles articles={foundArticles} />
              : <p>No search results found</p>}
          </div>
        </div>
      </Tab>
      <Tab eventKey="people" title="People" className={classnames('ui', 'form', { loading })}>
        {foundUsers.length === 0 ? (<p>No users found</p>)
          : foundUsers.map((user) => (
            <PeopleCard id={user.username} key={user.username} user={user} />))}
      </Tab>
      <Tab eventKey="tags" title="Tags" className={classnames('ui', 'form', { loading })}><div className="add row tags">{tags}</div></Tab>
    </Tabs>
  )

  render() {
    const { searchResults } = this.state;
    const { searchResults: results } = searchResults;
    const { loading } = this.props;
    const { foundTags, foundUsers, foundArticles } = results;
    let tags;
    if (foundTags.length !== 0) {
      tags = foundTags.map((tag) => (<p key={foundTags.indexOf(tag)}><a href={`/articles/tag?tag=${tag.name}`} className="ui teal tag label">{tag.name}</a></p>));
    } else {
      tags = <p>No tags found</p>;
    }
    return (
      <div>
        <div className="container">
          <div className="col-12">
            <form>
              <input
                type="text"
                className="form-control"
                name="query"
                onChange={this.handleChange}
                placeholder="Type your search request here ..."
                style={{ margin: '2rem 0rem', height: '3rem' }}
              />
            </form>
          </div>
          <div className="col-12">
            {this.renderTabs(loading, foundArticles, foundUsers, tags)}
          </div>
        </div>
      </div>

    );
  }
}
const mapStateToProps = ({ search }) => ({
  error: search.searchError,
  search: search.searchResults,
  loading: search.searchPending,
});

SearchDetail.defaultProps = {
  fetchSearch: fetchSearch(),
  loading: true,
};

SearchDetail.propTypes = {
  fetchSearch: PropTypes.func,
  loading: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  { fetchSearch },
)(SearchDetail);
