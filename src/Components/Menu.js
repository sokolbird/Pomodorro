import React, { Component } from 'react';
import settings from '../Media/settings.svg';
import github from '../Media/github-circle.svg';
import inst from '../Media/instagram.svg'
import telegram from '../Media/telegram.svg'
import help from '../Media/help.svg'
import '../styles/navigation.css'

class Menu extends Component {
    render() {
        return (
            <nav className="nav">
                <h1 className="nav-header">Menu</h1>
                <ul className="nav-list">
                    <li className="nav-item" onClick={this.props.openSettings}>
                        Settings
                        <img src={settings} alt="settings" className="nav-icon"/>
                    </li>
                    <li className="nav-item">
                        <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" tabIndex="-1">
                            What is pomodoro?
                            <img src={help} alt="what is pomodoro" className="nav-icon"/>
                        </a>
                    </li>
                </ul>

                <div className="nav-footer">
                    <div className="nav-footer-header">Contacts</div>
                    <div className="contacts-wrapper">
                        <a href="https://github.com/sokolbird" tabIndex="-1">
                            <img src={github} alt="github" className="nav-icon"/>
                        </a>
                        <a href="https://www.instagram.com/sokol.bird" tabIndex="-1">
                            <img src={inst} alt="instagram" className="nav-icon"/>
                        </a>
                        <a href="https://t.me/SokolBird" tabIndex="-1">
                            <img src={telegram} alt="telegram" className="nav-icon"/>
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu;