import React, {useEffect, Fragment} from 'react';

import { useDispatch } from 'react-redux';
import { setCurPage } from '@store/action'

const Container = (props) => {
    const dispatch = useDispatch();
    const { children, cur_page } = props;

    useEffect(() => {
        dispatch(setCurPage(cur_page));
    }, [cur_page, dispatch])
  
    return (
        <Fragment>
            {children}
        </Fragment>
    );
}

export default Container;
