$(document).ready(function() {
    $("#button_effects1").click(function(){
        $('#par1').slideToggle('1000');
    });
    $("#button_effects2").click(function(){
        $('#par2').slideToggle('1000');
    });
    $("#button_effects3").click(function(){
        $('#par3').slideToggle('1000');
    });
    $("#button_effects4").click(function(){
        $('#par4').slideToggle('1000');
    });
    $("#button_effects5").click(function(){
        $('#par5').slideToggle('1000');
    });
    $("#button_effects6").click(function(){
        $('#par6').slideToggle('1000');
    });

    /*Adding mouseenter and mouseleave functions on buttons with fade*/

    $("button_effects1").mouseenter(function(){
        $("button_effects1").fadeTo(1000, 0.5);
    });
    $("button_effects1").mouseleave(function(){
        $("button_effects1").fadeTo(1000, 1);
    });

    $("button_effects2").mouseenter(function(){
        $("button_effects2").fadeTo(1000, 0.5);
    });
    $("button_effects2").mouseleave(function(){
        $("button_effects2").fadeTo(1000, 1);
    });

    $("button_effects3").mouseenter(function(){
        $("button_effects3").fadeTo(1000, 0.5);
    });
    $("button_effects3").mouseleave(function(){
        $("button_effects3").fadeTo(1000, 1);
    });

    $("button_effects4").mouseenter(function(){
        $("button_effects4").fadeTo(1000, 0.5);
    });
    $("button_effects4").mouseleave(function(){
        $("button_effects4").fadeTo(1000, 1);
    });

    $("button_effects5").mouseenter(function(){
        $("button_effects5").fadeTo(1000, 0.5);
    });
    $("button_effects5").mouseleave(function(){
        $("button_effects5").fadeTo(1000, 1);
    });

});