import React, { useState } from "react";
import "./signup-rider.css";
import { AiFillGoogleCircle } from "react-icons/ai";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { setAlert } from "../../actions/alert";
// import { registerRider } from "../../actions/auth";
import { Input } from "reactstrap";

export const SignupRider = (/*{ setAlert, registerRider }*/) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  //   phone: "",
  //   pincode: "",
  //   firstline: "",
  //   typeofvehicle: "cycle",
  //   regnumber: "",
  //   landmark: "",
  //   aadhar: "",
  //   dob: "",
  // });

  // const {
  //   name,
  //   email,
  //   password,
  //   password2,
  //   phone,
  //   pincode,
  //   firstline,
  //   landmark,
  //   typeofvehicle,
  //   regnumber,
  //   aadhar,
  //   dob,
  // } = formData;

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (password !== password2) {
  //     setAlert("Password do not match", "danger");
  //   } else {
  //     registerRider(
  //       name,
  //       email,
  //       password,
  //       password2,
  //       phone,
  //       pincode,
  //       firstline,
  //       landmark,
  //       typeofvehicle,
  //       regnumber,
  //       aadhar,
  //       dob
  //     );
  //   }
  // };
  // const onChange = async (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  //redirect after successfull signup
  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard/rider" />;
  // }

  function Req() {
    return <span className="req">*</span>;
  }
  return (
    <div className="signup-Rider">
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

      {/* MAIN CONTENT SECTION */}

      <div className="flex-container-rider">
        {/* WELCOME TO PRECYCLE SECTION */}

        <div className="flex-item-left-rider">
          {/* <div className="welcome"> */}

          <h2 className="welcome-text-rider"> Welcome to</h2>

          <h1 className="name-rider">PRECycle</h1>
          {/* </div> */}
        </div>

        {/* SIGNUP SECTION */}

        <div className="flex-item-right">
          <div className="content">
            {/* SIGNUP USING GOOGLE SECTION */}

            <div className="signup-with-rider">
              <h2 className="">
                <strong>Sign up with</strong>
              </h2>
              <div className="button-google-rider">
                <button type="button" class="btn btn-danger">
                  <AiFillGoogleCircle className="icon" />
                  Google
                </button>
              </div>
            </div>

            {/* OR DIV */}

            <hr className="hr1" />

            {/* SIGNUP HERE DIV */}

            <div className="signup-here">
              <h3>
                <strong>Signup here</strong>
              </h3>

              {/* FORM SECTION */}

              <form>
                <div class="form-floating mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    name="name"
                    // value={name}
                    // onChange={(e) => onChange(e)}
                  />
                  <label for="floatingInput" className="floating-txt">
                    Name
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    // value={email}
                    // onChange={(e) => onChange(e)}
                    required
                  />
                  <label for="floatingInput" className="floating-txt">
                    Email address
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control pass"
                    id="floatingInput"
                    placeholder="Password"
                    name="password"
                    // value={password}
                    // onChange={(e) => onChange(e)}
                    required
                  />
                  <label for="floatingInput" className="floating-txt">
                    Password
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control pass"
                    id="floatingInput"
                    placeholder="Password"
                    name="password2"
                    // value={password2}
                    // onChange={(e) => onChange(e)}
                    required
                  />
                  <label for="floatingInput" className="floating-txt">
                    Confirm Password
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Phone no."
                    name="phone"
                    // value={phone}
                    // onChange={(e) => onChange(e)}
                  />
                  <label for="floatingInput" className="floating-txt">
                    Phone No.
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Address"
                    name="firstline"
                    // value={firstline}
                    // onChange={(e) => onChange(e)}
                  />
                  <label for="floatingInput" className="floating-txt">
                    Address
                    <Req />
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Aadhar No."
                    name="aadhar"
                    // value={aadhar}
                    // onChange={(e) => onChange(e)}
                  />
                  <label for="floatingInput" className="floating-txt">
                    Aadhar No.
                    <Req />
                  </label>
                </div>
                <div className="age-radio">
                  <div class="form-floating mb-3 age">
                    <Input
                      type="date"
                      id="date"
                      placeholder="Pickup date"
                      name="dob"
                      // value={dob}
                      // onChange={(e) => onChange(e)}
                    />
                    <label for="floatingInput" className="floating-txt">
                      DOB
                      <Req />
                    </label>
                  </div>

                  {/* RADIO BUTTONS FOR GENDER */}

                  <div className="radios">
                    <div class="form-check radio-items">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="male"
                      />
                      <label class="form-check-label" for="male">
                        Male
                      </label>
                    </div>
                    <div class="form-check  radio-items">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="female"
                      />
                      <label class="form-check-label" for="female">
                        Female
                      </label>
                    </div>
                    <div class="form-check radio-items">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="other"
                      />
                      <label class="form-check-label" for="other">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="reg-pin">
                  <div class="form-floating mb-3  reg-pin-items1">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="landmark"
                      placeholder="Land Mark"
                      name="landmark"
                      // value={landmark}
                      // onChange={(e) => onChange(e)}
                    />
                    <label for="pincode" className="floating-txt">
                      Landmark
                      <Req />
                    </label>
                  </div>
                  <div class="form-floating mb-3  reg-pin-items2">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="pincode"
                      placeholder="Pin Code"
                      name="pincode"
                      // value={pincode}
                      // onChange={(e) => onChange(e)}
                    />
                    <label for="pincode" className="floating-txt">
                      Pin Code
                      <Req />
                    </label>
                  </div>
                </div>
                <input type="checkbox" id="chkYes" name="typeofvehicle" />{" "}
                <label for="chkYes">
                  Do you use a vehicle other than bicycle?
                </label>
                <div class="form-floating mb-3 reg-pin-items2" id="dvtext">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="txtBox"
                    placeholder="Registration no."
                    name="regnumber"
                    // value={regnumber}
                    // onChange={(e) => onChange(e)}
                  />
                  <label for="txtBox" className="floating-txt">
                    Registration no. of vehicle(other than bicycle)
                    <Req />
                  </label>
                </div>
                <div className="operation-radius">
                  <p>
                    Select the radius in which you can operate: <br />
                    (regions near the pin code provided above)
                  </p>

                  {/* RADIO BUTTONS FOR THE SELECTION OF OPERATION RADIUS */}

                  <div className="radios ">
                    <div class="form-check radio-items">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="2km"
                      />
                      <label class="form-check-label" for="2km">
                        2km
                      </label>
                    </div>
                    <div class="form-check  radio-items">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="5km"
                      />
                      <label class="form-check-label" for="5km">
                        5km
                      </label>
                    </div>
                    <div class="form-check radio-items">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="10km"
                      />
                      <label class="form-check-label" for="10km">
                        10km
                      </label>
                    </div>
                    <div class="form-check radio-items">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="15km"
                      />
                      <label class="form-check-label" for="15km">
                        15km
                      </label>
                    </div>
                  </div>
                </div>
                {/* UPLOAD YOUR PHOTO SECTION */}
                <div class="mb-3">
                  <label for="chooseFile" class="form-label upload-rider">
                    Upload Photo(Passport size)
                  </label>
                  <input
                    class="form-control form-control-sm"
                    id="chooseFile"
                    type="file"
                  />
                </div>
                <div className="tnc">
                  <input type="checkbox" id="TnC" required />
                  <label for="TnC">
                    {" "}
                    I agree to the{" "}
                    <a href=" " alt="Terms and conditions" className="tnc">
                      terms and conditions and the privacy policy
                    </a>
                  </label>
                </div>
                <div className="signup-button">
                  <button
                    type="button"
                    // onClick={(e) => onSubmit(e)}
                    class="btn btn-warning btn-lg registar"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SignupRider.propTypes = {
//   registerRider: PropTypes.func.isRequired,
//   setAlert: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, { registerRider, setAlert })(
//   SignupRider
// );
