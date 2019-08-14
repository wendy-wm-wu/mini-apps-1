function getValues(obj) {
    let csv = "";
    for (var key in obj) {
      if (key !== "children") {
        csv += obj[key] + ',';  
      } else {
        continue; 
      }
    }
    return csv.slice(0, -1);
  }
  
  let csv = "firstName,lastName,county,city,role, sales"; 
  
  function recurse(obj) {
    for (let i = 0; i < obj.children.length; i++) {
      csv += `\n${getValues(obj.children[i])}`; 
      if (obj.children.length > 0) {
        recurse(obj.children[i]); 
      }
    }
    //base case
    return csv; 
  }



  module.exports = {
    getValues: getValues,
    recurse: recurse, 
  }
  