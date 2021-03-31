var isEditPage = false;

function addData(){ // add a list using "+" button
  const data = document.getElementById('written'),
    ul = document.getElementById('list'),
    li = document.createElement('li');

    li.className = 'data';

  if(data.value!=""){
    li.innerText = data.value;
    ul.appendChild(li);
    li.appendChild(createBtn());
    data.value="";
  }
}
function modifyData(self){ // modify a list
    var modifyText = prompt("Edit : ");
    self.innerText = modifyText;
}

function createBtn(){
    var btn = document.createElement('button');
    btn.className = 'DeleteBtn';
    btn.innerText = "-";
    btn.value = 'deleteBtn';
    return btn;
}

function Click_EditPage(){
  const addBtn = document.getElementById('AddBtn'),
    inputText = document.getElementById('written'),
    li = document.getElementsByClassName('data');

  for(i=0;i<li.length;i++){
    var btn = createBtn();
    li[i].appendChild(btn);
  }

  addBtn.disabled = false; // 활성화
  addBtn.style.display = false;
  inputText.disabled = false;
  inputText.placeholder = "Write a to do list";
}
function Exit_EditPage(){
  const addBtn = document.getElementById('AddBtn'),
    inputText = document.getElementById('written');

  addBtn.disabled = true;
  addBtn.style.display = true;
  inputText.disabled = true;
  inputText.placeholder = "";
}
