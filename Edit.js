
function addData(){ // add a list using "+" button
  const data = document.getElementById('written'),
    ul = document.getElementById('list'),
    li = document.createElement('li'),
    btn = document.createElement('button');

    li.className = 'data';
    btn.className = 'DBtn';
    btn.innerText = "-";
    btn.value = 'deleteBtn';

  if(data.value!=""){
    li.innerText = data.value;
    li.appendChild(btn);
    ul.appendChild(li);
    data.value="";
  }
}

function deleteData(self){ // delete a list using "-" button
  var data = self.parentNode;
  data.remove();
}
