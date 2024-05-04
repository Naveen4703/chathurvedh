const $form = document.getElementById('facultyForm');

$form.addEventListener('submit', (e) => {
    console.log("recieved")
    e.preventDefault();
        // Get form data
        const formData = new FormData(e.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        console.log(formDataObject);
        sendDataToBackend(formDataObject);
    });

    
function sendDataToBackend(formDataObject) {
    console.log(formDataObject);
    fetch('/api/faculty/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
    })
    .then(response => response.json())
    .then(responseData => {
        console.log('Response from the backend:', responseData);
        // Handle the response from the backend here (if needed)
        if(responseData.msg){
            alert("Success Fully Registered! ");
        }
    })
    .catch(error => {
        console.error('Error sending data to the backend:', error);
        // Handle errors here (if needed)
    });  
}
