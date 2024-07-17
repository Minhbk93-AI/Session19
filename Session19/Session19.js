//
// Xây dựng ứng dụng
// Coi như dữ liệu đã được lấy thành công từ trên sever về phía Client

// Stores: Coi như là kho lưu trữ dữ liệu có tên là Stores ở trên Sever
// //
// let stores = [
//   { id: 1, name: "Milk", count: 100 },
//   { id: 2, name: "Yakult", count: 100 },
//   { id: 3, name: "Butter", count: 100 },
// ];

// // Carts - Kho lưu trữ dữ liệu
// // có tên là carts ở trên sever
// //
// let carts = [{ id: 1, name: "Milk", count: 5 }];
// let loop = true;
// while (loop) {
//   let command = prompt(" Please input C/R/U/D/E để tiến hành mua hàng");

//   switch (command) {
//     case "C":
//       let productName = prompt("Mời bạn nhập vào tên sản phẩm muốn mua");
//       let findIndex = stores.findIndex(function (element, index) {
//         return (element.name = productName);
//       });

//       if (findIndex == -1) {
//         console.log(
//           `không tìm thấy sản phẩm ${productName} trong cửa hàng. Mời bạn tiếp tục mua hàng`
//         );
//       } else {
//         // Mua hàng thành công
//         // store -1
//         // carts + thêm 1
//         let cartIndex = carts.findIndex(function (element, index) {
//           return element.name === productName;
//         });
//         if (cartIndex === -1) {
//           //Push
//           let product = stores[findIndex];
//           //
//           // product.count=1;     //Đoạn này bị lỗi do liên quan đến tham chiếu khi trùng vị trí trong lưu trữ dữ liệu
//           // carts.push(product)

//           //Tạo ra product mới với địa chỉ mới hoàn toàn có đầy đủ đặc điểm như thằng store
//           let cartProduct = { ...product, count: 1 }; //{ name, id, count, count:1}

//           carts.push(cartProduct);
//         } else {
//           //+1
//           carts[cartIndex].count = carts[cartIndex].count + 1;
//         }
//         stores[findIndex].count = stores[findIndex].count - 1;
//       }
//       displayProduct(stores);
//       displayProduct(carts);

//       break;

//     case "R":
//       console.log("Sản phẩm trong Store");
//       // Store
//       displayProduct(stores);

//       if (carts.length === 0) {
//         console.log("Giỏ hàng của bạn đang trống mời bạn nhập lại");
//       } else {
//         displayProduct(carts);
//       }

//       break;

//     case "U":
//       console.log("Sản phẩm nằm trong stores");
//       displayProduct(stores);
//       let updateIndex = prompt(
//         " Bạn muốn cập nhật lại sản phẩm nào trong cart?"
//       );
//       let oldCart = carts[updateIndex - 1].count;
//       // Validate dữ liệu đầu vào
//       carts[updateIndex - 1].idount = +prompt(
//         ` Mời bạn nhập vào số lượng mới của sản phẩm ${
//           carts[updateIndex - 1].name
//         }`
//       );

//       // Tìm kiếm sản phẩm vừa update trong cart là sản phẩm nào trong store

//       let storeIndex = stores.findIndex(function (element, index) {
//         return element.id === carts[updateIndex - 1].id;
//       });
//       stores[storeIndex].count =
//         stores[storeIndex].count + oldCart - carts[updateIndex - 1].count;

//       console.log("Sản phẩm trong của hàng");
//       displayProduct(stores);
//       console.log("Sản phẩm trong giỏ hàng");
//       displayProduct(carts);
//       break;

//     case "D":
//       console.log("Tính năng D");
//       displayProduct(stores);
//       console.log("Sản phẩm nằm trong cart của bạn");
//       displayProduct(carts);

//       let deleteIndex = +prompt("Bạn muốn xóa sản phẩm nào khỏi cart");
//       let deleteProductId = carts[deleteIndex - 1].id;
//       carts.splice(deleteIndex - 1, 1);

//       //Validate dữ liệu đầu vào
//       let deleteStoreIndex = stores.findIndex(function (element, index) {
//         return element.id === deleteProductId;
//       });
//       stores[deleteStoreIndex].count = 100;
//       //
//       console.log("Sản phẩm nằm trong store");
//       displayProduct(stores);
//       console.log("Sản phẩm nằm trong cart của bạn");
//       displayProduct(carts);

//       break;

//     case "E":
//       console.log("Cảm ơn đã mua hàng ở cửa hàng của chúng tôi");
//       loop = false;
//       console.log("Tính năng E");
//       break;

//     default:
//       console.log("Invalid command!");
//       break;
//   }

//   function displayProduct(database) {
//     for (let idx in database) {
//       console.log(
//         ` ${+idx + 1}.${database[idx].name} - quantity: ${database[idx].count}`
//       );
//     }
//   }
// }

