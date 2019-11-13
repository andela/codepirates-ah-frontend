import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * @description - ModelComponent
 * @param {object} props
 * @returns {JSX} - Model JSX template
 */
const ModelComponent = (props) => {
  const {
    handleClose, children, show, handleConfirmed, CancelMessage, ConfirmMessage, modelHeading,
  } = props;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modelHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
          {' '}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {CancelMessage}
          </Button>
          <Button variant="danger" onClick={handleConfirmed}>
            {ConfirmMessage}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
ModelComponent.defaultProps = {
  CancelMessage: 'Cancel',
  ConfirmMessage: 'Confirm',
  modelHeading: 'Attention',
  show: 'false',
};
ModelComponent.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleConfirmed: PropTypes.func.isRequired,
  CancelMessage: PropTypes.string,
  ConfirmMessage: PropTypes.string,
  modelHeading: PropTypes.string,
  show: PropTypes.bool,
};

export default ModelComponent;
