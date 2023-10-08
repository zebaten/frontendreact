import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Combobox } from './Components/Combobox'
import { Grid } from './Components/Grid'

function App() {
  const [bodega, setBodega] = useState('')
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [dispositivo, setDispositivo] = useState('')

  return (
    <>
    <h1>{bodega}</h1>
      <Combobox titulo='Seleccione Bodega' url='bodegas/ObtenerBodega' setVariable = {setBodega}/>
      {/* {
        bodega&&
      <>

    <h1>{dispositivo}</h1>
      <Combobox titulo='Dispositivo' url={'dispositivos/DispositivosPorBodega?bodega_id='+bodega} setVariable = {setDispositivo} variable={bodega}/>
    </>
      } */}
      <h1>{marca}</h1>
      <Combobox titulo='Seleccione Marca' url='marcas/ObtenerMarcas' setVariable = {setMarca}/>
      {
        marca&&
      <>

    <h1>{modelo}</h1>
      <Combobox titulo='Seleccione Modelo' url={'modelos/ObtenerModelosPorMarca?marca_id='+marca} setVariable = {setModelo} variable={marca}/>
    </>
      }
    {
      (bodega||modelo)&&<Grid bodega_id={bodega} modelo_id={modelo}/>
    }
    </>
  )
}

export default App
