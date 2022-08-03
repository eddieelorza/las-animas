import React, {useState} from 'react';
function Advance({setFilterList}) {

    
    return (

        // Hacer una interfaz de progreso de cursos
        <div className= "p-6" id="recomendados">
            <h2 className="text-3xl font-semibold text-primary">Mi avance</h2>
            <section className="flex justify-center p-4 mt-6">
      
                <div className='grid grid-rows-2 grid-flow-col gap-4'>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full h-32 flex flex-col items-center justify-center col-span-2 ...">
                    <p className="font-bold text-3xl ">3/7 <span>Proceso</span></p>
                    <p className="">Has finalizado <b>3</b>  temas en la semana. <br/> ¡Sigue así!</p>
                </div>
                    <div className="bg-conic-to-bl from-white via-violet-700 to-fuchsia-600 p-4 rounded-lg shadow-md row-start-2 h-40 w-40 flex flex-col items-center justify-center  ">
                        <p className="font-bold text-6xl ">11</p>
                        <p className="text-center ">Cursos Completados</p>
                    </div> 
                    <div className="bg-conic-to-bl from-white via-violet-700 to-fuchsia-600 p-4 rounded-lg shadow-md row-start-2  h-40 w-40 flex flex-col items-center justify-center">
                        <p className="font-bold text-6xl ">3</p>
                        <p className="text-center ">Cursos en Proceso</p>
                    </div>
                </div>
            </section>
        </div>

       
    )
}

export default Advance;