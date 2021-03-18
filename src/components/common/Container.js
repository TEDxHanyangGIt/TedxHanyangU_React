import React, {Fragment, useEffect} from 'react';

import { useDispatch } from 'react-redux';
import { setCurPage } from '@store/action'

import Header from "@components/common/Header"
import Footer from "@components/common/Footer"
import LeftMenu from "@components/common/LeftMenu"

const Container = (props) => {
    const dispatch = useDispatch();
    const { children, cur_page } = props;

    useEffect(() => {
        dispatch(setCurPage(cur_page));
    }, [cur_page, dispatch])
  
    return (
        <Fragment>
            <Header />
            <LeftMenu />
            {children}
            <Footer />
        </Fragment>
    );
}

export default Container;
