// to-top动画
const toTop = document.querySelector('.to-top');

toTop.onclick = function () {
    toTop.style.animation = 'toTopMove 0.4s ease'
    setTimeout('toTop.hidden = true',400)
    setTimeout('toTop.style.animation = "none";toTop.hidden = false',1000);
}
// end 

