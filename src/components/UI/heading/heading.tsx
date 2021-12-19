import React from 'react'
import classes from './heading.module.css'
type HeadingProps ={
    title:string,
    styles?:React.CSSProperties
}
const Heading:React.FC<HeadingProps> = ({title, styles}) => {
    return (
        <h2 className={classes.heading} style={styles}>
            {title}
        </h2>
    )
}

export default Heading
