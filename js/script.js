"use strict";

const _filter = document.getElementById('filter');
const _items = document.getElementsByClassName('card');

const updateFilter = () =>{
    itemsVisible(_filter.value, 'all', _items)
};

const itemsVisible = (category, customWord, array) => {
    Array.from(array).forEach(item => {
        let data = item.getAttribute('data-category');
        item.style.display = (data === category || category === customWord ? 'block' : 'none');
    })
}

_filter.addEventListener('change', updateFilter);
updateFilter();