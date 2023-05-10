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
        products: [action.payload, ...state.products],
      };

      case "DELETE_TASK":
        return {
          ...state,
          products: state.products.filter(
            (task) => task.id !== action.payload.deleteProduct.id
          ),
        };

      default:
        return state;
    }
  };
  export default products;