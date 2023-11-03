const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>The Emporium</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Merienda:wght@400;700&family=Pacifico&family=Pixelify+Sans&family=Poppins:wght@400;500;600&family=Tilt+Neon&family=Young+Serif&display=swap"
          rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      <link rel="stylesheet" href="common.css">
      <style>
          .availability-form {
              margin-top: -50px;
              z-index: 2;
              position: relative;
          }
  
          @media screen and (max-width: 575px) {
              .availability-form {
                  margin-top: 25px;
                  padding: 0 35px;
  
              }
          }
      </style>
  </head>
  
  <body class="text-bg-light">
      <nav class="navbar navbar-expand-lg bg-white px-lg-3 py-lg-2 shadow-sn sticky-top">
          <div class="container-fluid">
              <a class="navbar-brand,me-5 fw-bold fs-3 h-font" href="index.html">The Emporium</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon shadow-none"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link active me-2" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link me-2" href="#">Rooms</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link me-2" href="#">Facilities</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link me-2" href="#">Contact Us</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link me-2" href="#">About</a>
                      </li>
                  </ul>
                  <div class="d-flex" role="search">
                      <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
                      <button type="button" class="btn btn-outline-dark shadow-none me-lg-3 me-2" data-bs-toggle="modal"
                          data-bs-target="#Loginmodal">
                          Login
                      </button>
                      <button type="button" class="btn btn-outline-dark shadow-none" data-bs-toggle="modal"
                          data-bs-target="#registermodal">
                          Register
                      </button>
  
                  </div>
              </div>
          </div>
      </nav>
  
      <div class="modal fade" id="Loginmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <form=>
  
                      <div class="modal-header">
                          <h5 class="modal-title d-flex align-items-center">
                              <i class="bi bi-person-circle fs-3 ma-2"></i>
                              User login
                          </h5>
                          <button type="reset" class="btn-close shadow-none" data-bs-dismiss="modal"
                              aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <div class="mb-3">
                              <label class="form-label">Email address</label>
                              <input type="email" class="form-control shadow-none">
                          </div>
                          <div class="mb-3">
                              <label class="form-label">Password</label>
                              <input type="password" class="form-control shadow-none">
                          </div>
                          <div class="d-flex align-items-center justify-content-between mb-2">
                              <button type="submit" class="btn btn-dark shadow-none">
                                  LOGIN
                              </button>
                              <a href="javascript: void(0)" class="text-secondary text-decoration-none">Forgot
                                  password</a>
                          </div>
                      </div>
                      </form>
              </div>
          </div>
      </div>
  
      <div class="modal fade" id="registermodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <form=>
  
                      <div class="modal-header">
                          <h5 class="modal-title d-flex align-items-center">
                              <i class="bi bi-people fs-3 ma-2"></i>
                              User registration
                          </h5>
                          <button type="reset" class="btn-close shadow-none" data-bs-dismiss="modal"
                              aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <span class="badge rounded-pill text-bg-light text-dark mb-3 text-wrap lh-base">
                              Note: Your details must watch with your ID(Aadhar card,Passport,etc.) that will be required
                              during check-in.
  
                          </span>
                          <div class="container-fluid">
                              <div class="row">
                                  <div class="col-md-6">
                                      <label class="form-label">Name</label>
                                      <input type="text" class="form-control shadow-none">
                                  </div>
                                  <div class="col-md-6">
                                      <label class="form-label">Email</label>
                                      <input type="email" class="form-control shadow-none">
                                  </div>
                                  <div class="col-md-6">
                                      <label class="form-label">Phone number</label>
                                      <input type="number" class="form-control shadow-none">
                                  </div>
                                  <div class="col-md-6">
                                      <label class="form-label">Pictures</label>
                                      <input type="file" class="form-control shadow-none">
                                  </div>
                                  <div class="col-md-6">
                                      <label class="form-label">PIN-CODE</label>
                                      <input type="number" class="form-control shadow-none">
                                  </div>
                                  <div class="col-md-6">
                                      <label class="form-label">Date Of Birth</label>
                                      <input type="date" class="form-control shadow-none">
                                  </div>
                                  <div class="col-md-6">
                                      <label class="form-label">Password</label>
                                      <input type="password" class="form-control shadow-none">
                                  </div>
                                  <div class="col-md-6">
                                      <label class="form-label">Confirm password</label>
                                      <input type="password" class="form-control shadow-none">
                                  </div>
  
                              </div>
                          </div>
                          <div class="text-center my-1">
                              <button type="submit" class="btn btn-dark shadow-none">REGISTER</button>
                          </div>
                      </div>
                      </form>
              </div>
          </div>
      </div>
  
      <!-- carousel -->
  
  
      <div class="container-fluid px-lg-4 mt-4">
          <div class="swiper swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                      <img src="images/carousel/IMG1.png" class="w-100 d-block" />
                  </div>
                  <div class="swiper-slide">
                      <img src="images/carousel/IMG2.png" class="w-100 d-block" />
                  </div>
                  <div class="swiper-slide">
                      <img src="images/carousel/IMG3.png" class="w-100 d-block" />
                  </div>
                  <div class="swiper-slide">
                      <img src="images/carousel/IMG4.png" class="w-100 d-block" />
                  </div>
                  <div class="swiper-slide">
                      <img src="images/carousel/IMG5.png" class="w-100 d-block" />
                  </div>
              </div>
          </div>
      </div>
  
      <!-- check-availability-form -->
  
  
      <div class="container availability-form">
          <div class="row">
              <div class="col-lg-12 bg-white shadow p-4 rounded">
                  <h5 class="mb-4">Check Booking Availability</h5>
                  <form>
                      <div class="row align-items-end">
                          <div class="col-lg-3 mb-3">
                              <label class="form-label" style="font-weight: 500;">Check-in</label>
                              <input type="date" class="form-control shadow-none">
                          </div>
                          <div class="col-lg-3 mb-3">
                              <label class="form-label" style="font-weight: 500;">Check-out</label>
                              <input type="date" class="form-control shadow-none">
                          </div>
                          <div class="col-lg-3 mb-3">
                              <label class="form-label" style="font-weight: 500;">Adult</label>
                              <select class="form-select shadow-none">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                              </select>
                          </div>
                          <div class="col-lg-2 mb-3">
                              <label class="form-label" style="font-weight: 500;">Children</label>
                              <select class="form-select shadow-none">
                                  <option selected>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                              </select>
                          </div>
                          <div class="col-lg-1 mb-lg-3 mb-2 ">
                              <button type="submit" class="btn text-white shadow-none custom-bg">Submit</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  
      <!-- Our rooms -->
  
      <h2 class="mt-5 pt-4 mb-4 text-center fw-bold h-font">Our Rooms</h2>
  
      <div class="container">
          <div class="row">
              <div class="col-lg-4 col-md-6 my-3">
                  <div class="card border-0 shadow" style="max-width: 350px;margin: auto;">
                      <img src="images/rooms/image2.jpeg" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">Simple Room Name</h5>
                          <h6 class="mb-4">₹200 per night</h6>
                          <div class="features mb-4">
                              <h6 class="mb-1">Features</h6>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  2 Rooms
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  1 Bathroom
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  1 Balcony
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  Well-Furnished
                              </span>
                          </div>
                          <div class="facilities mb-4">
                              <h6 class="mb-1">Facilities</h6>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  Wi-Fi
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  1 A.C
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  Television
                              </span>
                          </div>
                          <div class="rating mb-4">
                              <h6 class="mb-1">Ratings</h6>
                              <i class="bi bi-star-fill text-warning"></i>
                              <i class="bi bi-star-fill text-warning"></i>
                              <i class="bi bi-star-fill text-warning"></i>
                              <i class="bi bi-star-fill text-warning"></i>
                              <i class="bi bi-star-half text-warning"></i>
                          </div>
                          <div class="d-flex justify-content-evenly mb-2">
                              <a href="#" class="btn btn-sm text-white custom-bg shadow-none">Book Now</a>
                              <a href="#" class="btn btn-sm btn-outline-dark shadow-none">More details</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 my-3">
                  <div class="card border-0 shadow" style="max-width: 350px;margin: auto;">
                      <img src="images/rooms/image3.jpeg" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">Master-class Room</h5>
                          <h6 class="mb-4">₹1000 per night</h6>
                          <div class="features mb-4">
                              <h6 class="mb-1">Features</h6>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  2 Rooms
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  2 Bathroom
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  1 Balcony
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  Well-Furnished
                              </span>
                          </div>
                          <div class="facilities mb-4">
                              <h6 class="mb-1">Facilities</h6>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  Wi-Fi
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  2 A.C
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  Television
                              </span>
                          </div>
                          <div class="rating mb-4">
                              <h6 class="mb-1">Ratings</h6>
                              <i class="bi bi-star-fill text-warning"></i>
                              <i class="bi bi-star-fill text-warning"></i>
                              <i class="bi bi-star-fill text-warning"></i>
                              <i class="bi bi-star-fill text-warning"></i>
                              <!-- <i class="bi bi-star-half text-warning"></i> -->
                          </div>
                          <div class="d-flex justify-content-evenly mb-2">
                              <a href="#" class="btn btn-sm text-white custom-bg shadow-none">Book Now</a>
                              <a href="#" class="btn btn-sm btn-outline-dark shadow-none">More details</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 my-3">
                  <div class="card border-0 shadow" style="max-width: 350px;margin: auto;">
                      <img src="images/rooms/image1.jpg" width="350px" height="236px" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">Suite</h5>
                          <h6 class="mb-4">₹2000 per night</h6>
                          <div class="features mb-4">
                              <h6 class="mb-1">Features</h6>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  3 Rooms
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  2 Bathroom
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  2 Balcony
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  Well-Furnished
                              </span>
                          </div>
                          <div class="facilities mb-4">
                              <h6 class="mb-1">Facilities</h6>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  Wi-Fi
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  3 split A.C
                              </span>
                              <span class="badge rounded-pill text-bg-light text-wrap">
                                  Television
                              </span>
                          </div>
                          <div class="rating mb-4">
                              <h6 class="mb-1">Ratings</h6>
                              <i class="bi bi-star-fill text-warning"></i>
                              <i class="bi bi-star-fill text-warning"></i>
                              <i class="bi bi-star-fill text-warning"></i>
                              <i class="bi bi-star-fill text-warning"></i>
                              <i class="bi bi-star-fill text-warning"></i>
                              <!-- <i class="bi bi-star-half text-warning"></i> -->
                          </div>
                          <div class="d-flex justify-content-evenly mb-2">
                              <a href="#" class="btn btn-sm text-white custom-bg shadow-none">Book Now</a>
                              <a href="#" class="btn btn-sm btn-outline-dark shadow-none">More details</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-12 text-center mt-5">
              <a href="#" class="btn btn-sm btn-outline-dark rounded-0 fw-bold shadow-none ">More Rooms</a>
          </div>
      </div>
  
      <!-- Our Facilities -->
  
      <h2 class="mt-5 pt-4 mb-4 text-center fw-bold h-font">Our Facilities</h2>
  
      <div class="container">
          <div class="row justify-content-evenly px-lg-0 px-md-0 px-5">
              <div class="col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3">
                  <img src="images/features/wifi.svg" width="80px">
                  <h5>Wi-Fi</h5>
              </div>
              <div class="col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3">
                  <img src="images/features/telephone-outbound.svg" width="80px">
                  <h5>Room Service</h5>
              </div>
              <div class="col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3">
                  <img src="images/features/people-fill.svg" width="88px">
                  <h5>Friendly Staffs</h5>
              </div>
              <div class="col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3">
                  <img src="images/features/shield-lock-fill.svg" width="80px">
                  <h5>Privacy</h5>
              </div>
              <div class="col-lg-12 text-center mt-5">
                  <a href="#" class="btn btn-sm btn-outline-dark rounded-0 fw-bold shadow-none">More Facilities</a>
              </div>
          </div>
      </div>
  
  
      <!-- Reach Us -->
  
      <h2 class="mt-5 pt-4 mb-4 text-center fw-bold h-font">Reach Us</h2>
      <div class="container">
          <div class="row">
              <div class="col-lg-8 col-md-8 p-4 mb-lg-0 mb-3 bg-white rounded">
                  <iframe class="w-100 rounded"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5895614979713!2d85.774064073986!3d20.27585001321444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7f9d486f7c3%3A0xde71ead59307dcca!2sOdisha%20University%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1698686623026!5m2!1sen!2sin"
                      height="450" style="border:0"></iframe>
              </div>
              <div class="col-lg-4 col-md-4">
                  <div class="bg-white p-4 rounded mb-4">
                      <h5>Call Us</h5>
                      <a href="tel:+918763387806" class="d-inline-block mb-2 text-decoration-none text-dark">
                          <i class="bi bi-telephone-fill"></i> +918763387806</a>
                      <br>
                      <a href="tel:+917752062945" class="d-inline-block text-decoration-none text-dark">
                          <i class="bi bi-telephone-fill"></i> +917752062945</a>
                  </div>
  
  
                  <div class="bg-white p-4 rounded mb-4">
                      <h5>Follow Us</h5>
                      <a href="#" class="d-inline-block mb-lg-3">
                          <span class="badge bg-light text-dark fs-6 p-2">
                              <i class="bi bi-twitter no-1"></i>Twitter
                          </span>
                      </a>
                      <br>
                      <a href="#" class="d-inline-block mb-lg-3">
                          <span class="badge bg-light text-dark fs-6 p-2">
                              <i class="bi bi-facebook no-1"></i>facebook
                          </span>
                      </a>
                      <br>
                      <a href="#" class="d-inline-block mb-lg-3">
                          <span class="badge bg-light text-dark fs-6 p-2">
                              <i class="bi bi-whatsapp no-1"></i>Whatsapp
                          </span>
                      </a>
                      <br>
                      <a href="#" class="d-inline-block">
                          <span class="badge bg-light text-dark fs-6 p-2">
                              <i class="bi bi-telegram no-1"></i>Telegram
                          </span>
                      </a>
                      <br>
  
                  </div>
              </div>
          </div>
      </div>
      <br>
  
      <!-- <footer class="text-align-center p-4 text-size-1">
          Designed and Developed by SATYASHREE MISHRA
      </footer> -->
  
  
      <br><br><br><br>
  
  
      <!-- <div class="container-fluid">
          <div class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
      </div> -->
  
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  
      <script>
          var swiper = new Swiper(".swiper-container", {
              spaceBetween: 30,
              effect: "fade",
              loop: true,
              autoplay: {
                  delay: 3500,
                  disableoninteraction: false
              }
          });
      </script>
  
      <!-- <script>
          var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
            pagination: {
              el: ".swiper-pagination",
            },
          });
        </script> -->
  </body>
  
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});