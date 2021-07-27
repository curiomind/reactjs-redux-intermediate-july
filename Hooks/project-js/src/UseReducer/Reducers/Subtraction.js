export const subtractionInitialState = { numberOne: 0, numberTwo: 0, result: 0 };

export function subtractionReducer(state, action) {
  switch (action.type) {
    case 'saveNumberOne':
      return { ...state, numberOne: action.payload };
    case 'saveNumberTwo':
      return { ...state, numberTwo: action.payload };
    case 'saveResult':
      return { ...state, result: action.payload };
    case 'calculdate':
      return { ...state, result: state.numberOne - state.numberTwo };
    default:
      return state;
  }
}
