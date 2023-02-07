//B"H


//namespace
function AWTSMOOS(){}




function Oyluhm(opts={}) {

    /*
        unique identifier for HTML elements
    */
    var id = "BH_"
        +Date.now() + "_"
        +Math.floor(
            Math.random() * 7000 + 7000
        );

    /*
        get 2d canvas to fill screen
    */
    var canvas = document.createElement("canvas")
    var ctx = canvas.getContext("2d")
    ctx.filter = ctx.filter = "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9ImZpbHRlciIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVDb21wb25lbnRUcmFuc2Zlcj48ZmVGdW5jUiB0eXBlPSJpZGVudGl0eSIvPjxmZUZ1bmNHIHR5cGU9ImlkZW50aXR5Ii8+PGZlRnVuY0IgdHlwZT0iaWRlbnRpdHkiLz48ZmVGdW5jQSB0eXBlPSJkaXNjcmV0ZSIgdGFibGVWYWx1ZXM9IjAgMSIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48L3N2Zz4=#filter)";

    var parent = opts.parent || document.body;
    parent.classList.add("awtsParent"+id);
    parent.appendChild(canvas)
    
    var peulawAwv = document.createElement("div");
    peulawAwv.className="peulawAwv"//event "holder"
    
    parent.appendChild(peulawAwv)
    canvas.className="awtsCanvas"+id
    addEventListener("resize", resize)
    function resize() {
    
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight    
        
    }
    

    var style = document.createElement("style")
    parent.appendChild(style)
    
    style.innerHTML = /*css*/`
        html,body {
            overflow:hidden
        }
        .awtsParent${id} {
            margin:0;
            position:relative;
            overflow:hidden;
        }
        .awtsCanvas${id} {
            position:absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
        }

        .peulawAwv {
            position:absolute;
            left:0;top:0;
            width:100%;height:100%;
            z-index:18927;
        }
    `

    var zeh = this;

    zeh.ctx = ctx;

    
    zeh.neevrayim = [];
    zeh.keys = [];

    var layers = [];
    this.layers =layers
    this.printKeys = opts.printKeys || false;

    

    
    zeh.Sealayk = nivra => {
        var ind = zeh.neevrayim.indexOf(nivra);
        if(ind > -1) {
            zeh.neevrayim.splice(ind, 1)
            if(nivra.html) {
                nivra.html.parentNode.removeChild(nivra.html)
            }
        }
    }

    var _readyQueue = []
    var _isReady = false;

    zeh.BoyrayNeevrah = nivra => {
        var exists = zeh.neevrayim.indexOf(nivra);
        if(exists < 0) {
            zeh.neevrayim.push(nivra)
            if(!zeh.layers[nivra.layer]) {
                zeh.layers[nivra.layer] = [];
            }
            zeh.layers[nivra.layer].push(nivra)
            if(typeof(
                nivra.heesCheel
            ) == "function") {
                var start = function() {
                    ((nivra,zeh)=>{
                        nivra.heesCheel(
                        nivra, zeh
                        )
                    })(nivra, zeh);
                }

                
                if(_isReady) {
                    start()
                } else {
                    _readyQueue.push(
                        start
                    );
                }
            }
            resize();
        }
    }
    var _frames = 0;
    zeh.HeesHawvoos = () => {
        if(!_isReady) return;
        
        AWTSMOOS.HeesHawvehNeevrah2d(zeh)
        

        _frames++;
    };
    resize();

    var _mouseOptions = opts.mouse || opts.achbar;
    var _achbar = new AWTSMOOS.Neevrah()
    _achbar.enabled = _mouseOptions;

    var _loadedCheftawtseem = {};
    var _spriteSheets = {};

    this.spritesheet = (cheftsaName, opts={}) => 
    new Promise((r,j) => {
        
        if(
            typeof(cheftsaName) != "string" ||
            !_loadedCheftawtseem[cheftsaName]
        ) {
            return j({
                message: "no asset with the name "+cheftsaName,
                code: "NO_ASSET",
                asset: cheftsaName
            })
        }

        if(typeof(opts) != "object") opts={};
        var progress = (p=>typeof(p)=="function"?p:null)
            (opts.progress);
            

        var {
            
            x, y, rows, columns,
            eachHeight,
            eachWidth,
            totalHeight,
            totalWidth,
            collisionMask,
            tseeyoor
        } = _loadedCheftawtseem[cheftsaName];

        console.log(_loadedCheftawtseem[cheftsaName])
        var sprites = [];

        var bitmapHawvtawchos = [];
        var y = 0;
        var x = 0;
        
        
        var total = rows*columns;
        var current = 0;
    //    rows = 2
    
        fetch(tseeyoor)
        .then(b=>b.blob())
        .then((b) => {
            for(
                y = 0;
                y < rows;
                y++
            ) {
                for(
                    x = 0;
                    x < columns
                    ;
                    x++
                ) {
                    bitmapHawvtawchos.push(
                        ((
                            x, y, image,
                            w,h
                        ) => new Promise((r,j) =>{

                                createImageBitmap(
                                    image,
                                    x,
                                    y,
                                    w, h
                                ).then(bit=>{
                                    if(progress) {
                                        progress({
                                            total,
                                            current
                                        })
                                    }
                                    current++;
                                    r(bit)
                                })
                                .catch(j);


                            })
                        )(
                            x * eachWidth,
                            y * eachHeight,
                            b,
                            eachWidth,
                            eachHeight
                        )
                    )
                }
            }
            

            Promise.all(
                bitmapHawvtawchos
            ).then(q=> {
                q.forEach(w=>{
                    sprites.push(w)
                })
    
                _spriteSheets[cheftsaName] = {
                    collisionMask,
                    x, y, rows, columns,
                    eachHeight,
                    eachWidth,
                    totalHeight,
                    totalWidth,
                    sprites
                };
                r(_spriteSheets[cheftsaName])
            })
        })

        

        
        

    });
    Object.defineProperties(
        this, {
            width: {
                get: () => parent.clientWidth
            },
            height: {
                get: () => parent.clientHeight
            },
            achbar: {
                get: ()=>_achbar
            },
            difooseem: {
                get: () => _frames
            },
            isReady: {
                get: () => _isReady
            },
            chefawtseem: {
                get: () => _loadedCheftawtseem
            },
            chawfawtseem: {
                get: () => zeh.chawfawtseem
            },
            spriteSheets: {
                get: () => _spriteSheets
            }
        }
    );

    var shtareem = opts.shtareem || opts.scripts;
    var chawfawtseem = opts.chawfawtseem || opts.assets;
    if(!shtareem || !shtareem.length) {
        beforeAssetsLoad();
    }
    else {
        
        var promises = [];
        shtareem.forEach(q=> {
            promises.push(new Promise((r,j) => {
                AWTSMOOS.Ayzareem.hawveeShtar(q)
                .then(r).catch(j)
            }))
        })
        
        Promise.all(promises)
        .then(q=>{

            beforeAssetsLoad()
        }).catch(e=>{
            console.log("er",e)
            ready()
        })
        
    }

    function beforeAssetsLoad() {
        var bfl = opts.beforeAssetsLoad || opts.bal;
        if(typeof(bfl) == "function") {
            bfl(zeh);
        }

        if(
            !chawfawtseem 
                || typeof(chawfawtseem)
                != "object"
        ) {
            console.log("reall2y?",chawfawtseem)
            ready()
        } else {
            console.log("really?")
            var hawvtawchos = [];
            Object.keys(chawfawtseem).forEach(key=>{
                hawvtawchos.push(new Promise((r,j) => {
                    var val;
                    window.awtsmoosShaweeluh = d => {
                        val = d;
                        r([key,val])
                    };
                    var chef = chawfawtseem[key]
                    var path = typeof(chef) == "string"?chef:null;
                    if(!path) r(null);
                    AWTSMOOS.Ayzareem.hawveeShtar(path)
                    .then(()=>{}).catch(j)
                }))
            })

            Promise.all(hawvtawchos)
            .then(r=>{
                console.log("HI!",a=r)
                r.forEach(q=>{
                    _loadedCheftawtseem[q[0]] = q[1]
                })
                ready()
            }).catch(e=>{
                console.log("er,",e)
                ready()
            })
        }
    }
    function ready() {
        var errorFnc = opts.errors ||
            opts.onErrors;
        var errors = []

        var br = opts.beforeReady || 
            opts.beforeStart ||
            opts.kodemHeescheel ||
            opts.kawdmon;
            
        if(
            typeof(br) == "function" &&
            br &&
            br.constructor &&
            (
                br.constructor.name == "Promise" ||
                br.constructor.name == "AsyncFunction"
            )
        ) {
            
            br(zeh).then((r) => {
                
                done()
            })
            .catch((e)=>{
                
                console
                if(
                   !e.target
                ) {
                    errors.push(e)
                    return done();
                }

                var url = e.target.src||
                    e.target.href
                
                if(url) {
                    
                    fetch(url,
                        { mode: 'no-cors'})
                    .then(r=>{
                        errors.push({derech:url,
                            info:r.status})
                        done();
                    })
                    .catch(er=>{
                        errors.push({
                            derech:url,
                            info:er
                        })
                        done();
                    })
                } else {
                    errors.push(e)
                    done()
                }
                
                
            })
        } else done()

        function done() {
            setupShmeeyuh();
            _readyQueue.forEach(q=>q());
            _isReady = true;
            if(opts.html) {
                AWTSMOOS.html(opts.html, parent)
            }
            if(typeof(errorFnc) == "function") {
                errorFnc(errors.map(q=>q))
            }
        }
        
    }
    

    function setupShmeeyuh/*listen(ors)*/(){
        addEventListener("keydown", e=> {
            zeh.keys[
                e.key
            ] = true;
            console.log(e.key)
        })
    
        addEventListener("keyup", e=>{
            zeh.keys[
                e.key
            ] = false;
            if(
                this.printKeys
            ) {
                console.log(e.key)
            }
        });

        if(_mouseOptions) {
            achbarShmeeyuh()
            touchEvents()
        }


    }


    function touchEvents() {
        parent.addEventListener("touchstart",e=>{
            _achbar.clicked = true;
            _achbar.x = e.touches[0].clientX;
            _achbar.y = e.touches[0].clientY
        })

        parent.addEventListener("touchend",e=>{
            _achbar.clicked = false;

        })

        parent.addEventListener("touchmove",e=>{
            //console.log(e.touches[0])
            _achbar.x = e.touches[0].clientX;
            _achbar.y = e.touches[0].clientY
        })
    }
    function achbarShmeeyuh() {/*mouse listener(s)*/
        parent.addEventListener("mousemove", e=> {
            _achbar.x = e.offsetX;
            _achbar.y = e.offsetY
        })
        
        parent.addEventListener("mousedown", e=> {
            _achbar.clicked = true;
        })
        
        parent.addEventListener("mouseup", e=> {
            _achbar.clicked = false;
        })
    }



}

(() => {
    var eekar = AWTSMOOS;

    eekar.defaultSize = 32;
    eekar.defaultColor = "blue";
    eekar.defaultShape = "reebooyah"//rect

    var _curBreeyuh = null;

    var _secretCanvas = document.createElement("canvas");
        //used for helper canvas operatiosn
    var _ctx = _secretCanvas.getContext("2d");


    
    Object.defineProperties(eekar, {
        Neefgash: {
            get:  () => function() {
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

                
                
                bottomEdge.addEventListener("mousedown", function(e) {
                    const startingHeight = parseInt(window.getComputedStyle(html).height, 10);
                    const startingY = e.clientY;
                
                    function handleResize(e) {
                        html.style.height = startingHeight + e.clientY - startingY + "px";
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



                //Create event listeners for the edges and corners to handle resizing

                //Top edge
                topEdge.addEventListener("mousedown", function(event) {
                    startY = event.clientY;
                    startHeight = parseInt(window.getComputedStyle(html).getPropertyValue("height"), 10);
                    document.addEventListener("mousemove", mouseMoveTopEdge);
                    document.addEventListener("mouseup", mouseUp);
                });

                function mouseMoveTopEdge(event) {
                    const newHeight = startHeight + (startY - event.clientY);
                    html.style.height = newHeight + "px";
                }

                //Right edge
                rightEdge.addEventListener("mousedown", function(event) {
                    startX = event.clientX;
                    startWidth = parseInt(window.getComputedStyle(html).getPropertyValue("width"), 10);
                    document.addEventListener("mousemove", mouseMoveRightEdge);
                    document.addEventListener("mouseup", mouseUp);
                });

                function mouseMoveRightEdge(event) {
                    const newWidth = startWidth + (event.clientX - startX);
                    html.style.width = newWidth + "px";
                }

                //Bottom edge
                bottomEdge.addEventListener("mousedown", function(event) {
                    startY = event.clientY;
                    startHeight = parseInt(window.getComputedStyle(html).getPropertyValue("height"), 10);
                    document.addEventListener("mousemove", mouseMoveBottomEdge);
                    document.addEventListener("mouseup", mouseUp);
                });

                function mouseMoveBottomEdge(event) {
                    const newHeight = startHeight + (event.clientY - startY);
                    html.style.height = newHeight + "px";
                }

                //Left edge
                leftEdge.addEventListener("mousedown", function(event) {
                    startX = event.clientX;
                    startWidth = parseInt(window.getComputedStyle(html).getPropertyValue("width"), 10);
                    document.addEventListener("mousemove", mouseMoveLeftEdge);
                    document.addEventListener("mouseup", mouseUp);
                });

                function mouseMoveLeftEdge(event) {
                    const newWidth = startWidth + (startX - event.clientX);
                    html.style.width = newWidth + "px";
                }

                //Top-left corner
                topLeftCorner.addEventListener("mousedown", function(event) {
                    startX = event.clientX;
                    startY = event.clientY;
                    startWidth = parseInt(window.getComputedStyle(html).getPropertyValue("width"), 10);
                    startHeight = parseInt(window.getComputedStyle(html).getPropertyValue("height"), 10);
                    document.addEventListener("mousemove", mouseMoveTopLeftCorner);
                    document.addEventListener("mouseup", mouseUp);
                });

                function mouseMoveTopLeftCorner(event) {
                    const newWidth = startWidth + (startX - event.clientX);
                    html.style.width = newWidth + "px";
                    const newHeight = startHeight + (startY - event.clientY);
                    html.style.height = newHeight + "px";
                    html.style.left = startLeft - (startX - event.clientX) + "px";
                    html.style.top = startTop - (startY - event.clientY) + "px";
                }
                
                topLeftCorner.addEventListener("mousedown", (event) => {
                    startX = event.clientX;
                    startY = event.clientY;
                    startWidth = parseInt(html.style.width.slice(0, -2));
                    startHeight = parseInt(html.style.height.slice(0, -2));
                    startLeft = parseInt(html.style.left.slice(0, -2));
                    startTop = parseInt(html.style.top.slice(0, -2));
                    window.addEventListener("mousemove", mouseMoveTopLeftCorner);
                });
                
                window.addEventListener("mouseup", () => {
                    window.removeEventListener("mousemove", mouseMoveTopLeftCorner);
                });

                function mouseMoveTopRightCorner(event) {
                    const newWidth = startWidth + (event.clientX - startX);
                    html.style.width = newWidth + "px";
                    const newHeight = startHeight + (startY - event.clientY);
                    html.style.height = newHeight + "px";
                    html.style.top = startTop - (startY - event.clientY) + "px";
                }
                
                topRightCorner.addEventListener("mousedown", (event) => {
                    startX = event.clientX;
                    startY = event.clientY;
                    startWidth = parseInt(html.style.width.slice(0, -2));
                    startHeight = parseInt(html.style.height.slice(0, -2));
                    startTop = parseInt(html.style.top.slice(0, -2));
                    window.addEventListener("mousemove", mouseMoveTopRightCorner);
                });
                
                window.addEventListener("mouseup", () => {
                    window.removeEventListener("mousemove", mouseMoveTopRightCorner);
                });

                function mouseUp() {
                    document.removeEventListener("mousemove", mouseMoveTopEdge);
                    document.removeEventListener("mousemove", mouseMoveRightEdge);
                    document.removeEventListener("mousemove", mouseMoveBottomEdge);
                    document.removeEventListener("mousemove", mouseMoveLeftEdge);
                    document.removeEventListener("mousemove", mouseMoveTopRightCorner);
                    document.removeEventListener("mousemove", mouseMoveBottomRightCorner);
                    document.removeEventListener("mousemove", mouseMoveBottomLeftCorner);
                    document.removeEventListener("mousemove", mouseMoveTopLeftCorner);
                    document.removeEventListener("mouseup", mouseUp);
                }

                topLeftCorner.addEventListener("mousedown", (event) => {
                    startX = event.clientX;
                    startY = event.clientY;
                    startWidth = parseInt(html.style.width.slice(0, -2));
                    startHeight = parseInt(html.style.height.slice(0, -2));
                    startLeft = parseInt(html.style.left.slice(0, -2));
                    startTop = parseInt(html.style.top.slice(0, -2));
                    window.addEventListener("mousemove", mouseMoveTopLeftCorner);
                });

                window.addEventListener("mouseup", () => {
                    window.removeEventListener("mousemove", mouseMoveTopLeftCorner);
                });


                // Mousemove functions for corner resizing
                function mouseMoveBottomRightCorner(event) {
                    const newWidth = startWidth + (event.clientX - startX);
                    html.style.width = newWidth + "px";
                    const newHeight = startHeight + (event.clientY - startY);
                    html.style.height = newHeight + "px";
                }

                bottomRightCorner.addEventListener("mousedown", function(event) {
                    startX = event.clientX;
                    startY = event.clientY;
                    startWidth = parseInt(window.getComputedStyle(html).getPropertyValue("width"), 10);
                    startHeight = parseInt(window.getComputedStyle(html).getPropertyValue("height"), 10);
                    document.addEventListener("mousemove", mouseMoveBottomRightCorner);
                    document.addEventListener("mouseup", mouseUp);
                });

                function mouseMoveBottomLeftCorner(event) {
                    const newWidth = startWidth + (startX - event.clientX);
                    html.style.width = newWidth + "px";
                    const newHeight = startHeight + (event.clientY - startY);
                    html.style.height = newHeight + "px";
                }
                
                bottomLeftCorner.addEventListener("mousedown", function(event) {
                    startX = event.clientX;
                    startY = event.clientY;
                    startWidth = parseInt(window.getComputedStyle(container).getPropertyValue("width"), 10);
                    startHeight = parseInt(window.getComputedStyle(container).getPropertyValue("height"), 10);
                    document.addEventListener("mousemove", mouseMoveBottomLeftCorner);
                    document.addEventListener("mouseup", mouseUp);
                });

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

                var _scaleTransform = ""
                var _translateTransform = ""
               

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

            }
        },
        
        html:  {
            get: () =>(opts={},par) => {
                        
                var isOuterHTML = false
                if(typeof(opts) == "string") {
                    isOuterHTML = opts;
                    opts = {
                        tag: "div",
                        innerHTML: opts
                    }
                    
                }


                var tag = opts.tag || opts.label 
                    ||"div";
                var el = document.createElement(tag);
                var children = opts.children ||
                    opts.toldos ||
                    opts.tolda ||
                    opts.child ||
                    opts.ben || 
                    opts.bas ||
                    opts.yeled ||
                    opts.yelawdeem;
                
                var childElements = () => el.children;
                var getChild = nm => {
                    if(typeof(nm) == "string")
                        return childElements().find(q=>q.shaym == nm)
                    else if(typeof(nm) == "object") {
                        return childElements().find(q=>{
                            var matches = true;
                            Object.keys(nm).forEach(k=>{
                                if(q[k] !== nm[k]) {
                                    matches = false
                                }
                            })
                            return matches
                        })
                    }
                }
                var parent = 
                    par || 
                    opts.parent || opts.av ||document.body;

                if(AWTSMOOS.Ayzareem.isElement(parent)) {
                    parent.appendChild(el);
                    Object.keys(opts)
                    .forEach(q=>{
                        
                        el[q] = opts[q]
                        
                    })
                }

                if(
                    children
                
                ) {
                    var _chil
                    if(typeof(children) == "object") {
                        _chil = children
                    } else if(typeof(children) == "function") {
                        _chil = children(getChild)
                    }
                    if(_chil) {
                        if(_chil.forEach) {
                            _chil.forEach(q=>{
                                q.av = el;
                                AWTSMOOS.html(q,el)
                            })
                        } else {
                            _chil.av = el;
                            AWTSMOOS.html(_chil,el)
                        }
                        
                        
                        
                    }
                }

                if(isOuterHTML) {
                    el.outerHTML = isOuterHTML
                }
                var st = opts.start || opts.ready ||
                    opts.heesCheel;

                if(typeof(st) == "function") {
                    st(el, getChild)
                }

                return el;
            }
        },
        Ayzareem: {
            
            get: ()=> ({
                fitRectGetScale/*just get scale to fit one rect to other*/(
                    rectSrc,rectDst
                ) {
                    return Math.min(
                        rectDst.width/rectSrc.width,
                        rectDst.height/rectSrc.height  
                    )
                },
                fitRectToRectKeepAspect(rectSrc/*target*/,rectToFitToSrc) {
                    var ws = rectSrc.width;
                    var hs = rectSrc.height;
                    var wo/*original width*/=rectToFitToSrc.width;
                    var ho = rectToFitToSrc.height;

                    var adjustedW = wo;
                    var adjustedH = ho;

                    var srcAspect = ws/hs;
                    var curAspect = wo/ho;

                    if(
                        curAspect > srcAspect
                    ) {
                        adjustedH = hs;
                        adjustedW = curAspect * hs;
                    } else {
                        adjustedW = ws;
                        adjustedH = hs / curAspect
                    }

                    return /*new dimensions*/{
                        width: adjustedW,
                        height: adjustedH
                    }
                },
                encodeCheftsa(dayuh/*data*/){
                    return new Blob([
                        "//B\"H<br><script>\n"
                        +"if(!window.awtsmoosShaweeluh)"
                        +"awtsmoosShaweeluh=(d)=>console.log(r=d);\n"
                        +"awtsmoosShaweeluh("+
                            dayuh
                        +");\n//</scr"+"ipt>"
                    ],{
                        type: "text/html"
                    })
                },
                colorNameToRGB(colorName) {
                    _secretCanvas.width = 1;
                    _secretCanvas.height= 1;
                    _ctx.clearRect(0,0,1,1);
                    _ctx.fillStyle = colorName;
                    _ctx.fillRect(0,0,1,1);
                    var data = _ctx.getImageData(0,0,1,1);
                    return {
                        r:data[0],
                        g:data[1],
                        b:data[2]
                    }
                },
                isElement: () => el =>
                   el instanceof Element ||
                   el instanceof HTMLDocument ||
                   el instanceof HTMLElement
                ,
                hawveeShtar: (derech) => new Promise((r,j) => {
                    var sc = document.createElement("script")
                    sc.src=derech
                    
                    sc.onerror = j;
                    sc.onload = r;

                    document.body.appendChild(sc);
                })
            })
        },
        Oyluhm: {
            get: () => Oyluhm
        },
        Neevrah: {
            get: () => function(opts={}) {
                this.x = opts.x || 0
                this.y = opts.y || 0
                //TODO, 3d, add z eventually
                this.roychawv = opts.width || 
                    opts.roychawv ||
                    eekar.defaultSize
                this.oyrech = opts.height ||
                    opts.oyrech ||
                    eekar.defaultSize;
                
                this.poyneh/*angle/turn*/ = 
                    opts.poyneh ||
                    opts.rotate || 
                    opts.angle  || 0;
                
                
                Object.defineProperties(
                    this, {
                        width: {
                            get: () => this.roychawv,
                            set: v  => {
                                this.roychawv = v;
                            }
                        },
                        height: {
                            get: () => this.oyrech,
                            set: v  => {
                                this.oyrech = v;
                            }
                        },
                        rotation: {
                            get: () => this.poyneh,
                            set: v  => this.poyneh = v
                        }
                    }
                )
            }
        },
        Domem: {
            get: () => function(opts={}) {
                eekar.Neevrah.call(this, opts);
                this.origin = {/*localOrigin*/
                    x: 0,
                    y: 0
                };
                this.alpha = opts.alpha;

                this.layer = opts.layer || 0;
                this.gawvawn = opts.gawvawn ||
                    opts.color || 
                    eekar.defaultColor
                
                this.choymer = opts.choymer ||
                    opts.chomer ||
                    opts.shape ||
                    eekar.defaultShape
                
                
        
                
                
        
                var _spriteSheet = opts.sprite 
                    || opts.tseeooyr ||
                    opts.spriteSheet||opts.spritesheet;
                
                
                var optsO = opts.origin || this.origin;
                if(typeof(optsO) == "function") {
                    optsO = optsO(this)
                }
                
                if(optsO.x) {
                    this.origin.x = 
                    optsO.x
                }
        
                if(optsO.y) {
                    this.origin.y = 
                    optsO.y
                }

                
                var _cheftsuhInfo;
                var _scaler = null;
                var _cheftsuhOffset = {
                    x:0,y:0
                }

                this.heesCheel = (me, olam) => {
                    var hees = opts.heesCheel ||
                    opts.start || null;
                    
                    if(_spriteSheet) {
                        var ch = olam.chefawtseem[_spriteSheet];
                        if(ch) {
                            _cheftsuhInfo = ch;
                            if(ch.collisionMask) {
                                _scaler = AWTSMOOS
                                .Ayzareem
                                .fitRectGetScale(
                                    
                                    ch.collisionMask,
                                    this
                                )
                            }
                        }
                    }

                    this.heesHawvoos = (me,olam) => {
                        var heesHawv = opts.heesHawvoos ||
                        opts.update || null;
                        
                        if(_cheftsuhInfo) {
                            if(_cheftsuhInfo.collisionMask) {
                                _cheftsuhOffset.x = 
                                _cheftsuhInfo.collisionMask.x - 
                                this.x;

                                _cheftsuhOffset.y = 
                                _cheftsuhInfo.collisionMask.y - 
                                this.y;

                                _scaler = AWTSMOOS
                                .Ayzareem
                                .fitRectGetScale(
                                    
                                    ch.collisionMask,
                                    this
                                )
                                var scaledColW = _cheftsuhInfo
                                .collisionMask
                                .width * _scaler;

                                var scaledColH = _cheftsuhInfo
                                .collisionMask
                                .height * _scaler;

                                if(
                                    this.width >
                                    scaledColW

                                ) {
                                    this.width = scaledColW
                                    
                                }

                                if(
                                    this.height >
                                    scaledColH

                                ) {
                                    this.height = scaledColH
                                    
                                }
                            }
                            
                        }
                        if(typeof(heesHawv) == "function") {
                            heesHawv(me, olam);
                        }
                        
                    };

                    if(typeof(hees) == "function") {
                        hees(me, olam)
                    }
                };

                this.dayuh = opts.dayuh||{};
                if(typeof(this.dayuh) == "function") {
                    this.dayuh = this.dayuh(this)
                }
                var _html;
                
                Object.defineProperties(this, {
                    radius: {
                        get: () => Math.max
                            (this.width,this.height)/2
                    },
                    spriteSheet: {
                        get: () => _spriteSheet?
                        _spriteSheet:null
                    },
                    scaler: {
                        get: () => _scaler
                    },
                    cheftsuhOffset: {
                        get: () => _cheftsuhOffset
                    },
                    cheftsuh: {
                        get: () => {
                            if(_cheftsuhInfo) {
                                return _cheftsuhInfo;
                            }
                        }, set: v => {
                            _cheftsuhInfo = v;
                        }
                    },
                    html: {
                        get: () => _html,
                        set: v => {
                            if(typeof(v) == "function") {
                                v = v(this)
                            }

                            if(
                                typeof(v) == "object" ||
                                typeof(v) == "string" && v
                            ) {
                            
                                _html = AWTSMOOS.html(v)
                                _html.style.position = "absolute"
                                _html.style.display="block"
                            }
                            

                        }
                    }
                })

                this.html = opts.html
            }
        },
        Gawshmeeyoos: {
            get: () => ({
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

                    // Check if the circle is inside the rectangle
                    let inside = circlePolygonIntersect(
                        circle, vertices
                    );
                    if (inside) return true;
                    
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
                        let x = point.x - circle.x;
                        let y = point.y - circle.y;
                        return x * x + y * y <= circle.radius * circle.radius;
                    }

                    
                    function circlePolygonIntersect(circle, polygon) {
                        for (let i = 0; i < polygon.length - 1; i++) {
                          const lineStart = polygon[i];
                          const lineEnd = polygon[i + 1];
                          const closestPoint = closestPointOnSegment(circle.x, circle.y, lineStart, lineEnd);
                          const distance = distanceBetweenPoints(circle.x, circle.y, closestPoint.x, closestPoint.y);
                          if (distance < circle.radius) {
                            return true;
                          }
                        }
                      
                        const lastLineStart = polygon[polygon.length - 1];
                        const firstLineEnd = polygon[0];
                        const closestPoint = closestPointOnSegment(circle.x, circle.y, lastLineStart, firstLineEnd);
                        const distance = distanceBetweenPoints(circle.x, circle.y, closestPoint.x, closestPoint.y);
                        if (distance < circle.radius) {
                          return true;
                        }
                      
                        return false;
                      }
                      
                      function closestPointOnSegment(x, y, lineStart, lineEnd) {
                        const lerpValue = Math.max(0, Math.min(1, ((x - lineStart.x) * (lineEnd.x - lineStart.x) + (y - lineStart.y) * (lineEnd.y - lineStart.y)) /
                          ((lineEnd.x - lineStart.x) ** 2 + (lineEnd.y - lineStart.y) ** 2)));
                        return {
                          x: lineStart.x + lerpValue * (lineEnd.x - lineStart.x),
                          y: lineStart.y + lerpValue * (lineEnd.y - lineStart.y),
                        };
                      }
                      
                      function distanceBetweenPoints(x1, y1, x2, y2) {
                        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                      }
                      
                },
                getBoundingBox(rect) {
                    var {
                        x, y, width, height, rotation
                    } = rect;
                },
                neekreh/*random*/(min, max) {
                    return (
                        Math.random() * (
                            max - min
                        ) + min
                    )
                },
                rect2rectHittest(rect1,rect2){
                    return (
                        rect1.x < rect2.x+rect2.width &&
                        rect1.x + rect1.width > rect2.x &&
                        rect1.y <rect2.y+rect2.height &&
                        rect1.y + rect1.height > rect2.y
                    );
                    
                },
                
            }),
            
        },
        
        SeyderHabreeuh/*
            order / list of creation
            (shapes)
        */: {
            get: () => ({
                "reebooyah": (nivra, olam) => {
                    olam.ctx.fillRect(
                        -nivra.width/2,
                        -nivra.height/2,

                        nivra.roychawv,
                        nivra.oyrech 
                    )
                },
                "eegool"/*circle*/:(nivra, olam) => {
                    olam.ctx.beginPath()
                    olam.ctx.arc(
                        0,
                        0,
                        nivra.radius,
                        0/*start*/,
                        2*Math.PI/*all angels for circle*/,
                        false
                    );
                    olam.ctx.fill()
                }
            })
        },
        HeesHawvehNeevrah2d: {
            get: () => (olam) => {
                olam.ctx.clearRect(
                    0,0,
                    olam.ctx.canvas.width,
                    olam.ctx.canvas.height
                );
                
                olam.ctx
                    .canvas
                    .width =
                olam.ctx
                    .canvas
                    .width;
        
                olam.ctx.fillStyle = "black"
                
        
                olam.ctx
                .setTransform(
                    1,0,0,
                    1,0,0
                )
                
                
                    
                olam.layers.forEach(layer => {
                    layer.forEach(nivra => {
                        if(
                            typeof(
                                nivra.heesHawvoos
                            ) == "function"
                        ) {
                            nivra.heesHawvoos(
                                nivra, olam
                            )
                        }
                        olam.ctx.globalAlpha = 1;
                        olam.ctx.fillStyle = nivra.gawvawn;
                        if(nivra.alpha) {
                            olam.ctx.globalAlpha = nivra.alpha;
                        }
                        olam.ctx.setTransform(
                            1/*scaleX*/,
                            0,/*rotateX, do manually later*/
                            0,/*rotateY...*/
                            1,/*scaleY*/
                            nivra.x
                            
                            ,/*translateX amount*/
                            nivra.y
                            
                            ,
                        )
                        
                        if(
                            nivra.poyneh
                        ) {
                            olam.ctx.rotate(
                                nivra.poyneh * (
                                    Math.PI / 180
                                )
                            );
                        }
                
                        _curBreeyuh = eekar.SeyderHabreeuh[nivra.choymer];
                        
                        if(
                            typeof(_curBreeyuh) 
                            != "function"
                        ) return;
                        
                        _curBreeyuh(nivra, olam);
                        
                        

                        if(nivra.spriteSheet) {
                            
                            if(!olam.spriteSheets[
                                nivra.spriteSheet
                            ]) {
                               // console.log(444)
                                return;
                            }

                            if(
                                typeof(nivra._curSpriteFrame)
                                != "number"
                            ) {
                                nivra._curSpriteFrame = 0;
                            }
                            var {
                                totalWidth,
                                totalHeight,
                                eachWidth,
                                eachHeight,
                                image,
                                rows,
                                columns,
                                sprites,
                                collisionMask

                            } = olam.spriteSheets[
                                nivra.spriteSheet
                            ];
                            var spriteX = 0//nivra.origin.x;
                            var spriteY = 0//nivra.origin.y;
                            
                            var scw = eachWidth*nivra.scaler
                            var sch = eachHeight*nivra.scaler//scaled height

                            var offsetX = 0;
                            var offsetY = 0;

                            offsetX -= nivra.width/2;
                            offsetY -= nivra.height/2;

                            //offsetY -= sch/2
                            //offsetX += scw/2
                            if(collisionMask) {
                                var cmx = collisionMask.x
                                    *nivra.scaler

                                var cmy = collisionMask.y
                                    *nivra.scaler

                                var cw = collisionMask.width
                                    *nivra.scaler;

                                var ch = collisionMask.height
                                    *nivra.scaler;
                              //  var dif = nivra.x - cmx;

                                offsetX -= cmx
                                offsetY -= cmy
                              //  spriteX-=cw;
                               // spriteY-=ch;

                                var dstX = cmx-nivra.origin.x
                                var dstY = cmy-nivra.origin.y


                               // spriteX -= dstX;
                               // spriteY -= dstY;


                                olam.ctx.strokeRect(
                                   
                                    cmx + offsetX,
                                    cmy + offsetY,
                                    
                                   
                                    cw
                                    ,
                                    ch
                                )
                            }

                            
                            olam.ctx.strokeStyle="cyan";
                            olam.ctx.strokeRect(
                                spriteX+offsetX,
                                spriteY+offsetY
                               

                                ,
                                scw
                                ,
                                sch
                            )

                            
                            olam.ctx.drawImage(
                                sprites[
                                    nivra._curSpriteFrame % rows
                                ], 
                                0,
                                0,//get back to row logic later
                                eachWidth,
                                eachHeight,
                                
                                spriteX+offsetX
                                   // +nivra.cheftsuhOffset.x
                                   ,
                                spriteY+offsetY
                                    //+nivra.cheftsuhOffset.y
                                //0,0

                                ,
                                scw
                                ,
                                sch
                                
                                
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
                        
                        
                    })
                    
                })
                
            }
        }
    })
    

function getRotatedRectanglePoints(rect) {
  let x = rect.x;
  let y = rect.y;
  let w = rect.width;
  let h = rect.height;
  let r = rect.rotation * Math.PI/180;

  let x1 = x + (w/2) * Math.cos(r) - (h/2) * Math.sin(r);
  let y1 = y + (w/2) * Math.sin(r) + (h/2) * Math.cos(r);

  let x2 = x + (w/2) * Math.cos(r) + (h/2) * Math.sin(r);
  let y2 = y - (w/2) * Math.sin(r) + (h/2) * Math.cos(r);

  let x3 = x - (w/2) * Math.cos(r) + (h/2) * Math.sin(r);
  let y3 = y - (w/2) * Math.sin(r) - (h/2) * Math.cos(r);

  let x4 = x - (w/2) * Math.cos(r) - (h/2) * Math.sin(r);
  let y4 = y + (w/2) * Math.sin(r) - (h/2) * Math.cos(r);

  return [[x1,y1], [x2,y2], [x3,y3], [x4,y4]];
}

function detectLineCircleCollision(lineStart, lineEnd, circle) {
  let x1 = lineStart[0];
  let y1 = lineStart[1];
  let x2 = lineEnd[0];
  let y2 = lineEnd[1];

  let cx = circle.x;
  let cy = circle.y;
  let r = circle.radius;
    
  let dx = x2 - x1;
  let dy = y2 - y1;
  let fx = x1 - cx;
  let fy = y1 - cy;

  let a = dx * dx + dy * dy;
  let b = 2 * (fx * dx + fy * dy);
  let c = fx * fx + fy * fy - r * r;

  console.log(
    "Hi ChatGPT, heres lineStart",
    lineStart,"lineEnd",
    lineEnd,"circle info:",{
       x:circle.x,
       y:circle.y,
       radius:circle.radius
    }
  )
  if (a <= 0.0000001) {
    return false;
  }

  let discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return false;
  }

  let t1 = (-b - Math.sqrt(discriminant)) / (2 * a);
  let t2 = (-b + Math.sqrt(discriminant)) / (2 * a);
  if (t1 >= 0 && t1 <= 1 || t2 >= 0 && t2 <= 1) {
    return true;
  }
  
  return false;
}   
    
function rotatePoint(x, y, centerX, centerY, angle) {
    let newX = Math.cos(angle) * (x - centerX) - Math.sin(angle) * (y - centerY) + centerX;
    let newY = Math.sin(angle) * (x - centerX) + Math.cos(angle) * (y - centerY) + centerY;
    return {
        x: newX,
        y: newY
    };
}
function isCircleIntersectingLine(circleX, circleY, circleRadius, lineX1, lineY1, lineX2, lineY2) {
    // Find the closest point on the line to the center of the circle
    const dx = lineX2 - lineX1;
    const dy = lineY2 - lineY1;
    const t = ((circleX - lineX1) * dx + (circleY - lineY1) * dy) / (dx * dx + dy * dy);
    let closestX = lineX1 + t * dx;
    let closestY = lineY1 + t * dy;

    // If t is less than 0, the closest point is lineX1, lineY1
    if (t < 0) {
        closestX = lineX1;
        closestY = lineY1;
    }

    // If t is greater than 1, the closest point is lineX2, lineY2
    if (t > 1) {
        closestX = lineX2;
        closestY = lineY2;
    }

    // Check if the distance between the center of the circle and the closest point on the line is less than the radius of the circle
    const distance = Math.sqrt((circleX - closestX) ** 2 + (circleY - closestY) ** 2);
    return distance < circleRadius;
}
function isPointInsideRectangle(rectX, rectY, rectWidth, rectHeight, rectRotation, pointX, pointY) {
    const rectCenterX = rectX + rectWidth / 2;
    const rectCenterY = rectY + rectHeight / 2;

    const unrotatedX = (pointX - rectCenterX)
     * Math.cos(rectRotation) 
    + (pointY - rectCenterY) 
    * Math.sin(rectRotation)
     + rectCenterX;

    const unrotatedY = -(pointX - rectCenterX) 
    * Math.sin(rectRotation) 
    + (pointY - rectCenterY) 
    * Math.cos(rectRotation) + rectCenterY;

    if (
        unrotatedX >= rectX && 
        unrotatedX <= rectX + rectWidth && 
        unrotatedY >= rectY && 
        unrotatedY <= rectY + rectHeight
    ) {
        return true;
    }

    return false;
}

// Helper function to check if a point is within an oval
function isPointInOval(x, y, oval) {
    let ovalX = oval.x + oval.width / 2;
    let ovalY = oval.y + oval.height / 2;
    let halfWidth = oval.width / 2;
    let halfHeight = oval.height / 2;
    let normalizedX = (x - ovalX) / halfWidth;
    let normalizedY = (y - ovalY) / halfHeight;
    return normalizedX * normalizedX + normalizedY * normalizedY <= 1;
}
function getDistance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }

  
//check if a point is inside a circle
function isPointInsideCircle(cx, cy, cradius, px, py) {
    let distance = distanceBetweenPoints(cx, cy, px, py);
    return distance <= cradius;
  }
  
  //find the distance between two points
  function distanceBetweenPoints(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }
})()
