//B"H

var html = document.createElement("div");
                html.style.position = "absolute";
                html.style.top = "50px";
                html.style.left = "50px";
                html.style.width = "100px";
                html.style.height = "100px";
                html.style.backgroundColor = "lightblue";

                
                var leftEdge = document.createElement("div");
                leftEdge.style.position = "absolute";
                leftEdge.style.top = "0";
                leftEdge.style.left = "-5px";
                leftEdge.style.bottom = "0";
                leftEdge.style.width = "10px";
                leftEdge.style.cursor = "ew-resize";
                leftEdge.style.backgroundColor = "transparent";
                html.appendChild(leftEdge);

                                
                var rightEdge = document.createElement("div");
                rightEdge.style.position = "absolute";
                rightEdge.style.top = "0";
                rightEdge.style.right = "-5px";
                rightEdge.style.bottom = "0";
                rightEdge.style.width = "10px";
                rightEdge.style.cursor = "ew-resize";
                rightEdge.style.backgroundColor = "transparent";
                html.appendChild(rightEdge);

                
                var topEdge = document.createElement("div");
                topEdge.style.position = "absolute";
                topEdge.style.top = "-5px";
                topEdge.style.left = "0";
                topEdge.style.right = "0";
                topEdge.style.height = "10px";
                topEdge.style.cursor = "ns-resize";
                topEdge.style.backgroundColor = "transparent";
                html.appendChild(topEdge);

                
                var bottomEdge = document.createElement("div");
                bottomEdge.style.position = "absolute";
                bottomEdge.style.bottom = "-5px";
                bottomEdge.style.left = "0";
                bottomEdge.style.right = "0";
                bottomEdge.style.height = "10px";
                bottomEdge.style.cursor = "ns-resize";
                bottomEdge.style.backgroundColor = "transparent";
                html.appendChild(bottomEdge);

                
                leftEdge.addEventListener("mousedown", scaleStart);
                leftEdge.addEventListener("mouseup", scaleEnd);
                leftEdge.addEventListener("mouseout", scaleEnd);
                leftEdge.addEventListener("mousemove", scale);

                rightEdge.addEventListener("mousedown", scaleStart);
                rightEdge.addEventListener("mouseup", scaleEnd);
                rightEdge.addEventListener("mouseout", scaleEnd);
                rightEdge.addEventListener("mousemove", scale);

                topEdge.addEventListener("mousedown", scaleStart);
                topEdge.addEventListener("mouseup", scaleEnd);
                topEdge.addEventListener("mouseout", scaleEnd);
                topEdge.addEventListener("mousemove", scale);
                bottomEdge.addEventListener("mousedown", function(e) {
                    const startingHeight = parseInt(window.getComputedStyle(element).height, 10);
                    const startingY = e.clientY;
                
                    function handleResize(e) {
                        element.style.height = startingHeight + e.clientY - startingY + "px";
                    }
                    document.addEventListener("mousemove", handleResize);
                    document.addEventListener("mouseup", function() {
                        document.removeEventListener("mousemove", handleResize);
                    });
                });


                var topLeftCorner = document.createElement("div");

                topLeftCorner.style.position = "absolute";
                topLeftCorner.style.top = "-5px";
                topLeftCorner.style.left = "-5px";
                topLeftCorner.style.width = "10px";
                topLeftCorner.style.height = "10px";
                topLeftCorner.style.cursor = "nwse-resize";
                topLeftCorner.style.backgroundColor = "transparent";
                html.appendChild(topLeftCorner);

                var topRightCorner = document.createElement("div");
                topRightCorner.style.position = "absolute";
                topRightCorner.style.top = "-5px";
                topRightCorner.style.right = "-5px";
                topRightCorner.style.width = "10px";
                topRightCorner.style.height = "10px";
                topRightCorner.style.cursor = "nesw-resize";
                topRightCorner.style.backgroundColor = "transparent";
                html.appendChild(topRightCorner);

                var bottomLeftCorner = document.createElement("div");
                bottomLeftCorner.style.position = "absolute";
                bottomLeftCorner.style.bottom = "-5px";
                bottomLeftCorner.style.left = "-5px";
                bottomLeftCorner.style.width = "10px";
                bottomLeftCorner.style.height = "10px";
                bottomLeftCorner.style.cursor = "nesw-resize";
                bottomLeftCorner.style.backgroundColor = "transparent";
                html.appendChild(bottomLeftCorner);

                var bottomRightCorner = document.createElement("div");
                bottomRightCorner.style.position = "absolute";
                bottomRightCorner.style.bottom = "-5px";
                bottomRightCorner.style.right = "-5px";
                bottomRightCorner.style.width = "10px";
                bottomRightCorner.style.height = "10px";
                bottomRightCorner.style.cursor = "nwse-resize";
                bottomRightCorner.style.backgroundColor = "transparent";
                html.appendChild(bottomRightCorner);



                topLeftCorner.addEventListener("mousedown", rotateStart);
                topLeftCorner.addEventListener("mouseup", rotateEnd);
                topLeftCorner.addEventListener("mouseout", rotateEnd);
                topLeftCorner.addEventListener("mousemove", rotate);

                topRightCorner.addEventListener("mousedown", rotateStart);
                topRightCorner.addEventListener("mouseup", rotateEnd);
                topRightCorner.addEventListener("mouseout", rotateEnd);
                topRightCorner.addEventListener("mousemove", rotate);

                bottomLeftCorner.addEventListener("mousedown", rotateStart);
                bottomLeftCorner.addEventListener("mouseup", rotateEnd);
                bottomLeftCorner.addEventListener("mouseout", rotateEnd);
                bottomLeftCorner.addEventListener("mousemove", rotate);

                bottomRightCorner.addEventListener("mousedown", rotateStart);
                bottomRightCorner.addEventListener("mouseup", rotateEnd);
                bottomRightCorner.addEventListener("mouseout", rotateEnd);
                bottomRightCorner.addEventListener("mousemove", rotate);

                
                var isDragging = false;
                var currentX;
                var currentY;
                var initialX;
                var initialY;
                var xOffset = 0;
                var yOffset = 0;

                var scale = 1;
                var rotation = 0;
                var currentWidth;
                var currentHeight
                html.addEventListener("mousedown", dragStart);
                html.addEventListener("mouseup", dragEnd);
                html.addEventListener("mouseout", dragEnd);
                html.addEventListener("mousemove", drag);

                function dragStart(e) {
                    initialX = e.clientX - xOffset;
                    initialY = e.clientY - yOffset;
                
                    isDragging = true;
                }
                
                function dragEnd(e) {
                    isDragging = false;
                }
                
                function drag(e) {
                    if (isDragging) {
                        e.preventDefault();
                        currentX = e.clientX - initialX;
                        currentY = e.clientY - initialY;
                
                        xOffset = currentX;
                        yOffset = currentY;
                
                        setTranslate(currentX, currentY, html);
                    }
                }

                var startAngle = 0;
                var mouseStart = {
                    x:0,y:0
                };

                function rotateStart(event) {
                    startAngle = html.angle;
                    mouseStart = {
                        x: event.clientX,
                        y: event.clientY
                    };
                }

                var angle = 0;
                var _scalescale = 1;
                var _scaleTransform = ""
                var _translateTransform = ""
                function rotate(event) {
                    var mouse = {
                        x: event.clientX,
                        y: event.clientY
                    };

                    angle = startAngle - (mouseStart.y - mouse.y) / 100;
                    html.style.transform = "rotate(" + angle + "deg)";
                }

                function rotateEnd(event) {
                    html.angle = angle;
                }

                function scaleStart(event) {
                    startScale = _scalescale;
                }

                function scale(event) {
                    _scaleTransform = 
                    "scale(" + 
                        (startScale * (1 + (event.clientX - mouseStart.x) / 50))
                     + ")";
                    updateTransform()
                }

                function scaleEnd(event) {
                    _scale = html.scale = startScale * (1 + (event.clientX - mouseStart.x) / 50);
                    _scaleTransform = "scale(" + _scalescale + ")";
                    updateTransform()
                }

                function setTranslate(xPos, yPos, el) {
                    _translateTransform = "translate3d(" 
                        + xPos + "px, " 
                        + yPos + "px, 0)";
                    updateTransform();
                }

                function updateTransform() {
                    html.style.transform = _translateTransform
                        + " " + _scaleTransform
                }

                Object.defineProperties(this, {
                    x: {
                        get:() => currentX
                    },
                    y: {
                        get: () => currentY
                    },
                    width: {
                        get: ()=>currentWidth
                    },
                    html: {
                        get: ()=>html
                    }
                })



                detectCollision(rect, circle) {
                    
                    let points = getRotatedRectanglePoints(rect);
                    let line1Start = points[0];
                    let line1End = points[1];
                    let line2Start = points[1];
                    let line2End = points[2];
                    let line3Start = points[2];
                    let line3End = points[3];
                    let line4Start = points[3];
                    let line4End = points[0];
                    let lines = [
                      [line1Start, line1End],
                      [line2Start, line2End],
                      [line3Start, line3End],
                      [line4Start, line4End],
                    ];
                  
                    console.log("hi chatGPT, here's the player info before the "
                    ,"for loop that checks the lines, for the players info:",
                    {
                        x:rect.x,
                        y:rect.y,
                        width:rect.width,
                        height:rect.height,
                        rotation:rect.rotation
                    },"And here is the rotated points array", JSON.stringify(points))
                    for (let i = 0; i < lines.length; i++) {
                        
                      let lineStart = lines[i][0];
                      let lineEnd = lines[i][1];
                      if (detectLineCircleCollision(lineStart, lineEnd, circle)) {
                        return true;
                      }
                    }
                    return false;
                  },
                detectCollisionold(rect, circle) {
                    // Store the four points of the rectangle
                    var seeboovCo = Math.cos(rect.rotation);
                    var seeboovSaween = Math.sin(rect.rotation)
                    let points = [];
                    points[0] = {
                        x: rect.x + rect.width / 2 * seeboovCo - rect.height / 2 * seeboovSaween,
                        y: rect.y + rect.width / 2 * seeboovSaween + rect.height / 2 * seeboovCo
                    };
                    points[1] = {
                        x: rect.x - rect.width / 2 * seeboovCo - rect.height / 2 * seeboovSaween,
                        y: rect.y - rect.width / 2 * seeboovSaween + rect.height / 2 *seeboovCo
                    };
                    points[2] = {
                        x: rect.x - rect.width / 2 * seeboovCo + rect.height / 2 * seeboovSaween,
                        y: rect.y - rect.width / 2 * seeboovSaween - rect.height / 2 * seeboovCo
                    };
                    points[3] = {
                        x: rect.x + rect.width / 2 * seeboovCo + rect.height / 2 * seeboovSaween,
                        y: rect.y + rect.width / 2 * seeboovSaween - rect.height / 2 * seeboovCo
                    };
                
                    // Check if the rectangle contains the center of the circle
                    if (rect.x - rect.width / 2 <= circle.x &&
                        circle.x <= rect.x + rect.width / 2 &&
                        rect.y - rect.height / 2 <= circle.y &&
                        circle.y <= rect.y + rect.height / 2) {
                        return true;
                    }
                
                    // Check for collision with each line segment of the rectangle
                    for (let i = 0; i < 4; i++) {
                        let j = (i + 1) % 4;
                        let x1 = points[i].x;
                        let y1 = points[i].y;
                        let x2 = points[j].x;
                        let y2 = points[j].y;
                
                        let dx = x2 - x1;
                        let dy = y2 - y1;
                        let lineLength = Math.sqrt(dx * dx + dy * dy);
                        let dotProduct = (circle.x - x1) * dx + (circle.y - y1) * dy;
                        let distance = Math.abs((circle.y - y1) * dx - (circle.x - x1) * dy) / lineLength;
                
                        if (distance <= circle.r &&
                            dotProduct >= 0 &&
                            dotProduct <= lineLength * lineLength) {
                            return true;
                        }
                    }
                
                    return false;

                    
                },
                  
                reebooyawLiEegoolHittest(rect, eegool) {
                    /*rectangle (reebooyaw) to circle
                        (eegool), check if
                        rect is inside circle or visa
                        versa
                    */
                        
                    var _slf = AWTSMOOS.Gawshmeeyoos

                    var seeboov/*angle*/ = rect.poyneh * Math.PI/180;
                    var halfRectX = rect.x + rect.origin.x;
                    var halfRectY = rect.y + rect.origin.y;

                    var topSmoyl/*topLeft*/=_slf.seeboovNikooduh(
                        rect.x, 
                        rect.y,
                        halfRectX,
                        halfRectY,
                        seeboov
                    )

                    var topYimeen = _slf.seeboovNikooduh(
                        rect.x + rect.width,
                        rect.y,
                        halfRectX,
                        halfRectY,
                        seeboov
                    )

                    var bottomSmoyl = _slf.seeboovNikooduh(
                        rect.x,
                        rect.y + rect.height,
                        halfRectX,
                        halfRectY,
                        seeboov
                    )

                    var bottomYimeen = _slf.seeboovNikooduh(
                        rect.x + rect.width,
                        rect.y + rect.height,
                        halfRectX,
                        halfRectY,
                        seeboov
                    )

                    //check if corners of rect in circle
                    if(
                        _slf.nikoodehBiEegool(/*point in circle*/
                            topYimeen, 
                            
                            eegool

                        ) ||
                        _slf.nikoodehBiEegool(
                            topSmoyl, eegool
                        )||
                        _slf.nikoodehBiEegool(
                            bottomSmoyl, eegool
                        )||
                        _slf.nikoodehBiEegool(
                            bottomYimeen, eegool
                        )
                    ) {
                        return true;
                    }

                    /*
                        check if circle is inside square
                         (if not hitting corners i guess)

                    */
                         console.log(
                            eegool.radius
                         )
                    if(
                        rect.x <= 
                            eegool.x - eegool.radius &&
                        eegool.x + eegool.radius <=
                            rect.x + rect.width &&
                        
                        rect.y <= 
                            eegool.y - eegool.radius &&
                        eegool.y + eegool.radius <=
                            rect.y + rect.height
                    ) {
                        return true;
                    }

                   return false;
                },






                detectCollision(rect, oval) {
                    // Convert the rectangle's rotation angle to radians
                    let rectAngle = rect.rotation * Math.PI / 180;
                    let rectX = rect.x + rect.width / 2;
                    let rectY = rect.y + rect.height / 2;
                
                    // Calculate the corners of the rectangle after rotation
                    let topLeft = rotatePoint(rect.x, rect.y, rectX, rectY, rectAngle);
                    let topRight = rotatePoint(rect.x + rect.width, rect.y, rectX, rectY, rectAngle);
                    let bottomLeft = rotatePoint(rect.x, rect.y + rect.height, rectX, rectY, rectAngle);
                    let bottomRight = rotatePoint(rect.x + rect.width, rect.y + rect.height, rectX, rectY, rectAngle);
                
                    // Check if any of the rectangle's corners are within the oval
                    if (isPointInOval(topLeft.x, topLeft.y, oval) ||
                        isPointInOval(topRight.x, topRight.y, oval) ||
                        isPointInOval(bottomLeft.x, bottomLeft.y, oval) ||
                        isPointInOval(bottomRight.x, bottomRight.y, oval)) {
                        return true;
                    }
                
                    // Check if any of the oval's corners are within the rectangle
                    let ovalX = oval.x + oval.width / 2;
                    let ovalY = oval.y + oval.height / 2;
                    let halfWidth = oval.width / 2;
                    let halfHeight = oval.height / 2;
                
                    let topLeftOval = rotatePoint(ovalX - halfWidth, ovalY - halfHeight, ovalX, ovalY, -rectAngle);
                    let topRightOval = rotatePoint(ovalX + halfWidth, ovalY - halfHeight, ovalX, ovalY, -rectAngle);
                    let bottomLeftOval = rotatePoint(ovalX - halfWidth, ovalY + halfHeight, ovalX, ovalY, -rectAngle);
                    let bottomRightOval = rotatePoint(ovalX + halfWidth, ovalY + halfHeight, ovalX, ovalY, -rectAngle);
                
                    if (rect.x <= topLeftOval.x && topLeftOval.x <= rect.x + rect.width &&
                        rect.y <= topLeftOval.y && topLeftOval.y <= rect.y + rect.height) {
                        return true;
                    }
                    if (rect.x <= topRightOval.x && topRightOval.x <= rect.x + rect.width &&
                        rect.y <= topRightOval.y && topRightOval.y <= rect.y + rect.height) {
                        return true;
                    }
                    if (rect.x <= bottomLeftOval.x && bottomLeftOval.x <= rect.x + rect.width &&
                        rect.y <= bottomLeftOval.y && bottomLeftOval.y <= rect.y + rect.height) {
                        return true;
                    }
                    if (rect.x <= bottomRightOval.x && bottomRightOval.x <= rect.x + rect.width &&
                        rect.y <= bottomRightOval.y && bottomRightOval.y <= rect.y + rect.height) {
                        return true;
                    }
                
                    return false;
                },







                
                nikoodehBiEegool(nikooduh,eegool/*circle*/) {
                    //checks if x,y point is in circle
                    var reechookX = nikooduh.x - eegool.x;
                    var reechookY = nikooduh.y - eegool.y;

                    return (
                        reechookX * reechookX + 
                        reechookY * reechookY
                    ) < eegool.radius * eegool.radius
                },
                seeboovNikooduh(x,y,pivotX,pivotY,seeboov/*in radians*/) {
                    var seeboovX = (
                        x - pivotX
                    ) * Math.cos(seeboov) 
                    - (
                        y - pivotY
                    ) * Math.sin(seeboov);

                    var seeboovY = (
                       x - pivotX
                    ) * Math.sin(seeboov) 
                    + (
                        y - pivotY
                    ) * Math.cos(seeboov);

                    return {
                        x:seeboovX,
                        y:seeboovY
                    };
                },




                    /*
                    olam.ctx.lineTo(
                        rectCorner4RotatedX,
                        rectCorner4RotatedY
                    )

                    olam.ctx.strokeStyle = "blue";
                    olam.ctx.lineWidth = 4;

                    olam.ctx.stroke();


                    olam.ctx.beginPath();
                    olam.ctx.arc(
                        circleX,
                        circleY,
                        circleRadius,
                        0,
                        Math.PI*2,
                        false
                    );

                    olam.ctx.strokeStyle = "yellow";
                    olam.ctx.lineWidth = 7;
                    olam.ctx.stroke();
                    */


                    
                    olam.ctx.beginPath();
                    olam.ctx.moveTo(
                        rectCorner1RotatedX,
                        rectCorner1RotatedY
                    );

                    olam.ctx.lineTo(
                        rectCorner2RotatedX,
                        rectCorner2RotatedY
                    )
                    
                    olam.ctx.lineTo(
                        rectCorner3RotatedX,
                        rectCorner3RotatedY
                    )


                    
function isPointInsideRectangleOld(pointX, pointY, rectX, rectY, rectWidth, rectHeight, rectRotation) {
    // Rotate the point about the center of the rectangle
    const rectCenterX = rectX + rectWidth / 2;
    const rectCenterY = rectY + rectHeight / 2;
    const rotatedX = (pointX - rectCenterX) * Math.cos(-rectRotation) - (pointY - rectCenterY) * Math.sin(-rectRotation) + rectCenterX;
    const rotatedY = (pointX - rectCenterX) * Math.sin(-rectRotation) + (pointY - rectCenterY) * Math.cos(-rectRotation) + rectCenterY;

    // Check if the point is inside the rectangle
    return rotatedX >= rectX && rotatedX <= rectX + rectWidth && rotatedY >= rectY && rotatedY <= rectY + rectHeight;
}

var {
    totalWidth,
    totalHeight,
    eachWidth,
    eachHeight,
    image,
    rows,
    columns
} = olam.spriteSheet[
    nivra.spriteSheet
];
console.log(
    nivra._curSpriteFrame,
    columns,
    rows
)
olam.ctx.drawImage(
    image, 
    0,
    (nivra._curSpriteFrame % rows)
        *eachHeight,//get back to row logic later
    eachWidth,
    eachHeight,
    0,0
    

    ,eachWidth,eachHeight
    
    
)
nivra._curSpriteFrame++;
var centerRectX = rectX +rectWidth/2;
                    var centerRectY = rectY +rectHeight/2

                    if(
                        isPointInsideRectangle(
                            rectX - circleRadius,
                            rectY - circleRadius,
                            rectX,
                            rectY,
                            rectWidth + 2 * circleRadius,
                            rectHeight + 2 * circleRadius,
                            rectRotation,
                            circleX,
                            circleY
                        )
                    ) {
                        return true;
                    }
                    return false;











                    var greater = Math.max(
                        rect1.width, rect1.height
                    )
                    /*
                    var boxTest = AWTSMOOS.Gawshmeeyoos
                        .rect2rectHittest({
                            x: rect1.x - greater,
                            y: rect1.y - greater,
                            width: greater * 2,
                            height: greater * 2
                        }, rect2)*/
                    //if(!boxTest) return false;
                    if(
                        
                        rect1.choymer == "reebooyah" &&
                        rect2.choymer == "eegool" 
                    ) {
                        
                        var rectToCircleTest = AWTSMOOS
                            .Gawshmeeyoos
                            .isRectangleCircleColliding(
                                rect2/*really circle*/.x,
                                rect2.y,
                                rect2.radius,
                                rect1.x
                                
                                ,
                                rect1.y
                                
                                ,
                                rect1.width,
                                rect1.height,
                                rect1.rotation*Math.PI/180,
                                drawInfo
                            )
                            
                        return rectToCircleTest;

                    } else {
                        console.log(rect1.choymer)
                        return boxTest;
                    }
                    
                    





                    isRectangleCircleColliding(
                        circleX, 
                        circleY, 
                        circleRadius, 
                        rectX, 
                        rectY, 
                        rectWidth, 
                        rectHeight, 
                        rectRotation,
                        olam
                    ) {
                        
                        const rectCorner1X = rectX// - rectWidth / 2,
                            rectCorner1Y = rectY// - rectHeight / 2,
    
                            rectCorner2X = rectX + rectWidth,
                            rectCorner2Y = rectY,
    
                            rectCorner3X = rectX + rectWidth,
                            rectCorner3Y = rectY + rectHeight,
                            rectCorner4X = rectX,
                            rectCorner4Y = rectY + rectHeight;
                        
                        const rectCorner1RotatedX = (rectCorner1X - rectX) * Math.cos(rectRotation) - (rectCorner1Y - rectY) * Math.sin(rectRotation) + rectX,
                            rectCorner1RotatedY = (rectCorner1X - rectX) * Math.sin(rectRotation) + (rectCorner1Y - rectY) * Math.cos(rectRotation) + rectY,
                            
                            rectCorner2RotatedX = (rectCorner2X - rectX) * Math.cos(rectRotation) - (rectCorner2Y - rectY) * Math.sin(rectRotation) + rectX,
                            rectCorner2RotatedY = (rectCorner2X - rectX) * Math.sin(rectRotation) + (rectCorner2Y - rectY) * Math.cos(rectRotation) + rectY,
                            
                            rectCorner3RotatedX = (rectCorner3X - rectX) * Math.cos(rectRotation) - (rectCorner3Y - rectY) * Math.sin(rectRotation) + rectX,
                            rectCorner3RotatedY = (rectCorner3X - rectX) * Math.sin(rectRotation) + (rectCorner3Y - rectY) * Math.cos(rectRotation) + rectY,
                            
                            rectCorner4RotatedX = (rectCorner4X - rectX) * Math.cos(rectRotation) - (rectCorner4Y - rectY) * Math.sin(rectRotation) + rectX,
                            rectCorner4RotatedY = (rectCorner4X - rectX) * Math.sin(rectRotation) + (rectCorner4Y - rectY) * Math.cos(rectRotation) + rectY;
                    
    
                        if (isPointInsideCircle(circleX, circleY, circleRadius, rectCorner1RotatedX, rectCorner1RotatedY) ||
                            isPointInsideCircle(circleX, circleY, circleRadius, rectCorner2RotatedX, rectCorner2RotatedY) ||
                            isPointInsideCircle(circleX, circleY, circleRadius, rectCorner3RotatedX, rectCorner3RotatedY) ||
                            isPointInsideCircle(circleX, circleY, circleRadius, rectCorner4RotatedX, rectCorner4RotatedY)) {
                            return true;
                        }
    
                        const rectMinX = Math.min(rectCorner1RotatedX, rectCorner2RotatedX, rectCorner3RotatedX, rectCorner4RotatedX);
                        const rectMinY = Math.min(rectCorner1RotatedY, rectCorner2RotatedY, rectCorner3RotatedY, rectCorner4RotatedY);
                        const rectMaxX = Math.max(rectCorner1RotatedX, rectCorner2RotatedX, rectCorner3RotatedX, rectCorner4RotatedX);
                        const rectMaxY = Math.max(rectCorner1RotatedY, rectCorner2RotatedY, rectCorner3RotatedY, rectCorner4RotatedY);
                        
                        rectX = rectMinX - circleRadius;
                        rectY = rectMinY - circleRadius;
                        rectWidth = rectMaxX - rectMinX + circleRadius * 2;
                        rectHeight = rectMaxY - rectMinY + circleRadius * 2;
                        
                        if (circleX >= rectX && circleX <= rectX + rectWidth && circleY >= rectY && circleY <= rectY + rectHeight) {
                          return true;
                        }
    
                        return false;
                        
                    },                    


                    function rotate(cx, cy, x, y, angle) {
                        var radians = (Math.PI / 180) * angle,
                            cos = Math.cos(radians),
                            sin = Math.sin(radians),
                            nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
                            ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
                        return { x: nx, y: ny };
                    }
                    
                    function detectCollision(circle, rect) {
                        var rectCorners = [        { x: rect.x, y: rect.y },        { x: rect.x + rect.width, y: rect.y },        { x: rect.x + rect.width, y: rect.y + rect.height },        { x: rect.x, y: rect.y + rect.height }    ];
                        
                        for (var i = 0; i < rectCorners.length; i++) {
                            var rotatedCorner = rotate(rect.x + rect.origin.x, rect.y + rect.origin.y, rectCorners[i].x, rectCorners[i].y, rect.rotation);
                            var distance = getDistance(circle.x, circle.y, rotatedCorner.x, rotatedCorner.y);
                            if (distance <= circle.radius) {
                                return true;
                            }
                        }
                        
                        return false;
                    }
                    function getDistance(x1, y1, x2, y2) {
                        let xDistance = x2 - x1;
                        let yDistance = y2 - y1;
                        return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
                    }
                    return detectCollision(circle, rect);
                    
                    

                    hittest(rect,circle,drawInfo) {
                        // calculate the center point of the rectangle
                            let rectX = rect.x + rect.origin.x + rect.width / 2;
                            let rectY = rect.y + rect.origin.y + rect.height / 2;
                            
                            // rotate the rectangle's vertices around its center
                            let vertices = [    { x: -rect.width / 2, y: -rect.height / 2 },    { x: rect.width / 2, y: -rect.height / 2 },    { x: rect.width / 2, y: rect.height / 2 },    { x: -rect.width / 2, y: rect.height / 2 }  ];
                            for (let i = 0; i < vertices.length; i++) {
                                let x = vertices[i].x;
                                let y = vertices[i].y;
                                let angle = rect.poyneh * (Math.PI / 180);
                                vertices[i].x = rectX + (x - rectX) * Math.cos(angle) - (y - rectY) * Math.sin(angle);
                                vertices[i].y = rectY + (y - rectY) * Math.cos(angle) + (x - rectX) * Math.sin(angle);
                            }
                            
                            // check if the circle is inside the polygon
                            let inside = false;
                            for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
                                let xi = vertices[i].x;
                                let yi = vertices[i].y;
                                let xj = vertices[j].x;
                                let yj = vertices[j].y;
                                let intersect = ((yi > circle.y) != (yj > circle.y))
                                && (circle.x < (xj - xi) * (circle.y - yi) / (yj - yi) + xi);
                                if (intersect) inside = !inside;
                            }
                            if (inside) return true;
                            
                            // check if the circle intersects with any of the edges
                            for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
                                let xi = vertices[i].x;
                                let yi = vertices[i].y;
                                let xj = vertices[j].x;
                                let yj = vertices[j].y;
                                let distance = ((xj - xi) * (xj - xi) + (yj - yi) * (yj - yi));
                                let minDistance = ((circle.x - xi) * (circle.x - xj) + (circle.y - yi) * (circle.y - yj)) / distance;
                                if (minDistance >= 0 && minDistance <= 1) {
                                    let closestX = xi + minDistance * dx;
                                    let closestY = yi + minDistance * dy;
                                    let distance = Math.sqrt((closestX - cx) ** 2 + (closestY - cy) ** 2);
                                    if (distance <= radius) {
                                      // The line intersects the circle
                                      return true;
                                    } else {
                                      // The line does not intersect the circle
                                      return false
                                    }
                                  } else {
                                    // The line does not intersect the circle
                                    return false
                                  }
                            }
                            return false;
                    }
                    
                    



                    hittest(rect, circle, drawInfo) {
                        // calculate the center point of the rectangle
                        let rectX = rect.x + rect.origin.x + rect.width / 2;
                        let rectY = rect.y + rect.origin.y + rect.height / 2;
                      
                        // rotate the rectangle's vertices around its center
                        let vertices = [    { x: -rect.width / 2, y: -rect.height / 2 },    { x: rect.width / 2, y: -rect.height / 2 },    { x: rect.width / 2, y: rect.height / 2 },    { x: -rect.width / 2, y: rect.height / 2 }  ];
                        for (let i = 0; i < vertices.length; i++) {
                          let x = vertices[i].x;
                          let y = vertices[i].y;
                          let angle = rect.poyneh * (Math.PI / 180);
                          vertices[i].x = rectX + (x - rectX) * Math.cos(angle) - (y - rectY) * Math.sin(angle);
                          vertices[i].y = rectY + (y - rectY) * Math.sin(angle);
                          // check if the circle is inside the polygon
                            let inside = false;
                            for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
                                let xi = vertices[i].x;
                                let yi = vertices[i].y;
                                let xj = vertices[j].x;
                                let yj = vertices[j].y;
                                let intersect = ((yi > circle.y) != (yj > circle.y))
                                && (circle.x < (xj - xi) * (circle.y - yi) / (yj - yi) + xi);
                                if (intersect) inside = !inside;
                            }
                            if (inside) return true;
                            
                            // check if the circle intersects with any of the edges
                            for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
                                let xi = vertices[i].x;
                                let yi = vertices[i].y;
                                let xj = vertices[j].x;
                                let yj = vertices[j].y;
                                let distance = ((xj - xi) * (xj - xi) + (yj - yi) * (yj - yi));
                                let minDistance = ((circle.x - xi) * (circle.x - xj) + (circle.y - yi) * (circle.y - yj)) / distance;
                                if (minDistance >= 0 && minDistance <= 1) {
                                    let closestX = xi + minDistance * dx;
                                    let closestY = yi + minDistance * dy;
                                    let distance = Math.sqrt((closestX - cx) ** 2 + (closestY - cy) ** 2);
                                    if (distance <= radius) {
                                        // The line intersects the circle
                                        return true;
                                    } else {
                                        // The line does not intersect the circle
                                        return false
                                    }
                                    } else {
                                    // The line does not intersect the circle
                                    return false
                                    }
                            }
                            return false;
                        }
                    }
                    
                    



                    checkCollision(circle, rectangle, ol) {
                        // Translate the rectangle to its origin
                        let rectX = rectangle.x + rectangle.origin.x;
                        let rectY = rectangle.y + rectangle.origin.y;
    
                        // Rotate the rectangle to align with the x-axis
                        let rectXPrime = rectX * Math.cos(-rectangle.poyneh * Math.PI / 180) - rectY * Math.sin(-rectangle.poyneh * Math.PI / 180);
                        let rectYPrime = rectX * Math.sin(-rectangle.poyneh * Math.PI / 180) + rectY * Math.cos(-rectangle.poyneh * Math.PI / 180);
    
                        // Check for collision between the rotated rectangle and the circle
                        let dx = Math.abs(circle.x - rectXPrime);
                        let dy = Math.abs(circle.y - rectYPrime);
                        if (dx > (rectangle.roychawv / 2 + circle.radius)) { return false; }
                        if (dy > (rectangle.oyrech / 2 + circle.radius)) { return false; }
                        if (dx <= (rectangle.roychawv / 2)) { return true; }
                        if (dy <= (rectangle.oyrech / 2)) { return true; }
                        let cornerDistance = ((dx - rectangle.roychawv / 2) ** 2 + (dy - rectangle.oyrech / 2) ** 2);
                        ol.ctx.strokeStyle="yellow"
                    
                        if (cornerDistance <= (circle.radius ** 2)) {
                            return true;
                        }
                        
                          // Check if the circle intersects with any of the sides
                          let nearestX = Math.max(rectXPrime - rectangle.roychawv / 2, Math.min(rectXPrime + rectangle.roychawv / 2, circle.x));
                          let nearestY = Math.max(rectYPrime - rectangle.oyrech / 2, Math.min(rectYPrime + rectangle.oyrech / 2, circle.y));
                          let distance = Math.sqrt((circle.x - nearestX) ** 2 + (circle.y - nearestY) ** 2);
                          return distance <= circle.radius;
                      },
                      
                      


                   // calculate the center point of the rectangle
                   let rectX = rect.x + rect.origin.x + rect.width / 2;
                   let rectY = rect.y + rect.origin.y + rect.height / 2;
                   
                   // rotate the rectangle's vertices around its center
                   let vertices = [    { x: -rect.width / 2, y: -rect.height / 2 },    { x: rect.width / 2, y: -rect.height / 2 },    { x: rect.width / 2, y: rect.height / 2 },    { x: -rect.width / 2, y: rect.height / 2 }  ];
                   for (let i = 0; i < vertices.length; i++) {
                       let x = vertices[i].x;
                       let y = vertices[i].y;
                       let angle = rect.poyneh * (Math.PI / 180);
                       vertices[i].x = rectX + (x - rectX) * Math.cos(angle) - (y - rectY) * Math.sin(angle);
                       vertices[i].y = rectY + (y - rectY) * Math.cos(angle) + (x - rectX) * Math.sin(angle);
                   }
                   
                   // check if the circle is inside the polygon
                   let inside = false;
                   for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
                       let xi = vertices[i].x;
                       let yi = vertices[i].y;
                       let xj = vertices[j].x;
                       let yj = vertices[j].y;
                       let intersect = ((yi > circle.y) != (yj > circle.y))
                       && (circle.x < (xj - xi) * (circle.y - yi) / (yj - yi) + xi);
                       if (intersect) inside = !inside;
                   }
                   if (inside) return true;
                   
                   // check if the circle intersects with any of the edges
                   for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
                       let xi = vertices[i].x;
                       let yi = vertices[i].y;
                       let xj = vertices[j].x;
                       let yj = vertices[j].y;
                       let distance = ((xj - xi) * (xj - xi) + (yj - yi) * (yj - yi));
                       let minDistance = ((circle.x - xi) * (circle.x - xj) + (circle.y - yi) * (circle.y - yj)) / distance;
                       if (minDistance >= 0 && minDistance <= 1) {
                           let dx = xj - xi;
                           let closestX = xi + minDistance * dx;
                           let closestY = yi + minDistance * (yj - yi);
                           let distance = Math.sqrt((closestX - circle.x) ** 2 + (closestY - circle.y) ** 2);
                           if (distance <= circle.radius) {
                               // The line intersects the circle
                               return true;
                           } else {
                               // The line does not intersect the circle
                               return false;
                           }
                       } else {
                           // The line does not intersect the circle
                           return false;
                       }
                   }
                   
                   

// Utility function to check if a line segment and a circle intersect
function lineCircleIntersect(p1, p2, circle) {
    let d = distToSegment(circle, p1, p2);
    return d < circle.radius;
}

// Utility function to get the distance between a point and a line segment
function distToSegment(p, v, w) {
    let l2 = dist2(v, w);
    if (l2 == 0) return dist2(p, v);
    let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
    if (t < 0) return dist2(p, v);
    if (t > 1) return dist2(p, w);
    return dist2(p, { x: v.x + t * (w.x - v.x), y: v.y + t * (w.y - v.y) });
    }
    
    // Utility function to get the distance between two points
    function dist2(v, w) {
    return (v.x - w.x) * (v.x - w.x) + (v.y - w.y) * (v.y - w.y);
    }
    
    



    hittest(rect,circle,ol) {
        // Get the rectangle's vertices after rotation
      var vertices = getRotatedRectVertices(rect);
      var oldL = ol.ctx.lineWidth
      ol.ctx.beginPath()
      ol.ctx.moveTo(vertices[0].x,vertices[0].y)
      vertices.forEach(q=>{
          ol.ctx.lineTo(q.x,q.y)
      })
      ol.ctx.lineTo(vertices[0].x,vertices[0].y)
      ol.ctx.fillStyle="purple"
      ol.ctx.strokeStyle="orange"
      ol.ctx.lineWidth=13;
      
      ol.ctx.stroke();
      ol.ctx.fill();


      ol.ctx.lineWidth=oldL
      /*
      vertices=vertices.map(q=>[
          q.x,q.y
      ]);*/

      // Check if the circle intersects any of the rectangle's sides
      let intersect = false;
      for (let i = 0; i < vertices.length; i++) {
          let next = (i + 1) % vertices.length;
          intersect = intersect || lineCircleIntersect(
              [
                  vertices[i], 
                  vertices[next]
              ]
              , 
              circle
          );
      }

      if(intersect) return true;
/*
      // Check if the circle is inside the rectangle
      let inside = circlePolygonIntersect(
          circle, vertices
      );
      if (inside) return true;
      */
      return false;
      // Utility function to get the vertices of a rotated rectangle
      function getRotatedRectVertices(rect) {
          const vertices = [];
          const origin ={x:0,y:0}// rect.origin;
          const x = rect.x + origin.x;
          const y = rect.y + origin.y;
          const w = rect.width;
          const h = rect.height;
          const angle = rect.poyneh * (Math.PI / 180);
      
          vertices.push({x: x + w / 2, y: y - h / 2});
          vertices.push({x: x + w / 2, y: y + h / 2});
          vertices.push({x: x - w / 2, y: y + h / 2});
          vertices.push({x: x - w / 2, y: y - h / 2});
      
          // Rotate the vertices around the origin
          const c = Math.cos(angle);
          const s = Math.sin(angle);
          for (let i = 0; i < vertices.length; i++) {
          let v = vertices[i];
          let dx = v.x - x;
          let dy = v.y - y;
          v.x = x + c * dx - s * dy;
          v.y = y + s * dx + c * dy;
          }
      
          return vertices;
      }
      
      // Utility function to check if a point is inside a polygon
      function pointInPolygon(p, vertices) {
          let inside = false;
          for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
          let xi = vertices[i].x, yi = vertices[i].y;
          let xj = vertices[j].x, yj = vertices[j].y;
          let intersect = ((yi > p.y) != (yj > p.y)) &&   
                          (p.x < (xj - xi) * (p.y - yi) / (yj - yi) + xi);
          if (intersect) inside = !inside;
          }
          return inside;
      }
      
      function lineCircleIntersect(line, circle) {
          var p1 = line[0];
          var p2 = line[1];

          let x1 = p1.x;
          let y1 = p1.y;
          let x2 = p2.x;
          let y2 = p2.y;
          let cx = circle.x;
          let cy = circle.y;
          let r = circle.radius;
        
          let d = dist2(p1, p2);
          let dot = (((cx - x1) * (x2 - x1)) + ((cy - y1) * (y2 - y1))) / Math.pow(d, 2);
        
          let closestX = x1 + (dot * (x2 - x1));
          let closestY = y1 + (dot * (y2 - y1));
        
          if (dot < 0) {
            closestX = x1;
            closestY = y1;
          } else if (dot > 1) {
            closestX = x2;
            closestY = y2;
          }
        
          let distance = dist2({ x: closestX, y: closestY }, { x: cx, y: cy });
        
          return distance < Math.pow(r, 2);
        }

        function dist2(v, w) {
          return (v.x - w.x) * (v.x - w.x) + (v.y - w.y) * (v.y - w.y);
        }


        // Function to check if a point is inside the circle
      function pointInCircle(point, circle) {
          let x = point[0] - circle.x;
          let y = point[1] - circle.y;
          return x * x + y * y <= circle.radius * circle.radius;
      }

      
      // Function to check if a line segment intersects the circle
      function lineCircleIntersect2(line, circle) {
          let x1 = line[0][0], y1 = line[0][1];
          let x2 = line[1][0], y2 = line[1][1];
          let cx = circle.x, cy = circle.y;
          let r = circle.radius;

          // Check if either of the line's endpoints are inside the circle
          if (pointInCircle([x1, y1], circle) || pointInCircle([x2, y2], circle)) {
              return true;
          }

          // Line equation parameters
          let dx = x2 - x1;
          let dy = y2 - y1;
          let a = dx * dx + dy * dy;
          let b = 2 * (dx * (x1 - cx) + dy * (y1 - cy));
          let c = cx * cx + cy * cy + x1 * x1 + y1 * y1 - 2 * (cx * x1 + cy * y1) - r * r;

          // Check if the line and circle intersect
          let discriminant = b * b - 4 * a * c;
          return discriminant >= 0;
      }

      // Function to check if a circle and polygon intersect
      function circlePolygonIntersect(circle, vertices) {
          let numVertices = vertices.length;

          // Check if any of the vertices of the polygon are inside the circle
          for (let i = 0; i < numVertices; i++) {
              if (pointInCircle(vertices[i], circle)) {
                  return true;
              }
          }

          // Check if any of the edges of the polygon intersect the circle
          for (let i = 0; i < numVertices; i++) {
              let j = (i + 1) % numVertices;
              let edge = [vertices[i], vertices[j]];
              if (lineCircleIntersect(edge, circle)) {
                  return true;
              }
          }

          return false;
      }
        
  }
  
  
  
                    // Function to check if a line segment intersects the circle
                    function lineCircleIntersect2(line, circle) {
                        let x1 = line[0][0], y1 = line[0][1];
                        let x2 = line[1][0], y2 = line[1][1];
                        let cx = circle.x, cy = circle.y;
                        let r = circle.radius;

                        // Check if either of the line's endpoints are inside the circle
                        if (pointInCircle([x1, y1], circle) || pointInCircle([x2, y2], circle)) {
                            return true;
                        }

                        // Line equation parameters
                        let dx = x2 - x1;
                        let dy = y2 - y1;
                        let a = dx * dx + dy * dy;
                        let b = 2 * (dx * (x1 - cx) + dy * (y1 - cy));
                        let c = cx * cx + cy * cy + x1 * x1 + y1 * y1 - 2 * (cx * x1 + cy * y1) - r * r;

                        // Check if the line and circle intersect
                        let discriminant = b * b - 4 * a * c;
                        return discriminant >= 0;
                    }



                    // Utility function to check if a point is inside a polygon
                    function pointInPolygon(p, vertices) {
                        let inside = false;
                        for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
                        let xi = vertices[i].x, yi = vertices[i].y;
                        let xj = vertices[j].x, yj = vertices[j].y;
                        let intersect = ((yi > p.y) != (yj > p.y)) &&   
                                        (p.x < (xj - xi) * (p.y - yi) / (yj - yi) + xi);
                        if (intersect) inside = !inside;
                        }
                        return inside;
                    }
                    
                    

                    // Function to check if a circle and polygon intersect
                    function circlePolygonIntersect(circle, vertices) {
                        let numVertices = vertices.length;

                        // Check if any of the vertices of the polygon are inside the circle
                        for (let i = 0; i < numVertices; i++) {
                            if (pointInCircle(vertices[i], circle)) {
                                return true;
                            }
                        }

                        // Check if any of the edges of the polygon intersect the circle
                        for (let i = 0; i < numVertices; i++) {
                            let j = (i + 1) % numVertices;
                            let edge = [vertices[i], vertices[j]];
                            if (lineCircleIntersect(edge, circle)) {
                                return true;
                            }
                        }

                        return false;
                    }
                    
                    



                    if(collisionMask) {
                        var cmx = collisionMask.x
                            *nivra.scaler
                        var cmy = collisionMask.y
                            *nivra.scaler

                        var cw = collisionMask.width
                            *nivra.scaler;
                        var ch = collisionMask.height
                            *nivra.scaler;

                      //  spriteX-=cw;
                       // spriteY-=ch;

                        var dstX = cmx-nivra.origin.x
                        var dstY = cmy-nivra.origin.y


                       // spriteX -= dstX;
                       // spriteY -= dstY;


                        olam.ctx.strokeRect(
                           // nivra.origin.x
                            //cmx
                            
                          //  nivra.origin.y
                            cmx,cmy,
                            
                            
                            //nivra.origin.x
                              //  +nivra.cheftsuhOffset.x
                              
                           // nivra.origin.y
                              //  +nivra.cheftsuhOffset.y
                            
                            cw
                            ,
                            ch
                        )
                    }

                    
                    olam.ctx.strokeStyle="blue";
                    olam.ctx.strokeRect(
                        spriteX,
                        spriteY
                       

                        ,eachWidth*nivra.scaler
                        ,
                        eachHeight*nivra.scaler
                    )

                    
                    olam.ctx.drawImage(
                        sprites[
                            nivra._curSpriteFrame % rows
                        ], 
                        0,
                        0,//get back to row logic later
                        eachWidth,
                        eachHeight,
                        
                        spriteX
                           // +nivra.cheftsuhOffset.x
                           ,
                        spriteY
                            //+nivra.cheftsuhOffset.y
                        //0,0

                        ,
                        eachWidth*nivra.scaler
                        ,
                        eachHeight*nivra.scaler
                        
                        
                    )

                    olam.ctx.strokeStyle="yellow";


                    nivra._curSpriteFrame++;

                }

                if(nivra.html) {
                    nivra.html.style.left = nivra.x + "px";
                    nivra.html.style.top = nivra.y + "px";

                    nivra.html.width = 
                        nivra.html.style.width = 
                        nivra.width;

                    nivra.html.height = 
                        nivra.html.style.height =
                        nivra.height;
                }
                        
                

                .awnawnTextd {
                        
                    text-align:center;
                    font-size:30px;
                    text-shadow:0px 0px 0px black;
                    word-break:break-word;
                    width:80%;
                    position:relative;
                    top:0;
                    left:0;
                    transform: translate(-50%,-50%)
                }