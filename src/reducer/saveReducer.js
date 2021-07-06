export const INITIAL_STATE = {
  name: "",
  id: "",
  gender: "",
  country: "",
  email: "",
  phone: "",
  password: "",
  description: ""
};

const saveReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
export default saveReducer;
