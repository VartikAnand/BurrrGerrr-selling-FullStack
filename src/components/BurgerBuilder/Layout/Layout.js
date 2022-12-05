import React from 'react'
import { Aux } from '../index'

const Layout = (props) => {
    return (
        <Aux>
            main meu add
            <main className='m-5'>
                {props.children}
            </main>
        </Aux>

    )
}

export default Layout;
