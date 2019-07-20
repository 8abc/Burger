const burgerTemplate = (burgerName, id, devoured) => {
    const burgerContainer = $('<div>').attr({
        class: "burger-list",
        id: id
    });
    const img = $('<img>').attr({
        src: "/img/bobsburger.png",
        atl: ""
    });
    const name = $('<p>');
    const button = $('<button>').attr({
        "data-id": id,
        class: "btn btn-primary",
        "data-state": devoured
    });
    name.html(burgerName);
    buttom.html("Devour It");

    burgerContainer.append(img, name, button);

    return burgerContainer
}; 

// $(document).ready(function() {
    
//     $('button[type="submit"]').on("click", function(event) {
//       event.preventDefault();
  
//       var burger_id = $(this).children('input[name="burger_name"]').val();
//       console.log(burger_id);
//       $.ajax({
//         method: "PUT",
//         url: "/burgers/" + burger_id
//       }).then(function(data) {
//         // reload page to display devoured burger in proper column
//         location.reload();
//       });
  
//     });
//   });
  
$('#addBurger').on("click", function(event){
    // prevents the page from refreshing
    event.preventDefault(); 
    console.log("button clicked");
    const burgerName = $('input[name="burger_name"]').val();
    $.ajax({
        url: "/add",
        method: "POST",
        data: {
            burgerName,
        }
    })
    .then(function(){
        alert("Burger added");
        // reloads the page without pressing refresh
        location.reload();
    })
    .catch(function(){
        alert("Burger wasn't added");
    });
});

$("#devoured").on("click", function(){
    const id = $(this).attr("data-id");

    $.ajax({
        url:"/devoured" + id,
        method: "DELETE" 
    })
    .then(console.log("Devoured", id))
    .catch(console.log("Burger was not devoured"));
});

   