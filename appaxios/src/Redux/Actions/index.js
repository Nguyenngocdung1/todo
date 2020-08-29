import * as types from '../Constant/buttonType'

export const listAll = (list) => {
    return{
        type: types.listall,
        list,
    }
}

export const stateList = () => {
    return{
        type: types.listState,
    }
}

export const addListState = (item) => {
    return {
        type: types.addList,
        item,
    }
}

export const checkCompleteList = (completed, id, item, index) => {
    return{
        type: types.checkComplete,
        completed,
        id,
        item,
        index
    }
}

export const deleteListState = (id, index) => {
    return{
        type: types.deleteList,
        index,
        id
    }
}

export const deleteCompleteList = () => {
    return{
        type: types.deleteCompleted,
    }
}

export const CompleteAllTrue = (list) => {
    return{
        type: types.changeCompleteTrue,
        list
    }
}

export const CompleteAllFalse = () => {
    return{
        type: types.changeCompleteFalse,
    }
}

export const searchListID = (input) => {
    return{
        type: types.searchID,
        input
    }
}
