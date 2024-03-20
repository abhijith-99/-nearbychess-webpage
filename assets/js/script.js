
    function sendEmail(event) {
        event.preventDefault(); // Prevents the default form submission
    
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
    
        if (!name.trim() || !email.trim() || !message.trim()) {
            showPopup("Please check the fields.");
            return;
        }
    
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
    
    function showPopup(message) {
        document.getElementById('popupText').textContent = message; // Set the popup message
        document.getElementById('popupMessage').style.display = 'flex'; // Show the popup
        // document.getElementById('popupMessage').style.fle
    }
    
    function closePopup() {
        document.getElementById('popupMessage').style.display = 'none'; // Hide the popup
    }



    


    document.addEventListener("DOMContentLoaded", function() {
        var quotes = [
            "Chess is the struggle against the error. – Johannes Zukertort",
            "Every chess master was once a beginner. – Irving Chernev",
            "Chess makes men wiser and clear-sighted. – Vladimir Putin",
            "He is the greatest artist amongst chess players. - Akiba Rubinstein",
            "If you wish to succeed, you must brave the risk of failure.-Garry Kasparov",
            "I like the moment when I break a man's ego.-Bobby Fischer",
            "Tactics involve calculations that can tax the human brain, but when you boil them down, they are actually the simplest part of chess and are almost trivial compared to strategy.-Garry Kasparov",
            "I don't believe in psychology. I believe in good moves.-Bobby Fischer",
            "You must take your opponent into a deep dark forest where 2+2=5, and the path leading out is only wide enough for one.-Mikhail Tal"
            // Add more quotes as needed
        ];

        var quoteIndex = Math.floor(Math.random() * quotes.length);
        var quoteContainer = document.getElementById('initial-quote');
        var mainContent = document.getElementById('wrapper'); // Assuming your main content is wrapped in an element with the ID 'wrapper'

        document.getElementById('quote-text').textContent = quotes[quoteIndex];
        quoteContainer.style.display = 'flex';
        quoteContainer.style.paddingLeft = '1rem';


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




    document.addEventListener('DOMContentLoaded', function() {
        var appStoreButtons = document.querySelector('.linksforapp');
        var navLinks = document.querySelectorAll('nav a');
        var closeButtons = document.querySelectorAll('.close');
    
        // Function to hide the app store buttons
        function hideAppStoreButtons() {
            appStoreButtons.style.display = 'none';
        }
    
        // Function to show the app store buttons
        function showAppStoreButtons() {
            appStoreButtons.style.display = 'block'; // Assuming 'flex' is the original display style
        }
    
        // Listen for clicks on the nav links and hide the app store buttons
        navLinks.forEach(function(link) {
            link.addEventListener('click', hideAppStoreButtons);
        });
    
        // Listen for clicks on any close buttons and show the app store buttons
        closeButtons.forEach(function(button) {
            button.addEventListener('click', showAppStoreButtons);
        });
    });
    

