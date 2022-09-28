import BottomTab from "../navigation/BottomTab"
import React from 'react';
import { View } from 'react-native';

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