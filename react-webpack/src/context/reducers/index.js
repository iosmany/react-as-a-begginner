import { combineReducers } from "redux";
import { deviceReducer as devices } from "./devicesReducer";

const rootReducer = combineReducers({
    devices,
});

export default rootReducer;
