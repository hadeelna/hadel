const gr2 = require("./gr2.js");
const yargs = require("yargs")


    .option("chilled", {
      alias: "c",
      describe: " add to chilled catogery ",
      type: "string"
    })
    .option("dry", {
        alias: "d",
        describe: "add to dry catogery",
        type: "string"
      })
      .option("vegetables", {
        alias: "v",
        describe: "add to vegetables catogery",
        type: "string"
      })
      .option("fruits", {
        alias: "f",
        describe: "add to fruits catogery",
        type: "string"
      })
      .option("breads", {
        alias: "b",
        describe: "add to breads catogery",
        type: "string"
      })
    .array("chilled")
    .array("dry")
    .array("vegetables")
    .array("fruits")
    .array("breads")
    let argv = yargs.argv;
    
 
function handler (argv)
{
   list.addtolist(argv.catogery,argv.proudect);
}
