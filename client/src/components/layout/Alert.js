import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../app1.css";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        key={alert.id}
        className={`alert alert-${alert.alertType}`}
        style={{
          position: "fixed",
          width: "80%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {alert.msg}
      </div>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
