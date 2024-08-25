/** @format */

//import { main } from "./main.js";

let result = await main().catch((error) => console.error(error));
console.log(result);
