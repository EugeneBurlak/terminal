import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store, history} from './store/';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import Main from './containers/Main';
import View from './containers/View';
import {getOperators, setOperators} from './actions/terminal';
import './assets/sass/common.scss';
class App extends Component{

    componentWillMount(){
        getOperators().then((data) => {
            store.dispatch(setOperators(data));
        });
    }

    render(){
        return(        
            <div className="terminal">
                <ConnectedRouter history={history}>                
                    <Switch>   
                        <Route exact path="/" component={Main} />
                        <Route exact path="/operator/:name" component={View} />
                    </Switch>
                </ConnectedRouter>
            </div> 
        )       
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('app'));
registerServiceWorker();