import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as action from '../Redux/Actions/index'
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


class todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
        }
    }
    handleStatus = (even, id, item, index)=> {
        debugger
        const _completed = even.target.checked;
        debugger
        const {checkComplete} = this.props;
        debugger
        checkComplete(_completed, id, item, index);
    }

    deleteItem = (id, index) => {
        debugger;
        const {deleteState} = this.props;
        deleteState(id, index);
    }

    handleText = (even) => {
        const input = even.target.value;
        this.setState({
            textInput: input,
        })
    }


    render() {
        const {list} = this.props;
        debugger
        return(
            <div>
                {list.map((item, index) => {
                    return(
                        <div key={index}>
                            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                onChange={(even) => this.handleStatus(even, item._id, item, index)}
                                   type="checkbox"
                                   checked={item.isComplete}
                            />
                            ID: {item._id}<br/>
                            TITLE:{item.title} <br/>
                            <Button style={{margin: '10px'}} variant="contained" color="primary" onClick={() => this.deleteItem(item._id, index)}>DELETE</Button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listStateView: () => {
            dispatch(action.stateList)
        },
        checkComplete: (completed, id, item, index) => {
            dispatch(action.checkCompleteList(completed, id, item, index))
        },
        deleteState: (id, index) => {
            dispatch(action.deleteListState(id, index))
        },
        searchIDList: (input) => {
            dispatch(action.searchListID(input))
        }
    }
}

export default connect(null, mapDispatchToProps) (todolist);
