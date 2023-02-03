//B"H
if(!window.AWTSMOOS) function AWTSMOOS(){}
Object.defineProperties(AWTSMOOS, {
    
    Shayeeluhs: {
        get: () => function() {
            
            this.readFromPath = () => new Promise((r,j) => {
        
                var params = 
                Object.fromEntries(Array.from(
                    new URLSearchParams(location.search)
                ).map(q=>{
                    try {
                        return decodeURLComponent(q)
                    } catch(e) {
                        return q
                    }
                }))

                var url = params.url || params.path ||
                    params.derech;

                if(typeof(url) != "string") {
                    r(null);
                    return;
                }
            
                var sc = document.createElement("script")
                sc.src = url;

                window.awtsmoosShaweeluh = (d) => {
                    r(d)
                }
                sc.onerror = j;
                document.body.appendChild(sc)
                
            })
        }
    }
})