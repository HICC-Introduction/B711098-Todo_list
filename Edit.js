// var list = document.getElementById('list');

function addData(){ // add a list
  const data = document.getElementById('data'),
    ul = document.getElementById('list'),
    li = document.createElement('li'),
    btn = document.createElement('button');
    btn.className = 'EditBtn';
    btn.value = "-";

  if(data.value!=""){
    li.innerHTML = data.value;
    ul.appendChild(li);
    ul.appendChild(btn);
    data.value="";
  }
}

// list.addEventListener(onclick, deleteData());

function deleteData(){
  const data = document.getElementById('data'),
    ul = document.getElementById('list');

//  const data = ul.removeChild("");
//  ul.removeChild(data);
}
