//How to make the first letter of each word uppercase
function titleCase(str){
    var titled = str.toLowerCase().split(" ").map(function(elem){
      return elem[0].toUpperCase() + elem.slice(1);
    })
    return titled.join(" ")
  }
  
  titleCase("I'm a little tea pot");