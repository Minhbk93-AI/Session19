//
const container = document.getElementById(`list`);
for (let i = 0; i < 3; i++) {
  container.insertAdjacentHTML(`afterbegin`, `<li>${i}</li>`);
}
