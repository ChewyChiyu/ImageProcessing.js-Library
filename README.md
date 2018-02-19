# ImageProcessing.js-Library
for canvas tag on javascript

## Installation
```html
   <script src="CanvasProcess/CanvasProcessing.min.js"></script>
```
### Usage
```javascript
   //Draw image onto canvas
   drawImage(image, posX, posY, canvas)
   
   //draw image as gray scale
   drawImage(image, posX, posY, canvas).toGrayScale()
   
   //Scale RGB values of draw image, alpha as well
   drawImage(image, posX, posY, canvas).scaleRGB(rScale,gScale,bScale,aScale)
   
   //Invert Colors
   drawImage(image, posX, posY, canvas).invertColors()
   
   //flip image
   drawImage(image, posX, posY, canvas).flip(horizontal,vertical) //takes in boolean
    
   //chain events, please note that flip() is not supported as a chain event due to reasons
   drawImage(image, posX, posY, canvas).toGrayScale().invertColors().scaleRGB(rScale,gScale,bScale,aScale)
```
