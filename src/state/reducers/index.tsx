import { combineReducers } from "redux"
import reducer from './reducer';

const allReducers = combineReducers({
    reducer
})

export default allReducers;

// export const rootReducer = combineReducers({
//     reducers
//   });
  
// export type RootState = ReturnType<typeof rootReducer>
