let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});







// Get references to elements
const categoryDropdown = document.querySelector('#category-dropdown');
const degreeDropdown = document.querySelector('#degree-dropdown');
const categoryFilterButton = document.querySelector('#category-filter');
const degreeFilterButton = document.querySelector('#degree-filter');
const jobBoxes = document.querySelectorAll('.box');

// Define the filterJobBoxes function
function filterJobBoxes() {
    // Get the selected category and degree
    const selectedCategory = categoryFilterButton.textContent;
    const selectedDegree = degreeFilterButton.textContent;

    // Loop through job boxes and show/hide based on the selected category and degree
    jobBoxes.forEach(box => {
        const boxCategory = box.getAttribute('data-category');
        const boxDegree = box.getAttribute('data-degree');

        // Check if the selected category or degree is not "Show All" and matches the box's data
        if (
            ((selectedCategory === 'Category' || selectedCategory === 'Show All Categories') || (selectedCategory === boxCategory)) &&
            ((selectedDegree === 'Degree' || selectedDegree === 'Show All Degrees') || (selectedDegree === boxDegree))
        ) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

// Event listeners for category dropdown items
document.querySelectorAll('#category-dropdown .items').forEach(item => {
    item.addEventListener('click', () => {
        categoryFilterButton.textContent = item.textContent;
        filterJobBoxes();
    });
});

// Event listeners for degree dropdown items
document.querySelectorAll('#degree-dropdown .items').forEach(item => {
    item.addEventListener('click', () => {
        degreeFilterButton.textContent = item.textContent;
        filterJobBoxes();
    });
});

// Initial call to filter job boxes
filterJobBoxes();

// Reset both dropdowns to "Show All" initially
categoryFilterButton.textContent = 'Show All Categories';
degreeFilterButton.textContent = 'Show All Degrees';