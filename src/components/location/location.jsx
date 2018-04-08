import React, {Component} from 'react';
import './location.css';


class Location extends Component {

    render(){
        return(
            <div id="location" className="location-container">
                <div className="location-img-container">
                    <img className="location-img" src={require('../../images/location-img-3.png')} alt="location banner"/>
                </div>
                
                <div className="location-map-details-container">

                    <div className="location-map-container" >
                        <iframe className="location-map" src="https://goo.gl/G4KsHU" frameborder="0" allowfullscreen></iframe>
                    </div>

                    <div className="location-details-container">
                        <div className="location-details">
                            <div className="location-title">
                            A la turca restaurant
                            </div>
                            <p className="location-details-address">
                                <br/>
                                <strong>Address</strong>
                                <br/>
                                869 Geary Blvd <br/> San Francisco <br/> CA 94109 
                                <br/>
                                <br/>
                                <strong>Phone Number</strong>
                                <br/>
                                (415) 345-1011
                                <br/><br/>
                                <strong>Store Hours</strong>
                                <br/>
                                Mon - Thurs:	11:00 AM - 10:00 PM
                                <br/>
                                Fri & Sat:	11:00 AM - 11:00 PM
                                <br/>
                                Sunday:	11:00 AM - 10:00 PM
                            </p>
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default Location;