import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListReducer } from "./reducers/listingReducer";
import { modalReducer } from "./reducers/modalReducer";
import { userLoginReducer} from './reducers/userReducer';

const reducer = combineReducers({
  listingList: listingListReducer,
  modal: modalReducer,
  userLogin: userLoginReducer,
});

const userInfoFromLS = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const initialState = {
userLogin: {userInfo: userInfoFromLS},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// const reducer = combineReducers({
//   listingList: listingListReducer,
//   modal: modalReducer,
//   userLogin: userLoginReducer,
// });

// const userInfoFromLS = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo'))
// : null;

// const initialState = {
//   userLogin: {userInfo: userInfoFromLS}
// };

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
