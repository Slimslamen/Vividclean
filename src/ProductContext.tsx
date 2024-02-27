import { createContext, useReducer, useContext } from "react";

const ProductContext = createContext()

export const ProductContextProvider = ({children}) => {
    const [dropdownState, dispatch] = useReducer(dropdownReducer, {
firstDropdownOpen: false,
secondDropdownOpen: false,
thirdDropdownOpen: false,
fourthdropdownOpen: false,
    });
    return( <ProductContext.Provider value={{dropdownState, dispatch}}>
        {children}
    </ProductContext.Provider>
    );
}
export const useDropdown = () => useContext(ProductContext);

const dropdownReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FIRST_DROPDOWN":
      return { ...state, firstDropdownOpen: !state.firstDropdownOpen };
    case "TOGGLE_SECOND_DROPDOWN":
      return { ...state, secondDropdownOpen: !state.secondDropdownOpen };
    case "TOGGLE_THIRD_DROPDOWN":
      return { ...state, thirdDropdownOpen: !state.thirdDropdownOpen };
    case "TOGGLE_FOURTH_DROPDOWN":
      return { ...state, fourthDropdownOpen: !state.fourthDropdownOpen };
    default:
      return state;
  }
};