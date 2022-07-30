import { Carousel } from "antd"
import React from "react"
import ItemBanner from "./ItemBanner"

const Banner = ({data}) => {
    return (
        <Carousel autoplay>
            {data ?
                data.map((item) => {
                    return <ItemBanner banner={item.banner} title={item.title} description={item.description} />
                })
            :
                <></>
            }
        </Carousel>
    )
}

export default Banner