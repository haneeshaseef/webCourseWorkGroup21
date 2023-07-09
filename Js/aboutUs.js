document.addEventListener('DOMContentLoaded',() =>{
    
})

function displayStudnetDetails(imageId , studentId, Name){
    console.log(imageId)
    document.getElementById(imageId).style.opacity = '0.5'
    document.getElementById(studentId).innerHTML = Name +",  Role : " + studentId
}

 function hideStudentDetails(imageId , studentId){
    document.getElementById(imageId).style.opacity = '1'
    document.getElementById(studentId).innerHTML = ''
 }