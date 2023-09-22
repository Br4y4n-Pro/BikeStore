import "../assets/styles/carousel.css"
import { Carousel } from 'react-carousel-minimal';
import { useGlobalStore } from "../store/productoFetchStore";



export const Carousele = () => {

    const {data}= useGlobalStore()
// console.log(data)
    const datos = data.slice(0,10).map((producto)=>{
         return {
            image: "http://localhost:3050"+producto.img_producto,
            caption: `<a href="/Detalles/${producto.id_producto}">${producto.nombre_producto}</a>`
         }
      })

    //   console.log(datos)


    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    

    return (
        <div style={{
        
        }} className="Carousel">
                    <Carousel
                        data={datos}
                        time={3000}
                        width="100%"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="20px"
                        slideBackgroundColor="white"
                        slideImageFit="contain"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                        padding:" 1em 1em"
                           

                        }}
                    />
                </div>
    );
}

