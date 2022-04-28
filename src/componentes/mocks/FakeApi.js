

 export const productos = [
    {   id: '01',
        img: 'https://i.postimg.cc/28GFtFrX/hippie-Negro-Corto.png',
        imgDetail: 'https://i.postimg.cc/28GFtFrX/hippie-Negro-Corto.png',
        producto:'Vestido estampado ',
        precio: '6990 ' ,
        descripcion:'Vestido corte cuello redondo estampado hindu',
        descripcionDetail: 'Vestido de cuello subido y manga larga. Detalle de acabados con puntilla. Cierre en espalda con abertura y botón',
        btn:'Ver más',
        category:'vestido',
        stockDestacados: 12
       
    },
    
    {   id: '02',
        img: 'https://i.postimg.cc/jjkM62tt/9878072250-2-4-1.jpg',
        imgDetail: 'https://i.postimg.cc/jjkM62tt/9878072250-2-4-1.jpg',
        producto:'Camisa Stim ',
        precio: '11900 ' ,
        descripcion:'Camisa de cuello subido y manga larga',
        descripcionDetail: 'Camisa cuello subido con detalles en colores, con bordado en sus mangas',
        btn:'Ver más',
        category:'camisas',
        stockDestacados: 0
       
    },
    
    
    {   id: '03',
         img: 'https://i.postimg.cc/13BRJh8v/7521236084-2-1-1.jpg',
        imgDetail: 'https://i.postimg.cc/13BRJh8v/7521236084-2-1-1.jpg',
        producto:'Vestido en V ',
        precio: '7400 ' ,
        descripcion:'Vestido corte cuello redondo estampado hindu',
        descripcionDetail: 'Vestido corto de cuello redondo y manga larga acabada en elástico. Detalle de bordados y aplicación de hilo metalizado. Cierre en espalda con abertura y botón',
        btn:'Ver más',
        category:'vestido',
        stockDestacados: 10
      
    },
    {   id: '04',
        img: 'https://i.postimg.cc/ZYWzrL51/4387299776-2-1-1.jpg',
        imgDetail: 'https://i.postimg.cc/ZYWzrL51/4387299776-2-1-1.jpg',
        producto:'Camisa efecto piel',
        precio: '12990 ' ,
        descripcion:'Camisa de cuello solapa con manga larga',
        descripcionDetail: 'Camisa de cuello solapa con manga larga. Bajo asimétrico. Cierre frontal con botones forrados a tono',
        btn:'Ver más',
        category:'camisas',
        stockDestacados: 12
    
    },
    {  
        id: '05',
        img: 'https://i.postimg.cc/zXT9FCy7/leggins-efectopiel.jpg',
        imgDetail: 'https://i.postimg.cc/zXT9FCy7/leggins-efectopiel.jpg',
        producto:'Legging efecto piel ',
        precio: '10400 ',
        descripcion:'Legging bajo con abertura con cremallera lateral',
        descripcionDetail: 'Leggings de tiro alto con cremallera lateral. Bajo con abertura',
        btn:'Ver más',
        category:'pantalones',
        stockDestacados: 0

        
    },
    {   id: '6',
        img: 'https://i.postimg.cc/bJTZnDQw/3067229800-1-1-1.jpg',
        imgDetail:'https://i.postimg.cc/bJTZnDQw/3067229800-1-1-1.jpg',
        producto:'PANTALON FLARE ',
        precio: '9990 ',
        descripcion:'Pantalon efecto satinado con detalle de cordón',
        descripcionDetail: 'Pantalón de tiro alto con detalle de cordón y pieza metálica. Bajo acabado flare con abertura lateral. Cierre lateral con cremallera oculta en costura',
        btn:'Ver más',
        category:'pantalones',
        stockDestacados: '10'
    },
    {   
    id: '7',
    img: 'https://i.postimg.cc/9fvsq7s5/pantalon-Efecto-Slim-Flare.jpg',
    imgDetail:'https://i.postimg.cc/9fvsq7s5/pantalon-Efecto-Slim-Flare.jpg',
    producto:'PANTALÓN  SLIM ',
    precio: '13990 ',
    descripcion:'Pantalón de tiro alto con cinco bolsillos',
    descripcionDetail: 'Pantalón de tiro alto con cinco bolsillos. Bajo acabado en evasé con aberturas laterales. Cierre frontal con cremallera y botón',
    btn:'Ver más',
    category:'pantalones',
    stockDestacados: '10'
},
{   
id: '8',
img: 'https://i.postimg.cc/y82Kf1VX/4387269776-2-1-1.jpg',
imgDetail:'https://i.postimg.cc/y82Kf1VX/4387269776-2-1-1.jpg',
producto:'VESTIDO CAMISERO ',
precio: '17990',
descripcion:'Vestido de cuello solapa y manga corta acabada en vuelta',
descripcionDetail: 'Vestido de cuello solapa y manga corta acabada en vuelta. Escote pico con pliegues delanteros. Bajo con abertura frontal. Cierre lateral con cremallera oculta en costura.',
btn:'Ver más',
category:'vestido',
stockDestacados: '15'
},
{
id: '9',
img: 'https://i.postimg.cc/0yXfz1FL/cuerpo-Tul-Lunares.jpg',
imgDetail:'https://i.postimg.cc/0yXfz1FL/cuerpo-Tul-Lunares.jpg',
producto:'CAMISA CUERPO TUL LUNARES ',
precio: '12990 ' ,
descripcion:'Cuerpo semitransparente de cuello redondo',
descripcionDetail: 'Cuerpo semitransparente de cuello redondo y manga larga. Detalle de volantes a tono. Cierre en espalda con abertura y botón',
btn:'Ver más',
category:'camisas',
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