import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store, history} from './store/';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import { connect } from 'react-redux';
import Preloader from './components/Preloader';
import Main from './containers/Main';
import About from './containers/About';
import Layout from './layout/Main';

class App extends Component{
    render(){
        let {loading = false} = this.props;
        return(        
            <div className={loading ? 'app-wrapper' : 'app-wrapper app-wrapper__loaded'}>
                <Preloader loading={loading} /> 
                <ConnectedRouter history={history}>                
                    <Switch>   
                        <Route exact path="/" component={Layout({main:Main})} />
                        <Route exact path="/about" component={Layout({main:About})} />
                    </Switch>
                </ConnectedRouter>
            </div> 
        )       
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      loading: state.appReducer.loading
    }
};

App = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));
registerServiceWorker();