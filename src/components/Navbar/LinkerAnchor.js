import React from "react"

const LinkerAnchor = ({id, subtitle}) => {
    return (
        <a href={`#${id}`} >{subtitle}</a>
    )
}

export default LinkerAnchor