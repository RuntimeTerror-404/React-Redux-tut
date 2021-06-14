// create reducers to handle and implement those actions

const initialState = 5;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 2;
    case "DECREMENT":
      return state - 2;

    default:
      return state;
  }
};

export default changeTheNumber;
