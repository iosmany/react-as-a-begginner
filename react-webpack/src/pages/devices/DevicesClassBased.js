import React from "react";
import { connect } from "react-redux";
import * as deviceActions from "../../context/actions/devicesActions";
import * as authorActions from "../../context/actions/authorsActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import deviceList from "./DeviceList";

class DevicesPage extends React.Component {
  componentDidMount() {
    const { devices, authors, actions } = this.props;

    if (devices.length === 0) {
      actions.loaddevices().catch(error => {
        alert("Loading devices failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>devices</h2>
        <deviceList devices={this.props.devices} />
      </>
    );
  }
}

DevicesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  devices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    devices:
      state.authors.length === 0
        ? []
        : state.devices.map(device => {
            return {
              ...device,
              authorName: state.authors.find(a => a.id === device.authorId).name
            };
          }),
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loaddevices: bindActionCreators(deviceActions.loaddevices, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DevicesPage);
