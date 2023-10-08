import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Grid = ({bodega_id, modelo_id}) => {
    const[datos,setData] = useState([])
    useEffect(() => {

      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/dispositivos/DispositivosPorBodega?bodega_id='+bodega_id+'&modelo_id='+modelo_id,
        responseType: 'stream'
      })
        .then(function (response) {
          setData(JSON.parse(response.data))
          console.log(typeof datos)
          
        });

    }, [bodega_id, modelo_id])


  return (
    <table>
  <tr>
    <th>Id</th>
    <th>Nombre</th>
    <th>Marca</th>
    <th>Modelo</th>
    <th>Bodega</th>
  </tr>
  {
        
        datos.map(item=>(<tr>  
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.modelo.marca.name}</td>
            <td>{item.modelo.name}</td>
            <td>{item.bodega.name}</td>
          </tr>))

        }

</table>
  )
}
