import {combineReducers} from "redux";
import tasks from './tasks';
import buttonType from './buttontype';

const reducer = combineReducers({
    tasks,
    buttonType,
});

export default reducer;
