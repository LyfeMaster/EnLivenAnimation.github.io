<?php
    include_once 'header.php'
?>

                <?php
                    if(isset($_SESSION["useruid"])){
                        echo "<p style='color:black;' >Hello there " . $_SESSION["useruid"] ."</p>";
                    
                    } 
                ?>
            <div id="hero">
                <div class="hero img">
                    <div class="hero-text">
                        <br>
                        <h1 style="font-size:120px; color:#9BC8A5">EnLiven</h1>
                        <br>
                        <br>
                        <p style="font-size:60px">The easy and simple animation website</p>
                        <br>
                        <p style = "font-size:30px">Bring your creations to life</p>
                        <div class=hero-button>GET STARTED  &#x2192</div>
                      </div>
                </div>

            </div>
        </div>
        <div id="page-division2">
            <div id="page-division3">
                <div id="introduction" style="background-color: #93D1A0;">
                    <br>
                    <h1 style="font-size:50px">What is EnLiven?</h1>
                    <br>
                    <p style="font-size: 20px; font-family: Georgia, serif;">EnLiven was first thought of due to our interest in animation. However, a quick Google search later, our group of 4 realized that there were no animation tutorial sites. Despite animation becoming a bigger and bigger field than ever before, it is still a daunting art to get into. So we created EnLiven. Meant to convey the idea of bringing your creations to life, EnLiven will allow  users to learn the 12 basic principles of animation using our interactive tutorials and simplified animation engine. Eventually we hope to create a community where users can interact and give tips to each other. Ultimately, users will be able to move on to more advanced animation engines with EnLiven as a starting point. 
                    </p>
                    <p style="font-size: 20px; font-family: Georgia, serif;">So what are you waiting for?</p>
                </div>
                       
                <div class="slideshow-container">
                    <img src="res/img/bouncingball.gif" style="align-self: center; width:100%;margin-top: 12%;"/>
                </div>
                     
                <script src = "MainPage.js"></script>
                </div>
            
            <div class="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Animate</a></li>
                                    <li><a href="#">12 Principles</a></li>
                                    <li><a href="#">Sandbox</a></li>
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 item text">
                                <h3>EnLiven</h3>
                                <p>Special thanks to our mentor </p>

                            </div>
                            <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a><a href="https://github.com/EnLivenAnimation/EnLivenAnimation.github.io"><i class="fa fa-github"></i></a></div>
                        </div>
                        <p class="copyright">EnLiven © 2021</p>
                    </div>
                </footer>
            </div>
        
    </div>
<?php
    include_once 'footer.php'
?>