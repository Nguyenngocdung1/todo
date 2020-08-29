import * as types from '../Constant/buttonType'

const lists = (state = [] , action) => {
    switch (action.type) {
        case types.getListAllSuccess:
            return action.data;
        case types.addListAllSuccess:
            return [...state, action.data];
        case types.listState:
            return state;
        case types.checkComplete:
            state[action.index].isComplete = action.completed;
            return [...state];
        case types.deleteList:
            state.splice(action.index, 1)
            return [...state];
        case types.deleteCompleted:
            // state = state.filter(state => state.completed === false)
            return [...state.filter(state => state.completed === false)]
        case types.changeCompleteTrue:
            state.map((item) => item.completed = true)
            return [...state];
        case types.changeCompleteFalse:
            state.map((item) => item.completed = false)
            return [...state];
        case types.searchID:
            state.map((item) => {
                if(item.id === action.input){
                    state = item;
                }
            })
            return [...state];
        default: return state;
    }
};

export default lists;
