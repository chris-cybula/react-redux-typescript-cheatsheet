import { Action } from "../actions/setData";

export interface StateTypes {
  data: string;
}

const initialState = {
  data: "State is empty",
};

const reducer = (state: StateTypes = initialState, action: Action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default reducer;
