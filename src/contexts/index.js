import { createContext } from 'react';
import { RootStore, createStore } from '../stores/rootStore';

export const rootStore = createStore();

export const StoresContext = createContext(new RootStore());

StoresContext.displayName = 'StoresContext';

export const StoresContextProvider = StoresContext.Provider;
