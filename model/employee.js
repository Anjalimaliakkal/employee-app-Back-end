const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
    "id": String,
    "name": String,
    "department": String,
    "designation": String
    }
)
let employeesmodel=mongoose.model("employee",schema);
module.exports={employeesmodel}