import React, { useState } from "react";
import { login } from "../../actions/auth";
import styles from "./logIn.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    loginDetail: "",
    password: "",
    typeOfUser: "seller",
  });

  //google login response
  const responseGoogle = (response) => {
    console.log(response);
  };

  const { loginDetail, password, typeOfUser } = formData;
  localStorage.setItem("typeofuser", typeOfUser);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(loginDetail, password, typeOfUser);
  };

  //redirect if logged in
  if (isAuthenticated) {
    const url = `/dashboard/${localStorage.getItem("typeofuser")}`;
    return <Redirect to={url} />;
  }

  return (
    <div className="signup-Rider">
      {/* GOOGLE FONTS */}

      {/* MAIN CONTENT SECTION */}

      <div className="flex-container-rider">
        {/* WELCOME TO PRECYCLE SECTION */}

        <div className={styles.SignIN}>
          {/* <div className="welcome"> */}

          <h2 className={styles.welcomeText}> Welcome to</h2>

          <h1 className={styles.name}>PRECycle</h1>
          {/* </div> */}
        </div>

        {/* SIGNIN SECTION */}

        <div className={styles.flexRight}>
          <div className="content">
            <h2 className={styles.form_h2}>
              <center>SIGN IN</center>
            </h2>

            <form
              onSubmit={(e) => onSubmit(e)}
              className={styles.form_component}
            >
              <input
                type="text"
                name="loginDetail"
                placeholder="Email / Phone Number"
                onChange={(e) => onChange(e)}
                value={loginDetail}
                required
              ></input>

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => onChange(e)}
                value={password}
                required
              ></input>
              <select
                name="typeOfUser"
                value={typeOfUser}
                className={styles.select}
                onChange={(e) => onChange(e)}
              >
                <option value="seller">Seller</option>
                <option value="rider">Rider</option>
                <option value="vendor">Vendor</option>
              </select>

              <button className={styles.signin_btn}>Sign In</button>
            </form>
            <center>
              <p className={styles.or}>or</p>
              <GoogleLogin
                clientId="266262352024-950s3j5a29gddj75l9oujmckk8u7rfub.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              ,
              <h4 className={styles.form_h4}>
                {" "}
                New User?{" "}
                <Link to="/signup/seller" className={styles.form_link}>
                  {" "}
                  Sign Up Here
                </Link>
              </h4>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

/*import React, { useState } from "react";
import { login } from "../../actions/auth";
import styles from "./logIn.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    loginDetail: "",
    password: "",
    typeOfUser: "seller",
  });

  const { loginDetail, password, typeOfUser } = formData;
  localStorage.setItem("typeofuser", typeOfUser);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(loginDetail, password, typeOfUser);
  };

  //redirect if logged in
  if (isAuthenticated) {
    const url = `/dashboard/${localStorage.getItem("typeofuser")}`;
    return <Redirect to={url} />;
  }
  return (
    <div className="loginRounded">
      <div className={styles.parent_div}>
        <div className={styles.button_div}>
          <image src="./assets/signin.jpg" alt="signin"/>
          
        </div>

        <div className={styles.form_div}>
          <div className={styles.form_div_inner}>
            <h2 className={styles.form_h2}>SIGN IN</h2>

            <form
              onSubmit={(e) => onSubmit(e)}
              className={styles.form_component}
            >
              <input
                type="text"
                name="loginDetail"
                placeholder="Email / Phone Number"
                onChange={(e) => onChange(e)}
                value={loginDetail}
                required
              ></input>

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => onChange(e)}
                value={password}
                required
              ></input>
              <select
                name="typeOfUser"
                value={typeOfUser}
                onChange={(e) => onChange(e)}
              >
                <option value="seller">Seller</option>
                <option value="rider">Rider</option>
                <option value="vendor">Vendor</option>
              </select>

              <button className={styles.signin_btn}>Sign In</button>
            </form>
            <p className={styles.or}>or</p>
            <GoogleLogin
              clientId="266262352024-950s3j5a29gddj75l9oujmckk8u7rfub.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />,
            <h4 className={styles.form_h4}>
              {" "}
              New User?{" "}
              <Link to="/signup/seller" className={styles.form_link}>
                {" "}
                Sign Up Here
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
*/
