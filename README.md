# script about "URL parser via class"

Goal: To gain a deeper understanding of window.location properties and parse a URL into parts.

Requirements:
Create a URLParser class with a constructor that accepts a full URL.
Add getters:
protocol → returns http: or https:
hostname → returns the domain
path → returns the path (/products/item)
queryParams → returns an object with query parameters ({ search: "book", page: "2" })
!!! USE of window.location or location IS PROHIBITED !!!
Example:
```
const parser = new URLParser("https://example.com/products/item?search=book&page=2");
console.log(parser.queryParams); // { search: "book", page: "2" }
```