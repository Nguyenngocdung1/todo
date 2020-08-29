import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as action from '../Redux/Actions/index'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import DungNNb from './../image/DungNNb.bmp'
import Box from '@material-ui/core/Box';

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textinput: '',
        }
    }

    handleChange = (even) => {
        const text = even.target.value;
        this.setState({
            textinput: text,
        })
    }

    newList = () => {
        debugger
        const {textinput} = this.state;
        const {newListAdd} = this.props;
        debugger
        if(textinput === ''){
            alert("Hãy nhập công việc");
            this.textinput.focus();
        }else {
            newListAdd(textinput);
            this.setState({
                textinput: '',
            });
            this.textinput.focus();
        }
    }


    render() {
        const {textinput} = this.state;
        const {deleteListComplete, ChangeAllTrue, ChangeAllFalse, list} = this.props;
        return(
            <div>
                <Avatar alt="" src={DungNNb} /><Box p={2} bgcolor="primary.main" color="primary.contrastText" style={{width: '100px'}}>DungNNb</Box>
                <Box p={2} bgcolor="primary.main" color="primary.contrastText" style={{margin: '20px', color: 'white', backgroundColor: '#9932CC', width: '500px', textAlign: 'center'}}>
                    TO DO LIST
                </Box>
                <TextField id="filled-basic" label="Nhập Title" variant="filled"  ref={(input) => this.textinput = input} value={textinput} type='text' onChange = {this.handleChange}/>
                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button style={{margin: '10px'}} variant="contained" color="primary" onClick={this.newList}>Click</Button>
                        <Button style={{margin: '10px'}} variant="contained" color="primary" onClick={deleteListComplete}>DELETE COMPLETED</Button>
                        <Button style={{margin: '10px'}} variant="contained" color="primary" onClick={() => ChangeAllTrue(list)}>COMPLETED ALL TRUE</Button>
                        <Button style={{margin: '10px'}} variant="contained" color="primary" onClick={ChangeAllFalse}>COMPLETED ALL FALSE</Button>
                </ButtonGroup>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        newListAdd: (item) => {
            dispatch(action.addListState(item))
        },
        deleteListComplete: () => {
            dispatch(action.deleteCompleteList())
        },
        ChangeAllTrue : (list) => {
            dispatch(action.CompleteAllTrue(list))
        },
        ChangeAllFalse: () => {
            dispatch(action.CompleteAllFalse())
        }
    }
}


export default connect(null, mapDispatchToProps) (header);
