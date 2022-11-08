import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

console.log(data);

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
          title = "Bison"
          imageUrl = "https://images.unsplash.com/photo-1596635633457-2f3ab80a6d49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
          description = "This Oklahoman bison stares down the frosty tundra before him knowing a long winter is ahead."
        />
        <HornedBeast
          title = "Rhino"
          imageUrl = "https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          description = "An aging rhino searches the dusty African plains for signs of water and his next meal."
        />
        <HornedBeast
          title = "Ram"
          imageUrl = "https://images.unsplash.com/photo-1517217759187-c28c5cbb51e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
          description = "Rams can eat their weight in mountain grass each week."
        />
      </main>
    )
  }
}

export default Main;
