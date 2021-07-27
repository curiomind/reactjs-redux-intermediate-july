export interface ChildranState {
  additionNumberOne: number;
  additionNumberTwo: number;
  additionResult: number;
  subtractionNumberOne: number;
  subtractionNumberTwo: number;
  subtractionResult: number;
  count: number;
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
