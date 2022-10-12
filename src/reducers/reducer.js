import {
    TOGGLE_SETTINGS,
    CHANGE_COLOR,
  } from '../actions/action';
  
  const initialState = {
    colors: [
      {
          id: 1,
          colorValue: "#AC90EB"
      },
      {
          id: 2,
          colorValue: "#8C52FF"
      },
      {
          id: 3,
          colorValue: "#FFBD59"
      },
      {
          id: 4,
          colorValue: "#5E17EB"
      },
      {
        id: 5,
        colorValue: "#D89191"
      },
      {
        id: 6,
        colorValue: "#CB6CE6"
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
  