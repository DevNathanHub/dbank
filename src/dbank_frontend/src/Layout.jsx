    import React from 'react'
    import LeftBar from './sections/LeftBar'

    function Layout({ children }) {
    return (
        <div style={{display: 'flex', width: '100%'}}>
            <div><LeftBar/></div>
            <div className='container'>{ children }</div>
        </div>
    )
    }

    export default Layout