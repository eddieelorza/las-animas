import React, {useState} from 'react';
import Tabbar from '../components/tabbar.js';

function Card({setFilterList}) {
    const[courses, setCourses] = useState([
        {
            id: 1,
            title: 'Fundamentos de Programación',
            author: 'Juan',
            image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 2,
            title: 'Introducción a JavaScript',
            author: 'Pedro',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 3,
            title: 'Curso Básico de React',
            author: 'Juan',
            image: 'https://picsum.photos/200/300'
        }
    ])

    return (

        <div class= "p-6" id="recomendados">
        
        <p class="text-3xl font-semibold text-primary"> Cursos</p>
        {/* ir a todos */}
        <Tabbar setFilterList={setFilterList}/>
        <div class="w-auto h-72 items-center mt-6 overflow-x-auto  overscroll-x-contain scrollbar-hide flex space-x-4">
            

                    {courses.map(course => (
                          <section className="Card ">
                                <img class="Card--cover " src={course.image} alt=""/>
                        <div onClick={() => setFilterList(course.title)} className="Card--info " key={course.id}>
                            <p className="Card--info__title ">{course.title}</p>
                            <p className="Card--info__subtitle">  {course.author}</p>
                        </div>
          </section>
                    ))}           
      
        </div>
    </div>
       
    )
}

export default Card