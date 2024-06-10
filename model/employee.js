const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
    "id": String,
    "name": String,
    "department": String,
    "designation": String
    }
)
let employeemodel=mongoose.Model("employee",schema);
module.exports={employeemodel}