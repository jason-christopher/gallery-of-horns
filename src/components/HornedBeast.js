import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  handleVote = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  };

  render() {
    return (
      <Card style={{ width: '100%' }} className = "card">
        <Card.Img 
          variant="top" 
          src={this.props.imageUrl} 
          onClick={() => {
            this.handleVote();
            this.props.handleOpenModal();
          }}
          alt={this.props.description} 
          title={this.props.title}

        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.state.votes === 0 ? 'No Votes 😢' : `${this.state.votes} ${this.state.votes === 1 ? 'Vote ❤️' : 'Votes ❤️'}`}
          </Card.Subtitle>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
