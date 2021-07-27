export const initialState = {
  additionNumberOne: 0,
  additionNumberTwo: 0,
  additionResult: 0,
  subtractionNumberOne: 0,
  subtractionNumberTwo: 0,
  subtractionResult: 0,
  count: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'saveAdditionNumberOne':
      return { ...state, additionNumberOne: action.payload };
    case 'saveAdditionNumberTwo':
      return { ...state, additionNumberTwo: action.payload };
    case 'saveAdditionResult':
      return { ...state, additionResult: action.payload };
    case 'additionCalculdate':
      return { ...state, additionResult: state.additionNumberOne + state.additionNumberTwo };
    case 'subtractionNumberOne':
      return { ...state, subtractionNumberOne: action.payload };
    case 'subtractionNumberTwo':
      return { ...state, subtractionNumberTwo: action.payload };
    case 'subtractionResult':
      return { ...state, subtractionResult: action.payload };
    case 'subtractionCalculdate':
      return { ...state, subtractionResult: state.subtractionNumberOne - state.subtractionNumberTwo };
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
