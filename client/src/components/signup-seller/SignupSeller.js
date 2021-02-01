import React, { useState } from "react";
import "./signup-seller.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { registerSeller } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, registerSeller, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    phone: "",
    pincode: "",
    firstline: "",
    landmark: "",
  });

  const {
    name,
    email,
    password,
    password2,
    phone,
    pincode,
    firstline,
    landmark,
  } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      registerSeller(
        name,
        email,
        password,
        phone,
        pincode,
        firstline,
        landmark
      );
    }
  };
  const onChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [disabled, setDisabled] = useState(true);

  function activate() {
    setDisabled(!disabled);
  }

  //redirect after successfull signup
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  function Req() {
    return <span className="req">*</span>;
  }

  return (
    <div className="signup-seller">
      {/* GOOGLE FONTS */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Roboto&display=swap"
        rel="stylesheet"
      />
      {/* BOOTSTRAP */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossorigin="anonymous"
      ></link>
      <div class="flex-container-signupSeller">
        <div class="flex-item-left-seller">
          {/* <div className="welcome"> */}
          <h2 className="welcome-text-seller"> Welcome to</h2>
          <h1 className="name-seller">PRECycle</h1>
          {/* </div> */}
        </div>

        {/* SIGNUP SECTION */}

        <div class="flex-item-right-signupSeller">
          <div className="content">
            <div className="signup-with">
              <h2 className="">
                <strong>Sign up with</strong>
              </h2>
              <div className="buttonsignupSeller">
                <button type="button" class="btn btn-danger">
                  <AiFillGoogleCircle className="icon" />
                  Google
                </button>
              </div>
            </div>
            {/* OR DIV */}
            <hr className="division" />

            {/* SIGNUP HERE DIV */}

            <div className="signup-here">
              <h3>
                <strong>Signup here</strong>
              </h3>
              <p>
                Fields marked with <Req /> represents the required fields.
              </p>
              <form onSubmit={(e) => onSubmit(e)}>
                <div class="form-floating mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                  <label for="name">
                    Name
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label for="email">
                    Email address
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control pass"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label for="password">
                    Password
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control pass"
                    id="Password2"
                    placeholder="Password"
                    name="password2"
                    value={password2}
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label for="password2">
                    Password
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="Contact"
                    placeholder="Phone no."
                    name="phone"
                    value={phone}
                    onChange={(e) => onChange(e)}
                  />
                  <label for="Contact">Phone No.</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="firstline"
                    placeholder="First Line"
                    name="firstline"
                    value={firstline}
                    onChange={(e) => onChange(e)}
                  />
                  <label for="firstline">
                    Address
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="secondline"
                    placeholder="Second Line"
                  />
                  <label for="secondline">Additional Address here</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="pincode"
                    placeholder="Pincode"
                    name="pincode"
                    value={pincode}
                    onChange={(e) => onChange(e)}
                  />
                  <label for="pincode">
                    Pincode
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="landmark"
                    placeholder="landmark"
                    name="landmark"
                    value={landmark}
                    onChange={(e) => onChange(e)}
                  />
                  <label for="landmark">landmark</label>
                </div>
                {/* <button onClick={() => getArea(pincode)}>Get Area List</button>
                  <div class="form-floating mb-3">
                           <select id="cityList" name="city" value={city} onChange={(e) => onChange(e)}>
                            {postOffices.map(postOffice => {
                              <option value={postOffice.City}>{postOffice.Name}</option>
                            })}
                          </select>
                          <label for="cityList">Name Of Area</label>
                  </div> */}
                <div className="tnc">
                  <input
                    type="checkbox"
                    id="TnC"
                    required
                    onChange={activate}
                  />
                  <label for="TnC">
                    {" "}
                    I agree to the{" "}
                    <a href="/tnc" alt="terms and conditions" className="tnc">
                      terms and conditions and the privacy policy
                    </a>
                  </label>
                </div>
                <input
                  type="submit"
                  className="btn btn-warning btn-lg"
                  value="Register"
                  disabled={disabled}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerSeller: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerSeller })(Register);
