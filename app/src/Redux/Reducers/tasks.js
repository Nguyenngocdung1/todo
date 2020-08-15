import *as types from './../constants/actionType';

//Khởi tạo một danh sách
const initialState = [
        {
            name:'Quét nhà',
            status: false,
            childs: [
            ]
        },
        {
            name:'Rủa bát',
            status: false,
            childs: [],
        },
        {
            name:'Nấu cơm',
            status: false,
            childs: [],
        },
        {
            name:'Giặt đồ',
            status: false,
            childs: [],
        }
];

const tasks = (state = initialState , action) => {
    switch (action.type) {
        case types.listall:
            return state;
        case types.addlist:
            const newState = [...state];
            const NewList = {
                name: action.textInput,
                status: false,
                childs: [],
            }
            newState.push(NewList);
            return newState;
        case types.deleteItem:
            state.splice(action.index, 1);
            return [...state];
        case types.addChild:
            const newChild = {
                name: action.textInput,
                status: false,
            }
            state[action.index].childs.push(newChild);
            return [...state];
        case types.deleteChild:
            state[action.index].childs.splice(action.indexchild, 1);
            return [...state];
        case types.changeStatus:
            state[action.index].status = action.status;
            state[action.index].childs.map(item => item.status = action.status);
            return [...state];
        case types.deleteCompleted:
            state = state.filter(state => state.status === false)
            for(let i = 0; i< state.length; i++ ){
                state[i].childs = state[i].childs.filter(childs => childs.status === false);
            }
            return [...state];
        case types.changeStatusChilds:
            const {status, index, indexchilds} = action;
            state[index].childs[indexchilds].status = status;
            let statusState = true;
            for(let i = 0; i < state[index].childs.length; i++) {
                if(state[index].childs[i].status === false){
                    statusState = false;
                    break;
                }
            }
            state[index].status = statusState
            return [...state];
        case types.sortName:
            const compare = (a,b) => {
                const namea = a.name.toUpperCase();
                const nameb = b.name.toUpperCase();
                let comparison = 0;
                if(namea>nameb){
                    comparison = 1;
                }else if(namea<nameb){
                    comparison = -1;
                }
                return comparison;
            }
            state.sort(compare);
            return [...state];
        default: return state;
    }
};

export default tasks;
