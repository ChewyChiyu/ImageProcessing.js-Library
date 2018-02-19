window.onload = function(){
    const canvas = document.getElementById("window")
    const context = canvas.getContext("2d")
    
    var sunflower = document.getElementById("sunflower")
    
    drawImage(sunflower, 0, 0, canvas).toGrayScale().invertColors()
    
    
}