$(function () {
    $('.del').click(function(){
 var n=1;
 });
 
    $('.del').click(function(e){
    $('#table tr#'+e.target.id).remove();
});
    $('.del_check').click(function(){
    	$("#table tr.line").remove("input:checkbox:checked");
    });
});