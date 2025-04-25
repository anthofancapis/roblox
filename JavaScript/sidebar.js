/*  Sidebar Script */

const sidebarBtn = document.getElementById("sidebar-btn");
const sidebar = document.getElementById("sidebar");

sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    console.log("sidebar")
}); 
