import React, {Component} from 'react';
import Header from "./Component/Header";
import Todolist from "./Component/Todolist";
import { connect } from 'react-redux'
import * as action from './Redux/Actions/index'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        debugger
        this.props.allListView();
    }

    render() {
        const {list} = this.props;
        debugger
        return(
            <div>
                <Header list = {list}/>
                <Todolist list = {list}/>
            </div>
        )
    }
}

const mapStateToProps =  (state) => {
    debugger;
    return {
        list: state.list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        allListView: (list) => {
            dispatch(action.listAll(list))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
