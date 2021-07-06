const initialstate = {
  employees: []
};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_EMPLOYEE":
      return {
        ...state
      };
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.concat(action.payload)
      };
    case "EDIT_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                name: action.payload.name,
                gender: action.payload.gender,
                country: action.payload.country,
                email: action.payload.email,
                phone: action.payload.phone,
                password: action.payload.password,
                description: action.payload.description
              }
            : content
        )
      };
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default userReducer;
