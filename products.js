// DROP TABLE order_products CASCADE;


// -- SELECT * FROM products;
// -- SELECT * FROM orders; 
// -- -- SELECT * FROM order_products;
// -- SELECT COUNT(*) FROM order_products where order_id = 1;
// -- DELETE FROM orders WHERE id = 1;
// -- SELECT COUNT(*) FROM order_products where order_id = 1;
// -- -- SELECT
// --     orders.id as "order id",
// --     orders.status,
// --     products.name as "product",
// --     products.price as "price",
// --     order_products.quantity as "quantity",
// --     products.price * order_products.quantity as "total price",
// --     order_products.quantity

// --     FROM orders
// --     INNER JOIN order_products
// --     ON orders.id = order_products.order_id
// --     INNER JOIN products
// --     on products.id = order_products.product_id;