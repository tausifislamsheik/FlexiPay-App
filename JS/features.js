document.getElementById('show-addMoney').addEventListener('click', function(){
    showClickSection('addMoney-section');
});
document.getElementById('show-cashOut').addEventListener('click', function(){
    showClickSection('cashOut-section');
});
document.getElementById('show-transferMoney').addEventListener('click', function(){
    showClickSection('transferMoney-section');
});
document.getElementById('show-getBonus').addEventListener('click', function(){
    showClickSection('getBonus-section');
});
document.getElementById('show-payBill').addEventListener('click', function(){
    showClickSection('payBill-section');
});
document.getElementById('show-transaction').addEventListener('click', function(){
    showClickSection('transaction-section');
});


// Place this code in your JS/features.js file
// or in a <script> tag at the end of your <body>, after your other scripts.

document.addEventListener('DOMContentLoaded', function() {
    const actionButtons = document.querySelectorAll('.active-button'); // Select all your main action buttons

    // Function to handle showing the correct section and setting the active button
    function handleButtonClick(buttonElement) {
        // 1. Remove 'active' class from all action buttons
        actionButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // 2. Add 'active' class to the clicked button
        buttonElement.classList.add('active');

        // 3. Show the corresponding section using your existing showClickSection function
        //    Derive section ID from button ID (e.g., "show-addMoney" -> "addMoney-section")
        const sectionIdToShow = buttonElement.id.replace('show-', '') + '-section';

        if (typeof showClickSection === 'function') {
            showClickSection(sectionIdToShow);
        } else {
            console.error('The function showClickSection is not defined. Make sure utilities.js is loaded before features.js.');
        }
    }

    // Add click event listeners to each action button
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleButtonClick(this); // 'this' refers to the clicked button
        });
    });

    // Initial setup:
    // Ensure the section corresponding to the initially active button is displayed on page load.
    const initiallyActiveButton = document.querySelector('.active-button.active');
    if (initiallyActiveButton) {
        // We don't need to re-call handleButtonClick here if showClickSection already hides others.
        // Just make sure the correct section is visible.
        const sectionIdToShow = initiallyActiveButton.id.replace('show-', '') + '-section';
        if (typeof showClickSection === 'function') {
            showClickSection(sectionIdToShow);
        } else {
            console.error('The function showClickSection is not defined for initial setup.');
        }
    } else if (actionButtons.length > 0) {
        // Optional: If no button is marked 'active' in HTML, make the first one active by default.
        // actionButtons[0].classList.add('active'); // Make first button active
        // const firstSectionId = actionButtons[0].id.replace('show-', '') + '-section';
        // if (typeof showClickSection === 'function') {
        //     showClickSection(firstSectionId);
        // }
        // For now, assuming your HTML correctly sets the initial active button ('Add Money').
    }
});
