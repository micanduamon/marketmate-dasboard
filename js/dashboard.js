// @greatness data for orders
const recentOrders = [
    {
        tracking: '#876364',
        product: 'Oxford Stur',
        price: '$178',
        totalOrder: '325',
        totalAmount: '$1,46,660'
    },
    {
        tracking: '#876368',
        product: 'Bottle LUgreen',
        price: '$14',
        totalOrder: '53',
        totalAmount: '$46,660'
    },
    {
        tracking: '#876412',
        product: 'Gamebute',
        price: '$21',
        totalOrder: '78',
        totalAmount: '$43,676'
    },
    {
        tracking: '#876621',
        product: 'Face Soap',
        price: '$32',
        totalOrder: '98',
        totalAmount: '$43,981'
    }
];

// smooch Populate orders table
const ordersTableBody = document.querySelector('.orders-table tbody');
recentOrders.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${order.tracking}</td>
        <td>${order.product}</td>
        <td>${order.price}</td>
        <td>${order.totalOrder}</td>
        <td>${order.totalAmount}</td>
    `;
    ordersTableBody.appendChild(row);
});

//  smooch top products data with grocery items
const topProducts = [
    {
        name: 'Organic Fresh Vegetables Pack',
        price: '$24.99',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300&q=80'
    },
    {
        name: 'Premium Fruit Basket',
        price: '$32.99',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&q=80'
    },
    {
        name: 'Organic Milk & Dairy Set',
        price: '$18.50',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&q=80'
    },
    {
        name: 'Fresh Bread Collection',
        price: '$12.99',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&q=80'
    }
];

// smooch product list population with rating display
const productList = document.querySelector('.product-list');
productList.innerHTML = ''; 

topProducts.forEach(product => {
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(product.rating);
    
    const starDisplay = `
        ${'★'.repeat(fullStars)}
        ${hasHalfStar ? '½' : ''}
        ${'☆'.repeat(emptyStars)}
    `;

    const productElement = document.createElement('div');
    productElement.className = 'product-item';
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-price">${product.price}</div>
            <div class="product-rating">
                <span class="rating-stars">${starDisplay}</span>
                <span class="rating-value">${product.rating}</span>
            </div>
        </div>
    `;
    productList.appendChild(productElement);
}); 