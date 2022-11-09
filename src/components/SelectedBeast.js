import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal
          show={this.props.isModalShown}
          onHide={this.props.handleCloseModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="modal-900px"
          className="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="selectedTitle">
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="picDiv">
              <img 
                className="selectedImage"
                src={this.props.imageUrl}
                alt={this.props.title}
              />
            </div>
            <p className="selectedDescription">{this.props.description}</p>
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
