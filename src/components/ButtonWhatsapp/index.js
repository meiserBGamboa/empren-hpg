import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import logo from '../../assets/images/logo-01.png'

const ButtonWhatsapp = () => {

  return (
      <FloatingWhatsApp 
        phoneNumber="+51936344066" 
        accountName='HPG Logist & Consulting'
        statusMessage='activo'
        avatar={logo}
        chatMessage='Hola, dime tu consulta y te atenderemos pronto'
        defaultMessage='hola tengo una consulta' />
  )
}

export default ButtonWhatsapp