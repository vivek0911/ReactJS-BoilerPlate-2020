const initialState = { name: 'Vivek patel', id: 5 };
export default (state = initialState, action) => {
  switch (action.type) {
    case 'DEMO_ACTION':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
