import React, {Component} from 'react';
import './menu.css';

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            menu: [
                {
                    category: "appetizers",
                    items: [
                        {
                            name:"Lahmacun",
                            description: "Homemade thin dough topped with ground meat, green peppers, tomatoes, onions and spices.",
                            price: "6.00"
                        },
                        {
                            name:"Ispanakli Borek",
                            description: "Pastry dough baked with spinach and cheese.",
                            price: "5.25"
                        },
                        {
                            name:"Kiymali Borek",
                            description: "Pastry dough baked with sauteed ground meat.",
                            price: "5.50"
                        },
                        {
                            name:"Havuc Kizartmasi",
                            description: "Fried carrots with garlic and yogurt sauce.",
                            price: "5.00"
                        },
                        {
                            name:"Sigara Boregi",
                            description: "Deep-fried pastry 􀂠lled with feta cheese and parsley.",
                            price: "6.00"
                        },
                        {
                            name:"Patlican Biber Kizartma",
                            description: "Deep-fried eggplant and green peppers served with red tomato sauce and garlic yogurt.",
                            price: "6.00"
                        },
                        {
                            name:"Eggplant Salad",
                            description: "Oven-baked eggplant, red and green bell pepper, onion and olive oil.",
                            price: "5.50"
                        },
                        {
                            name:"Kiymali",
                            description: "Kiymali",
                            price: "5.50"
                        },
                    
                    ]
                },
                {
                    category: "soups and salads",
                    items: [
                        {
                            name:"Lentil Soup",
                            description: "Red lentils with rice, carrots, onions, potato, zucchini, celery and spices.",
                            price: "5.00"
                        },
                        {
                            name:"Shepherd Salad",
                            description: "Chopped tomato, cucumber, red onion, parsley, lemon juice and virgin oil.",
                            price: "6.50"
                        },
                        {
                            name:"Alaturca Salad",
                            description: "Kiymali",
                            price: "5.50"
                        },
                        {
                            name:"Chicken Salad",
                            description: "Baby greens, tomatoes, cucumbers, feta cheese, olives and dressing",
                            price: "8.75"
                        },
                    ]
                },
                {
                    category: "platters",
                    items: [
                        {
                            name:"Doner",
                            description: "Vertically roasted and sliced ground lamb and beef served with rice and salad.",
                            price: "13.50"
                        },
                        {
                            name:"Chicken Doner",
                            description: "Marinated chicken roasted in front of vertical spit 􀂠re and sliced served with rice and salad.",
                            price: "12.25"
                        },
                        {
                            name:"Iskender Kebap",
                            description: "Meat or chicken doner in special tomato sauce over cubed bread. Served with butter and yogurt.",
                            price: "14.50"
                        },
                        {
                            name:"Beef Shish Kebap",
                            description: "Cubes of beef marinated in a special sauce and grilled. Served with rice and salad.",
                            price: "16.00"
                        },
                        {
                            name:"Beyti Kebap",
                            description: "Ground lamb wrapped in 􀂡at bread. Served with special sauce and yogurt.",
                            price: "15.75"
                        },
                    ]
                },
                {
                    category: "sandwiches",
                    items: [
                        {
                            name:"Lamb Beef Doner Sandwich",
                            description: "Served with lavash bread, salad and tahini sauce.",
                            price: "8.00"
                        },
                        {
                            name:"Chicken Doner Sandwich",
                            description: "Served with lavash bread, salad and tahini sauce.",
                            price: "7.50"
                        },
                        {
                            name:"Falafel Sandwich",
                            description: "Served with lavash bread, salad and tahini sauce.",
                            price: "7.25"
                        },
                        {
                            name:"Combo Doner Sandwich",
                            description: "Served with lavash bread, salad and tahini sauce.",
                            price: "8.50"
                        },
                    
                    ]
                },
                {
                    category: "pides",
                    items: [
                        {
                            name:"Cheese Pide",
                            description: "Feta and mozzarella cheese.",
                            price: "8.00"
                        },
                        {
                            name:"Spinach and Cheese Pide",
                            description: "Sauteed spinach, feta and mozzarella cheese.",
                            price: "8.75"
                        },
                        {
                            name:"Fresh Tomatoes and Cheese Pide",
                            description: "Fresh tomatoes, feta and mozzarella cheese.",
                            price: "8.50"
                        },
                        {
                            name:"Cheese and Potatoes Pide",
                            description: "Boiled potatoes, feta and mozzarella cheese.",
                            price: "8.750"
                        },
                        {
                            name:"Chicken and Mushroom Pide",
                            description: "Sauteed chicken and fresh mushroom.",
                            price: "8.75"
                        },                    
                    ]
                },
            ]
        }
    }

    render(){
        return(
            <div className="menu-container">
                
                <div className="menu-img-container">
                    <img className="menu-img" src={require('../../images/menu-img-3.png')} alt="menu banner"/>
                </div>

                <div className="menu-scroll">
                    <div className="menu-remove-x-scroll">
                        <div className="menu-container-x-scroll">
                            {this.state.menu.map((item, index) => {
                                return (
                                    <div className="menu-category" key={index}>
                                        <div className="menu-category-remove-y-scroll">
                                            <h1 className="menu-category-title">{item.category}</h1>
                                            <div className="menu-category-y-scroll">
                                                {item.items.map((plate, index) => {
                                                    return(
                                                        <div className="menu-plate" key={index}>
                                                            <h2 className="menu-plate-name">{plate.name}</h2>
                                                            <h3 className="menu-plate-description">{plate.description}</h3>
                                                            <h3 className="menu-plate-price">{"$" + plate.price}</h3>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="menu-order-online">
                        <a target="_blank" href="https://www.beyondmenu.com/29738/san-francisco/a-la-turca-restaurant--us-restaurant-management--san-francisco-94109.aspx">click to order online</a>
                </div>

            </div>
        )
    }
}

export default Menu;