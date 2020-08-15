import *as types from './../constants/actionType';

export const listAll = () => {
    return{
        type: types.listall,
    }
}

export const addlist = (textInput) => {
    return {
        type: types.addlist,
        textInput,
    }
}

export const deleteItem = (index) => {
    return {
        type: types.deleteItem,
        index,
    }
}

export const addChild = (textInput,index) => {
    return{
        type: types.addChild,
        textInput,
        index,
    }
}

export const deleteChild = (index,indexchild) => {
    return{
        type: types.deleteChild,
        index,
        indexchild,
    }
}

export const changeStatus = (index, status) => {
    return{
        type: types.changeStatus,
        index,
        status,
    }
}

export const deleteComplete = (index) => {
    return{
        type: types.deleteCompleted,
        index,
    }
}

export const changeStatusChilds = (status, index, indexchilds) => {
    return{
        type: types.changeStatusChilds,
        status,
        index,
        indexchilds,
    }
}

export const buttonChangeList = (buttonType) => {
    return{
        type: types.buttonChange,
        buttonType,
    }
}

export const sortNameList = () => {
    return{
        type: types.sortName,
    }
}
