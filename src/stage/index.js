import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import user from './user/reducer';
const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    user
  }
})

export const useAppDispatch = () => useDispatch()

export default store