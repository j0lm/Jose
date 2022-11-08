import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import "../styles.css"

class Navbar extends Component {
    state = { 
        clicked: false
    } 

    handleMenuClick = () => {
        this.setState({clicked: !(this.state.clicked)});
    }

    render() { 
        return (
        <div className='nav-wrapper'>
             <nav className="NavbarItems">
                <h1 className='navbar-logo'><i className="fa-solid fa-terminal"></i></h1>
                <div 
                    className="menu-icon" 
                    onClick={this.handleMenuClick}>
                    <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    { MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cn} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
           
        );
    }
}
 
export default Navbar;