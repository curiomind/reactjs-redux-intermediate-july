export interface IncrementDecrementState {
  count: number;
}

export interface IncrementDecrementActions {
  type: string;
}

export const incrementDecrementInitialState: IncrementDecrementState = { count: 0 };

export function incrementDecrementReducer(state: IncrementDecrementState, action: IncrementDecrementActions) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
