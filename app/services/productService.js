const db = require("../config/db");

class productService{
    static async getProduct(id) {
        try {
          const pool = await db.poolPromise;
          return await pool
            .request()
            .input("ProductID", db.mssql.Int, id)
            .query(
              "select * from Product where ProductID = @ProductID"
            );
        } catch (err) {
          console.log(err);
        }
    }

    static async createProduct(body) {
        try {   
          const pool = await db.poolPromise;
          return await pool
            .request()
            .input("ProductName", db.mssql.VarChar, body.ProductName)
            .input("ProductPrice", db.mssql.Decimal, body.ProductPrice)
            .input("ProductQuantity", db.mssql.Int, body.ProductQuantity)
            .input("ProductDateTime", db.mssql.DateTime, body.ProductDateTime)
            .query(
              "INSERT INTO Product (ProductName,ProductPrice,ProductQuantity,ProductDateTime) VALUES (@ProductName, @ProductPrice,@ProductQuantity,@ProductDateTime)"
            );
        } catch (err) {
          console.log(err);
        }
    }

    static async updateProduct(body,id) {
        try {   
          const pool = await db.poolPromise;
          return await pool
            .request()
            .input("ProductID", db.mssql.Int, id)
            .input("ProductName", db.mssql.VarChar, body.ProductName)
            .input("ProductPrice", db.mssql.Decimal, body.ProductPrice)
            .input("ProductQuantity", db.mssql.Int, body.ProductQuantity)
            .input("ProductDateTime", db.mssql.DateTime, body.ProductDateTime)
            .query(
              "Update Product SET ProductName=@ProductName,ProductPrice=@ProductPrice,ProductQuantity=@ProductQuantity,ProductDateTime=@ProductDateTime Where ProductID=@ProductID "
            );
        } catch (err) {
          console.log(err);
        }
    }

    static async deleteProduct(id) {
        try {   
          const pool = await db.poolPromise;
          return await pool
            .request()
            .input("ProductID", db.mssql.Int, id)
            .query(
              "Delete From Product Where ProductID=@ProductID "
            );
        } catch (err) {
          console.log(err);
        }
    }
}

module.exports = productService