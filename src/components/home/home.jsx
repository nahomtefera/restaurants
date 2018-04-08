import React, {Component} from 'react';
import './home.css';
import FontAwesome from 'react-fontawesome';

class Home extends Component {

    render(){
        
        return(
            <div id="home" className="home-container">
                <img className="logo-name" src={require('../../images/restaurant-logo-3.png')} alt="restaurant logo" />

                <div className="arrow-container">
                    <FontAwesome 
                            className="arrow-down-icon floating" 
                            name="chevron-down" 
                    />
                </div>
            </div>
        )
    }
}

export default Home;