const mongoose=require('mongoose')

const sch= new mongoose.Schema({
    containerId: { type: String, required: true },
    from: { type: String, required: true },
    importedBy: { type: String, required: true },
    goods: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });


const sugar_goodowns=mongoose.model("sugar_goodowns",sch)
const wheat_goodowns=mongoose.model("wheat_goodowns",sch)
const grains_goodowns=mongoose.model("grains_goodowns",sch)
const dry_fruits_goodowns=mongoose.model("dry_fruits_goodowns",sch)
module.exports={sugar_goodowns,wheat_goodowns,grains_goodowns,dry_fruits_goodowns}