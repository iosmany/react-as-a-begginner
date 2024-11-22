
import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export const deviceReducer = (state = initialState.devices, action) => {
    switch (action.type) {
        case types.LOAD_DEVICES_SUCCESS:
            return action.devices;
        case types.CREATE_DEVICE:
            return [...state, { ...action.device }];
        default:
            return state;
    }
}

