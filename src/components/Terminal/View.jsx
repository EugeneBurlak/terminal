import React, { Component } from 'react'
import { connect } from 'react-redux';
import Form from './Form';
import {history} from '../../store/';
import Title from './Operator/Title';

class View extends Component {
  render() {
        let {operators, operator} = this.props,
            item = false,
            items = operators.filter((item, index) => {
                return item.systemName === operator;
            });
        if(items.length){
            //get last founded operator in filtered array
            item = items[items.length-1];
        }
        return (
            <div className="terminal-inner">
                <div className="terminal-header terminal-header__with-back">
                    <div className="terminal-header-inner">
                        <div title="To home" className="terminal-header-back" onClick={() => {
                            clearTimeout(this.timeout);
                            history.push('/');
                        }}></div>
                        {item ? <Title item={item} /> : 'Empty'}             
                    </div>
                </div>
                <div className="terminal-body">
                    {item ? 
                        <div className="operator operator__view">
                            <Form onSuccess={() => {                                
                                this.timeout = setTimeout(() => {
                                    history.push('/');
                                }, 3000);
                            }} operator={item.systemName} />
                        </div>
                        :
                        <div className="operator operator__empty">
                            Operator is not found
                        </div>
                    }
                </div>                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        operators: state.terminalReducer.operators
    }
};

export default connect(mapStateToProps)(View);