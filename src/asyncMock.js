const products = [
    {
        id:1,
        name: 'Epipremnum aureum',
        price: 100,
        category: 'interior',
        img: 'https://i.pinimg.com/564x/9a/48/31/9a48312ba98581237962e4eb8b9a812a.jpg',
        stock: 7,
        description: 'Potus'
    },

    {
        id:2,
        name: 'Alocasia',
        price: 300,
        category: 'interior',
        img: 'https://i.pinimg.com/564x/3f/29/c8/3f29c82b724112213a3a4b984182434f.jpg',
        stock: 10,
        description: 'oreja de elefante'
    },

    {
        id:3,
        name: 'Crassula ovata',
        price: 130,
        category: 'suculentas',
        img: 'https://i.pinimg.com/564x/fa/3d/4b/fa3d4bdef9713f1e6fa862e533021e29.jpg',
        stock: 10,
        description: 'Descripción del producto'
    },

    {
        id:4,
        name: 'Dracaena fragans',
        price: 200,
        category: 'interior',
        img: 'https://i.pinimg.com/564x/06/e6/f8/06e6f886fb90d88a7dc85517526b1b18.jpg',
        stock: 10,
        description: 'Palo de Agua'
    },

    {
        id:5,
        name: 'Chamaedorea elegans',
        price: 130,
        category: 'interior',
        img: 'https://i.pinimg.com/564x/50/64/e2/5064e2d07fdf7e59303c33a637030034.jpg',
        stock: 10,
        description: 'Palmera de salón'
    },

    {
        id:6,
        name: 'Sedum morganianum',
        price: 130,
        category: 'suculenta',
        img: 'https://i.pinimg.com/564x/67/c4/d3/67c4d3d464f824b6185cea4ae4c7b4d8.jpg',
        stock: 10,
        description: 'Descripción del producto'
    },

    {
        id:7,
        name: 'Ficus pandurata',
        price: 130,
        category: 'interior',
        img: 'https://i.pinimg.com/564x/d8/a6/9f/d8a69f535ee9804c16d7246d40922d71.jpg',
        stock: 10,
        description: 'Descripición del producto'
    },

    {
        id:8,
        name: 'Nephrolepis',
        price: 130,
        category: 'interior',
        img: 'https://i.pinimg.com/564x/b2/d4/11/b2d4118ef93ac99be62bdd1729d03647.jpg',
        stock: 10,
        description: 'Helecho boston'
    },

    {
        id:9,
        name: 'Sansevieria trifasciata',
        price: 130,
        category: 'suculentas',
        img: 'https://i.pinimg.com/564x/ec/20/c8/ec20c8d442ee84ac9660ec7c76282f49.jpg',
        stock: 10,
        description: 'Espada de San Jorge'
    },


    {
        id:10,
        name: 'Crassula ovata',
        price: 130,
        category: 'suculenta',
        img: 'https://i.pinimg.com/564x/66/0c/6e/660c6e06c7487c5cf42b30633fcd1f93.jpg',
        stock: 10,
        description: 'Descripción del producto'
    },

    {
        id:11,
        name: 'Echeveria elegans',
        price: 130,
        category: 'suculentas',
        img: 'https://i.pinimg.com/564x/8c/6b/cb/8c6bcb39cffe7af3f5d001e925fc5d38.jpg',
        stock: 10,
        description: 'Descripción del producto'
    },

    {
        id:12,
        name: 'Aloe Vera',
        price: 130,
        category: 'suculentas',
        img: 'https://i.pinimg.com/564x/bc/b8/0e/bcb80eecfa67ddf8b80d1ed7e39030b7.jpg',
        stock: 10,
        description: 'Descripción del producto'
    },

    {
        id:13,
        name: 'Geranio',
        price: 130,
        category: 'exterior',
        img: 'https://i.pinimg.com/564x/60/f6/4e/60f64e80089dba9910d46ec6e7d2d67a.jpg',
        stock: 10,
        description: 'Descripción del producto'
    },

    {
        id:14,
        name: 'Chlorophytum comosum',
        price: 130,
        category: 'exterior',
        img: 'https://i.pinimg.com/564x/2a/16/97/2a1697c9471d0a3f2117820fca4d3ec3.jpg',
        stock: 10,
        description: 'Descripción del producto'
    },

    {
        id:15,
        name: 'Chlorophytum comosum',
        price: 130,
        category: 'exterior',
        img: 'https://i.pinimg.com/564x/35/f9/0f/35f90fc45c9ce84dd6bf2d687393edfb.jpg',
        stock: 10,
        description: 'Descripción del producto'
    },

    {
        id:16,
        name: 'Monstera deliciosa',
        price: 150,
        category: 'interior',
        img: 'https://i.pinimg.com/564x/71/57/21/715721cef5bcf33a255a0b5480e27d1e.jpg',
        stock: 10,
        description: 'Costilla de Adán'
    }

]

export const getProducts = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById = (productId)=> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod=> prod.id === productId))
        }, 500);
    })
}

export const getProductByCategory = (categoryId)=> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod=> prod.category === categoryId))
        }, 500);
    })
}