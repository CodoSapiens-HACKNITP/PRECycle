import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
// importing images
import image1 from "../../assests/image 1.jpg";
import image2 from "../../assests/image 1 (1).jpg";
import image3 from "../../assests/image 1 (2).jpg";

const CardItem = ({ image, header, para }) => (
  <div className="box">
    <div className="box-image">
      <img src={image} alt="" />
    </div>
    <div className="box-content">
      <h2 className="box-header">{header}</h2>
      <p>{para}</p>
    </div>
  </div>
);

const Display = ({ onClick }) => {
  const headers = ["Seller", "Rider", "Vendor"];

  const paras = [
    "The civilians willing to sell the waste",
    "The local riders or ragpickers",
    "The local scrap dealers",
  ];

  return (
    <div className="container">
      <Link to="/signup/seller" onClick={onClick}>
        <CardItem image={image1} header={headers[0]} para={paras[0]} />
      </Link>
      <hr />

      <Link to="/signup/rider" onClick={onClick}>
        <CardItem image={image2} header={headers[1]} para={paras[1]} />
      </Link>
      <hr />

      <Link to="/signup/vendor" onClick={onClick}>
        <CardItem image={image3} header={headers[2]} para={paras[2]} />
      </Link>
    </div>
  );
};

const Header = ({ logout, auth }) => {
  const [formData, setFormData] = useState({
    isNavOpen: false,
    isModalOpen: false,
  });
  const { isNavOpen, isModalOpen } = formData;
  const toggleNav = (e) => setFormData({ ...formData, isNavOpen: !isNavOpen });

  const toggleModal = (e) =>
    setFormData({ ...formData, isModalOpen: !isModalOpen });

  return (
    <React.Fragment>
      <Navbar scrolling dark expand="md" sticky="top">
        <div className="container">
          <NavbarToggler onClick={() => toggleNav()} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/logo.jpg"
              height="50"
              width="50"
              alt="PRECycle"
            ></img>{" "}
            <b style={{ fontFamily: "Joti one", color: "white" }}>PRECycle</b>
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>

              {auth.typeofuser === "vendor" ? (
                <NavItem>
                  <NavLink className="nav-link" to="/ratelist">
                    Rate List
                  </NavLink>
                </NavItem>
              ) : (
                <span></span>
              )}

              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  {auth.isAuthenticated ? (
                    <DropdownToggle nav caret>
                      <span className="fa fa-list fa-lg"></span> Menu
                    </DropdownToggle>
                  ) : (
                    <span></span>
                  )}
                  {auth.isAuthenticated ? (
                    <DropdownMenu className="DropdownMenu" right>
                      {auth.typeofuser === "seller" ? (
                        <DropdownItem className="DropdownMenu">
                          <NavLink className="nav-link" to="/dashboard/seller">
                            Seller Dashboard
                          </NavLink>
                        </DropdownItem>
                      ) : (
                        <span></span>
                      )}
                      {auth.typeofuser === "seller" ? (
                        <DropdownItem className="DropdownMenu">
                          <NavLink
                            className="nav-link"
                            to="/sellerDashboardProgress"
                          >
                            Seller Dashboard (Order Status)
                          </NavLink>
                        </DropdownItem>
                      ) : (
                        <span></span>
                      )}
                      {auth.typeofuser === "vendor" ? (
                        <DropdownItem className="DropdownMenu">
                          <NavLink className="nav-link" to="/dashboard/vendor">
                            Vendor Dashboard
                          </NavLink>
                        </DropdownItem>
                      ) : (
                        <span></span>
                      )}
                      {auth.typeofuser === "rider" ? (
                        <DropdownItem className="DropdownMenu">
                          <NavLink className="nav-link" to="/dashboard/rider">
                            Rider Dashboard
                          </NavLink>
                        </DropdownItem>
                      ) : (
                        <span></span>
                      )}
                      {auth.typeofuser === "seller" ? (
                        <DropdownItem className="DropdownMenu">
                          <DropdownItem divider />
                          <NavLink className="nav-link" to="/requestPickup">
                            Request pickup
                          </NavLink>
                        </DropdownItem>
                      ) : (
                        <span></span>
                      )}
                    </DropdownMenu>
                  ) : (
                    <span></span>
                  )}
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
              {/* This Section has to be like depending upon the authenticated state of the user */}

              {auth.isAuthenticated ? (
                <Fragment>
                  <NavItem>
                    <NavLink to="/login" onClick={logout}>
                      <Button outline>
                        <span className="fa fa-sign-in fa-lg"></span> Logout
                      </Button>
                    </NavLink>
                  </NavItem>{" "}
                </Fragment>
              ) : (
                <Fragment>
                  <NavItem>
                    <NavLink to="/login">
                      <Button outline>
                        <span className="fa fa-sign-in fa-lg"></span> Login
                      </Button>
                    </NavLink>
                  </NavItem>{" "}
                  <NavItem>
                    <Button outline onClick={() => toggleModal()}>
                      <span className="fa fa-user-plus fa-lg"></span> Register
                    </Button>
                  </NavItem>
                </Fragment>
              )}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Modal isOpen={isModalOpen} toggle={() => toggleModal()}>
        <ModalHeader toggle={() => toggleModal()}>
          <h1> Sign up as </h1>
        </ModalHeader>
        <ModalBody>
          <Display onClick={() => toggleModal()} />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps, { logout })(Header);
