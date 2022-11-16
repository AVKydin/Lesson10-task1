const getS = selector => document.querySelector(selector);

getS('.btn-edit').onclick = function () {
    getS('.edit-block').classList.add('show');
    getS(".style-block").classList.remove("show");
    // const content = getS('.top-block').innerHTML;
    // getS(".edit-area").value = content;
    getS(".edit-area").value = getS(".top-block").innerHTML;
}

getS(".btn-save").onclick = function () {
    getS(".edit-block").classList.remove("show");
    // getS(".style-block").classList.remove("show");
    getS(".top-block").innerHTML = getS(".edit-area").value;
};

    getS('.btn-style').addEventListener('click', () => {
    getS(".style-block").classList.add("show");
    getS(".edit-block").classList.remove("show");
})

function fontSize() {
    console.log(event.target.value);
    getS(".top-block").style.fontSize = event.target.value;
}

let fF = document.getElementById("fontFamily");
fF.onchange = function (e) {
    // console.log(e.target.value);
    // console.log(this.value);
getS(".top-block").style.fontFamily = this.value;

}




let colors = ["red", "green", "blue", "yellow", "pink", "gray", "white", "black", "deeppink"];

getS('.btn-text-color').onclick = function () {
    getS(".colors").classList.remove('hide');

    for (let i = 0; i < getS(".colors").children.length; i++) {
      getS(".colors").children[i].style.backgroundColor = colors[i];
      getS(".colors").children[i].onclick = function () {
          getS(".top-block").style.color = this.style.backgroundColor;
          getS(".colors").classList.add("hide");
      };

    }
}

getS(".btn-bg-color").onclick = function () {
    getS(".colors").classList.remove("hide");
    for (let i = 0; i < getS(".colors").children.length; i++) {
      getS(".colors").children[i].style.backgroundColor = colors[i];
      getS(".colors").children[i].onclick = function () {
          getS(".top-block").style.backgroundColor = this.style.backgroundColor;
          getS(".colors").classList.add("hide");
      };
    }
};

/* start function bold style*/
function fontWeight() {
    // console.log(event.target.checked);
    if (event.target.checked) {
        getS(".top-block").classList.add('bold');
    } else {
        getS(".top-block").classList.remove("bold");
    }
}
/* end function bold style*/

/* start function cursive style*/
function fontCursive() {
  // console.log(event.target.checked);
  if (event.target.checked) {
    getS(".top-block").classList.add("cursive");
  } else {
    getS(".top-block").classList.remove("cursive");
  }
}
/* end function cursive style*/


/*start choice*/
getS(".btn-add").onclick = function () {
    getS('.first').classList.remove('show');
    getS(".block-choice").classList.add("show");
    getS(".second").classList.add("show");

    document.querySelector(".list").onclick = function () {
      if (event.target.checked) {
        getS(".create-list").classList.remove("hide");
        document.querySelector(".block-choice").classList.remove("block");
        getS(".create-table").classList.add("hide");
      } 
    };

    document.querySelector(".table").onclick = function () {
      if (event.target.checked) {
        getS(".create-table").classList.remove("hide");
        getS(".create-list").classList.add("hide");
        document.querySelector(".block-choice").classList.remove("block");
      }
    };
};
/*end choice*/




const list = document.forms['form-list']

getS(".btn-create-list").onclick = function () {
  const countLi = list.count.value;
    const typeLi = list.type.value;
    
    getS(".edit-area").value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++){
        getS(".edit-area").value += `<li>item ${i+1}</li>`;
    }
    getS(".edit-area").value += "</ul>";

    getS(".first").classList.add("show");
    getS(".second").classList.remove("show");
//   console.log(countLi);
//   console.log(typeLi);
}