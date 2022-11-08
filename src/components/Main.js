import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from '../data.json';

console.log(data);

class Main extends React.Component {
  render() {

    let beastArray = [];
    data.forEach(beast => {
      beastArray.push(
        <HornedBeast
          key = {beast._id}
          title = {beast.title}
          imageUrl = {beast.image_url}
          description = {beast.description}
          keyword = {beast.keyword}
          horns = {beast.horns}
        />
      )
    });

    return (
      <main>
        {beastArray}
      </main>
    )
  }
}

export default Main;
