
import prod01 from '../../imagenes/hippieNegroCorto.png'
import prod02 from '../../imagenes/niuEstampadoNegro2.png'
import prod03 from '../../imagenes/vestidoCruzadoAzul.png'
import prod04 from '../../imagenes/vestidoLunarRojo1.png'
import detail01 from '../../imagenes/vestidoLunarRojo1.png'


 export const productos = [
    {   id: '01',
        img: prod01,
        imgDetail: detail01,
        producto:'Vestido estampado ',
        precio: 5400 ,
        descripcion:'Vestido corte cuello redondo estampado hindu',
        descripcionDetail: 'Vestido de cuello subido y manga larga. Detalle de acabados con puntilla. Cierre en espalda con abertura y botón',
        btn:'Ver más',
        category:'vestido',
        stockDestacados: 12
       
    },
    
    {   id: '02',
        img: prod02,
        imgDetail: detail01,
        producto:'Camisa Stim ',
        precio: 6900 ,
        descripcion:'Camisa de cuello subido y manga larga',
        descripcionDetail: 'Camisa cuello subido con detalles en colores, con bordado en sus mangas',
        btn:'Ver más',
        category:'camisas',
        stockDestacados: 0
       
    },
    
    
    {   id: '03',
        img: prod03,
        imgDetail: detail01,
        producto:'Vestido estampado ',
        precio: 7400 ,
        descripcion:'Vestido corte cuello redondo estampado hindu',
        descripcionDetail: 'Vestido corto de cuello redondo y manga larga acabada en elástico. Detalle de bordados y aplicación de hilo metalizado. Cierre en espalda con abertura y botón',
        btn:'Ver más',
        category:'vestido',
        stockDestacados: 9
      
    },
    {   id: '04',
        img: prod04,
        imgDetail: detail01,
        producto:'Camisas Canalé',
        precio: 3999 ,
        descripcion:'Camiseta canalé con abertura',
        descripcionDetail: 'Camiseta de cuello vuelto y manga larga. Bajo acabado con abertura en espalda',
        btn:'Ver más',
        category:'camisas',
        stockDestacados: 0
    
    },
    {   id: '05',
        img: prod01,
        imgDetail: detail01,
        producto:'Legging efecto piel ',
        precio: 5400 ,
        descripcion:'Legging bajo con abertura',
        descripcionDetail: 'Leggings de tiro alto con cremallera lateral. Bajo con abertura',
        btn:'Ver más',
        category:'pantalones',
        stockDestacados: 8

        
    },
    {   id: '6',
        img: prod01,
        imgDetail: detail01,
        producto:'Pantalon slim',
        precio: 9990,
        descripcion:'Pantalon efecto slim flare aberturas',
        descripcionDetail: 'Pantalón de tiro alto con cinco bolsillos. Bajo acabado en evasé con aberturas laterales. Cierre frontal con cremallera y botón',
        btn:'Ver más',
        category:'pantalones',
        stockDestacados: '10'
    },
    
    ];

    export const getProducts = new Promise((resolve, reject)=>{
      let condition = true
      if(condition){
        setTimeout(()=>{
          resolve(productos)
        },2000)
      }else{
        reject('Error de datos')
      }
    })