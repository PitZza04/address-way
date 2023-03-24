import CityBarangay from "./CityBarangay.json" assert { type: "json" };
import * as fs from "fs";
//console.log(JSON.stringify(CityBarangay));
//const counter = 1;
const newData = CityBarangay.map((item, index) => {
  const cityIncrement = 133915 + index;
  return {
    ...item,
    id: cityIncrement,
    province_id: 1339,
    children: item.children.map((data, index) => {
      let counter = `000${index + 1}`.slice(-3);
      let brgy_id_str = `${cityIncrement}${counter}`;
      let brgy_id = parseInt(brgy_id_str);
      return {
        ...data,
        id: brgy_id,
        city_id: cityIncrement,
      };
    }),
  };
});

fs.writeFileSync("CityBarangayV2.json", JSON.stringify(newData), (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
  } else {
    console.log("Data written to file successfully!");
  }
});
//console.log(JSON.stringify(newData));
