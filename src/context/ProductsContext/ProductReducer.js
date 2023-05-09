const products = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
      
        case "ADD_PRODUCTS":
      return {
        ...state,
        tasks: [action.payload, ...state.products],
      };

      default:
        return state;
    }
  };
  export default products;