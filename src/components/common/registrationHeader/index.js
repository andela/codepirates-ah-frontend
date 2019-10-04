import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo';
import commonStyle from '../common.scss';


export default function RegistrationHeader(props) {
  const { title } = props;
  return (
    <div className="row registration--header-row" style={commonStyle}>
      <div className="col-md-12 registration--header">
        <Logo />
        <div className="registration-title-part">
          <div className="registration-title-div">
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
RegistrationHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
