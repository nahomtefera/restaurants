import React, {Component} from 'react';
import './about.css';
import FontAwesome from 'react-fontawesome';

class About extends Component {

    render(){
        
        return(
            <div className="about-container">
                <div className="about-content-container">
                    <div className="about-main-image-container">
                        <img className="about-main-image" src={require('../../images/restaurant-table-small.png')} alt=""/>
                    </div>
                    <div className="about-content">
                        <h1 className="about-content-title">Our Story</h1>
                        <p className="about-content-text">

                            A La Turca Restaurant (US Restaurant Management) offers delicious dining and takeout to San Francisco, CA.
                            <br/><br/>
                            A La Turca Restaurant (US Restaurant Management) is a cornerstone in the San Francisco community and has been recognized for its outstanding Mediterranean cuisine, excellent service and friendly staff.
                            <br/><br/>
                            Our Mediterranean restaurant is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.

                        </p>
                    </div>
                    {/* <div className="about-image-container floating">
                        <img className="about-image-item" src={require('../../images/face-picture.jpg')} alt="face owner"/>
                    </div> */}
                    {/* <p className="about-text">
                    Whitmans Restaurant serves burgers and seasonal fare with a focus on fresh, local ingredients. Opened by native New Yorkers, the concept was born by friends whose vision was to provide the neighborhood with delicious comfort food in a cozy, intimate setting. The main attraction, modeled after the Minneapolis-originated phenomenon, the “Juicy Lucy,” features two thin beef short rib blend patties pinched together encasing a scoop of pimento cheese, the result: a molten core of cheese oozing from the patty. Whitmans introduced their take on the cult burger in 2010 to rave reviews. In addition, Whitmans offers a vast array of specialty crafted burgers including The Hound, Spicy Patty, and The Mangold just to name a few. While we are known for our burgers, some of our other most popular items include our East Villi Cheesesteak, Veggie Burger, and Kale Salad.
                    </p> */}
                </div>
            </div>
        )
    }
}

export default About;