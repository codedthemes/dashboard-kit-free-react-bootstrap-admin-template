import React, { useState, useContext } from 'react';

// react-bootstrap
import { Row, Col, ListGroup, Dropdown } from 'react-bootstrap';

// third party
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

// project imports
import { ConfigContext } from 'contexts/ConfigContext';

// -----------------------|| NAV LEFT ||-----------------------//
const NavLeft = () => {
    const configContext = useContext(ConfigContext);
    const { layout } = configContext.state;

    const [menuOpen1, toggleMenuOpen1] = useState(false);
    const [menuOpen2, toggleMenuOpen2] = useState(false);
    const [menuOpen3, toggleMenuOpen3] = useState(false);
    return (
        <ListGroup as="ul" bsPrefix=" " className="list-unstyled">
            {layout !== 'topbar' && (
                <>
                    <Dropdown as="li" className="pc-h-item">
                        <Dropdown.Toggle as="a" variant="link" className="pc-head-link arrow-none me-0 active">
                            Level
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="pc-h-dropdown">
                            <Dropdown.Item className="dropdown-item" as={Link} to="#">
                                <i className="material-icons-two-tone">account_circle</i>
                                <span>My Account</span>
                            </Dropdown.Item>
                            <div className="pc-level-menu">
                                <Link to="#" className="dropdown-item">
                                    <i className="material-icons-two-tone">list_alt</i>
                                    <span className="float-end">
                                        <FeatherIcon icon="chevron-right" className="me-0" />
                                    </span>
                                    <span>Level2.1</span>
                                </Link>
                                <div className="dropdown-menu pc-h-dropdown">
                                    <Link className="dropdown-item" to="#">
                                        <i className="fas fa-circle" />
                                        <span>Support</span>
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                        <i className="fas fa-circle" />
                                        <span>Settings</span>
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                        <i className="fas fa-circle" />
                                        <span>Lock Screen</span>
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                        <i className="fas fa-circle" />
                                        <span>Logout</span>
                                    </Link>
                                </div>
                            </div>
                            <Dropdown.Item className="dropdown-item" as={Link} to="#">
                                <i className="material-icons-two-tone">settings</i>
                                <span>Settings</span>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" as={Link} to="#">
                                <i className="material-icons-two-tone">support</i>
                                <span>Support</span>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" as={Link} to="#">
                                <i className="material-icons-two-tone">https</i>
                                <span>Lock Screen</span>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" as={Link} to="#">
                                <i className="material-icons-two-tone">chrome_reader_mode</i>
                                <span>Log out</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <ListGroup.Item as="li" bsPrefix=" " className="pc-h-item pc-mega-menu">
                        <Dropdown>
                            <Dropdown.Toggle as="a" variant="link" className="pc-head-link arrow-none me-0">
                                Mega
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="pc-h-dropdown pc-mega-dmenu">
                                <Row className="g-0">
                                    <Col>
                                        <h6 className="mega-title">Primitives</h6>
                                        <ul className="pc-mega-list">
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="material-icons-two-tone">account_circle</i>
                                                    <span>My Account</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="material-icons-two-tone">settings</i>
                                                    <span>Settings</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="material-icons-two-tone">support</i>
                                                    <span>Support</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="material-icons-two-tone">https</i>
                                                    <span>Lock Screen</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="material-icons-two-tone">chrome_reader_mode</i>
                                                    <span>Logout</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="material-icons-two-tone">movie_creation</i>
                                                    <span>Button</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="material-icons-two-tone">devices_other</i>
                                                    <span>Avatars</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </Col>
                                    <div className="col">
                                        <h6 className="mega-title">UI Components</h6>
                                        <ul className="pc-mega-list">
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Alerts
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Accordions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Avatars
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Badges
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Breadcrumbs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Button
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Buttons Groups
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h6 className="mega-title">UI Components</h6>
                                        <ul className="pc-mega-list">
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Menus
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Media Sliders / Carousel
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Modals
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Pagination
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Progress Bars &amp; Graphs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Search Bar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Tabs
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h6 className="mega-title">Advance Components</h6>
                                        <ul className="pc-mega-list">
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Advanced Stats
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Advanced Cards
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Lightbox
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Notification
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    <i className="fas fa-circle" /> Pnotify
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Row>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ListGroup.Item>
                </>
            )}
            {layout === 'topbar' && (
                <>
                    <Dropdown
                        onMouseOver={() => {
                            toggleMenuOpen1(true);
                        }}
                        onMouseLeave={() => {
                            toggleMenuOpen1(false);
                        }}
                        show={menuOpen1}
                        as="li"
                        bsPrefix=" "
                        className="pc-h-item dropdowns"
                    >
                        <Dropdown.Toggle as="a" variant="link" className="pc-head-link arrow-none me-0">
                            <i className="material-icons-two-tone me-2">business_center</i>Navigation
                            <span className="arrow-icon">
                                <FeatherIcon icon="chevron-down" className="me-0 wid-20" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="pc-h-dropdown">
                            <div className="pc-level-menu">
                                <Link to="#" className="dropdown-item">
                                    <span className="float-end">
                                        <FeatherIcon icon="chevron-right" className="me-0" />
                                    </span>
                                    <span>Dashboard</span>
                                </Link>
                                <div className="dropdown-menu pc-h-dropdown">
                                    <Link className="dropdown-item" to="/dashboard/sales" target="_blank">
                                        <i className="fas fa-circle" />
                                        <span>Sales</span>
                                    </Link>
                                    <Link className="dropdown-item" to="/dashboard/analytics" target="_blank">
                                        <i className="fas fa-circle" />
                                        <span>Analytics</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="pc-level-menu">
                                <Link to="#" className="dropdown-item">
                                    <span className="float-end">
                                        <FeatherIcon icon="chevron-right" className="me-0" />
                                    </span>
                                    <span>Layouts</span>
                                </Link>
                                <div className="dropdown-menu pc-h-dropdown">
                                    <Link className="dropdown-item" to="/layout/collapse" target="_blank">
                                        <span>Collapse</span>
                                    </Link>
                                    <Link className="dropdown-item" to="/layout/horizontal" target="_blank">
                                        <span>Horizontal</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="pc-level-menu">
                                <Link to="#" className="dropdown-item">
                                    <span className="float-end">
                                        <FeatherIcon icon="chevron-right" className="me-0" />
                                    </span>
                                    <span>Widget</span>
                                </Link>
                                <div className="dropdown-menu pc-h-dropdown">
                                    <Link className="dropdown-item" to="/widgets/widget-statistic" target="_blank">
                                        <span>Statistics</span>
                                    </Link>
                                    <Link className="dropdown-item" to="/widgets/widget-data" target="_blank">
                                        <span>Data</span>
                                    </Link>
                                    <Link className="dropdown-item" to="/widgets/widget-chart">
                                        <span>Chart</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="pc-level-menu">
                                <Link to="#" className="dropdown-item">
                                    <span className="float-end">
                                        <FeatherIcon icon="chevron-right" className="me-0" />
                                    </span>
                                    <span>User</span>
                                </Link>
                                <div className="dropdown-menu pc-h-dropdown">
                                    <Link className="dropdown-item" to="/users/user-profile">
                                        <span>Profile</span>
                                    </Link>
                                    <Link className="dropdown-item" to="/users/social-profile">
                                        <span>Social Profile</span>
                                    </Link>
                                </div>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown
                        onMouseOver={() => {
                            toggleMenuOpen2(true);
                        }}
                        onMouseLeave={() => {
                            toggleMenuOpen2(false);
                        }}
                        show={menuOpen2}
                        as="li"
                        bsPrefix=" "
                        className="pc-h-item dropdowns pc-mega-menu"
                    >
                        <Dropdown.Toggle as="a" variant="link" className="pc-head-link arrow-none me-0">
                            <i className="material-icons-two-tone me-2">history_edu</i>Components
                            <span className="arrow-icon">
                                <FeatherIcon icon="chevron-down" className="me-0 wid-20" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="pc-h-dropdown pc-mega-dmenu">
                            <Row className="g-0">
                                <Col>
                                    <h6 className="mega-title">Primitives</h6>
                                    <ul className="pc-mega-list">
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="material-icons-two-tone">account_circle</i>
                                                <span>My Account</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="material-icons-two-tone">settings</i>
                                                <span>Settings</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="material-icons-two-tone">support</i>
                                                <span>Support</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="material-icons-two-tone">https</i>
                                                <span>Lock Screen</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="material-icons-two-tone">chrome_reader_mode</i>
                                                <span>Logout</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="material-icons-two-tone">movie_creation</i>
                                                <span>Button</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="material-icons-two-tone">devices_other</i>
                                                <span>Avatars</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Col>
                                <div className="col">
                                    <h6 className="mega-title">UI Components</h6>
                                    <ul className="pc-mega-list">
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Alerts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Accordions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Avatars
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Badges
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Breadcrumbs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Button
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Buttons Groups
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6 className="mega-title">UI Components</h6>
                                    <ul className="pc-mega-list">
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Menus
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Media Sliders / Carousel
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Modals
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Pagination
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Progress Bars &amp; Graphs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Search Bar
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Tabs
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6 className="mega-title">Advance Components</h6>
                                    <ul className="pc-mega-list">
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Advanced Stats
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Advanced Cards
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Lightbox
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Notification
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">
                                                <i className="fas fa-circle" /> Pnotify
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown
                        onMouseOver={() => {
                            toggleMenuOpen3(true);
                        }}
                        onMouseLeave={() => {
                            toggleMenuOpen3(false);
                        }}
                        show={menuOpen3}
                        as="li"
                        bsPrefix=" "
                        className="pc-h-item dropdowns"
                    >
                        <Dropdown.Toggle as="a" variant="link" className="pc-head-link arrow-none me-0">
                            <i className="material-icons-two-tone me-2">list_alt</i>Menu levels
                            <span className="arrow-icon">
                                <FeatherIcon icon="chevron-down" className="me-0 wid-20" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="pc-h-dropdown">
                            <Dropdown.Item className="dropdown-item" as={Link} to="#">
                                <i className="material-icons-two-tone">account_circle</i>
                                <span>My Account</span>
                            </Dropdown.Item>
                            <div className="pc-level-menu">
                                <Link to="#" className="dropdown-item">
                                    <i className="material-icons-two-tone">list_alt</i>
                                    <span className="float-end">
                                        <FeatherIcon icon="chevron-right" className="me-0" />
                                    </span>
                                    <span>Level2.1</span>
                                </Link>
                                <div className="dropdown-menu pc-h-dropdown">
                                    <Link className="dropdown-item" to="#">
                                        <i className="fas fa-circle" />
                                        <span>Support</span>
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                        <i className="fas fa-circle" />
                                        <span>Settings</span>
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                        <i className="fas fa-circle" />
                                        <span>Lock Screen</span>
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                        <i className="fas fa-circle" />
                                        <span>Logout</span>
                                    </Link>
                                </div>
                            </div>
                            <Dropdown.Item className="dropdown-item" as={Link} to="#">
                                <i className="material-icons-two-tone">settings</i>
                                <span>Settings</span>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" as={Link} to="#">
                                <i className="material-icons-two-tone">support</i>
                                <span>Support</span>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" as={Link} to="#">
                                <i className="material-icons-two-tone">https</i>
                                <span>Lock Screen</span>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" as={Link} to="#">
                                <i className="material-icons-two-tone">chrome_reader_mode</i>
                                <span>Log out</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as="li" bsPrefix=" " className="pc-h-item dropdown">
                        <Dropdown.Toggle as="a" variant="link" className="pc-head-link arrow-none me-0" href="#">
                            No Icon Link
                        </Dropdown.Toggle>
                    </Dropdown>
                </>
            )}
        </ListGroup>
    );
};

export default NavLeft;
