import * as types from './../constants/actionType';

const innitButtonType = 'all';

const buttonType = (state = innitButtonType, action ) => {
    switch (action.type) {
        case types.buttonChange:
            state = action.buttonType;
            return state;
        default: return state;
    }
}

export default buttonType;
