$(function(){
    $("input[type=radio]").click(function(){
        calcular();
    })
});
function calcular (){
    $radios = $("input[type=radio]:checked");
    var coste_total = 0;
    $radios.each(function(){
        coste_total = coste_total + parseInt($(this).val());
    })
        alert(coste_total);
    }