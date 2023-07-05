const input = document.querySelector(".input");
const eyeOpen = document.querySelector(".eye-open");
const eyeClose = document.querySelector(".eye-close");
eyeOpen.addEventListener("click", function(){
    eyeOpen.classList.add("hidden");
    eyeClose.classList.remove("hidden");
    input.setAttribute("type", "password");
})
eyeClose.addEventListener("click", function(){
    eyeOpen.classList.remove("hidden");
    eyeClose.classList.add("hidden");
    input.setAttribute("type", "text");
})
function myFunction() {
    location.replace("https://www.facebook.com/?stype=lo&jlou=AfdxFy1x_w9D2No4K-fTVorYvYCGxQNnWWOUxdUuU99Wk0-_skhWjDHwL-vOj0kumntVxUQrSMm7VeLLdkXg40Aq-uDV7Jt78JJL4dcfMt_SCw&smuh=43120&lh=Ac_DVub0N1KwfzUuyuI");
}
function myFunction2() {
    location.replace("https://accounts.google.com/AddSession/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2Fu%2F0%2F%3Futm_source%3DYouTubeWeb%26tab%3Drk%26utm_medium%3Dact%26tab%3Drk%26hl%3Dvi%26pli%3D1&hl=vi&ec=GAlAwAE&authuser=0&flowName=GlifWebSignIn&flowEntry=AddSession");
}
  function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Kiểm tra thông tin đăng nhập
    if (username === "hianhem" && password === "1234567") {
        // Chuyển tới trang thành công
        location.replace("https://toigingiuvedep.vn/wp-content/uploads/2022/04/meme-hai-huoc-troll.jpg");
    } else {
        // Hiển thị thông báo lỗi
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}