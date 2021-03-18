import React, {Fragment, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import { createBrowserHistory } from 'history';
import { Provider } from "react-redux";

import * as serviceWorker from './serviceWorker';

import routes from '@/router';
import store from '@/store';

import Header from "@components/common/Header"
import LeftMenu from "@components/common/LeftMenu"
import Footer from "@components/common/Footer"


import '@assets/style/common.css';
import '@assets/style/desktop.scss';

const App = () => {
    const history = createBrowserHistory();
    const [useDrawer, setUseDrawer] = useState(false)

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth > 1024){
                setUseDrawer(false)
            }else{
                setUseDrawer(true)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
    })

    return (
        <Fragment>
            <BrowserRouter history={history}>
                <Header useDrawer={useDrawer}/>
                {useDrawer? <LeftMenu />: <Fragment />}
                <div className="main">
                {routes.map(({name, path, Component}) => (
                    <Route exact key={name} path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                            
                            <Component />
                        </CSSTransition>
                    )}
                    </Route>
                ))}
                </div>
                <Footer/>
            </BrowserRouter>
        </Fragment>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
