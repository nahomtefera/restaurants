import React, {Component} from 'react';
import './navbar.css';
import FontAwesome from 'react-fontawesome';

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pages: [
                {
                    name:"Home",
                    url: ""
                },
                {
                    name:"About",
                    url: ""
                },
                {
                    name:"Menu",
                    url: ""
                },
                {
                    name:"Reservations",
                    url: ""
                },
                {
                    name:"Gallery",
                    url: ""
                }
            ]
        }
    }

    render(){
        return(
            <div className="navbar-container">
                <FontAwesome 
                    name="bars"
                    
                />
                <ul className="navbar-list-container">
                    {this.state.pages.map(page=>{
                        return <li className="navbar-list-item">{page.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Navbar;