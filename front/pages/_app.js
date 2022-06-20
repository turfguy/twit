import 'antd/dist/antd.css';
import PropTypes from 'prop-types'
import React from 'react';
import Head from 'next/head'

const App = ({ Component })=>
{
    return(
        <>
        <Head>
            <meta charSet='utf-8'/>
            <title>
                TWIT
            </title>
        </Head>
        <Component/>
        </>
    )
}
App.propTypes = {
    Component : PropTypes.elementType.isRequired
}
export default App;