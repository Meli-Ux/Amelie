
import prod01 from '../../imagenes/hippieNegroCorto.png'
import prod02 from '../../imagenes/niuEstampadoNegro2.png'
import prod03 from '../../imagenes/vestidoCruzadoAzul.png'
import prod04 from '../../imagenes/vestidoLunarRojo1.png'
import detail01 from '../../imagenes/vestidoLunarRojo1.png'


 const productos = [
    {   id: '01',
        img: prod01,
        imgDetail: detail01,
        producto:'Vestido estampado ',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        descripcionDetail: 'Vestido corto de cuello redondo y manga larga acabada en elástico. Detalle de bordados y aplicación de hilo metalizado. Cierre en espalda con abertura y botón',
        btn:'Ver más',
        category:'camisas'
       
    },
    
    {   id: '02',
        img: prod02,
        imgDetail: detail01,
        producto:'Vestido estampado ',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        descripcionDetail: 'Vestido corto de cuello redondo y manga larga acabada en elástico. Detalle de bordados y aplicación de hilo metalizado. Cierre en espalda con abertura y botón',
        btn:'Ver más',
        category:'camisas'
       
    },
    
    
    {   id: '03',
        img: prod03,
        imgDetail: detail01,
        producto:'Vestido estampado ',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        descripcionDetail: 'Vestido corto de cuello redondo y manga larga acabada en elástico. Detalle de bordados y aplicación de hilo metalizado. Cierre en espalda con abertura y botón',
        btn:'Ver más',
        sizeS: 'S',
        sizeM: 'M',
        sizeL: 'L',
        sizeXL: 'XL',
        category:'vestido'
      
    },
    {   id: '04',
        img: prod04,
        producto:'Vestido',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        btn:'Ver más',
        category:'vestido'
    
    },
    {   id: '05',
        img: prod01,
        producto:'Vestido estampado ',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        btn:'Ver más',
        category:'pantalones'
        
    },
    {   id: '6',
        img: prod01,
        producto:'Vestido',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        btn:'Ver más',
        category:'pantalones'
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