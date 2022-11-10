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

  handleSubmit = (event) => {
    event.preventDefault();
    let update = this.props.data.filter(beast => {
      return beast.horns === this.state.requestedNumberOfHorns;
    });
    this.setState({
      newData: update,
    });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      requestedNumberOfHorns: parseInt(event.target.value),
    })
  }

  render() {

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
  
    let hornsNumberArray = [];

    let hornsOptions = this.props.data.map(val => {
      if(!hornsNumberArray.includes(val.horns)) {
        hornsNumberArray.push(val.horns);
        return <option key = {val.horns}>{val.horns}</option>;
      }
    });

    return (
      <>
        <main>
          <Form id="form" onSubmit={this.handleSubmit}>
            <fieldset 
              // disabled
            >
              {/* <Form.Group className="mb-3">
                <Form.Label htmlFor="TextInput">Disabled input</Form.Label>
                <Form.Control id="TextInput" placeholder="Name of Horned Beast" />
              </Form.Group> */}
              <Form.Group className="mb-3">
                <Form.Label htmlFor="Select">Search by Number of Horns</Form.Label>
                <Form.Select id="Select" onChange={this.handleChange}>
                  <option>Number of Horns</option>
                    {hornsOptions}
                </Form.Select>
              </Form.Group>
              {/* <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  label="Can't check this"
                />
              </Form.Group> */}
              <Button type="submit">Submit</Button>
            </fieldset>
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
