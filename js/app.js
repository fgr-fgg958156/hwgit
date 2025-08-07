'use strict';
import URLParser from "./URLParser.js";

const parser = new URLParser("https://example.com/products/item?search=book&page=2");
console.log(parser.queryParams); // { search: "book", page: "2" }
console.log(parser.protocol);
console.log(parser.hostname);
console.log(parser.path);