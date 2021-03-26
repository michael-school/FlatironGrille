<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flatiron Grille</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    <link rel="stylesheet" href="style.css" type="text/css">
</head>

<body>
    <header>
        <!-- Navigation -->
	      <nav class="navbar navbar-expand-md navbar-dark sticky-top navbar-font">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img class="logo" src="img/fg_logo.png" alt="flatiron logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbar">

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="font nav-link" href="food.html">Menu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="order.html">Order</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="events.html">Events/Banquets</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="contact_us.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="gallery.html">Gallery</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!--- Form --->
    <main>
        <div class="container contact">
            <div class="row">
                    <h1>Contact Us</h1>
            </div>
            <div class="row">
                    <h4>Need info? Call us at: (731) 668-3528 or fill out the form below and send a message! <br>
                        We'd love to hear from you!</h4>
            </div>
            <div class="row input-container">
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <input type="text" required />
                            <label>Name</label> 
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="styled-input">
                            <input type="text" required />
                            <label>Email</label> 
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="styled-input" style="float:right;">
                            <input type="text" required />
                            <label>Phone Number</label> 
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <textarea required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="btn-lrg submit-btn">Send Message</div>
                    </div>
            </div>
        </div>
        <iframe width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5083465078837!2d-88.85906488466071!3d35.664483080198224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887ea6a48298651f%3A0x303bdc3cff46704a!2sFlatiron%20Grille!5e0!3m2!1sen!2sus!4v1615515424285!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </main>
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 social footer-font" style="text-align:center">
                    <img class="center logo" src="img/fg_logo.png" width="75px">
                    <p>Social Media</p>
                    <a href="https://www.facebook.com/flatirongrille/"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/flatirongrille/"><i class="fab fa-instagram"></i></a>
                </div>
                <div class="col-md-4 footer-font" style="text-align:center">
                    <hr class="light">
                    <h5 style="text-align:center">Find Us</h5>
                    <hr class="light">
                    <p>1160 Vann Drive</p>
                    <p>Jackson, TN 38305</p>
                    <p>(731) 668-3528</p>
                </div>
                <div class="col-md-4 footer-font" style="text-align:center">
                    <hr class="light">
                    <h5 style="text-align:center">Our Hours</h5>
                    <hr class="light">
                    <p>Monday-Thursday: 4:30-9:00</p>
                    <p>Friday and Saturday: 4:30-10:30</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
        </div>
    </footer>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous">
    </script>
</body>

</html>