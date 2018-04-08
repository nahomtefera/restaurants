import React, {Component} from 'react';
import './navbar.css';
import FontAwesome from 'react-fontawesome';
import Scrollchor from 'react-scrollchor';


class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showNavbar: this.props.showNavbar,
            pages: [
                {
                    name:"Home",
                    url: "home"
                },
                {
                    name:"Menu",
                    url: "menu"
                },
                {
                    name:"Location",
                    url: "location"
                },
                {
                    name:"About",
                    url: "about"
                },
            ]
        }

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        if(this.state.showNavbar){
            this.setState({showNavbar:false})
        }else{
            this.setState({showNavbar:true})            
        }
        this.props.toggleNavbar()
    }

    // Will update state.showNavbar if showNavbar props change
    componentWillReceiveProps(nextProps) {
        if (nextProps.showNavbar !== this.state.showNavbar) {
          this.setState({ showNavbar: nextProps.showNavbar });
        }
    }

    scrollToAnchor(e) {
        let fullPath = e.target.href;
        let linkPosition = fullPath.indexOf("#");
        let link = fullPath.slice(linkPosition);

        document.getElementById("#menu").scrollIntoView() 
    }

    render(){
        return(
            <div className={this.state.showNavbar ? "navbar-container navbar-container-responsive" : "navbar-container"} >
                {this.state.showNavbar ?
                    <FontAwesome 
                        className="navbar-toggle-icon" 
                        name="times" 
                        onClick={this.toggleNavbar}
                    />
                    : ""
                }

                <ul className={this.state.showNavbar ? "navbar-list-container navbar-list-container-responsive slideIn" : "navbar-list-container"}>
                    {this.state.pages.map((page, index)=>{
                        return <li key={index} onClick={this.toggleNavbar} className="navbar-list-item"><Scrollchor className="navbar-list-link" to={page.url} >{page.name}</Scrollchor></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Navbar;  