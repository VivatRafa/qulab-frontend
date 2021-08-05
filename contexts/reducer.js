export const reducer = (state, action) => {
    switch (action.type) {
      case "toggleMenu":
        return {
          ...state,
          isMenuOpen: action.payload ?? !state.isMenuOpen,
        }

      case 'toggleMobileMenu':
        return {
          ...state,
          isMobileMenuOpen: action.payload ?? !state.isMobileMenuOpen,
        }
  
      default:
        return state
    }
  }
  
  export const initialState = {
    isMenuOpen: false,
    isMobileMenuOpen: false,
  }