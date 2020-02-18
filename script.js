// elementをIDで取得
const divElement = document.getElementById("root");
const textInputElement = document.getElementById("text-input");
const addButtonElement = document.getElementById("add-button");
const styleButtonElement = document.getElementById("style-button");

// ランダムな名前を取得する
async function getRandomNames(num) {
  const res = await fetch(`https://uinames.com/api/?amount=${num}`);

  return JSON.parse(await res.text());
}

window.addEventListener("load", async () => {
  console.log("画面がロードされました。");

  //   const names = ["Tom", "Sean", "Becky", "Zack", "Ken", "Sakura"];
  const names = await getRandomNames(25);

  // elementの作成
  const olElement = document.createElement("ol");
  olElement.id = "orderListRoot";

  // divにolタグを追加
  divElement.appendChild(olElement);

  names.forEach(name => {
    const liElement = document.createElement("li");
    liElement.innerText = name["name"];
    olElement.appendChild(liElement);
  });
});

styleButtonElement.addEventListener("click", () => {
  console.log("button a is click");
  divElement.classList.add("ol-dec", "li-dec", "background-light");
});

addButtonElement.addEventListener("click", () => {
  console.log("button add is click");

  // ol(orderlist)エレメントの取得
  const nameOrderListElement = document.getElementById("orderListRoot");

  // li(list)エレメントの作成
  const newNameEl = document.createElement("li");

  // text inputエレメントのValueを取得して、変数 inputVal に代入
  let inputVal = textInputElement.value;

  // liエレメントにinputValを代入
  newNameEl.innerText = inputVal;

  // 作成したliエレメントをolエレメントにappendChild
  nameOrderListElement.appendChild(newNameEl);

  // 213456                // number
  // "ewgaeg"              // string
  // true                  // boolean
  // false                 // boolean
  // {}                    // object
  // null                  // object (null)
  // []                    // array
  // const set = new Set() // set
  // const map = new Map() // map

  // 画面に表示される <-- 目的地 <--現在位置
});

// console.log(textInputElement.value);
// const olElement = document.createElement("ol");
// const liElement = document.createElement("li");
// liElement.innerText = name["name"];
// olElement
//   .appendChild(olElement)
//   .appendChild(liElement)
//   .appendChild(textInputElement.value);

// document.getElementById("add-button").addEventListener("click", function() {
//   const olElement = document.createElement("ol");
//   const liElement = document.createElement("li");
//   liElement.innerText = name["name"];
//   olElement.appendChild(olElement).appendChild(liElement);
// });
