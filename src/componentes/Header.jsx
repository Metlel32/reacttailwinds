


function Header({search, filtroBusqueda, check, filtrarCheck,  roles }){

    
    let opciones = roles.map((elemento, indice )=> (<option key={indice} value={elemento}>{elemento}</option>))
      
    
    

    return(
        <div className="bg-red-400 w-full   top-0 flex justify-between px-2 p-4">
            <div className="w-3/5">
                <h1 className="text-center mt-5 font-semibold">Valorant</h1>

            </div>
            <div className=" w-2/5 flex">



                <div className="flex p-5">

                    <label htmlFor="seleccion" className="block text-lg font-bold h-10 p-1">Role selection</label>
      

                    <select id="seleccion" className="block font-bold border-4  bg-white h-10 border-indigo-300" onChange={filtrarCheck} value={check}>
                        <option value="">-- --</option>
                        {opciones}
                        
                    </select>
                </div>
                <input className="m-5 bg-white text-center rounded-xl" type="text" placeholder="search"  onChange={filtroBusqueda} value={search}/>




                
            </div>



            
            

        </div>
    )
}
export default Header