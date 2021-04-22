$(function(){
    var arrToDo = ["Tagliare i capelli", "Comprare il pane","Comprare il vino","Leggere un libro"];
    
    
    $(function arr(){
        var funArr = arrToDo;
        for (var i=0; i < arrToDo.length; i++){
            var arrElement = funArr[i];
            var stringaHTML = '<li><p>' + arrElement + '</p><i class="fas fa-trash-alt"></i></li>';
            $('.text ul').append(stringaHTML);
        }
        return arrToDo;
        
     })

     


 $(document).on('click', '.fa-trash-alt', function(){
    $(this).parent().remove();
 });



 /* aggiungo l'elemento alla lista che scrivo nell input */
 $('.text input').keyup(function(event){
    if(event.which === 13){
        if($('.text input').val().length > 3){
            arrToDo.push($('.text input').val())

            $(function arr(){
                var funArr = arrToDo;
                for (var i=0; i < arrToDo.length; i++){
                    var arrElement = funArr[i];
                    var last = arrToDo[arrToDo.length - 1];
                    var stringaHTML = '<li><p>' + last + '</p><i class="fas fa-trash-alt"></i></li>';
                }
                $('.text ul').append(stringaHTML); 
             }) 
             $(this).val('');  
        }   
    }  
})
});



   

