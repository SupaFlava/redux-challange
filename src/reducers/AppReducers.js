import { ADD_COMPANY, DELETE_COMPANY } from "../actionTypes";

const inistialState = {
  companies: [],
};
const AppReducers = (state = inistialState, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return { ...state, companies: [...state.companies, action.payload] };

    case DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter((comp) => comp.id !== action.payload),
      };
    default:
      return state;
  }
};
export default AppReducers;
