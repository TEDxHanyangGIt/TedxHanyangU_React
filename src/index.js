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

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@assets/style/common.css';
import '@assets/style/desktop.scss';

import SwiperCore, { EffectCube, Pagination, Scrollbar } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-cube/effect-cube.scss';

SwiperCore.use([EffectCube, Pagination, Scrollbar]);


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
            <ToastContainer 
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
