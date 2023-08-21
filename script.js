let heart_btn=document.getElementsByClassName("heart_btn")
let plus_btn = document.getElementsByClassName("plus-btn")
let Quant=document.getElementsByClassName("Quant")
let minus_btn= document.getElementsByClassName("minus-btn")
let finalPrice=document.getElementById("finalPrice")
let price= document.getElementsByClassName("price")
let deletee=document.getElementsByClassName("delete")
let  Item=document.getElementsByClassName(" Item")

for (let index = 0; index < heart_btn.length; index++) {
    // heart button like 
    heart_btn[index].addEventListener("click",function() {
        if(heart_btn[index].style.color==="black"){
            heart_btn[index].style.color="red"
        }
        else{
        heart_btn[index].style.color="black"
        }
    })

    // plus button 

    plus_btn[index].addEventListener("click",function(){
        Quant[index].value=Number(Quant[index].value)+1
        finalPrice.value=Number(finalPrice.value)+Number(price[index].textContent)
    })


        // min button 
        minus_btn[index].addEventListener("click",function(){
            if (Quant[index].value>0) {
                Quant[index].value=Number(Quant[index].value)-1 
                finalPrice.value=Number(finalPrice.value)-Number(price[index].textContent)  
            }})

            // delete button 

            deletee[index].addEventListener("click",function(){

                Item[index].style.display="none"
                finalPrice.value=Number( finalPrice.value)-(Number(price[index].textContent)*Number(Quant[index].value))

            })
                
      
            



















           
}





// // min button 
// minus_btn[index].addEventListener("click",Function(){
//     quant[index].value=Number(quant[index].value)-1
// })
