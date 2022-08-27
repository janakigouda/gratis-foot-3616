import { legacy_createStore as createStore } from "redux";
import { addItemreducer } from "./reducers/additem";

// import rootReducers from "./reducers";

const store=createStore(addItemreducer);


export default store;