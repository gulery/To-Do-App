let total = 0;
let complete = 0;
let toDoUl = document.querySelector("#todo-ul");
let toDoInput = document.querySelector("#todo-input");
let toplam = document.querySelector("#toplam");
let tamamlanan = document.querySelector("#tamamlanan");

document.querySelector("#todo-button").addEventListener("click", () => {
  if (!toDoInput.value) {
    toDoInput.value.textContent = "Add New Todo...";
  } else if (icindeVarmi() == true) {
    alert(toDoInput.value + " degeri listede var");
  } else {
    total++;
    toplam.textContent = total;
    toDoUl.innerHTML += `<li >
              <i class="fa-solid fa-check" onclick="classGetir(this)" ></i>
              <p>${toDoInput.value}</p>
              <i class="fa-solid fa-trash" onclick="elementSil(this)"></i>
            </li>`;
    toDoInput.value = "";
    // console.log("Toplam gorev :" + toplam);
  }
});

function icindeVarmi() {
  let liste = document.getElementsByTagName("p");
  let bulundu = false;
  for (let index = 0; index < liste.length; ++index) {
    if (toDoInput.value.toUpperCase() == liste[index].innerHTML.toUpperCase()) {
      bulundu = true;
    }
  }
  return bulundu;
}

function classGetir(element) {
  if (element.parentElement.classList.contains("checked")) {
    element.parentElement.classList.remove("checked");
    complete--;
    total++;
    tamamlanan.textContent = complete;
    toplam.textContent = total;
  } else {
    element.parentElement.classList.add("checked");

    total--;
    toplam.textContent = total;
    complete++;
    tamamlanan.textContent = complete;
  }
  // console.log(tamamlanan + " gorev tamamlandi");
}

function elementSil(element) {
  parentLi = element.parentNode;
  parentUl = parentLi.parentNode;
  parentUl.removeChild(parentLi);
}

toDoInput.onkeydown = (tus) => {
  if (tus.keyCode === 13) {
    document.querySelector("#todo-button").click();
  }
};

toDoInput.focus();
