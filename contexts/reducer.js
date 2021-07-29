export const reducer = (state, action) => {
    switch (action.type) {
      case "toggleMenu":
        return {
          ...state,
          isMenuOpen: action.payload ?? !state.isMenuOpen,
        }
  
      default:
        return state
    }
  }
  
  export const initialState = {
    isMenuOpen: false
  }