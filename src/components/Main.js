import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {

    let beastArray = this.props.data.map(beast => {
      return <HornedBeast
        key = {beast._id}
        title = {beast.title}
        imageUrl = {beast.image_url}
        description = {beast.description}
        keyword = {beast.keyword}
        horns = {beast.horns}
        handleOpenModal = {this.props.handleOpenModal} 
      />
    });

    return (
      <main>
        {beastArray}
      </main>
    )
  }
}

export default Main;
