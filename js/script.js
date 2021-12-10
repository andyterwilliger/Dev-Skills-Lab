$('ul').on('click', 'button',  function(){
    $(this)
    .closest('li')
    .remove();
})


$('#add-skill').on('click', function(evt){
    const newText = $(`input`).val()
    $('ul').append($(`<li><button>X</button>  ${newText}</li>`))
    
 

})

