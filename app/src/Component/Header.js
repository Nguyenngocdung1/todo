import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as action from './../Redux/actions/index';

class Header extends Component{
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

    clearInput = () => {
        this.setState({
            textinput: '',
        })
    }

    handleList = () => {
        const {textinput} = this.state;
        const {onAddlish} = this.props;
        if(textinput === ''){
            alert("Hãy nhập công việc");
            this.textinput.focus();
        }else {
            onAddlish(textinput);
            this.setState({
                textinput: '',
            })
        }
    }

    render(){
        const {textinput} = this.state;
        return (
            <div  className='Header'>
                <input style={{margin: '20px'}}  ref={(input) => this.textinput = input} value={textinput} onChange={this.handleChange}/>
                <button style={{margin: '20px'}} onClick={this.handleList}>Thêm Công Việc Mới</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddlish: (textInput) => {
            dispatch(action.addlist(textInput));
        }
    }
}

export default connect(null, mapDispatchToProps, null, {forwardRef: true})(Header);
