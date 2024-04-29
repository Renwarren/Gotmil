// document.getElementById('pizzaForm').addEventListener('submit', function(event) {
//     // event.preventDefault(); // Prevent form submission

//     // Get selected pizza type
//     var pizzaType = document.querySelector('input[name="pizza_type"]:checked');
//     if (pizzaType) {
//         console.log('Selected Pizza Type:', pizzaType.value);
//     }

//     // Get selected sizes
//     var sizes = document.querySelectorAll('input[name="sizes[]"]:checked');
//     sizes.forEach(function(size) {
//         console.log('Selected Size:', size.value);
//     });

//     // Get selected extras
//     var extras = document.querySelectorAll('input[name="extras[]"]:checked');
//     extras.forEach(function(extra) {
//         console.log('Selected Extra:', extra.value);
//     });
// });