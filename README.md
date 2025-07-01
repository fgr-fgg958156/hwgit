# script about "Filter cards by category"

There are several product "cards" with the data-category attribute (for example, "fruit", "vegetable"). There is a selector with filters. When the user selects a category, only the cards that match it are shown.

1. React to change in <select id="filter">
    <option value="all">all</option>
    <option value="fruit">fruits</option>
    <option value="vegetable">vegetables</option></select>
2. Iterate over .card and hide/show depending on data-category