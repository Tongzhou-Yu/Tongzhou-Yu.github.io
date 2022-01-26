 var hydra = new Hydra({
        canvas: document
         .getElementById("myCanvas"),
        detectAudio: false
      })
       osc(40,0.1,0.6)
         .modulateScale(osc(40,0,1).kaleid(6))
         .repeat(2,6)
         .modulate(o0,0.03)
         .rotate(0, 0.1)
         .kaleid(6)
         //.modulateKaleid(shape(10,0.1,1))
         .out(o0)
