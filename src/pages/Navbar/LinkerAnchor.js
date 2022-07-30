import React from "react"
import { Anchor } from "antd"

const { Link } = Anchor

const LinkerAnchor = ({id, subtitle}) => {
    return (
        <a href={`#${id}`} >{subtitle}</a>
    )
}

export default LinkerAnchor