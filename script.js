    function sendEmail(event) {
        event.preventDefault(); // Prevents the default form submission

        // Collects form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Sends the email
        emailjs.send("service_x65ms2i", "template_cww3k3h", {
            "name": name,
            "email": email,
            "message": message
        }).then(
            function(response) {
                document.getElementById('thankYouModal').style.display = 'block';
                console.log("SUCCESS!", response.status, response.text);
                // alert('Email successfully sent!');
            },
            function(error) {
                console.log("FAILED...", error);
                alert('Failed to send email. Please try again later.');
            }
        );
    }




    document.addEventListener("DOMContentLoaded", function() {
        var quotes = [
            "Chess is the struggle against the error. – Johannes Zukertort",
            "Every chess master was once a beginner. – Irving Chernev",
            "Chess makes men wiser and clear-sighted. – Vladimir Putin",
            "He is the greatest artist amongst chess players. - Akiba Rubinstein",
            // Add more quotes as needed
        ];

        var quoteIndex = Math.floor(Math.random() * quotes.length);
        var quoteContainer = document.getElementById('initial-quote');
        var mainContent = document.getElementById('wrapper'); // Assuming your main content is wrapped in an element with the ID 'wrapper'

        document.getElementById('quote-text').textContent = quotes[quoteIndex];
        quoteContainer.style.display = 'flex';

        // Hide quote after 3 seconds
        setTimeout(function() {
            quoteContainer.style.opacity = 0;
            quoteContainer.style.visibility = 'hidden';

            // To ensure the smooth flow, delay the display of main content until the quote is faded out
            setTimeout(function() {
                mainContent.style.opacity = 1; // Ensure main content is visible if it was initially hidden
            }, 1000); // This should match the opacity transition duration
        }, 3000); // Show quote for 3 seconds

        // Optional: Check if the main content was initially hidden and ensure it stays that way until the quote is hidden
        mainContent.style.opacity = 0;
        setTimeout(function() {
            mainContent.style.transition = 'opacity 1s ease-out';
            mainContent.style.opacity = 1;
        }, 4000); // Adjust timing as needed
    });
