export interface ChildranState {
  additionNumberOne: number;
  additionNumberTwo: number;
  additionResult: number;
  subtractionNumberOne: number;
  subtractionNumberTwo: number;
  subtractionResult: number;
  count: number;
}

export interface ChildrenActions {
  type: string;
  payload?: number;
}

export const initialState: ChildranState = {
  additionNumberOne: 0,
  additionNumberTwo: 0,
  additionResult: 0,
  subtractionNumberOne: 0,
  subtractionNumberTwo: 0,
  subtractionResult: 0,
  count: 0,
};

export function childrenReducer(state: ChildranState, action: ChildrenActions) {
  switch (action.type) {
    case 'saveAdditionNumberOne':
      return { ...state, additionNumberOne: typeof action.payload === 'number' ? action.payload : state.additionNumberOne };
    case 'saveAdditionNumberTwo':
      return { ...state, additionNumberTwo: typeof action.payload === 'number' ? action.payload : state.additionNumberTwo };
    case 'saveAdditionResult':
      return { ...state, additionResult: typeof action.payload === 'number' ? action.payload : state.additionResult };
    case 'additionCalculdate':
      return { ...state, additionResult: state.additionNumberOne + state.additionNumberTwo };
    case 'subtractionNumberOne':
      return { ...state, subtractionNumberOne: typeof action.payload === 'number' ? action.payload : state.subtractionNumberOne };
    case 'subtractionNumberTwo':
      return { ...state, subtractionNumberTwo: typeof action.payload === 'number' ? action.payload : state.subtractionNumberTwo };
    case 'subtractionResult':
      return { ...state, subtractionResult: typeof action.payload === 'number' ? action.payload : state.subtractionResult };
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
