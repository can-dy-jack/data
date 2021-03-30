
// the function of checking for valid hex color in js
const isValidHex = (hex) => {
    if(!hex) return false;
    
    let strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;
}

// update the background color of inputColor.
const hexInput = document.getElementById('hexoInput');
const inputColor = document.getElementById('inputColor');
hexInput.addEventListener('keyup',()=>{
    let hex = hexInput.value;
    if(!isValidHex(hex)) return null;
    let strippedHex = hex.replace('#', '');
    inputColor.style.backgroundColor = "#" + strippedHex;
    alteredColor.style.backgroundColor = "#" + strippedHex;
    reset();
});


// the function of converting hex to RGB
const convertHexToRGB = (hex) =>{
    if(!isValidHex(hex)) return false;

    let strippedHex = hex.replace('#', '');
    if(strippedHex.length === 3){
        strippedHex = strippedHex[0] + strippedHex[0] + strippedHex[1] + strippedHex[1] + strippedHex[2] + strippedHex[2];
    }
    const r  = parseInt(strippedHex.substring(0,2), 16);
    const g  = parseInt(strippedHex.substring(2,4), 16);
    const b  = parseInt(strippedHex.substring(4,6), 16);
    return {r,g,b};
}

// the function of converting RGB ro hex
const convertRGBtoHex = (r,g,b) =>{
    let firstPair = ("0" + r.toString(16)).slice(-2);
    let secondPair = ("0" + g.toString(16)).slice(-2);
    let thirdPair = ("0" + b.toString(16)).slice(-2);

    return "#" + firstPair + secondPair + thirdPair;

}

// 按钮效果
const lightenText = document.getElementById("lightenText");
const darkenText = document.getElementById("darkenText");
const toggleBtn = document.getElementById("toggleBtn");
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
    reset();
});

// change altered color
const sliderText = document.getElementById("sliderText");
const slider = document.getElementById("slider");
const alteredColor = document.getElementById("alteredColor");
const alteredColorText = document.getElementById("alteredColorText");
slider.addEventListener('input',()=>{
    if(!isValidHex(hexInput.value)) return null;
    sliderText.textContent = slider.value;  //`${slider.value}%\`

    // lighten/darken judgement
    let valueAddition = toggleBtn.classList.contains("toggled") ? -slider.value : slider.value;

    let newHex = alterColor(hexInput.value,valueAddition);
    alteredColor.style.backgroundColor = newHex;
    alteredColorText.innerText = `Altered Color: ${newHex}`;
});

// alter color by percentage
const increaseWithin0To255 = (hex, amount) => {
    // 解决0-255范围问题
    const newHex = hex + amount;
    if(newHex > 255) return 255;
    if(newHex < 0) return 0;
    return newHex;
    // return Math.min(255, Math.max(0, hex + amount)); 或者一个公式解决
}
const alterColor = (hex,percentage)=>{
    let {r,g,b} = convertHexToRGB(hex);
    let amount = Math.floor((percentage/100)*255);
    let newR = increaseWithin0To255(r , amount);
    let newG = increaseWithin0To255(g , amount);
    let newB = increaseWithin0To255(b , amount);
    return convertRGBtoHex(newR,newG,newB);
}

// input reset functionality
const reset = ()=>{
    slider.value = 0;
    sliderText.innerText = '0';
    let strippedHex = "#" + hexInput.value.replace('#', '');  // hex颜色前要有#号，没有需要加上
    alteredColor.style.backgroundColor = strippedHex;
    alteredColorText.innerText = `Altered Color: ${strippedHex}`;
    inputColor.style.backgroundColor = strippedHex;
}
