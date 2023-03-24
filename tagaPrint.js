import data from "./CityBarangayV2.json" assert { type: "json" };
import * as fs from "fs";
const newArr = [];
const newData = data.map((item) => {
  newArr.push(...item.children);
});

fs.writeFileSync("newJSON.json", JSON.stringify(newArr), (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
  } else {
    console.log("Data written to file successfully!");
  }
});
//console.log(JSON.stringify(newArr));
