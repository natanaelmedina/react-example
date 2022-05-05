import {  REMOVE_CONTACT, EDIT_CONTACT, ADD_CONTACT, GET_CONTACT } from "../actions/types";
import { reject, map } from "lodash";
export default function contacts(state = { contactsList: [] }, action) {

  const { payload, type } = action;
  switch (type) {
    case GET_CONTACT:
      return { ...state, contactsList: payload.data };

    case ADD_CONTACT:
      return { ...state, contactsList: [...state.contactsList, payload.data] };

    case EDIT_CONTACT: {
      const updated = map(state.contactsList, (item) => {
        if (item.id !== payload.data.id) {
          return item;
        }
        return { ...item, ...payload.data };
      });

      return { ...state, contactsList: updated };
    }

    case REMOVE_CONTACT:
      const removed = reject(state.contactsList, ({ id }) => id === payload.id);
      return { ...state, contactsList: removed };

    default:
      return state;
  }

}
