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
      isModalShown: false,
      selectedTitle: "",
      selectedImageUrl: "",
      selectedDescription: "",
    }
  }

  handleCloseModal = () => {
    this.setState({
      isModalShown: false,
    })
  }

  handleOpenModal = (title, URL, Desc) => {
    this.setState({
      isModalShown: true,
      selectedTitle: title,
      selectedImageUrl: URL,
      selectedDescription: Desc,
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
          title = {this.state.selectedTitle}
          imageUrl = {this.state.selectedImageUrl}
          description = {this.state.selectedDescription}
        />
      </>
    );
  }
}

export default App;
