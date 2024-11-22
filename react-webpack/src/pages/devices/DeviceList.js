import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DeviceList = ({ devices }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {devices.map(device => {
          return (
            <tr key={device.id}>
              <td>
                <a
                  className="btn btn-light"
                  href={"http://pluralsight.com/devices/" + device.slug}
                >
                  Watch
                </a>
              </td>
              <td>
                <Link to={"/device/" + device.slug}>{device.title}</Link>
              </td>
              <td>{device.authorName}</td>
              <td>{device.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

DeviceList.propTypes = {
  devices: PropTypes.array.isRequired
};

export default DeviceList;
