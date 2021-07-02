export const INITIAL_STATE = {
  name: "",
  gender: "",
  country: "",
  email: "",
  phone: "",
  password: "",
  description: "",
  error: ""
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE":
      return Object.assign({}, state, action.name);
    default:
      return state;
  }
};
export default reducer;
