// console.log(document);
// console.dir(document);
// //
// // Cách lấy các phần tử HTML sang bên phía Javascrip( Query HTML Elêmnt)

// // +document.getElementById();
// let h1HTML = document.getElementById("demo-id");
// console.log(h1HTML);
// //
// //
// // document.getElementsByTagName
// console.log(document.getElementsByTagName("div"));
// //
// // +document.getElementsByClassName();
// let demoClassList = document.getElementsByClassName("demo-class"); // Tạo ra mảng [div,p,div]
// console.log(demoClassList);
// console.log(demoClassList[1]);
// //
// //
// // document.getElementsByClassName();// Trả về 1 HTML Colection là 1 kiẻu dữ liệu gần giống mảng cũng có các phần tử bên trong đều được đánh chỉ số, cũng có lenght nên có thể dùng vòng for duyệt qua các phần tử!
// //Nhưng không phải mảng nên không sử dụng được các phương thức có sẵn của mảng
// //
// //
// // +document.getElementsByName();

// // +document.querySelector();
// let h1 = document.querySelector("h1#demo-id.demo-class");
// console.log(h1);

// // let h2 = document.querySelector(".demo-class"); //Trả về phần tử đầu tiên
// // console.log(h2);
// // +document.querySelectorAll();// Tạo ra NodeList giống vs HTMLCollection
// let classCollection = document.querySelectorAll(".demo-class"); //[h1, div, p, div]
// console.log(classCollection);

// let h1 = document.getElementById("demo-id");
// console.dir(h1.textContent);

// //
// //
// // Chỉnh sửa Content
// h1.innerText = "Tôi vừa được cập nhật Inner Text";
// h1.textContent = h1.textContent + "   Nội dung mới được nối vào sau";
// h1.innerHTML = `<ul style="text-decoration: line-through">Hello world</ul>`;
// console.log(h1.innerText); // Text ở bên trong h1 // Lấy ra nội dung là text ở bên trong phần tử HTML không bao gồm khoảng trắng,nội dung display none xuống dòng
// console.log(h1.textContent); // Lấy ra nội dung bao gồm khoảng cách,khoảng trắng, xuống dòng kể cả nội dung display none
// console.log(h1.innerHTML); // HTML ở bên trong h1 // Lấy ra toàn bộ nội dung HTML trong thẻ như trong VScode

//Bộ3 hiển thị nội dung content

//
//
//
const blogData = [
  {
    id: 1,
    title: "Tôi buồn",
    description: " Tôi buồn",
    image: "Hình ảnh 1",
    content: "Tôi buồn",
  },

  {
    id: 2,
    title: "Tôi rất vui",
    description: " Tôi rất vui",
    image: "Hình ảnh 2",
    content: "Tôi vui",
  },

  {
    id: 3,
    title: "Tôi bình thường",
    description: " Tôi bình thường",
    image: "Hình ảnh 3",
    content: "Tôi bình thường",
  },

  {
    id: 3,
    title: "Tôi bình thường 1",
    description: " Tôi bình thường 1",
    image: "Hình ảnh 4",
    content: "Tôi bình thường 1",
  },
];
// fake lấy về từ Database (Cơ sở dữ liệu)
const cardContainer = document.getElementById("card-Container");
console.log(cardContainer);

//Hiển thi (render) nội dung từ dữ liệu
for (let blog of blogData) {
  cardContainer.innerHTML =
    cardContainer.innerHTML +
    `   
  <div class="card">
      <h2>${blog.title}</h2>
      <h5>${blog.description}</h5>
      <div class="fakeimg" style="height: 200px">${blog.image}</div>
      <p>${blog.content}</p>
    </div>
  `;
}

//Attribute: Thuộc tính
// + Lấy Attribute thông qua tên attribute
let img = document.getElementById("img");
img.src = "https://qpet.vn/wp-content/uploads/2023/03/meo.jpg";

img.setAttribute(
  "src",
  "https://i0.wp.com/bloganchoi.com/wp-content/uploads/2022/12/kylian-mbappe-la-ai-cau-thu-noi-tieng-m3p-voi-loi-da-bong-an-tuong.jpg"
);

console.log(img);
let a = document.getElementById("a");
console.log(a.href);

let input = document.getElementById("input");
console.log(input.placeholder);

//
//
img.style.borderRadius = "50%";

let div = document.getElementById("demo-style");
// div.style.backgroundColor = "pink";
// div.style.width = "300px";
// div.style.height = "300px";
// div.style.color = "white";
// div.style.textAlign = "center";
// div.style.lineHeight = "300px";
// div.style.borderRadius = "50%";
// div.style.fontSize = "40px";

console.log(div.classList); // Danh sách class của 1 phân ftử HTML
div.classList.add("pink-circle");
//
//Chỉ phù hợp cho việc style ngắn
// ĐỐi với việc tạo kiểu dài tạo ra classList
// + Bao gồm các thuộc tính: add()
// + Remove()
// + toggle(): chuyển đổi
//
//
//Event là những sự kiện phát sinh trên trang web
// Sự kiện của chuột (Mouse event)
let btn = document.getElementById("btn");
console.log(btn);
btn.onclick = function () {
  alert(`Hello World`);
};
