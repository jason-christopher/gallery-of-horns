import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import SelectedBeast from './components/SelectedBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: true,
    }
  }

  handleCloseModal = () => {
    this.setState({
      isModalShown: false,
    })
  }

  handleOpenModal = () => {
    this.setState({
      isModalShown: true,
    });
  }

  render() {
    return (
      <>
        <Header/>
        <Main
          data = {data} 
          handleOpenModal = {this.handleOpenModal} 
        />
        <Footer/>
        <SelectedBeast
          isModalShown = {this.state.isModalShown}
          handleCloseModal = {this.handleCloseModal}
        />
      </>
    );
  }
}

export default App;
