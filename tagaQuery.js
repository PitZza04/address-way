import barangay from "./location/barangay.json" assert { type: "json" };
import city from "./location/city.json" assert { type: "json" };
const filtered = barangay.filter((item) => 12802 == item.city_id);

const aw = city.filter((item) => 12802 == item.id);
console.log(aw);
