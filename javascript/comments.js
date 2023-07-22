function validateForm() {
    let x = document.forms["myForm"]["feedback"].value;
        if (x == "") {
            document.getElementById("notFilled").innerHTML= "<div class='questionBox' style ='background-Color: red; color: white;' >&#9888; This question is required</div>";
            // document.getElementById("notFilledAlert").style.cssText= "background-Color: red; color: white";
            document.getElementById("feedbackId").style.border="solid 1px red";
            return false;
        }
        
        thankYouMessage();             
    }
    
function thankYouMessage() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("ty").style.display="block";
}
