const divchik = document.getElementById("divchik");
let userNames = [];
let clicks = 0;

function search() {
  document.getElementById("divchik").innerHTML = "";  
  const input = document.getElementById("inp")
  let val = input.value;
  console.log(val)
  for (let i = 0; i in data_; i++) {
    let str = data_[i].first_name
    if (str.indexOf(val) != -1){
      data_ = data_
      render({ data: data_ });
      console.log(str)
    }
    render({ data: data_ });
  }
}

function sortNamesArray() {
  clicks+=1; 
  document.getElementById("divchik").innerHTML = "";  
  if (clicks % 2 == 0) {
    data_ = data_.sort(sortNames); 
  } else {
    data_ = data_.sort(sortNamesDesc);
  }
  
  console.log(data_); 

  function sortNames(a, b) {
    if (a.first_name < b.first_name) {
      return -1;
    } else if (a.first_name == b.first_name) {
      return 0;
    } else {
      return 1;
    }
  }

  function sortNamesDesc(a, b) {
    if (a.first_name < b.first_name) {
      return 1;
    } else if (a.first_name == b.first_name) {
      return 0;
    } else {
      return -1;
    }
  }

  render({ data: data_ });
}

let data_;

const render = (json) => {
  data_ = json.data;
  for (let i = 0; i in data_; i++) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const p = document.createElement("p");
    div.classList.add("card");
    img.src = data_[i].avatar;
    h2.innerText = `${data_[i].first_name} ${data_[i].last_name}`;
    p.innerText = `Email: ${data_[i].email}`;
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    divchik.appendChild(div);
    userNames.push(data_[i].first_name);
  }
};

function get_l() {
  fetch("https://reqres.in/api/users?page=2")
    .then(
      (obj) => obj.json(),
      (e) => console.log(e)
    )
    .then(
      (json) => render(json),
      (e) => console.log(e)
    );
}

get_l();
