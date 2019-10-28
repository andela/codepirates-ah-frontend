import React from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PopOver = ({
  show, target, placement, containerPadding, children,
}) => (
  <>
    <Overlay
      show={show}
      target={target}
      placement={placement}
      containerPadding={containerPadding}
    >
      <Popover id="popover-contained">
        {children}
      </Popover>
    </Overlay>
  </>
);
PopOver.defaultProps = {
  show: false,
  target: PropTypes.object,
  placement: 'top',
  containerPadding: 20,
  children: PropTypes.object,
};
PopOver.propTypes = {
  show: PropTypes.bool,
  target: PropTypes.object,
  placement: PropTypes.string,
  containerPadding: PropTypes.number,
  children: PropTypes.object,
};

export default PopOver;
