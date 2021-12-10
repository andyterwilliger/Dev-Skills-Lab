$('ul').on('click', 'li', function(){
    $(this)
    .closest('li')
    $(this).remove();
})


$('#add-skill').on('click', function(evt){
    const newText = $(`input`).val()
    $('ul').append($(`<li><button>X</button>${newText}</li>`))
    
    console.log(evt)

})

