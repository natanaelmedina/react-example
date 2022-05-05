import { API_START, API_END } from "../actions/types";

export default function loading(state = { isLoading: false }, action) {
  const { type } = action;
  switch (type) {
    case API_START:
      return { ...state, isLoading: true };

    case API_END:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}
