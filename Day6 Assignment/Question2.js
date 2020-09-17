window.onload=function() {
  let bus = []

  if (localStorage.getItem("bus") == null) {
      localStorage.setItem("bus", JSON.stringify(bus));
  }
}

function data(tdata = undefined){

  let tableData = "";
  let bus;

  if (tdata == undefined) {
        bus = JSON.parse(localStorage.getItem("bus"));
    }
    else {
        bus = tdata;
    }

  bus.forEach((e, index) => {
    let currData = `<tr>
                        <td>${index+1}</td>
                        <td>${e.name}</td>
                        <td>${e.source}</td>
                        <td>${e.desti}</td>
                        <td>${e.num}</td>
                        <td>${e.capacity}</td>
                      </tr>`;
        tableData += currData;
  });

  document.getElementById('data').innerHTML = tableData
}
data()


function busData(event){
  event.preventDefault();
  // console.log("prevented");
  let details ={};

  let name = document.getElementById('name').value
  let source = document.getElementById('source').value
  let desti = document.getElementById('desti').value
  let num = document.getElementById('num').value
  let capacity = document.getElementById('cap').value
  // console.log(name,source,desti,busno,capacity);

  details.name = name;
  details.source = source
  details.desti = desti
  details.num = Number(num)
  details.capacity = Number(capacity)

  let bus=JSON.parse(localStorage.getItem("bus"));
  bus.push(details);
  localStorage.setItem("bus",JSON.stringify(bus));

  data()

  document.getElementById('name').value = ""
  document.getElementById('source').value = ""
  document.getElementById('desti').value = ""
  document.getElementById('num').value = ""
  document.getElementById('cap').value = ""
}


function searchBySource() {

  let sourceVal = document.getElementById('searchsource').value;

  let bus=JSON.parse(localStorage.getItem("bus"));

  let searchedSoVal = bus.filter(e =>{
    return e.source.indexOf(sourceVal)!= -1;
  })
  data(searchedSoVal)
}
function searchByDesti() {

  let destiVal = document.getElementById('searchdesti').value;

  let bus=JSON.parse(localStorage.getItem("bus"));

  let searchedDesVal = bus.filter(e =>{
    return e.desti.indexOf(destiVal)!= -1;
  })
  data(searchedDesVal)
}
