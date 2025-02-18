import { useState } from "react";


function MainC({personajes, search, check,  agregarEquipo, equipo}){


const [botonModal, setBotonModal] = useState(false)
    

function modalCambiar(){
    setBotonModal(!botonModal)
        

}

    
    let filtroPersonajes = personajes.filter((pers) => 
        pers.isPlayableCharacter && pers.displayName.toLowerCase().includes(search.toLowerCase()) && (check === "" || pers.role.displayName === check) 
      );
    
    let cards = []



    if(filtroPersonajes.length === 0){
        cards.push(
            <p className="text-center w-full text-xl font-bold  text-red-500" key="no-personaje" >No se encontraron personajes</p>
        )
    }else{
        for (let i = 0; i < filtroPersonajes.length; i++) {

        

            if (filtroPersonajes[i]) {
                cards = filtroPersonajes.map((personaje)=>{

                    return(
                    <Tarjeta key={personaje.uuid} personaje={personaje} agregarEquipo={agregarEquipo}></Tarjeta>
                    )
                }
                    
                )
            }
            
        }

    }
    
    
    

    return(
        

        <>

                

                
                {botonModal && <Modal equipo={equipo}></Modal>} 
                <div className="bg-violet-500  flex justify-center p-5 ">
                    <button className="  text-center text-white text-2xl font-bold hover:bg-blue-600 hover:text-black bg-green-700 p-2 border-2 border-yellow-500 rounded-xl"  onClick={modalCambiar}>Equipo</button>
                </div>



            <div className="flex flex-wrap justify-center bg-blue-200/90 ">
            {cards}
            </div>
            
            
        </>
        
    )
}



function Modal({equipo}){

    let personaje = []
    equipo.forEach((e, i)=> {
        personaje.push(
                <div key={i} className=" m-5 flex-none text-black-700 font-bold text-2xl bg-black text-center rounded-sm   ">
                    <h2 className="font-bold text-white">{e.displayName}</h2>

                    <img className=" m-5"  src={e.displayIcon} alt="" />
                    
                </div>


        )
        })

    return(
        <>

        <h2 className="text-center font-bold text-3xl bg-purple-500 p-3">My team</h2>
        <div  className="flex flex-wrap w-full justify-center  bg-purple-500">
            {personaje}   
        </div>
        </>
        
    )
    
}


function Tarjeta ({personaje, agregarEquipo}){
    return(
        <div className="flex relative flex-col justify-center  bg-violet-900 items-center rounded-sm p-5 m-5 w-60 group">


            <div className="opacity-0  group-hover:opacity-100  transition-opacity duration-300 w-full h-full">

                <div className="w-full   h-full flex items-center rounded-sm  flex-col bg-black absolute -top-1 -left-1">
                    <img className="object-cover size-90 p-5" src={personaje.fullPortrait} alt="" />

                    <button className="font-bold bg-green-500 flex-none text-white m-5 border-2 border-amber-200 p-1 hover:bg-blue-800 rounded-lg " onClick={() => agregarEquipo(personaje)}>Agregar a Equipo</button>
                </div>

            </div>


            
            <div className="flex flex-col">

                <div className="w-full flex-none text-black-700 font-bold text-2xl bg-red-400 text-center rounded-sm   ">
                    <h2 className="font-bold text-white">{personaje.displayName}</h2>

                </div>
                <div>
                    <img className="mt-3 "  src={personaje.displayIcon} alt="" />
                    
                </div>
                <div className="flex-col justify-center items-center">
                    <p className="text-yellow-700 text-center mt-2">Role: {personaje.role.displayName}</p>
                    <p className="text-xs mt-3 text-white size-37 ">{personaje.description}</p>
                   


                </div>

            </div>
            
            


        </div>       
        
    )
}


export default MainC 

