
const applyNowButtons = document.querySelectorAll('.apply-now-button');

    // Add a click event listener to each Apply now button
    applyNowButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Get the course title associated with the clicked button
            const courseTitle = button.closest('.card').querySelector('.card-title').textContent;

            // Construct the URL with the selected course title
            const selectedCourse = encodeURIComponent(courseTitle);
            const url = `apply.html?course=${selectedCourse}&courseType=Full course training`;

            // Redirect to the constructed URL
            window.location.href = url;
        });
    });
