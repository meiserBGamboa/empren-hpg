import React from "react"

import banner2 from '../../assets/images/banner-02.png'
import banner3 from '../../assets/images/banner-03.png'

import service1 from '../../assets/images/image_01.jpg'
import project1 from '../../assets/images/image_05.jpg'

import Banner from "../../components/Banner"
import SectionProject from "../../components/SectionProject"
import SectionServices from "../../components/SectionServices"

const dataBanner = [
    {
        title: 'PROFESSIONAL TILING AND PAINTING SERVICES',
        description: 'We have the experience, personel and resources to make the project run smoothly. We can ensure a job is done on time.',
        banner: banner2
    },
    {
        title: 'PROFESSIONAL TILING AND PAINTING SERVICES',
        description: 'We have the experience, personel and resources to make the project run smoothly. We can ensure a job is done on time.',
        banner: banner3
    },
]

const dataService = {
    info: {
        title: 'Nuestros Servicios',
        description: 'With over 15 years experience and real focus on customer satisfaction, you can rely on us for your next renovation, driveway sett or home repair. We provide a professional service for private and commercial customers.'
    },
    items: [
        {
            image: service1,
            title: 'Interior Renovation',
            description: 'We can help you bring new life to existing rooms and develop unused spaces.'
        },
        {
            image: service1,
            title: 'Interior Renovation',
            description: 'We can help you bring new life to existing rooms and develop unused spaces.'
        },
        {
            image: service1,
            title: 'Interior Renovation',
            description: 'We can help you bring new life to existing rooms and develop unused spaces.'
        },
    ]
}

const dataProject = {
    info: {
        title: 'Proyectos Recientes',
        description: 'With over 15 years experience and real focus on customer satisfaction, you can rely on us for your next renovation, driveway sett or home repair. We provide a professional service for private and commercial customers.'
    },
    items: [
        {
            image: project1
        },
        {
            image: project1
        },
        {
            image: project1
        },
        {
            image: project1
        },
    ]
}

const Home = () => {
    return (
        < >
            <Banner data={dataBanner} />
            <SectionServices info={dataService.info} dataService={dataService.items} />
            <SectionProject info={dataProject.info} items={dataProject.items} />
        </>
    )
}

export default Home