import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class View extends Component {
  render() {
        let {operators, name} = this.props,
            item = {},
            items = operators.filter((item, index) => {
                return item.systemName === name;
            });
        if(items.length){
            item = items[0];
        }
        return (
            <div>
                <NavLink
                    to={'/'}
                    >
                    To home
                </NavLink>
                {item.name}
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