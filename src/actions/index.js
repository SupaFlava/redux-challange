import { ADD_COMPANY, DELETE_COMPANY } from "../actionTypes";
export const addCompany = (newCompany) => {
  return {
    type: ADD_COMPANY,
    payload: newCompany,
  };
};

export const deleteCompany = (id) => {
  return {
    type: DELETE_COMPANY,
    payload: id,
  };
  
};
