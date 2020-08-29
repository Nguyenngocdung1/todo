import {combineReducers} from "redux";
import lists from "./list";


const reducer = combineReducers({
    list: lists,
});

export default reducer;


