let a=0;
let usluga = [];
let ukupanBroj=1;
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Services')
.then(res=>{if(!res.ok)throw 'greska';return res.json()})
.then(data => {
  usluga = data;
  dajUlogu(data);
})
.catch(err=>console.log(err))

const dajUlogu=(usluga)=>{
const rezult =document.getElementById('services1');
let work='';
usluga.forEach(elementt => {
  ukupanBroj++;
    work+=`<div class="card" style="width: 18rem;margin:10px;" >
    <img src=${elementt.photoUrl}
    class="card-img-top" alt="..." style="height:150px">
    <div class="card-body">
      <p class="card-text">${elementt.name} </p>
      <button type="button" onclick="dopuniVrijednosti(${elementt.id})"  class="btn btn-warning" data-bs-toggle="modal"
       data-bs-target="#exampleModal2" data-bs-whatever="@getbootstrap">Promijeni</button>
       <button type="button" class="btn btn-danger" onclick="izbrisiUslugu(${elementt.id})">Brisanje</button>
       <button type="button" onclick="prikaziElement(${elementt.id})" class="btn btn-success" data-bs-toggle="modal"
       data-bs-target="#exampleModal3" data-bs-whatever="@getbootstrap">Prikazi info</button>
    </div>
  </div>`
});
  rezult.innerHTML=work;
}

const prikaziElement=(id)=>{
  let a=0;
  const rezult =document.getElementById('ex');
  let work='';
  usluga.forEach(elementt => {
    a++;
    if(a==id){
    const prikaziID = document.getElementById('prikaziid');
    prikaziID.innerHTML=elementt.id;
    const prikaziIme = document.getElementById('prikaziime');
    prikaziIme.innerHTML=elementt.name;
    const prikaziCijenu= document.getElementById('prikazicijenu');
    prikaziCijenu.innerHTML=elementt.price;
    const priakziSliku = document.getElementById('prikaziSliku').src=elementt.photoUrl;
  }});
 }
      

 const pretraziElement=()=>{
  let a=0;
  const rezult =document.getElementById('inputPolje').value;
  let work='';
  usluga.forEach(elementt => {
    a++;
    if(rezult==elementt.name){
    const prikaziID = document.getElementById('petraziid');
    prikaziID.innerHTML=elementt.id;
    const prikaziIme = document.getElementById('petraziiime');
    prikaziIme.innerHTML=elementt.name;
    const prikaziCijenu= document.getElementById('petrazicijenu');
    prikaziCijenu.innerHTML=elementt.price;
    const priakziSliku = document.getElementById('pretraziSliku').src=elementt.photoUrl;
  }
});
 }
  
  const dopuniVrijednosti = (elementtID) => {
    const elementt = usluga.find(elementt => elementt.id === elementtID);
    const uslugaFormId = document.getElementById('change-id');
    const uslugaName = document.getElementById('change-name');
    const uslugaPrice = document.getElementById('change-price');
    const uslugaImage = document.getElementById('change-image');

    uslugaFormId.value = elementt.id;
    uslugaName.value = elementt.name;
    uslugaPrice.value = elementt.price;
    uslugaImage.value = elementt.photoUrl;
}

const izmijeniUsluge = () => { 
  const uslugaFormId = document.getElementById('change-id').value;;
    const uslugaName = document.getElementById('change-name').value;;
    const uslugaPrice = document.getElementById('change-price').value;;
    const uslugaImage = document.getElementById('change-image').value;;
    
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Services`, {
        method: 'PUT', 
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
          "id": uslugaFormId,
         "name": uslugaName,
        "price": uslugaPrice,
       "photoUrl": uslugaImage
        })
    })
    .then(res => {
      console.log(res);
  })
}

const izbrisiUslugu = (id) => { 
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Services/${id}`,{
      method: 'DELETE'
    })
    .then(res => {
        console.log(res);
    })
}

var modal = document.getElementById("exampleModal");
var btn = document.getElementById("dodajUslugu");
var span = document.getElementsByClassName("closee");

btn.onclick = function() {
  modal.style.display = "block";
}
 span.onclick = function() {
  modal.style.display = "none";
} 
 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}  

const mojaForma=document.getElementById("btn");
mojaForma.addEventListener("click",(e)=>{
    e.preventDefault();
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
  if (res.ok) { console.log(res)}
  else (console.log("POST request neuspješan!")); 

  })

$('#exampleModal').on('hidden.bs.modal', function () {
  $('.modal-body').find('textarea,input').val('');
});

$('#exampleModal').modal('toggle');
 
})