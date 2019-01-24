import React, {Component} from 'react';
import '../assets/sass/main.scss'

let Layout = function(components) {
    return class extends Component{
        render() {
            let {main, sidebar} = components;
            return (
                <div className="app">
                    {main && main()}
                    {sidebar && sidebar()}
                </div>
            )
        }
    }
}

export default Layout;
