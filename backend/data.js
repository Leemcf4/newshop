import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name: 'Lee',
            email: 'lee@lee.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Jon',
            email: 'jon@lee.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
            },
        
    ],
    products: [
        {
            
            name: 'Extra Small Jeans',
            category: 'jeans',
            image: 'https://raw.githubusercontent.com/basir/amazona/master/template/images/p1.jpg',
            price: 420,
            countInStock: 10,
            brand: 'Underwater Butterfly',
            rating: 4.0,
            numReviews: 9,
            description: 'xs mens'
        },
        {
            name: 'Extra Small Jeans Black',
            category: 'jeans',
            image: 'https://raw.githubusercontent.com/basir/amazona/master/template/images/p1.jpg',
            price: 420,
            countInStock: 40,
            brand: 'Underwater Butterfly',
            rating: 2.5,
            numReviews: 10,
            description: 'xs mens'
        },
        {
            name: 'Extra Small Joggers',
            category: 'joggers',
            image: 'https://raw.githubusercontent.com/basir/amazona/master/template/images/p1.jpg',
            price: 4320,
            countInStock: 0,
            brand: 'Underwater Butterfly',
            rating: 3.5,
            numReviews: 888,
            description: 'xs mens'
        },
        {
            name: 'Butterfly hoodie',
            category: 'hoodie',
            image: 'https://raw.githubusercontent.com/basir/amazona/master/template/images/p1.jpg',
            price: 20,
            countInStock: 50,
            brand: 'Underwater Butterfly',
            rating: 5.0,
            numReviews: 70,
            description: 'xs mens'
        },
        {
            name: 'Bubble t-shirt',
            category: 'shirts',
            image: 'https://raw.githubusercontent.com/basir/amazona/master/template/images/p1.jpg',
            price: 420,
            countInStock: 0,
            brand: 'Underwater Butterfly',
            rating: 4.5,
            numReviews: 10,
            description: 'xs mens'
        },
        {
            name: 'Extra Small Jeans',
            category: 'jeans',
            image: 'https://raw.githubusercontent.com/basir/amazona/master/template/images/p1.jpg',
            price: 420,
            countInStock: 99,
            brand: 'Underwater Butterfly',
            rating: 4.5,
            numReviews: 10,
            description: 'xs mens'
        },
        {
            name: 'Extra Small Jeans',
            category: 'jeans',
            image: 'https://raw.githubusercontent.com/basir/amazona/master/template/images/p1.jpg',
            price: 420,
            countInStock: 999,
            brand: 'Underwater Butterfly',
            rating: 4.5,
            numReviews: 10,
            description: 'xs mens'
        },
        {
            name: 'Extra Small Jeans',
            category: 'jeans',
            image: 'https://raw.githubusercontent.com/basir/amazona/master/template/images/p1.jpg',
            price: 420,
            countInStock: 10,
            brand: 'Underwater Butterfly',
            rating: 4.5,
            numReviews: 10,
            description: 'xs mens'
        },
    ],
};

export default data;