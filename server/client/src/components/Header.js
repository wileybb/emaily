import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    // helper method...
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'still deciding';
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                return <li><a>Logout</a></li>;
                
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }){
    return { auth };
}

export default connect(mapStateToProps)(Header);