const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'RetailManagerDB',
});

// part 3 -1-
// connection.execute(
//     'ALTER TABLE Products ADD COLUMN Product_Category VARCHAR(255)',((error)=>{
//         if(error) {
//             console.log('Error adding column:', error);
//         } else {
//             console.log('Column added successfully');
//         }
//     })
// );
// part 3 -2-
// connection.execute(
//     `ALTER TABLE Products DROP COLUMN Product_Category`,((error)=>{
//         if(error) {
//             console.log('Error dropping column:', error);
//         } else {
//             console.log('Column dropped successfully');
//         }
//     })
// );

// part 3 -3-
// connection.execute(
//     'ALTER TABLE Suppliers MODIFY COLUMN Contact_Number VARCHAR(15)',((error)=>{
//         if(error) {
//             console.log('Error modifying column:', error);
//         } else {
//             console.log('Column modified successfully');
//         }
//     })
// );

// part 3 -4-
// connection.execute(
//     'ALTER TABLE Products MODIFY Product_Name VARCHAR(255) NOT NULL',((error)=>{
//         if(error) {
//             console.log('Error modifying column:', error);
//         } else {
//             console.log('Column modified successfully');
//         }
//     })
// );

// part 3 -5-
// connection.execute(
//     'INSERT INTO SUPPLIERS (Supplier_Name, Contact_Number) VALUES (?, ?)',
//     ['FreshFoods', '01001234567'],
//     (error, result) => {
//         if (error) {
//             console.log('Error inserting supplier:', error);
//             return;
//         }

//         console.log('Supplier inserted successfully');

//         const supplierId = result.insertId;
//         console.log('Supplier ID:', supplierId);

//         connection.execute(
//             `INSERT INTO PRODUCTS 
//              (Product_Name, Product_Price, Stock_Quantity, Supplier_id)
//              VALUES (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?)`,
//             [
//                 'Milk', 15.00, 50, supplierId,
//                 'Eggs', 20.00, 40, supplierId,
//                 'Bread', 10.00, 30, supplierId
//             ],
//             (error) => {
//                 if (error) {
//                     console.log('Error inserting products:', error);
//                 } else {
//                     console.log('Products inserted successfully');
//                 }
//             }
//         );

//         connection.execute(
//             'SELECT Product_ID FROM PRODUCTS WHERE Product_Name = ?',
//             ['Milk'],
//             (error, results) => {
//                 if (error) {
//                     console.log('Error fetching Product_ID:', error);
//                     return;
//                 }
//                 if (results.length === 0) {
//                     console.log('Product not found');
//                     return;
//                 }
        
//                 const productId = results[0].Product_ID;

//                 connection.execute(
//                     'INSERT INTO SALES (Product_ID, Quantity_Sold, Sale_Date) VALUES (?, ?, ?)',
//                     [productId, 2, '2025-05-20'],
//                     (error) => {
//                         if (error) {
//                             console.log('Error inserting sale:', error);
//                         } else {
//                             console.log('Sale recorded successfully');
//                         }
//                     }
//                 );
//             }
//         );
//     }
// );

// part 3 -6-
// connection.execute(
//     'UPDATE PRODUCTS SET Product_Price = ? WHERE Product_Name = ?',
//     [25.00, 'Bread'],
//     (error) => {
//         if (error) {
//             console.log('Error updating product price:', error);
//         } else {
//             console.log('Product price updated successfully');
//         }
//     }
// );

// part 3 -7-
// connection.execute(
//     'DELETE FROM products WHERE Product_Name = ?',
//     ['Eggs'],
//     (error) => {
//         if (error) {
//             console.log('Error deleting product', error);
//         } else {
//             console.log('Product deleted successfully');
//         }
//     }
// );

// part 3 -8-
// connection.execute(
//     `SELECT P.Product_Name, SUM(S.Quantity_Sold) AS Total_Sold
//      FROM SALES S
//      JOIN PRODUCTS P ON S.Product_ID = P.Product_ID
//      GROUP BY P.Product_Name`,
//     (error, results) => {
//         if (error) {
//             console.log('Error retrieving sales data:', error);
//             return;
//         }

//         results.forEach(row => {
//             console.log(`${row.Product_Name}: ${row.Total_Sold} units sold`);
//         });
//     }
// );

// part 3 -9-
// connection.execute(
//     `SELECT Product_Name, Stock_Quantity
//      FROM PRODUCTS
//      ORDER BY Stock_Quantity DESC`,
//     (error, results) => {
//         if (error) {
//             console.log('Error retrieving product with highest stock:', error);
//             return;
//         }

//         if (results.length > 0) {
//             console.log(`Product with highest stock: ${results[0].Product_Name} (${results[0].Stock_Quantity} units)`);
//         } else {
//             console.log('No products found');
//         }
//     }
// );

// part 3 -10-
// connection.execute(
//     `SELECT Supplier_Name FROM SUPPLIERS WHERE SUPPLIER_NAME LIKE 'F%'`, (error, results) => {
//         if (error) {
//             console.log('Error retrieving suppliers:', error);
//             return;
//         }

//         results.forEach(row => {
//             console.log(`Supplier: ${row.Supplier_Name}`);
//         });
//     }
// )

// part 3 -11-
// connection.execute(
//     `SELECT P.Product_Name
//      FROM PRODUCTS P
//      LEFT JOIN SALES S ON P.Product_ID = S.Product_ID
//      WHERE S.Product_ID IS NULL`,
//     (error, results) => {
//         if (error) {
//             console.log('Error retrieving unsold products:', error);
//             return;
//         }

//         if (results.length === 0) {
//             console.log('All products have been sold at least once');
//         } else {
//             console.log('Products never sold:');
//             results.forEach(row => {
//                 console.log(row.Product_Name);
//             });
//         }
//     }
// );

// part 3 -12-
// connection.execute(
//     `SELECT P.Product_Name, S.Quantity_Sold, S.Sale_Date
//      FROM SALES S
//      JOIN PRODUCTS P ON S.Product_ID = P.Product_ID`,
//     (error, results) => {
//         if (error) {
//             console.log('Error retrieving sales data:', error);
//             return;
//         }

//         if (results.length === 0) {
//             console.log('No sales found');
//         } else {
//             console.log('Sales records:');
//             results.forEach(row => {
//                 console.log(`Product: ${row.Product_Name}, Quantity Sold: ${row.Quantity_Sold}, Sale Date: ${row.Sale_Date}`);
//             });
//         }
//     }
// );

// part 3 -13-

// CREATE USER 'store_manager'@'localhost' IDENTIFIED BY '123';
// GRANT SELECT, INSERT, UPDATE ON retailmanagerdb.* TO 'store_manager'@'localhost';
// FLUSH PRIVILEGES;

// part 3 -14-
// REVOKE UPDATE ON retailmanagerdb.* FROM 'store_manager'@'localhost';

// part 3 -15-
// GRANT DELETE ON retailmanagerdb.SALES TO 'store_manager'@'localhost';

// BOUNS
// SELECT 
//     v.customer_id,
//     COUNT(*) AS count_no_trans
// FROM 
//     Visits v
// LEFT JOIN 
//     Transactions t
// ON 
//     v.visit_id = t.visit_id
// WHERE 
//     t.visit_id IS NULL
// GROUP BY 
//     v.customer_id;
