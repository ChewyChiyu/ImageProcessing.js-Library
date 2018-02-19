
function drawImage(image, posX, posY, canvas){
    this.image = image
    this.canvas = canvas
    this.posX = posX
    this.posY = posY
    this.context = canvas.getContext("2d")
    this.context.drawImage(image,posX,posY)
    this.imageData = this.context.getImageData(posX,posY,image.width,image.height)

    if(window === this && image!=null && canvas!=null && isNumber(posX,posY)){
        return new drawImage(this.image, this.posX, this.posY, this.canvas)
    }
}

drawImage.prototype = {
    toGrayScale: function(){
        var data = this.imageData.data
        for(var i = 0; i < data.length; i+=4){
            var dataAvg = (data[i] + data[i+1] + data[i+2]) /3
            data[i] = dataAvg
            data[i+1] = dataAvg
            data[i+2] = dataAvg
        }
        this.context.putImageData(this.imageData, this.posX, this.posY)
        return this
    },
    scaleRGB: function(rScale,gScale,bScale,aScale){
        if(isNumber(rScale,gScale,bScale,aScale) && allPositive(rScale,gScale,bScale,aScale)){
            var data = this.imageData.data
            for(var i = 0; i < data.length; i+=4){
                data[i] = (data[i]*rScale<=255) ? data[i]*rScale : 255
                data[i+1] = (data[i+1]*gScale<=255) ? data[i+1]*gScale : 255
                data[i+2] = (data[i+2]*bScale<=255) ? data[i+2]*bScale : 255
                data[i+3] = (data[i+3]*aScale<=255) ? data[i+3]*aScale : 255
            }
            this.context.putImageData(this.imageData, this.posX, this.posY)
        }
        return this
    },
    invertColors: function(){
        var data = this.imageData.data
        for(var i = 0; i < data.length; i+=4){
            data[i] = 255 - data[i]
            data[i+1] = 255 - data[i+1]
            data[i+2] = 255 - data[i+2]
        }
        this.context.putImageData(this.imageData, this.posX, this.posY)
        return this
    },
    flip: function(horizontal,vertical){
        this.context.save()
        this.context.scale((horizontal)?-1:1, (vertical)?-1:1)
        this.context.drawImage(this.image, (horizontal)?-this.image.width:0, (vertical)?-this.image.height:0) 
        this.context.restore()
    }
}


function isNumber(){
    for(var i =0 ; i< arguments.length; i++){
        if(typeof arguments[i] != 'number'){ return false }
    }
    return true
}
function allPositive(){
    for(var i =0 ; i< arguments.length; i++){
        if(arguments[i] < 0){ return false }
    }
    return true
}