// let companies;

// class MongoDBCrud {
//   static async injectDB(conn) {
//     if (companies) {
//       return;
//     }
//     try {
//       companies = await conn.db("reactPagination").collection("companies");
//     } catch (e) {
//       console.error(
//         `Unable to establish collection handles with MongoDB: ${e}`
//       );
//     }
//   }
//   static async insertAll(data) {
//     try {
//       await companies.insertMany(data, { ordered: true });
//     } catch (e) {
//       console.error(`insertAll is not working: ${e}`);
//     }
//   }
// }

// module.exports = MongoDBCrud;
