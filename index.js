function submitData(name, email) {
    let obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    })}

  
  return fetch("http://localhost:3000/users", obj)
    .then(function (response) {
    return response.json();
  })
    .then(function (object) {
    document.body.innerHTML=object.id;
  })
  .catch(function (error) {
    alert("we messed up");
    document.body.innerHTML=error.message;
  });

}
