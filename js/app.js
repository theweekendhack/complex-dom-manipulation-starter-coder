function calSum(n,n2)
{
   return n+n2;
}


function validateForm()
{

}

function displayModal()
{

}

function hideModal()
{  



}

function doSomething()
{
   alert("Lkdhlshglkhdslghdslh")
}



//entry point
function main()
{
   //this references the modal
   const modal = document.querySelector(".modal");


   //this stores the modal's close button
   const closeModalButton = document.querySelector(".modal-top > i");


   //this stores the two textboxes
   const textboxes = document.querySelectorAll("form input[type=text]");  


   //this stores the two error boxes
   const errorBoxes = document.querySelectorAll(".error-fields");


   //this stores the add button
   const addButton = document.querySelector("#calculateButton");
  

   //event listeners
 
   addButton.addEventListener("click",function(){

      modal.classList.toggle("hide");

   });

   closeModalButton.addEventListener("click",function(){
     
      modal.classList.toggle("hide");
   });








}


main();