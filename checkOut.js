const button = document.querySelector("input[type='submit']");


function updateDetail(textId, detailId) {
  const inputField = document.getElementById(textId);
  const detail = document.getElementById(detailId);
  const value = inputField.value;
  detail.textContent = value;
}


button.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission
  updateDetail("fname", "content-1");
  updateDetail("c-number","content-2")
  updateDetail("adr","content-3")
  updateDetail("city","content-4")
  updateDetail("District","content-5")
  updateDetail("zip","content-6")
  updateDetail("cname","content-7")
  updateDetail("ccnum","content-8")
  updateDetail("email","content-3.1")
});


