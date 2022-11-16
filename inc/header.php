<header class="header-down">
    <?php include("inc/sidebar.php"); ?>
            <a href="index.php"><img class="main-logo" src="img/Netmatters.png" alt="Netmatters Logo"></a>
            <div class="container">
                <!-- Start of the header navigation -->
                <div class="header-content">
                    <button class="support-btn fa-solid fa-computer-mouse" type="button"><a href="#">Support</a></button>
                    <a href="contact.php"><button class="contact-btn fa-solid fa-paper-plane" type="button">Contact</button></a>
                    <!-- These are not shown in the mobile version so I will disable them for now however have a media query ready -->
                    <div class="search-hamburger-btns">
                        <span class="contact fa-solid fa-phone"></span>
                        <button class="main-search-btn fa-solid fa-magnifying-glass" type="submit"></button>
                        <button class="hamburger-btn fa-solid fa-bars" type="button"></button>
                    </div>
                </div>
                <form>
                    <input class="form-control search-bar" placeholder=" Search..." id="search-input" name="keyword" type="text" value="">
                    <button class="search-btn fa-solid fa-magnifying-glass" type="submit"></button>
                </form>
            </div>
    </header> <!-- End of the header navigation -->
            <!-- The main navigation bar for anyone over 900 pixel screens -->
            <nav class="main-nav">
                <ul class="first-list">
                    <a href="#"><li class="software"><span class="app fa-brands fa-uncharted"></span><br><small>Bespoke</small><br>Software</li></a>
                    <li class="support"><a href="#"><span class="monitor fa-solid fa-desktop"></span><br><small>IT</small><br>Support</a></li>
                    <li class="marketing"><a href="#"><span class="bars fa-solid fa-chart-simple"></span><br><small>Digital</small><br>Marketing</a></li>
                    <li class="telecoms"><a href="#"><span class="phone fa-solid fa-phone"></span><br><small>Telecoms</small><br>Services</a></li>
                    <li class="web-design"><a href="#"><span class="code fa-solid fa-code"></span><br><small>Web</small><br>Design</a></li>
                    <li class="cyber-security"><a href="#"><span class="shield fa-solid fa-shield"></span><br><small>Cyber</small><br>Security</a></li>
                    <li class="developer-course"><a href="#"><span class="hat fa-solid fa-graduation-cap"></span><br><small>Developer</small><br>Course</a></li>
                </ul>
            </nav> <!-- The end of the navigation bar -->