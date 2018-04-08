import React, {Component} from 'react';
import './home.css';
import FontAwesome from 'react-fontawesome';
import Scrollchor from 'react-scrollchor';

class Home extends Component {

    render(){
        
        return(
            <div id="home" className="home-container">
                <img className="logo-name" src={require('../../images/restaurant-logo-4.png')} alt="restaurant logo" />

                <div className="arrow-container">
                    <Scrollchor className="navbar-list-link" to="menu" >
                        <FontAwesome 
                                className="arrow-down-icon floating" 
                                name="chevron-down" 
                        />
                    </Scrollchor>
                    
                </div>
            </div>
        )
    }
}

export default Home;