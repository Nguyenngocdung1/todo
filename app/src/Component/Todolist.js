import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as action from './../Redux/actions/index';

class Todolist extends Component{
    constructor(props) {
        super(props);
        this.state = {
            buttontype: 'all',
        }
    }
    type = (type) => {
        this.setState({
            buttontype: type,
        })
    }
    changeStatus = (even, index) => {
        const _status = even.target.checked;
        const {changeStatus} = this.props;
        changeStatus(index, _status);
    }

    changeStatusChilds = (even, index, indexchilds) => {
        const _status = even.target.checked;
        const {changeStatusChilds} = this.props;
        changeStatusChilds(_status, index, indexchilds);

    }
    render(){
        const {list, deletelist, deleteTrue, deleteChild, addChilds, sortList} = this.props;
        const {buttontype} = this.state;
        return (
            <div className="todolistList">
                {list.map((item, index) => {
                    let condition = true;
                    if (buttontype === 'completed') {
                        condition = item.status;
                    }
                    if (buttontype === 'active') {
                        condition = !item.status;
                    }
                    if (condition)
                        return (
                            <div key={index}>
                                <input style={{ margin: '30px'}} type="checkbox" checked={item.status}
                                       onChange={(even) => this.changeStatus(even, index)}/>
                                <p style={{display: 'inline', color: 'white', backgroundColor: 'blue'}}> {item.name}</p>
                                <button style={{margin: '20px'}} onClick={() => deletelist(index)}>Xóa Công Việc</button>
                                <button style={{margin: '20px'}} onClick={() => addChilds(index)}>Thêm Công Việc Phụ</button>
                                {
                                    item.childs && item.childs.map((itemchilds, indexchilds) => {
                                        let conditionChilds = true;
                                        if (buttontype === 'completed') {
                                            conditionChilds = itemchilds.status;
                                        }
                                        if (buttontype === 'active') {
                                            conditionChilds = !itemchilds.status;
                                        }
                                        if (conditionChilds)
                                            return (
                                                <div className="Childs" key={indexchilds}
                                                     style={{marginLeft: '50px'}}>
                                                    <input type="checkbox" checked={itemchilds.status}
                                                           onChange={(even) => this.changeStatusChilds(even, index, indexchilds)}/>
                                                    <p style={{display: 'inline'}}>{itemchilds.name}</p>
                                                    <button onClick={() => deleteChild(index, indexchilds)}>Xóa công
                                                        việc phụ
                                                    </button>
                                                </div>
                                            )
                                        return null;
                                    })}
                            </div>
                        )
                    return null;
                })}
                <button style={{margin: '20px'}} onClick={deleteTrue}> Xóa công việc đã hoàn thành</button>
                <button style={{margin: '20px'}}  onClick={() => this.type('all')}>Tất cả công việc</button>
                <button style={{margin: '20px'}} onClick={() => this.type('completed')}>Đã hoàn thành</button>
                <button style={{margin: '20px'}} onClick={() => this.type('active')}>Chưa hoàn thành</button>
                <button onClick={sortList}>Sắp xếp theo tên</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list : state.tasks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletelist: (index) => {
            dispatch(action.deleteItem(index));
        },
        sortList: () => {
            dispatch(action.sortNameList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
