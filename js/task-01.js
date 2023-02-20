
const allCategories = document.querySelector('#categories');
const allLists = document.querySelectorAll(".item")

const categories = allCategories.childElementCount;
console.log(`Number of categories:`, categories);


	allLists.forEach(lists => {
    console.log('Category:', lists.firstElementChild.textContent);
        console.log('Elements:', lists.lastElementChild.children.length);
	});
// console.log('Elements:', lists.children[1].childElementCount)