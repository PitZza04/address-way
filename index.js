import data from "./data/index.js";
import * as fs from "fs";
const { region, province, barangay, city } = data;

//console.log(JSON.stringify(region));

const newRegion = region.map((item) => {
  let [leftVal, value] = item.region_name.split(/[\(\)]/).filter(Boolean);
  return {
    id: Number(item.region_code),
    region_name: value,
    region_code: leftVal,
  };
});

const newProvince = province.map((province) => {
  return {
    id: Number(province.province_code),
    province_name: province.province_name,
    region_id: Number(province.region_code),
  };
});

const newCity = city.map((city) => {
  return {
    id: Number(city.city_code),
    city_name: city.city_name,
    province_id: Number(city.province_code),
  };
});

const newBarangay = barangay.map((brgy) => {
  return {
    id: Number(brgy.brgy_code),
    barangay: brgy.brgy_name,
    city_id: Number(brgy.city_code),
  };
});
fs.writeFileSync("barangay2.json", JSON.stringify(newBarangay), (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
  } else {
    console.log("Data written to file successfully!");
  }
});
//console.log(newRegion);
