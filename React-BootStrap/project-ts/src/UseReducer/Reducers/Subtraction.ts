export interface SubtractionState {
  numberOne: number;
  numberTwo: number;
  result: number;
}

export interface SubtractionActions {
  type: string;
  payload?: number;
}

export const subtractionInitialState: SubtractionState = { numberOne: 0, numberTwo: 0, result: 0 };

export function subtractionReducer(state: SubtractionState, action: SubtractionActions) {
  switch (action.type) {
    case 'saveNumberOne':
      return { ...state, numberOne: typeof action.payload === 'number' ? action.payload : state.numberOne };
    case 'saveNumberTwo':
      return { ...state, numberTwo: typeof action.payload === 'number' ? action.payload : state.numberTwo };
    case 'saveResult':
      return { ...state, result: typeof action.payload === 'number' ? action.payload : state.result };
    case 'calculdate':
      return { ...state, result: state.numberOne - state.numberTwo };
    default:
      return state;
  }
}
