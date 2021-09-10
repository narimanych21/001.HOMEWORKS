
$(() => {                
    $("img").each( function() {
        $(this) 
            .click( function(){
                let src=this.src;
                $("#container").remove();
                $("body").prepend('<div id="container"></div>');
                let newWidth=Math.round(this.width*(window.innerHeight/this.height)*0.9);
                let newLeft=Math.round((window.innerWidth-this.width*(window.innerHeight/this.height)*0.9)/2);
           
                $("#container")
                    .css({
                        height:'90vh',
                        position: 'fixed',
                        zIndex: '5',
                       
                    }) 
                    $("#container").append('<img id="zoom" src="' + this.src + '" />')
                    $("#zoom")
                        .css({
                            position: 'absolute',
                           // zIndex: '4',
                            top:'0',
                            height:'100%',
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 8px 20px 0 rgba(0, 0, 0, 0.3)'
                            
                        })  
                        .animate({
                            height:'100%',
                            left: newLeft,
                            top: '5vh',
                           
                        })

                    $("#container").append('<div id="close">&#10060</div>') 
                    $("#close")
                        .css({
                            position: 'absolute',
                            zIndex: '10',
                            width: '32px',
                            height: '32px',
                            opacity: '0.5',
                            textAlign: 'center',
                            fontSize:"32px"
                            
                        })
                        .animate({
                            height:'100%',
                            left:newWidth +newLeft +'px',
                            top: '-5px'
                           
                        })
                        .mouseenter( function() {$(this)
                            .css({
                                opacity: '1',
                                cursor: 'pointer'
                            }) 
                        })
                        
                        .mouseleave( function() { $(this).css({opacity: '0.5'}) })
                        .click( function() {$("#container").hide()}) 
                        
            });
    }); 
});   
 