export const initialState = {
    category: null,
    categories: [],
    products: [],
    subcategories: [],
    selectedSubcategory: null,
    loading: false,
    error: null,
  };
  
  export const appReducer = (state, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return { ...state, loading: true, error: null };
      case 'SET_CATEGORY':
        return { ...state, category: action.payload, loading: false };
      case 'SET_CATEGORIES':
        return { ...state, categories: action.payload };
      case 'SET_SUBCATEGORIES':
        return { ...state, subcategories: action.payload, loading: false };
      case 'SET_PRODUCTS':
        return { ...state, products: [...action.payload], loading: false };
      case 'SET_SELECTED_SUBCATEGORY':
        return { ...state, selectedSubcategory: action.payload };
      case 'ADD_PRODUCT':
        const productExists = state.products.some((product) => product._id === action.payload._id);
  
        if (productExists) {
          return state;
        }
  
        return { ...state, products: [...state.products, action.payload] };
      case 'DELETE_PRODUCT':
        return {
          ...state,
          products: state.products.filter(product => product._id !== action.payload),
        };
      case 'EDIT_PRODUCT':
        return {
          ...state,
          products: state.products.map(product =>
              product._id === action.payload._id ? action.payload : product
          ),
        }
      case 'SET_ERROR':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };  