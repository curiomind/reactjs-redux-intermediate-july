import React from 'react';
import { ChildranState, ChildrenActions, initialState } from '../Reducer';

interface ContentType {
  state: ChildranState;
  dispatch: React.Dispatch<ChildrenActions>;
}

const DefaultContext: ContentType = {
  state: initialState,
  dispatch: (action: ChildrenActions) => {},
};

export const SimpleContext = React.createContext<ContentType>(DefaultContext);
