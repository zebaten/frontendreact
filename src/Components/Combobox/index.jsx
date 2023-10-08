import React,{useState, useEffect} from 'react'
import axios from 'axios'

export const Combobox = ({titulo,url,setVariable,variable = ''}) => {

    const[datos,setData] = useState([])
    useEffect(() => {

      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/'+url,
        responseType: 'stream'
      })
        .then(function (response) {
          setData(JSON.parse(response.data))
          console.log(typeof datos)
          
        });

    }, variable)
    console.log(variable)


  return (
    <select onChange={(event)=>setVariable(event.target.value)}>
      <option defaultValue hidden>{titulo}</option>
      {
        
        datos.map(item=>(<option value={item.id} key={item.id}>{item.name}</option>))

        }</select>
  )
}
