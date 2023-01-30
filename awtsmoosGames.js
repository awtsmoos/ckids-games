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

    canvas.className="awtsCanvas"+id
    addEventListener("resize", resize)
    function resize() {
    
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight    
        
    }
    

    var style = document.createElement("style")
    parent.appendChild(style)
    
    style.innerHTML = `
        .awtsParent${id} {
            margin:0;
            position:relative;

        }
        .awtsCanvas${id} {
            position:absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
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
        }
    }
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
                nivra.heesCheel(
                    nivra, zeh
                )
            }
            resize();
        }
    }
    var _frames = 0;
    zeh.HeesHawvoos = () => {
        
        
        AWTSMOOS.HeesHawvehNeevrah2d(zeh)
        

        _frames++;
    };
    resize();

    var _mouseOptions = opts.mouse || opts.achbar;
    var _achbar = new AWTSMOOS.Neevrah()
    _achbar.enabled = _mouseOptions;

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
            }
        }
    );

    setupShmeeyuh();

    function setupShmeeyuh/*listen(ors)*/(){
        addEventListener("keydown", e=> {
            zeh.keys[
                e.key
            ] = true;
            
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
        }


    }

    function achbarShmeeyuh() {/*mouse listener(s)*/
        addEventListener("mousemove", e=> {
            _achbar.x = e.offsetX;
            _achbar.y = e.offsetY
        })
        
        addEventListener("mousedown", e=> {
            _achbar.clicked = true;
        })
        
        addEventListener("mouseup", e=> {
            _achbar.clicked = false;
        })
    }

}

(() => {
    var eekar = AWTSMOOS;

    eekar.defaultSize = 32;
    eekar.defaultColor = "blue";
    eekar.defaultShape = "reebooyah"//rect
    
    
    eekar.Neevrah = function(opts={}) {
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
                    get: () => this.roychawv
                },
                height: {
                    get: () => this.oyrech
                },
                rotation: {
                    get: () => this.poyneh,
                    set: v  => this.poyneh = v
                }
            }
        )
    }

    eekar.Domem = function(opts={}) {
        eekar.Neevrah.call(this, opts);
        this.origin = {/*localOrigin*/
            x: 0,
            y: 0
        };
        
        this.layer = opts.layer || 0;
        this.gawvawn = opts.gawvawn ||
            opts.color || 
            eekar.defaultColor
        
        this.choymer = opts.choymer ||
            opts.chomer ||
            opts.shape ||
            eekar.defaultShape

        this.heesCheel = opts.heesCheel ||
            opts.start || null;

        
        this.heesHawvoos = opts.heesHawvoos ||
            opts.update || null;

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
    }


    

    eekar.Gawshmeeyoos = {
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
        hittest(rect1,rect2) {
            return (
                rect1.x < rect2.x+rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y <rect2.y+rect2.height &&
                rect1.y + rect1.height > rect2.y
            )
        }
    }

    eekar.SeyderHabreeuh/*
        order / list of creation
        (shapes)
    */= {
        "reebooyah": (nivra, olam) => {
            olam.ctx.fillRect(
                nivra.origin.x,
                nivra.origin.y,
                nivra.roychawv ,
                nivra.oyrech 
            )
        },
        "eegool"/*circle*/:(nivra, olam) => {
            olam.ctx.beginPath()
            olam.ctx.arc(
                nivra.origin.x+
                nivra.width/2,
                nivra.origin.y+
                nivra.height/2,
                (
                    nivra.width / 2 + 
                    nivra.height /2 
                ) / 2/*average between
                    width and height, radius*/,
                0/*start*/,
                2*Math.PI/*all angels for circle*/,
                false
            );
            olam.ctx.fill()
        }
    };

    var _curBreeyuh = null;
   
    eekar.HeesHawvehNeevrah2d  = (olam) => {
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
                olam.ctx.fillStyle = nivra.gawvawn;
                olam.ctx.setTransform(
                    1/*scaleX*/,
                    0,/*rotateX, do manually later*/
                    0,/*rotateY...*/
                    1,/*scaleY*/
                    nivra.x,/*translateX amount*/
                    nivra.y,
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
        
                
            })
            
        })
        
    }

})()
