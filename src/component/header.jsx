import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { HomeTitleLink } from './home-title-link';
import { menuItems, pageTitles } from '../service/serviceHeader';
import headerBgImg from '../img/banner.jpg';

const getPageTitle = (pageUrl = window.location.pathname) => {
    let pageTitle;
    for (let i in pageTitles) {
        if (pageTitles[i].url === pageUrl) {
            pageTitle = pageTitles[i].name;
            break;
        }
        else {
            pageTitle = '';
        }
    }
    return pageTitle;
}

const getActivePage = () => {
    let returnUrl;
    let pageUrl = window.location.pathname;
    for (let i in menuItems) {
        if (menuItems[i].url === pageUrl) {
            returnUrl = menuItems[i].url;
            break;
        }
        else {
            returnUrl = false;
        }
    }
    return returnUrl;
}

export const Header = (props) => {

    const pageTitle = <h1 className="mb30">{getPageTitle()}</h1>;

    const navItems = menuItems.map((item, chabi) => <li className={(item.url === getActivePage()) ? 'active' : ''} key={chabi}><NavLink to={item.url}>{item.name}</NavLink></li>);

    const headerInlineStyle = {
        backgroundColor: '#000',
        backgroundImage: 'url(' + headerBgImg + ')'
    };

    return (
        <React.Fragment>
            <div className="fh5co-loader" style={{ display: 'none' }}></div>
            <nav className="fh5co-nav" role="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <div id="fh5co-logo"><Link to="/">Shape<span>.</span></Link></div>
                        </div>
                        <div className="col-xs-12 text-center menu-1">
                            <ul>
                                {navItems}
                                {/* <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li className="has-dropdown">
                                    <Link to="/services">Services</Link>
                                    <ul className="dropdown">
                                        <li><Link to="/">Web Design</Link></li>
                                        <li><Link to="/">eCommerce</Link></li>
                                        <li><Link to="/">Branding</Link></li>
                                        <li><Link to="/">API</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/work">Work</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li> */}
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
            <header id="fh5co-header" className="fh5co-cover" role="banner" style={headerInlineStyle}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-0 text-center">
                            <div className="display-t">
                                <div className="display-tc animate-box" data-animate-effect="fadeInUp">
                                    {pageTitle}
                                    <Route exact path='/' component={HomeTitleLink}></Route>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}