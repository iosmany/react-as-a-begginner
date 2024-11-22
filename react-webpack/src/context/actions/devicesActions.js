import * as types from './actionsTypes'

export const createDevice = device => {
    return { type: types.CREATE_DEVICE, device };
}
export const loadDevicesSuccess = devices => {
    return { type: types.LOAD_DEVICES_SUCCESS, devices };
}


//definition of a thunk => a function that returns a function that takes dispatch as an argument, are wrappers around actions
/*
  Thunk middleware allows you to write action creators that return a function instead of an action. 
  The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
  The inner function receives the store methods dispatch and getState as parameters.
*/ 

export const addNewDevice = device => {
    return function (dispatch) {
        const apiUrl = process.env.API_URL;
        return fetch(apiUrl + "/devices", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(device)
        })
            .then(response => response.json())
            .then(saveddevice => dispatch(createDevice(saveddevice)))
            .catch(error => console.log("Error creating device", error));
    }
}

export const loadDevices = () => {
    return function (dispatch) {
        const apiUrl = process.env.API_URL;
        return fetch(apiUrl + "/devices")
            .then(response => response.json())
            .then(devices => dispatch(loadDevicesSuccess(devices)))
            .catch(error => console.log("Error loading devices", error));
    }
}