import React, {Component} from 'react';
import './featuredReviews.css';
import FontAwesome from 'react-fontawesome';


class FeaturedReviews extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reviews: [
                {   
                    id: 1,
                    name: "Samir R.",
                    visible: true,
                    comment: "Delicious food and great service. They made us feel home. Kunefe is what makes everything special at the end. Awesome!",
                    date: "3/15/2018"
                },
                {   
                    id: 2,
                    name: "Ray R.",
                    visible: false,
                    comment: "The best Turkish cuisine in SF and Bay Area my favorite are Lahmacun and Adana plates  new ownership made such a good job over there really good highly recomend this place",
                    date: "1/21/2018"
                },
                {   
                    id: 3,
                    name: "Tori D.",
                    visible: false,
                    comment: "This place is delightful! Service was amazing and the food was even better. Normally, I would come up with ridiculous ways to say how awesome this place is, but instead I'm going to save us all time and just tell you to go eat here.",
                    date: "3/14/2017"
                },
                {   
                    id: 4,
                    name: "Ray W.",
                    visible: false,
                    comment: "Awesome food, great service! Beyti kebap is good option. But no matter what you get, its good!",
                    date: "11/11/2017"
                },
                {   
                    id: 5,
                    name: "Murat O.",
                    visible: false,
                    comment: "Ordered the iskender kebab and it was really good! I am originally from Turkey and visit Turkish restaurants when I travel and this place is definitely at the top! The service is also great with a friendly atmosphere inside.",
                    date: "1/28/2018"
                },
            ]
        }

        this.toggleReview = this.toggleReview.bind(this)
    }

    toggleReview(event) {
        var reviewId = event.target.id;
        var reviews = this.state.reviews;

        for(var i = 0; i < reviews.length; i++) {
            if(reviews[i].id == reviewId) {
                reviews[i].visible = true;
            } else {
                reviews[i].visible = false;
            }
        }

        this.setState({reviews: reviews})
    }

    render() {
        return(
            <div className="all-reviews-container">

                <div className="reviews-title">
                    Yelp loves us
                </div> 

                {this.state.reviews.map((review, index) => {
                    return (
                        <div key={index} className={review.visible? "review-container" : "hide"}>
                            <h3 className="review-name">{review.name}</h3>
                            <p className="review-comment">{review.comment}</p>
                            <p className="review-date">{review.date}</p>
                            <div className="yelp-stars-container">
                                <FontAwesome 
                                    className="yelp-stars" 
                                    name="star" 
                                /><FontAwesome 
                                    className="yelp-stars" 
                                    name="star" 
                                /><FontAwesome 
                                    className="yelp-stars" 
                                    name="star" 
                                /><FontAwesome 
                                    className="yelp-stars" 
                                    name="star" 
                                /><FontAwesome 
                                    className="yelp-stars" 
                                    name="star" 
                                />   
                            </div>                         
                        </div>
                    )
                })}
                
                <div className="reviews-nav">
                    {this.state.reviews.map((review, index) => {
                        return(
                            <FontAwesome
                                key={index}
                                id={review.id}
                                className={review.visible? "reviews-nav-icons reviews-active-nav" : "reviews-nav-icons"}
                                name="comment-alt"
                                onClick={this.toggleReview}
                            />
                        )
                    })}
                </div>


            </div>
        )
    }
}

export default FeaturedReviews;
