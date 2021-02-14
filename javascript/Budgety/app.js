
//BUDGET CONTROLLER
// - Add the new item to our data structure
// - Calculate budget
var budgetController = (function(){
    

})();

//UI CONTROLLER

// -Get input values
// -Add the new item to the UE
// -Update the UI
var UIController = (function(){
    

})();



//GLOBAL APP CONTROLLER MODULE
 
// -Add event handler
var Controller = (function(budgetCtrl,UICtrl){
    document.querySelector('.add__btn').addEventListener('click', function(){
        console.log('Button was clicked')
    });

})(budgetController, UIController);

