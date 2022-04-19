

 export const productos = [
    {   id: '01',
        img: 'https://i.postimg.cc/28GFtFrX/hippie-Negro-Corto.png',
        imgDetail: 'https://i.postimg.cc/28GFtFrX/hippie-Negro-Corto.png',
        producto:'Vestido estampado ',
        precio: 5400 ,
        descripcion:'Vestido corte cuello redondo estampado hindu',
        descripcionDetail: 'Vestido de cuello subido y manga larga. Detalle de acabados con puntilla. Cierre en espalda con abertura y botón',
        btn:'Ver más',
        category:'vestido',
        stockDestacados: 12
       
    },
    
    {   id: '02',
        img: 'https://i.postimg.cc/28GFtFrX/hippie-Negro-Corto.png',
        imgDetail: 'https://i.postimg.cc/28GFtFrX/hippie-Negro-Corto.png',
        producto:'Camisa Stim ',
        precio: 6900 ,
        descripcion:'Camisa de cuello subido y manga larga',
        descripcionDetail: 'Camisa cuello subido con detalles en colores, con bordado en sus mangas',
        btn:'Ver más',
        category:'camisas',
        stockDestacados: 0
       
    },
    
    
    {   id: '03',
         img: 'https://i.postimg.cc/BnKZ1BSw/niu-Estampado-Negro2.png',
        imgDetail: 'https://i.postimg.cc/BnKZ1BSw/niu-Estampado-Negro2.png',
        producto:'Vestido en V ',
        precio: 7400 ,
        descripcion:'Vestido corte cuello redondo estampado hindu',
        descripcionDetail: 'Vestido corto de cuello redondo y manga larga acabada en elástico. Detalle de bordados y aplicación de hilo metalizado. Cierre en espalda con abertura y botón',
        btn:'Ver más',
        category:'vestido',
        stockDestacados: 9
      
    },
    {   id: '04',
        img: 'https://i.postimg.cc/BnKZ1BSw/niu-Estampado-Negro2.png',
        imgDetail: 'https://i.postimg.cc/BnKZ1BSw/niu-Estampado-Negro2.png',
        producto:'Camisas Canalé',
        precio: 3999 ,
        descripcion:'Camiseta canalé con abertura',
        descripcionDetail: 'Camiseta de cuello vuelto y manga larga. Bajo acabado con abertura en espalda',
        btn:'Ver más',
        category:'camisas',
        stockDestacados: 9
    
    },
    {  
        id: '05',
        img: 'https://i.postimg.cc/BnKZ1BSw/niu-Estampado-Negro2.png',
        imgDetail: 'https://i.postimg.cc/BnKZ1BSw/niu-Estampado-Negro2.png',
        producto:'Legging efecto piel ',
        precio: 5400 ,
        descripcion:'Legging bajo con abertura',
        descripcionDetail: 'Leggings de tiro alto con cremallera lateral. Bajo con abertura',
        btn:'Ver más',
        category:'pantalones',
        stockDestacados: 8

        
    },
    {   id: '6',
        img: 'https://i.postimg.cc/BnKZ1BSw/niu-Estampado-Negro2.png',
        imgDetail:'https://i.postimg.cc/BnKZ1BSw/niu-Estampado-Negro2.png',
        producto:'PANTALON FLARE ',
        precio: 9990,
        descripcion:'Pantalon efecto satinado',
        descripcionDetail: 'Pantalón de tiro alto con detalle de cordón y pieza metálica. Bajo acabado flare con abertura lateral. Cierre lateral con cremallera oculta en costura',
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