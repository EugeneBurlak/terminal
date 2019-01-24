import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import './sass/styles.scss';

class List extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {operators = []} = this.props;
        return(
            <div className="app-list">
                {operators.map((item, index) => {
                    return(
                        <div key={index} className="app-list-item">
                            <NavLink
                                to={'operator/'+item.systemName}
                                >
                                {item.name}
                            </NavLink>
                        </div>
                    )
                })}           
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