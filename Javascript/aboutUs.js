document.addEventListener("DOMContentLoaded", () => {
  // Get all the images with the class "student-image"
  let images = document.querySelectorAll("img");

  //Loop through the images and add event listeners for mouseover and mouseout
  images.forEach((image) => {
    let studentId = image.getAttribute("data-student-id");
    let roleId = image.getAttribute("data-role-id");
    let name = image.getAttribute("data-name");

    // Add a mouseover event listener that displays the student details
    image.addEventListener("mouseover", () => {
      document.getElementById(studentId).innerHTML = name;
      document.getElementById(roleId).innerHTML = "Student Role : " + studentId;
    });

    // Add a mouseout event listener that hides the student details
    image.addEventListener("mouseout", () => {
      document.getElementById(studentId).innerHTML = "Student Name";
      document.getElementById(roleId).innerHTML = "Student Role";
    });
  });
});
