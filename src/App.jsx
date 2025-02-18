import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header'
import MainC from './componentes/MainC'





function App() {
  const [arrayApi, setArray] = useState([])
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState("")
  const [roles, setRoles] = useState([])
  const [equipo, setEquipo] = useState([])
  const [cargando, setCargando] = useState(true)
   


  //funcion agregar la equipo

  function agregarEquipo(campeon){
    if (equipo.length < 5) {
      setEquipo([...equipo, campeon])
    }else{
      alert("Has alcanzado el limite para el equipo")
    }
    
  }



 //roles

 useEffect(() => {
    const rolesCa = []
    arrayApi.forEach(e => {
      if (e.isPlayableCharacter) {
          if (!rolesCa.includes(e.role.displayName )) {
                  rolesCa.push(e.role.displayName)
              }
          }
      })

      setRoles(rolesCa)
 },[arrayApi])

 
 


 

  //check
 function filtrarCheck(e){
    setCheck(e.target.value)
    
 }




  //llamar la api

  async function fetchApi(url){
    try{
      const rsp = await fetch(url)
      const data = await rsp.json()

      
      return data;
    }catch(error){
      console.error("error fetching data", error)
      
    }finally{
      setCargando(false)
    }
  }

  useEffect(()=>{
    const personajes = async()=>{
      const data = await fetchApi("https://valorant-api.com/v1/agents?isPlarayable=true")
      
      
      setArray(data.data)

    }
    personajes()
  },[]);

  


  function filtroBusqueda(e){
    setSearch(e.target.value)
  }



  return (





    <>
      {
        cargando ? (
          <div ><p className='bg-yellow-300  text-5xl'>Cargando...</p></div>
        ):(
        
          <>
        <Header search={search} filtroBusqueda={filtroBusqueda} check={check}  roles={roles} filtrarCheck={filtrarCheck} ></Header>
          <MainC personajes={arrayApi} search={search} check={check} equipo={equipo} agregarEquipo={agregarEquipo} ></MainC>
          </>
          )
      }

      
    </>
  


  )
}



export default App
