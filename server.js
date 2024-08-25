/** @format */

import { main } from "./index.js";

let result = await main().catch((error) => console.error(error));
console.log(result);
