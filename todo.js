
const input = document.getElementById(`in`)
const button = document.getElementById(`bu`)
const list = document.getElementById(`list`)


function todos(){
const newli = document.createElement(`li`)
const check = document.createElement(`input`)
check.type = "checkbox";
const dlt = document.createElement(`button`)
dlt.textContent = "delete";
const edit = document.createElement(`button`)
edit.textContent = "edite";
list.appendChild(newli)
newli.textContent = input.value;
newli.appendChild(check)
newli.appendChild(dlt)
newli.appendChild(edit)
input.value = ""

check.addEventListener(`click`,function(){
 const complit = document.getElementById(`co`)
 complit.appendChild(newli)
check.remove();
dlt.remove();
edit.remove();
})
dlt.addEventListener(`click`,function(){
    newli.remove()
})

edit.addEventListener(`click`,function(){
  const newtext = prompt("edit youare task:",newli.firstChild.textContent);
  if (newtext !== null) {
    newli.firstChild.textContent = newtext;
}
})

}

function moodch(){
  const changemood =  document.querySelector(`body`)
changemood.style.backgroundColor='#97989c'
}



