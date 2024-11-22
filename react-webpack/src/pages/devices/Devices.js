import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createDevice,
  loadDevices
} from "../../context/actions/devicesActions";

export default function devices() {
  const dispatch = useDispatch();
  const devices = useSelector(state => state.devices);
  const [device, setDevice] = useState({ name: "" });

  const handleChange = event => {
    setDevice({ ...device, name: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createDevice(device));
  };

  useEffect(() => {
    if (devices.length === 0) {
      dispatch(loadDevices()).catch(error => {
        alert("Loading devices failed" + error);
      });
    }
  }, [devices]);

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h2>devices</h2>
                <h3>Add Device</h3>
                <input
                  type="text"
                  onChange={handleChange}
                  value={device.title}
                />
                <input type="submit" value="Save" />
              </form>
            </div>
          </div>
        </div>
        <div className="col-12">
          <h2>Devices</h2>
          <div className="card">
            <div className="card-body w-100">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Slug</th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map(device => (
                    <tr key={device.id}>
                      <td>
                        <div>{device.name}</div>
                      </td>
                      <td>
                        <div>{device.category}</div>
                      </td>
                      <td>
                        <div>{device.slug}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
