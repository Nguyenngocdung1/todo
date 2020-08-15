import React, {Component} from 'react';
import Header from "./Component/Header";
import Todolist from "./Component/Todolist";
import { connect } from 'react-redux';
import * as action from './Redux/actions/index';
import './App.css';

class App extends Component {
    handleStatus = (index, status) => {
        const {changeStatus} = this.props;
        changeStatus(index, status);
    }

    handleStatusChilds = (status,index,indexchilds) => {
        const {changeStatusChilds} = this.props;
        changeStatusChilds(status, index, indexchilds);
    }

    deleteStatusTrue = () => {
        const {deleteComplete} = this.props;
        deleteComplete();
    }


    deleteChild = (index, indexchild) => {
        const {onDelete} = this.props;
        onDelete(index, indexchild);
    }

    addListChildItem = (index) => {
        const {addNewChild} = this.props;
        const {textinput} = this.refs.new.state;
        if (textinput === '') {
            alert('Hãy nhập công việc phụ');
            this.refs.new.textinput.focus();
        } else {
            addNewChild(textinput, index);
            this.refs.new.clearInput();
        }
    }

    render() {
        const {buttonChangeList, buttonChange} = this.props;
        return (
            <div className="todolist" style={{backgroundImage: 'url(./133544_one_piece_stampede_images_3.jpg)'}}>
                <h2>TODOLIST</h2>
                <button style={{margin: '20px'}} onClick={() => buttonChangeList('Header')}>ẤN ĐỂ NHẬP DANH SÁCH</button>
                <button style={{margin: '20px'}} onClick={() => buttonChangeList('List')}>ẤN ĐỂ XEM DANH SÁCH</button>
                <button style={{margin: '20px'}} onClick={() => buttonChangeList('all')}>ẤN ĐỂ HIỂN THỊ TOÀN BỘ</button>
                {
                    (buttonChange === 'Header' || buttonChange === 'all') &&
                    <Header
                        buttonChange={buttonChange}
                        add={this.addList}
                        ref="new"
                    />
                }
                {
                    (buttonChange === 'List' || buttonChange === 'all') &&
                    <Todolist
                        buttonChange={buttonChange}
                        changeStatus={this.handleStatus}
                        changeStatusChilds={this.handleStatusChilds}
                        deleteChild={this.deleteChild}
                        deleteTrue={this.deleteStatusTrue}
                        type={this.changeButtonType}
                        addChilds={this.addListChildItem}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buttonChange : state.buttonType,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewChild: (textInput, index) => {
            dispatch(action.addChild(textInput, index));
        },
        onDelete: (index, indexchild) => {
            dispatch(action.deleteChild(index, indexchild));
        },
        changeStatus: (index, status) => {
            dispatch(action.changeStatus(index, status));
        },
        deleteComplete: () => {
            dispatch(action.deleteComplete());
        },
        changeStatusChilds: (status, index, indexchild) => {
            dispatch(action.changeStatusChilds(status, index, indexchild));
        },
        buttonChangeList: (type) => {
            dispatch(action.buttonChangeList(type));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(App);
