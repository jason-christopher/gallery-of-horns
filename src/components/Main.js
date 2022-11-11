import React from 'react';
import HornedBeast from './HornedBeast.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestedNumberOfHorns: 0,
      newData: this.props.data,
    }
  }

  // updates the "data" array in state with only the beasts with the requested number of horns
  handleSubmit = (event) => {
    event.preventDefault();
    if (isNaN(this.state.requestedNumberOfHorns)) {
      this.setState({ newData: this.props.data });
    } else {
      let update = this.props.data.filter(beast => {
        return beast.horns === this.state.requestedNumberOfHorns;
      });
      this.setState({ newData: update });
    }
  }

  // updates the requested number of horns in state
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      requestedNumberOfHorns: parseInt(event.target.value),
    })
  }

  render() {

    // creates the cards based on the requested beast data in state
    let beastArray = this.state.newData.map(beast => {
      return <HornedBeast
        key={beast._id}
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        keyword={beast.keyword}
        horns={beast.horns}
        handleOpenModal={this.props.handleOpenModal}
      />
    });

    // makes the drop-down options for the form
    let compare = [];
    let hornsOptions = [];
    this.props.data.forEach(beast => {
      if (!compare.includes(beast.horns)) {
        compare.push(beast.horns);
        hornsOptions.push(
          <option key={beast.horns}>{beast.horns}</option>
        );
      }
    })

    //renders the actual form and cards
    return (
      <>
        <main>
          <Form id="form" onSubmit={this.handleSubmit}>
            <Form.Label id="formLabel" htmlFor="Select">
              Search by Number of Horns
            </Form.Label>
            <Form.Select id="Select" onChange={this.handleChange}>
              <option value="Number of Horns">Number of Horns</option>
              {hornsOptions}
            </Form.Select>
            <Button id="button" type="submit">Submit</Button>
          </Form>
          <article>
            {beastArray}
          </article>
        </main>
      </>
    )
  }
}

export default Main;
