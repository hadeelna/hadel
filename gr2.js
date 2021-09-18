const fs = require("fs");


function addtolist(catogery,proudect){
  const all_list = getalllist()
 alllist.push({
    catogery : chilled,
    proudect : proudect,
    catogery:dry,
    proudect:proudect,
    catogery:vegetables,
    proudect:proudect,
    catogery:fruits,
    proudect:proudect,
    catogery:breads,
    proudect:proudect
})   
module.exports = {
  addtolist:addtolist
}
save_list(all_list)

console.log("list added: " + catogery +"    "  +proudect )
}

function getalllist() {
  try {
     return JSON.parse(fs.readFileSync("./Utils.json").toString())
  } catch (e) {
      return []
  }
}

function save_list(list) {
  fs.writeFileSync("./Utils.json", JSON.stringify(list))
}
