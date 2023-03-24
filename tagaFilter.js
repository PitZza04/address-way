import city from "./location/city.json" assert { type: "json" };
import barangay from "./location/barangay.json" assert { type: "json" };
import addCity from "./addCity.json" assert { type: "json" };
import * as fs from "fs";
//console.log(JSON.parse(JSON.stringify(city)));
const idsToFilter = [1374, 1375, 1376];
const filteredCity = city.filter((item) =>
  idsToFilter.includes(item.province_id)
);

// const newData = filterData.map((data, index) => {
//   let incrementID = 133915 + index;
//   return data.id;
// });

const cityIDS = [
  137401, 137402, 137403, 137404, 137405, 137501, 137502, 137503, 137504,
  137601, 137602, 137603, 137604, 137605, 137606, 137607,
];

const filterBarangay = barangay.filter((brgy) =>
  cityIDS.includes(brgy.city_id)
);
//const newBarangay = addCity.map((data, index) => {});

//console.log("From City", filteredCity);
//console.log(filterBarangay);

const filterBrgy = filteredCity.map((item, index) => {
  let cityID = item.id;
  return {
    ...item,
    children: filterBarangay.filter((item) => cityID === item.city_id),
  };
});

fs.writeFileSync("CityBarangay.json", JSON.stringify(filterBrgy), (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
  } else {
    console.log("Data written to file successfully!");
  }
});
//console.log(JSON.stringify(filterBrgy));
