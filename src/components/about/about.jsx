import React, {Component} from 'react';
import './about.css';
import FontAwesome from 'react-fontawesome';

class About extends Component {

    render(){
        
        return(
            <div className="about-container">
                <div className="about-content-container">
                    <div className="about-main-image-container">
                        <img className="about-main-image" src={require('../../images/about-img.png')} alt=""/>
                    </div>
                    <div className="about-content">
                        <p className="about-content-text">
                             A La Turca Restaurant (US Restaurant Management) offers delicious dining and takeout to San Francisco, CA. 
                             <br/><br/>
                             A La Turca Restaurant (US Restaurant Management) is a cornerstone in the San Francisco community and has been recognized for its outstanding Mediterranean cuisine, excellent service and friendly staff. 
                             <br/><br/>
                             Our Mediterranean restaurant is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.

                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;