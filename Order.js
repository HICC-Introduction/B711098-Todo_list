// to Order page
function createOrder(li){ // add Order Buttons
  const upBtn = document.createElement('button'),
    downBtn = document.createElement('button');

    upBtn.className = 'UpBtn';
    upBtn.innerText = "▲";
    downBtn.className = 'DownBtn';
    downBtn.innerText = "▼";

    // ; right float
    li.appendChild(downBtn);
    li.appendChild(upBtn);
}
function Click_OrderPage(){
  const li = document.getElementsByClassName('data');

  for(i=0;i<li.length;i++){
    var data = li[i];
    createOrder(data);
    li[i].style.width = "355px";
  }
}

// to Main page
function deleteOrder(li){
  li.removeChild(li.childNodes[1]); // delete DownBtn ; childNodes[0] = li
  li.removeChild(li.childNodes[1]); // delete UpBtn
}
function Exit_OrderPage(){
  const li = document.getElementsByClassName('data');

  for(i=0;i<li.length;i++){
    deleteOrder(li[i]);
    li[i].style.width = "290px";
  }
}
