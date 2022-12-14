import React from "react"

import banner2 from '../../assets/images/banner-02.png'
import banner3 from '../../assets/images/banner-03.png'

import service1 from '../../assets/images/service-01.png'
import service5 from '../../assets/images/service-05.png'
import service6 from '../../assets/images/service-06.png'
import service7 from '../../assets/images/service-07.png'

import Banner from "../../components/Banner"
import SectionProject from "../../components/SectionProject"
import SectionServices from "../../components/SectionServices"
import BannerContact from "../../components/BannerContact"

const dataBanner = [
    {
        title: 'Cambio y/o mantenimiento de interruptores termomagnéticos (ITM) en redes Monofásicas y trifásicas',
        banner: banner2,
        bannerPhone: service6
    },
    {
        title: 'Instalación de dispositivos de control automático',
        banner: banner3,
        bannerPhone: service5
    },
]

const dataService = {
    info: {
        title: 'Nuestros Servicios',
        link: '/services',
        labelLink: 'Ver Todo'
    },
    items: [
        {
            image: service1,
            title: 'Pruebas de tensión o falla en el cortocircuito',
            description: 'We can help you bring new life to existing rooms and develop unused spaces.'
        },
        {
            image: service5,
            title: 'Instalación de dispositivos de control automático',
            description: 'We can help you bring new life to existing rooms and develop unused spaces.'
        },
        {
            image: service7,
            title: 'Corrido de línea de tierra en el circuito',
            description: 'We can help you bring new life to existing rooms and develop unused spaces.'
        },
    ]
}

const dataProject = {
    info: {
        title: 'Proyectos Recientes',
    },
    items: [
        {
            image: service1
        },
        {
            image: service5
        },
        {
            image: service7
        },
        {
            image: service6
        },
    ]
}

const Home = () => {
    return (
        < >
            <Banner data={dataBanner} />
            <SectionServices info={dataService.info} dataService={dataService.items} />
            <SectionProject info={dataProject.info} items={dataProject.items} />
            <BannerContact fill = {false}/>
        </>
    )
}

export default Home