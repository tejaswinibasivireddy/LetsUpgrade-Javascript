let array = [
  {
    name: "Tom",
    age: 21,
    city: "Greenville",
    salary: 50000,
  },
  {
    name: "Jerry",
    age: 32,
    city: "Clinton",
    salary: 40000,
  },
  {
    name: "Mickey",
    age: 25,
    city: "Arlington",
    salary: 70000,
  },
  {
    name: "Scooby",
    age: 29,
    city: "Marion",
    salary: 55000,
  },
  {
    name: "Fred",
    age: 30,
    city: "Houston",
    salary: 66000,
  },
  {
    name: "Texas",
    age: 55,
    city: "Austin",
    salary: 43000,
  },
  {
    name: "Helena",
    age: 31,
    city: "Orlando",
    salary: 23000,
  },
]

          //Displaying Array Of Objects In The Table

function display(objs){
  // console.log(array);
  let tableData = ""

  objs.forEach((e, index) => {
    let currData = `<tr>
                      <td>${index+1}</td><td>${e.name}</td><td>${e.age}</td><td>${e.city}</td><td>$${e.salary}</td>
                      <td><button onclick="deleteRecord()">Delete</button></td>
                    </tr>`
    // console.log(currData);
    tableData +=currData
    // console.log(tableData);
  });
  document.getElementById('data').innerHTML = tableData
}
display(array)

        //Functonality To Search Name&City
function searchByName(){
  let searchName = document.getElementById('searchname').value;

  let searchedName = array.filter(value =>{
    return value.name.toUpperCase().indexOf(searchName.toUpperCase())!= -1
  });
  display(searchedName)
}

function searchByCity(){
  let searchCity = document.getElementById('searchcity').value;

  let searchedCity = array.filter(value => {
    return value.city.toUpperCase().indexOf(searchCity.toUpperCase())!= -1;
  });
  display(searchedCity)
}

      //Deleting Funtionality To Delete Records
function deleteRecord(index) {

  array.splice(index,1);
  display(array)
}
