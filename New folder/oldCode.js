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