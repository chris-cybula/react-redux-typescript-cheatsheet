import { combineReducers } from "redux"
import reducers from './reducer';

const allReducers = combineReducers({
    reducers
})

export default allReducers;

// export const rootReducer = combineReducers({
//     reducers
//   });
  
// export type RootState = ReturnType<typeof rootReducer>
