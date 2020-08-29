import { fork, take, call, put, all} from 'redux-saga/effects';
import * as types from '../Redux/Constant/buttonType'
import axios from 'axios';

function* watcherViewListSaga() {
    while(true) {
        yield take(types.listall);
        yield fork(getListAll)
    }
}

function* watcherAddListSaga() {
    while(true) {
        const action = yield take(types.addList);
        yield fork(addListAll, action)
    }
}

function* watcherDeleteListSaga() {
    while(true) {
        const action = yield take(types.deleteList);
        debugger;
        yield fork(deleteListAll, action)
    }
}

function* watcherUpdateListSaga(){
    while(true) {
        const action = yield take(types.checkComplete);
        yield fork(updateListAll, action)
    }
}

function* watcherUpdateAllCheckListSaga(){
    while(true) {
        const action = yield take(types.changeCompleteTrue);
        yield fork(updateAllCheckList, action)
    }
}

function* getListAll() {
    debugger
    try {
        const response = yield call(() => axios.get('http://localhost:5005/user'));
        const data = response.data;
        debugger
        yield put({type: types.getListAllSuccess, data});
        debugger    
    } catch (error){
        yield put({type: types.getListAllFailed, error});
    }
}

function* addListAll(action) {
    debugger
    const newItem = {
        isComplete: true,
        children: [],
        title: action.item
    }
    debugger
    try{
        //thực hiện call api lấy dữ liệu
        const response = yield call(() => axios.post('http://localhost:5005/user',  newItem))
        const  data = response.data;
        debugger;
         // thực hiện bắn action, add dữ liệu vào reducer
        yield put({type: types.addListAllSuccess, data});
        debugger
    } catch (error){
        console.log(error)
    }
}

function* deleteListAll(action) {
    const id = action.id;
    debugger
    try {
        yield call(() => axios.delete(`http://localhost:5005/user?id=${id}`))
        debugger
    } catch (error) {
        console.log(error);
    }
}

function* updateListAll(action) {
    const id = action.id
    debugger
    action.item.isComplete = action.completed;
    const item = action.item;
    debugger
    try{
        yield call(() => axios.put(`http://localhost:5005/user?id=${id}`, item))
        debugger
    } catch (error) {
        console.log(error);
    }
}

function* updateAllCheckList(action) {

}

export default function* rootSaga(){
    yield all([
        watcherViewListSaga(),
        watcherAddListSaga(),
        watcherDeleteListSaga(),
        watcherUpdateListSaga(),
        watcherUpdateAllCheckListSaga(),
    ])
}
