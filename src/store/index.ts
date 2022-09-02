import { AnyAction, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import mainReducer from './reducers';

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
  middleware: [thunkMiddleware],
});

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = ThunkDispatch<AppStateType, any, AnyAction>;
