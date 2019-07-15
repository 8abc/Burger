$('button[type="submit"]').on("click", function(event){
    // prevents the page from refreshing
    event.preventDefault(); 

    const burgerName = $('input[name="burger_name"]').val();
    $.ajax({
        url: "/add",
        method: "POST",
        data: {
            burger_name: burgerName,
        }
    })
    .then(function(){
        alert("Burger added");
    })
    .catch(function(){
        alert("Burger wasn't added");
    })
});