import React, {Component} from 'react';
import './home.css';
import FontAwesome from 'react-fontawesome';

class Home extends Component {

    render(){
        
        return(
            <div className="home-container">
                <h1 className="restaurant-name">Restaurant Name</h1>
                <FontAwesome 
                        className="arrow-down-icon floating" 
                        name="chevron-down" 
                />
            </div>
        )
    }
}

export default Home;