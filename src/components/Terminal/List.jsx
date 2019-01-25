import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Title from './Operator/Title';

class List extends Component{
    render(){
        let {operators = []} = this.props;
        return(
            <div className="terminal-inner">
                <div className="terminal-header">
                    <div className="terminal-header-inner">
                        List of operators
                    </div>
                </div>
                <div className="terminal-body">
                    {operators.length ? 
                        operators.map((item, index) => {
                            return(
                                <div key={index} className="operator operator__list">
                                    <NavLink className="operator-link"
                                        to={'operator/'+item.systemName}
                                        >
                                        <Title item={item} />
                                    </NavLink>
                                </div>
                            )
                        }) :
                        <div>
                            Loading
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

export default connect(mapStateToProps)(List);