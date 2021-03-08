import React, { createContext, useContext, useReducer } from "react";

// create the context
export const DataLayerContext = createContext();
// rap the app the children is app.ja
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
