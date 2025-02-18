import { useState } from "react";


function MainC({ personajes, search, check, agregarEquipo, equipo }) {


    const [botonModal, setBotonModal] = useState(false)


    function modalCambiar() {
        setBotonModal(!botonModal)
    }


    let filtroPersonajes = personajes.filter((pers) =>
        pers.isPlayableCharacter && pers.displayName.toLowerCase().includes(search.toLowerCase()) && (check === "" || pers.role.displayName === check)
    );

    let cards = []



    if (filtroPersonajes.length === 0) {
        cards.push(
            <p className="text-center w-full text-xl font-bold  text-red-500" key="no-personaje" >No se encontraron personajes</p>
        )
    } else {
        for (let i = 0; i < filtroPersonajes.length; i++) {



            if (filtroPersonajes[i]) {
                cards = filtroPersonajes.map((personaje) => {

                    return (
                        <Tarjeta key={personaje.uuid} personaje={personaje} agregarEquipo={agregarEquipo}></Tarjeta>
                    )
                }

                )
            }

        }

    }




    return (


        <>




            {botonModal && <Modal equipo={equipo} modalCambiar={modalCambiar}></Modal>}

            <button className=" fixed bottom-5 right-3 z-10 text-center text-white text-2xl font-bold hover:bg-blue-600 hover:text-black bg-green-700 p-2 border-2 border-yellow-500 rounded-xl" onClick={modalCambiar}>Equipo</button>



            <div className="flex flex-wrap justify-center bg-blue-200/90 ">
                {cards}
            </div>


        </>

    )
}



function Modal({ equipo, modalCambiar }) {

    let personaje = []
    equipo.forEach((e, i) => {
        personaje.push(

            <div key={i} className=" m-1 flex flex-col justify-center items-center text-black-700  w-50 bg-pink-500 p-1 rounded-xl font-bold    text-center  ">
                <h2 className="font-bold bg-black rounded-xl w-45  m-2 p-1 text-white">{e.displayName}</h2>

                <img className="  bg-black p-1 w-45 rounded-2xl" src={e.displayIcon} alt="" />
            </div>
        )
    })

    return (
        <>

            <div className="fixed z-10 flex flex-col items-center justify-center inset-0 bg-black/90">

                <h2 className="text-center font-bold  text-2xl text-white mb-3 p-2">My team</h2>
                <div className="flex flex-wrap w-full  justify-center  p-2 bg-purple-500">
                    {personaje}
                </div>
                <button className="bg-amber-300 hover:bg-amber-600 w-50 font-bold p-3 rounded-2xl mt-5 button border-2 border-blue-400" onClick={modalCambiar} >Cerrar</button>
            </div>
        </>

    )

}


function Tarjeta({ personaje, agregarEquipo }) {
    return (

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
                    <img className="mt-3 " src={personaje.displayIcon} alt="" />

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

