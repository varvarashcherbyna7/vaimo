import React from 'react';
import './HeaderActive.sass';
import NavigationActive from "../NavigationActive/NavigationActive";

class HeaderActive extends React.Component {

    render() {
        return (
            <div className='headerActive'>
                <div className='headerActive-bg__gradient'>
                    <NavigationActive/>
                </div>

                <div className='headerActive-bg'>
                    <div className='headerActive-bg-text'>
                        Hello! Welcome to Aurora
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderActive;
