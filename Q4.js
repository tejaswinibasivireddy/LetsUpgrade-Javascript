let a =["array","index","element","value","callback","arg"];

a.forEach(e => {
  let result =  e.search('a')
  if(result>=0){
    console.log(e)
  }
});
