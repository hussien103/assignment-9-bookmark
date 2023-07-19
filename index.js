


var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var bookmarks =[];


if(localStorage.getItem('bookmarks')!= null){
  bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
  displayProduct();
}

function validateUrl(n){
const urlRegex =  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;




  return urlRegex.test(n);
}
function addProduct(){


  for (var i = 0; i <bookmarks.length;i++){
    if(siteName.value == bookmarks[i].name ||siteName.classList.contains('is-invalid'))
    {
      document.getElementById("submitLayer").classList.replace('d-none','d-block');
       return;
  
    }
    }
    if(validateUrl(siteUrl.value)==true){
      var bookmark = {
        name:siteName.value,
        url:siteUrl.value
      };
      bookmarks.push(bookmark);
      localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
      displayProduct();
    }
    else{
      document.getElementById("submitLayer").classList.replace('d-none','d-block');
    }
}
console.log();

function displayProduct(){
  var container=``;
for (var i = 0; i<bookmarks.length;i++){
container += `<tr>
<td>${i}</td>
<td>${bookmarks[i].name}</td>
<td>
  <button onclick="openURL('${bookmarks[i].url}')" class="btn2 btn-visit btn btn-success">
  <i class="fa-solid fa-eye pe-2"></i>
  Visit</button>
</td>
<td><button onclick="deleteProduct(${i})" class="btn btn-delete btn2 btn-danger">
<i class="fa-solid fa-trash-can"></i>
Delete</button></td>
</tr>`
console.log(bookmarks[i].url);
}
document.getElementById('tableBody').innerHTML=container;
}

function deleteProduct(index){
bookmarks.splice(index,1);
localStorage.setItem("bookmarks",  JSON.stringify(bookmarks));
displayProduct();
}

function openURL(url) {
  const hasProtocol = /^https?:\/\//i.test(url);
  if (!hasProtocol) {
    url = 'http://' + url;
  }
  window.open(url, '_blank');
}
function writeName(n){
  if (n.length > 2 ){
    document.getElementById('siteName').classList.remove('is-invalid');

 document.getElementById('siteName').classList.add('is-valid');
  }
  else{

    document.getElementById('siteName').classList.add('is-invalid');
    
  }
}
function writeUrl(n){
  if(validateUrl(n)){
    document.getElementById('siteUrl').classList.remove('is-invalid');

 document.getElementById('siteUrl').classList.add('is-valid');
  }
  else{
    document.getElementById('siteUrl').classList.add('is-invalid');

  }
}
function closeSubmitLayer(){
document.getElementById('submitLayer').classList.replace('d-block','d-none');
}
