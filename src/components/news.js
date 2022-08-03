import React, {useState} from 'react';
function News({setFilterList}) {
    const[news, setNews] = useState([
        {
            id: 1,
            title: 'Noticia 1',
            description: "Desarrollan de un grano de sal,   una gran variedad de productos que se pueden usar en cualquier lugar. ",
            image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 2,
            title: 'Noticia 2',
            description: "Desarrollan de un grano de sal,   una gran variedad de productos que se pueden usar en cualquier lugar. ",
            image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 3,
            title: 'Noticia 3',
            description: "Desarrollan de un grano de sal,   una gran variedad de productos que se pueden usar en cualquier lugar. ",
            image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 4,
            title: 'Noticia 4',
            description: "Desarrollan de un grano de sal,   una gran variedad de productos que se pueden usar en cualquier lugar. ",
            image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
    ])



    return (

        <div className= "p-6" id="recomendados">
            <p className="text-3xl font-semibold text-primary">Noticias</p>
            <div class="w-auto h-72 items-center mt-6 overflow-x-auto  overscroll-x-contain scrollbar-hide flex space-x-4">
                {news.map(news => (
                    <section className="">
                        <img class="" src={news.image} alt=""/>
                        <div onClick={() => setFilterList(news.title)} className="" key={news.id}>
                            <p className="">{news.title}</p>
                            <p className="">  {news.description}</p>
                        </div>
                    </section>
                ))}
            </div>
        </div>
       
    )
}

export default News