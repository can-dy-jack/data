const lightenText = document.getElementById("lightenText");
const darkenText = document.getElementById("darkenText");
const toggleBtn = document.getElementById("toggleBtn");

const bd = document.getElementById("bd");
const title = document.getElementById("title");
const nav = document.getElementById("nav");
const trademark = document.getElementById("trademark");

toggleBtn.addEventListener('click',()=>{
    if(toggleBtn.classList.contains("toggled")){
        toggleBtn.classList.remove("toggled");
        darkenText.classList.add('unselected');
        lightenText.classList.remove("unselected");
    }else{
        toggleBtn.classList.add("toggled");
        darkenText.classList.remove("unselected");
        lightenText.classList.add("unselected");
    }

    if(toggleBtn.classList.contains("toggled")){
        lightenText.style.color = "#cccccc";
        darkenText.style.color = "white";
    }else{
        lightenText.style.color = "black";
        darkenText.style.color = "#333";
    }
    if(bd.classList.contains("color-black-1")){
        bd.classList.add("color-white");
        bd.classList.remove("color-black-1");
        title.style.color = "black";
        nav.style.backgroundColor = "#efefef";
        trademark.style.backgroundColor = "#efefef";
        trademark.style.color = "black";
    }else{
        bd.classList.remove("color-white");
        bd.classList.add("color-black-1");
        title.style.color = "white";
        nav.style.backgroundColor = "#121212cc";
        trademark.style.backgroundColor = "#121212";
        trademark.style.color = "gray";
    }
});