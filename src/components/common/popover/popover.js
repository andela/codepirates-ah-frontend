import React from 'react';
import { PropTypes } from 'prop-types';

const SearchPopover = ({ title, items }) => (
  <div>
    <h6 className="popover-content-header">
      {title}
      <a href="/search" style={{ float: 'right' }}>More</a>
    </h6>
    {title !== 'Tags' && (<div className="list-group">{items.map((item) => (<a href={`/article/${item.slug}`} className="list-group-item list-group-item-action" key={item.slug}>{item.title}</a>))}</div>)}
    {title === 'Tags' && (<div className="list-group">{items.map((item) => (<p key={item.name}><a href={`article/${item.slug}`} className="ui teal tag label">{item.name}</a></p>))}</div>)}
  </div>
);

SearchPopover.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default SearchPopover;
