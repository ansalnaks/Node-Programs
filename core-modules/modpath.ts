// const path = require('path');
export {}
import * as path from "path";

console.log("File name:", path.basename(__filename));
console.log("Directory name:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));
console.log("Parsed path:", path.parse(__filename));
