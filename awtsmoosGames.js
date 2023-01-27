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

    this.printKeys = opts.printKeys || false;
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
    })

    zeh.BoyrayNeevrah = nivra => {
        var exists = zeh.neevrayim.indexOf(nivra);
        if(exists < 0) {
            zeh.neevrayim.push(nivra)
            if(typeof(
                nivra.heesCheel == "function"
            )) {
                nivra.heesCheel(
                    nivra, zeh
                )
            }
            resize();
        }
    }

    zeh.Heeshawvoos = () => {
        ctx.clearRect(
            0,0,
            ctx.canvas.width,
            ctx.canvas.height
        )
        ctx.fillStyle = "black"
        zeh.neevrayim.forEach(n => {
            AWTSMOOS.HeesHawvehNeevrah2d(n, zeh)
        })
    };
    resize();
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
        
        this.gawvawn = opts.gawvawn ||
            opts.color || 
            eekar.defaultColor
        
        this.choymer = opts.choymer ||
            opts.shape ||
            eekar.defaultShape

        this.heesCheel = opts.heesCheel ||
            opts.start || null;

        
        this.heesHawvoos = opts.heesHawvoos ||
            opts.update || null;
    }

    
    var _isTurning = false;
    var _centerPoint = {
        x:0,y:0
    }
    var _half = {
        width: 0,
        height: 0
    }

    eekar.SeyderHabreeuh/*
        order / list of creation
        (shapes)
    */= {
        "reebooyah": (nivra, olam) => {
            olam.ctx.fillStyle = nivra.gawvawn;
            if(
                nivra.poyneh
            ) {
                /*olam.ctx
                .setTransform(
                    1,0,0,
                    1,0,0
                )*/


                _isTurning = true;
                _half.width = nivra.roychawv/2
                _half.height = nivra.oyrech/2

                _centerPoint.x = 
                (
                    nivra.x + _half.width
                );

                _centerPoint.y = (
                    nivra.y + _half.height
                ) 
                
                olam.ctx.save()
                olam.ctx.translate(
                    nivra.x,
                    _centerPoint.y
                )
                
                olam.ctx.rotate(
                    nivra.poyneh * (
                        Math.PI / 180
                    )
                );
                
                olam.ctx.fillRect(
                    0,
                    -_half.height,
                    nivra.roychawv ,
                    nivra.oyrech 
                )

                olam.ctx.restore()
                
            } else {
                olam.ctx.fillRect(
                    nivra.x,
                    nivra.y,
                    nivra.roychawv,
                    nivra.oyrech
                )
            }
            
        }
    };

    var _curBreeyuh = null;
    eekar.HeesHawvehNeevrah2d  = (nivra, olam) => {
        if(
            typeof(
                nivra.heesHawvoos
            ) == "function"
        ) {
            nivra.heesHawvoos(
                nivra, olam
            )
        }
        _curBreeyuh = eekar.SeyderHabreeuh[nivra.choymer];
        if(
            typeof(_curBreeyuh) 
            != "function"
        ) return;
        
        _curBreeyuh(nivra, olam);


    }

})()
