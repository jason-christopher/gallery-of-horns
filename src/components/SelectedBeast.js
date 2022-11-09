import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Modal
          show={this.props.isModalShown}
          onHide={this.props.handleCloseModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
