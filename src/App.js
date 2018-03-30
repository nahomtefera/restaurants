import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import FontAwesome from 'react-fontawesome';

import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)
    
    this.state = {
        responsive: "",
        showNavbar: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
  }

  toggleNavbar(){
    if(this.state.showNavbar){
      this.setState({showNavbar:false})
    }else{
      this.setState({showNavbar:true})            
    }
  }
  // Check size of window and change state to either mobile or desktop
  updateWidth(){
    if(window.innerWidth < 641) {
      this.setState({ responsive: "mobile"});
    } else {
      this.setState({ responsive:"desktop"});
    }
  }

  componentWillMount(){
    this.updateWidth();
  }

  componentDidMount(){
    window.addEventListener("resize", this.updateWidth);    
  }

  componentWillUnmount(){
    window.addEventListener("resize", this.updateWidth);    
  }

  render() {

    return (
      <div className="App">
         {
          this.state.responsive === "mobile"
          ? <FontAwesome 
              className="open-navbar-icon" 
              name="bars" 
              onClick={this.toggleNavbar}
            />     
          : ""
        }
        <Navbar 
          showNavbar={this.state.showNavbar} 
          toggleNavbar={this.toggleNavbar}/>  
      </div>
    );
  }
}

export default App;
