// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import GetData from "../getdata";
function removerr() {
    this.parentElement.remove()
    if(document.getElementById('open').value > 0){
        
        document.getElementById('open').value--
    }
    if(document.getElementById('task').value > 0){
        
        document.getElementById('task').value--
    }
    if(document.getElementById('complete').value > 0){
        
        document.getElementById('complete').value--
    }
    
    
  }
function checkdone (){
    if(this.checked){
        this.parentElement.classList.add('active')
        if(document.getElementById('open').value > 0){
            document.getElementById('open').value--
        }
        document.getElementById('complete').value++
        

    }else{
        this.parentElement.classList.remove('active')
        if(document.getElementById('complete').value > 0){
            document.getElementById('complete').value--
        }
        
        document.getElementById('open').value++
    }
}
const ClickBtn = () => {
    // const add = document.getElementById('result')
    const val = document.getElementById('myInput').value;
    const shows = document.getElementById('result');
    const item = document.createElement('div');
    const del = document.createElement('span');
    const check = document.createElement('input');
    check.setAttribute("type", "checkbox");
    del.addEventListener("click", removerr);
    del.innerHTML = "Xoá";
    check.setAttribute("id", "checkbox");
    item.append(check,val,del)
    check.addEventListener("click", checkdone);
    document.getElementById('myInput').value = '';
    if(val !== ''){
        shows.appendChild(item);
        document.getElementById('task').value++
        document.getElementById('open').value++
    }
    else{
        alert('Phải nhập task')
        
    }
    
    
}
export default ClickBtn
