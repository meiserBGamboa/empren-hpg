import { Carousel } from "antd"
import React from "react"
import ItemBanner from "./ItemBanner"

const Banner = ({data}) => {
    return (
        <Carousel autoplay>
            {data ?
                data.map((item, indx) => {
                    return <ItemBanner key={indx} banner={item.banner} title={item.title} description={item.description} />
                })
            :
                <></>
            }
        </Carousel>
    )
}

export default Banner