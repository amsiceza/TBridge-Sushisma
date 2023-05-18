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

    case "ADD_CART":
      const isProductCart = state.cart.map(product => product.id)
      if(isProductCart.includes(action.payload.id)){
        const newCart = state.cart.map(product => {
          if(product.id == action.payload.id){
            product.quantity = product.quantity + 1
          }
          return product
        })
        return {
          ...state,
          cart: newCart,
        };
      }else{
        return {
          ...state,
          cart: [{...action.payload,quantity:1}, ...state.cart],
        };
      }
      case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload
      };

      case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
export default products;
