import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <body style="/*background: url(&quot;design.jpg&quot;);*/background-position: 0 -60px;">
    <nav class="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3" id="mainNav" style="background: var(--bs-gray-200);">
        <div class="container"><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1"></div><a class="btn btn-primary shadow customBttn customFont" role="button" href="/feed">Feed</a>
        </div>
    </nav>
    <section style="background: var(--bs-white);">
        <div class="container bg-primary-gradient py-5" style="background: var(--bs-white);">
                <img src="assets/img/logo.png" class="center"/>
                <h1 class="fw-bold card-title ttle customFont"style="text-align: center;">Your favorite news stories, all in one place.</h1>
                <div class="py-5 p-lg-5"></div>
            <a class="btn shadow center customBttn" style="width:4vw;" role="button">^</a>
            <div class="py-5 p-lg-5">
                <div class="py-5 p-lg-5"></div>
                <div class="row row-cols-1 row-cols-md-2 mx-auto" style="max-width: 900px;">
                    <div class="col mb-5">
                        <div class="card shadow-sm">
                            <div class="card-body px-4 py-5 px-md-5" style="background: var(--bs-gray-200);">
                                <h5 class="fw-bold card-title customFont">How it Works</h5>
                                <p class="text-muted card-text mb-4 customFont">NewsUp utilizes NewsAPI and sentiment analysis to bring uplifting news stories to you. The Web application is developed on React.js, Express.js, and MongoDB.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card shadow-sm">
                            <div class="card-body px-4 py-5 px-md-5" style="background: var(--bs-gray-200);">
                                <h5 class="fw-bold card-title customFont">Why NewsUp?</h5>
                                <p class="text-muted card-text mb-4 customFont"> Feeling overwhelmed due to the constant stream of negative news? Upifting news stories can bring users more positivity in their lives.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 mb-4">
                        <div class="card shadow-sm">
                            <div class="card-body px-4 py-5 px-md-5" style="background: var(--bs-gray-200);">
                                <h5 class="fw-bold card-title customFont">How to Use NewsUp</h5>
                                <p class="text-muted card-text mb-4 customFont">
                                    NewsUp provides you positive headlines in your feed. You can look for artices relating to certain topics, or browse articles beyond the headlines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section></section>
    <section class="py-5">
        <div class="py-5 p-lg-5">
            <h1 class="fw-bold card-title customFont" style="text-align: center;">Ready to see brighter news stories?</h1>
        </div>
        <a class="btn shadow center customBttn customFont" style="width:10vw;" role="button" href="/feed">Go to Feed</a>
    </section>
    <footer class="bg-primary-gradient">
        <div class="container py-4 py-lg-5">
            <div class="row justify-content-center">
                <div class="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                    <h3 class="fs-6 fw-bold customFont">Sources</h3>
                    <ul class="list-unstyled">
                        <li><a href="https://github.com/acm-projects/NewsUp" class="customFont">Source Code</a></li>
                        <li></li>
                    </ul>
                </div>
                <div class="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                    <ul class="list-unstyled"></ul>
                </div>
                <div class="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last item social">
                    <div class="fw-bold d-flex align-items-center mb-2"></div>
                    <h3 class="fs-6 fw-bold customFont">From your friends at</h3>
                    <h1 class="customFont" style="font-size:30px;">The Association of Computing Machinery, The University of Texas at Dallas</h1>
                </div>
            </div>
        </div>
    </footer>
    </body>
    </div>
  );
}
}

export default App;
