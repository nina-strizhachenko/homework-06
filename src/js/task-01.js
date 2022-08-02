const categoriesEl = document.querySelectorAll('.item');
const lengCategoriesEl = categoriesEl.length;
console.log(`Number of categories: ${lengCategoriesEl}`);


const categoryTitleEl = categoriesEl.forEach(titleEl => {
        console.log(`Category: ${titleEl.firstElementChild.textContent}`);
    console.log(`Elements: ${titleEl.lastElementChild.children.length}`);
    
});


    













