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
function createBtn(){
    var btn = document.createElement('button');
    btn.className = 'DeleteBtn';
    btn.innerText = "-";
    btn.value = 'deleteBtn';
    return btn;
}
// to Edit page
function Click_EditPage(){
  const addBtn = document.getElementById('AddBtn'),
    inputText = document.getElementById('written'),
    li = document.getElementsByClassName('data');

  for(i=0;i<li.length;i++){
    var btn = createBtn();
    li[i].appendChild(btn);
    li[i].style.width = "355px";
  }

  // active
  addBtn.disabled = false;
  inputText.disabled = false;
  inputText.placeholder = "Write a to do list";

}
// to Main page
function Exit_EditPage(){
  const addBtn = document.getElementById('AddBtn'),
    inputText = document.getElementById('written');

  inputText.disabled = true;
  inputText.placeholder = "";
}
