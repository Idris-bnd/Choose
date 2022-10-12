import {
    TOGGLE_SETTINGS,
    CHANGE_COLOR,
  } from '../actions/action';
  
  const initialState = {
    colors: [
      {
          id: 1,
          colorValue: "#69CB28"
      },
      {
          id: 2,
          colorValue: "#457B55"
      },
      {
          id: 3,
          colorValue: "#71B8D0"
      },
      {
          id: 4,
          colorValue: "#CA472D"
      },
    ],
  };
  
  function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case TOGGLE_SETTINGS:
        return {
          ...state,
          settings: {
            ...state.settings,
            isOpen: !state.settings.isOpen,
          },
        };
      case CHANGE_COLOR:
        return {
          ...state,
          colors: {
            ...state.colors,
            colorValue: '#FD2542',
          },
        }; 
      default:
        return state;
    }
  }
  
  export default reducer;
  