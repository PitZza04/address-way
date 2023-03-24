// const region = require("./region.json");
// const province = require("./province.json");
// const city = require("./city.json");
// const barangay = require("./barangay.json");

// module.export = {
//   region,
//   province,
//   city,
//   barangay,
// };

import region from "./region.json" assert { type: "json" };
import province from "./province.json" assert { type: "json" };
import city from "./city.json" assert { type: "json" };
import barangay from "./barangay.json" assert { type: "json" };

export default {
  region,
  province,
  city,
  barangay,
};
