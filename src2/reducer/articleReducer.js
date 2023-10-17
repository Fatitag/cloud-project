const initialState = {
  tabs: [],
  color: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return {
        ...state,
        tabs: [action.payload, ...state.tabs],
        color: 'green',
      };

    case 'DELETE_ARTICLE':
      return {
        ...state,
        tabs: state.tabs.filter((tab) => tab.nom !== action.payload.nom),
        color: 'red',
      };

    default:
      return state;
  }
};
