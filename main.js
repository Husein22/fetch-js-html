let a=0;
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Services')
.then(res=>{if(!res.ok)throw 'greska';return res.json()})
.then(data=>dajHranu(data))
.catch(err=>console.log(err))

const dajHranu=(hrana)=>{
const rezult =document.getElementById('hrana1');
let work='';
hrana.forEach(element => {
  a++;
    console.log(element.name)
    work+=`<div class="card" style="width: 18rem;margin:10px;" >
    <img src=${element.photoUrl}
    class="card-img-top" alt="..." style="height:150px">
    <div class="card-body">
      <p class="card-text">${element.name} </p>
      <button type="button" class="btn btn-primary" onclick="completeTodo(${element.id})">Promijeni</button>
                <button type="button" class="btn btn-danger" onclick="deleteTodo(${element.id})">Brisanje</button>
                <button type="button" class="btn btn-danger" id="prikazi" onclick="peikaziElement(${element.id})">Prikazi info</button>
    </div>
  </div>`
});
  rezult.innerHTML=work;
}

const peikaziElement = (id) => {
  fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Services')
  .then(res=>{if(!res.ok)throw 'greska';return res.json()})
  .then(data=>dajHranu(data))
  .catch(err=>console.log(err))
  const dajHranu=(hrana)=>{
    const rezult =document.getElementById('ex');
    let work='';
    hrana.forEach(element => {
      a++;
        
        if(id==element.id){
          console.log(element.name)
        work+=`    
        <div class="card" style="width: 18rem;margin:10px;" >
    <img src=${element.photoUrl}
    class="card-img-top" alt="..." style="height:150px">
    <div class="card-body">
      <p class="card-text">${element.name} </p>
    </div>
  </div> `
        
        
        
        
        rezult.innerHTML=work;
}});
    }
  }    
  
  
  


const completeTodo = (id) => {
  console.log(id);
  fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Services`, {
      method: 'PUT',
      headers: new Headers({'content-type': 'application/json'})
  })
  .then(res => {
      console.log(res);
  })
}


const deleteTodo = (id) => {
  console.log(id);
  fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Services${id}`, {
      method: 'DELETE',
      headers: new Headers({'content-type': 'application/json'})
  })
  .then(res => {
      console.log(res);
  })
}
 /*const DodajUslugu = () => {
  const AddId = document.getElementById('add-id').value;
  const AddName = document.getElementById('add-name').value;
  const AddPrice = document.getElementById('add-price').value;
  const AddImageUrl= document.getElementById('add-imageUrl').value;
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Services', {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        "id": AddId,
        "name": AddName,
        "price": AddPrice,
        "photoUrl": AddImageUrl
      })
  }) 
.then(res => {
  if (res.ok) { console.log("POST request uspješan! ")}
  else (console.log("POST request neuspješan!"));
  return res;
  })
.then(res => {
  console.log(res);
})
} */


var modal = document.getElementById("exampleModal");

// Get the button that opens the modal
var btn = document.getElementById("dodajUslugu");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closee")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 



const mojaForma=document.getElementById("btn");


mojaForma.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Foram je submitovana!");
    const AddId = document.getElementById('add-id').value;
  const AddName = document.getElementById('add-name').value;
  const AddPrice = document.getElementById('add-price').value;
  const AddImageUrl= document.getElementById('add-imageUrl').value;
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Services', {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        "id": AddId,
        "name": AddName,
        "price": AddPrice,
        "photoUrl": AddImageUrl
      })
  }) 
.then(res => {
  if (res.ok) { console.log("POST request uspješan! ")}
  else (console.log("POST request neuspješan!"));
  return res;
  })
.then(res => {
  console.log(res);
})


$('#exampleModal').on('hidden.bs.modal', function () {
  $('.modal-body').find('textarea,input').val('');
});

$('#exampleModal').modal('toggle');
 
})





