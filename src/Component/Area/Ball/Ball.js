import React from 'react';
import s from './Ball.module.css'

const Ball = (props) => {
    // console.log(props)
    const sty = {
        left: props.x + 'px',
        top: props.y + 'px'
    }
    return (
        <div className={s.Ball} style={sty}></div>
    )
}


export default Ball;