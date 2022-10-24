import BottomTab from "../navigation/BottomTab"
import React from 'react';

const Layout = (props) => {

    const { children } = props

    return (
        <>
            {children}

            <BottomTab />
        </>
    )
}

export default Layout