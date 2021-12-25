//plugin e-search.js by Eduardo Torres, for more documentation visit: https://github.com/edukni/Search-input-jquery-plugin


(function($){
    $.fn.extend({
        search: function(callback,timeout){
            timeout = timeout || 1e3; // 1 second default timeout
            var timeoutReference,
                search = function(el){
                    if (!timeoutReference) return;
                    timeoutReference = null;
                    callback.call(el);
                };
            return this.each(function(i,el){
                var $el = $(el);
                // Chrome Fix (Use keyup over keypress to detect backspace)
                // thank you @palerdot
                $el.is(':input') && $el.on('keyup keypress paste',function(e){
                    // This catches the backspace button in chrome, but also prevents
                    // the event from triggering too preemptively. Without this line,
                    // using tab/shift+tab will make the focused element fire the callback.
                    if (e.type=='keyup' && e.keyCode!=8) return;
                    
                    // Check if timeout has been set. If it has, "reset" the clock and
                    // start over again.
                    if (timeoutReference) clearTimeout(timeoutReference);
                    timeoutReference = setTimeout(function(){


			     		var valor = el.value.toLowerCase();
                        var gameNameTrim=valor.replace(/\s+/g, '');
                        var gameNameTrim2=gameNameTrim.replace(/[^\w\s]/gi, '');
                        console.log(gameNameTrim2);
			     		if(gameNameTrim2){

			     		$(".containerItems").children().fadeOut();
			     		$(".containerItems [data-search*="+gameNameTrim2+"]").fadeIn('fast');

			     		}else{

                          $(".containerItems").children().fadeIn();
                          $("ul.dropdown-menu li").parent().find("li").each(function( index ) {
                          $( this ).removeClass('active');

                        });

                        }

                        

                        search(el);
                        console.log(el);

                    }, timeout);
                }).on('blur',function(){
     	   				//when leaving the input
				    	$("ul.dropdown-menu li").parent().find("li").each(function( index ) {
							$( this ).removeClass('active');
						});
						$("ul.dropdown-menu li:nth-child(01)").addClass("active");

                   		search(el);
                });
            });



        }
    });
})(jQuery);




