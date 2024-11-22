import { handleResponse, handleError } from "./utils";
const baseUrl = process.env.API_URL + "/devices/";

export function getdevices() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function savedevice(device) {
  return fetch(baseUrl + (device.id || ""), {
    method: device.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(device)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletedevice(deviceId) {
  return fetch(baseUrl + deviceId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
