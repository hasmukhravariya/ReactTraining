const initialstate = {
  users: []
};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state
      };
    case "ADD_USER":
      return {
        ...state,
        users: state.users.concat(action.payload)
      };
    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map((content, i) =>
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
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default userReducer;
