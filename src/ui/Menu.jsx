import React from 'react'
import '../App.css'

const Menu = ({ nombre, color }) => {
  const apellidos = 'alvarado anguloaaaa'
  let clase_color
  switch (color) {
    case 'rojo':
      clase_color = 'titulorojo'
      break
    case 'verde':
      clase_color = 'tituloverde'
      break
  }
  return (
    <div>
      <p className={clase_color}>
        {nombre} {apellidos}
      </p>
      <p>{nombre}</p>
    </div>
  )
}

export default Menu
