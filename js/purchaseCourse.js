
const $form = document.getElementById('forms');
$form.addEventListener('submit', (e) => {
    console.log("form recieved")
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
    if (canSubmitForm()) {
    fetch('/api/register', {
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
            sessionStorage.setItem('lastSubmitTime', new Date().getTime());
        }
    })
    .catch(error => {
        console.error('Error sending data to the backend:', error);
        // Handle errors here (if needed)
    }); 
  } else {
    alert("You can't submit the form again so soon. Please wait for 1 minute.");
  }
}
document.getElementById("purchaseButton").addEventListener("click", async function(e) {
  console.log("Purchase button clicked");
  
  // Make an AJAX request to your backend API to create a Razorpay order
 const createOrder = await fetch("api/create-razorpay-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ amount: 10000 }) // Change the amount as needed
  })
  .then(response => response.json())
  .then(data => {
    // Open the Razorpay hosted checkout page
    sessionStorage.setItem('order_id',data.order_id);
    var options = {
      key: data.key,
      order_id: data.order_id,
      amount: data.amount,
      name: "Chaturvedh IT Solutions",
      image: "../images/favicon/cis-favicon.png",
      description: "Chaturvedh IT solutions Product Description",
      handler: function(response) {
        // This function is called when the payment is completed or canceled
        // The 'response' parameter contains payment-related information
        handleRazorpayResponse(response); // Call the custom handler function
      }
    };

    var rzp = new Razorpay(options);
    rzp.open();
  })
  .catch(error => {
    console.error("Error:", error);
    sessionStorage.removeItem("order_id");
  });
});

// Define the handler function
var handleRazorpayResponse = function(response) {
  // Response contains payment-related information
  var paymentId = response.razorpay_payment_id;
  var orderId = response.razorpay_order_id;
  var signature = response.razorpay_signature;
  
  // You can send this information to your server for verification and order processing
  // Example: Call your server API to verify the payment and process the order
  fetch('api/verifyPayment-and-post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      payment_id: paymentId,
      order_id: sessionStorage.getItem('order_id'),
      signature: signature
    })
  })
  .then(function(response) {
    sessionStorage.removeItem("order_id");

    return response.json();
  })
  .then(function(data) {
    if (data.response) {
      // Payment is verified and order is processed
      // Remove the order ID from session storage
      console.log(data.response)
      alert('Payment successful! Order confirmed.');
    } else {
      // Payment verification failed
      alert('Payment verification failed. Please try again or contact support.');
    }
  })
  .catch(function(error) {
    console.error('Error verifying payment:', error);
   // alert('An error occurred while verifying the payment.');
   sessionStorage.removeItem("order_id");
  });
};

// Duplicate handler
function canSubmitForm() {
  const lastSubmitTime = sessionStorage.getItem('lastSubmitTime');
  if (!lastSubmitTime) {
    return true;
  }

  const currentTime = new Date().getTime();
  const timeElapsed = currentTime - parseInt(lastSubmitTime, 10);

  return timeElapsed >= 60000;
}