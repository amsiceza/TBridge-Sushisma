const users = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          token: action.payload.token,
          message: action.payload.message,
        };
      case "GET_USER_INFO":
        return {
          ...state,
          user: action.payload,
          message: "",
        };
      case "LOGOUT":
        return {
          ...state,
          user: null,
          token: null,
          logoutMessage:action.payload.msg

        };
      default:
        return state;
    }
  };
  export default users;