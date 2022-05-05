//Api
import Api from "../../api";
import { apiStart, apiEnd, apiError } from "./api";

//Redux
import { API_FAILURE, REMOVE_CONTACT, ADD_CONTACT, EDIT_CONTACT, GET_CONTACT, GET__CONTACT_USER, ADD_CONTACT_USER, EDIT_CONTACT_USER } from "./types";

//Constants

function requestSuccess(type, data = null) {
  return { type, payload: { data } };
}

function requestFail(data) {
  return { type: API_FAILURE, payload: { data } };
}

export function get() {
  return (dispatch) => {
    dispatch(apiStart());
    Api.get("/Contact")
      .then((response) => {
        if (response.data.success) {
          dispatch(requestSuccess(GET_CONTACT, response.data.data));
          dispatch(apiEnd());
        } else {
          dispatch(apiEnd());
          dispatch(requestFail(response.data.message));
        }
      })
      .catch((error) => {
        const message = error.message;
        dispatch(apiEnd());
        dispatch(apiError(message));
      });
  };
}
export function add(contact) {
  return (dispatch) => {
    dispatch(apiStart());
    return Api.post(`/Contact`, contact)
      .then((response) => {
        if (response.data.success) {
          dispatch(requestSuccess(ADD_CONTACT, response.data.data));
          dispatch(apiEnd());
          return true;
        } else {
          dispatch(apiEnd());
          dispatch(requestFail(response.data.message));
        }
      })
      .catch((error) => {
        const message = error.message;
        dispatch(apiEnd());
        dispatch(apiError(message));
      });
  };
}
export function update(id) {
  return (dispatch) => {
    dispatch(apiStart());
    Api.patch(`/Contact/${id}`,contact)
      .then((response) => {
        if (response.data.success) {
          dispatch(requestSuccess(EDIT_CONTACT, response.data.data));
          dispatch(apiEnd());
        } else {
          dispatch(apiEnd());
          dispatch(requestFail(response.data.message));
        }
      })
      .catch((error) => {
        const message = error.message;
        dispatch(apiEnd());
        dispatch(apiError(message));
      });
  };
}

export function remove(id) {
  return (dispatch) => {
    dispatch(apiStart());
    Api.delete(`/Contact/${id}`)
      .then((response) => {
        if (response.data.success) {
          dispatch(requestSuccess(REMOVE_CONTACT, id));
          dispatch(apiEnd());
        } else {
          dispatch(apiEnd());
          dispatch(requestFail(response.data.message));
        }
      })
      .catch((error) => {
        const message = error.message;
        dispatch(apiEnd());
        dispatch(apiError(message));
      });
  };
}

