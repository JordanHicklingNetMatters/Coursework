<?php
    include_once 'dbh.php';

    // $title = $_GET['title'][1];
    // $company = $_GET['imgsrc'][1];
    // $description = $_GET['description'][1];
    // $author = $_GET['author'][1];
    // $authorsrc = $_GET['authorsrc'][1];
    // $date = $_GET['dateposted'][1];

    $sql = "SELECT * FROM news WHERE id=1;";
    $result = $conn->query($sql);
    // $resultCheck = mysqli_num_rows($articleOne);





?>


<div class="flex-container">
    <div class="first-article">
        <div class="news-content">
            <?php
            if ($result->rowCount() > 0)  { //checks the results if its 0 then it can run the code (prevents errors)
                while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                    echo '<img class="main-article-img" src="' . $row['imgsrc'] . '" alt="A picture advertising a job for junior digital marketing executive.">';
                    echo '<h4 class="h4-news">' . $row['title'] . '</h4>';
                    echo '<p class="description">' . $row['description'] . '</p>';
                    echo '<a href="#"><button class="news-read-more-btn" type="button">Read More</button></a>';
                }
            }
            ?>
            <div class="posted-by-section">
                <div>
                    <img class="avatar-img" src="img/news-avatar.png" alt="An avatar of the user who posted the article.">
                </div>
                <div class="details">
                    <strong class="posted-strong">Posted by Netmatters</strong>
                    <br>
                    20th July 2022
                </div>
            </div>
        </div>
    </div><!-- This is the articals posted by page however when I input it, it just doesnt do anything so I will leave it commented for now. -->

    <div class="second-article"> <!-- Second Artical -->
        <div class="news-content">
            <?php 
                $secondSql = "SELECT * FROM news WHERE id=2;";
                $secondResults = $conn->query($secondSql);
            
                if ($result->rowCount() > 0) { //checks the results if its 0 then it can run the code (prevents errors)
                    while ($row = $secondResults->fetch(PDO::FETCH_ASSOC)) {
                        echo '<img class="main-article-img" src="' . $row['imgsrc'] . '" alt="Text stating What you dont know about seo">';
                        echo '<h4 class="h4-news">' . $row['title'] . '</h4>';
                        echo '<p class="description">' . $row['description'] . '</p>';
                        echo '<a href="#"><button class="news-read-more-btn" type="button">Read More</button></a>';
                    }
                }
            ?>
            <div class="posted-by-section">
                <div>
                    <img class="avatar-img" src="img/news-avatar.png"
                        alt="An avatar of the user who posted the article.">
                </div>
                <div class="details">
                    <strong class="posted-strong">Posted by Netmatters</strong>
                    <br>
                    20th July 2022
                </div>
            </div> 
        </div>
    </div> <!-- Third Article -->


    <div class="hidden-card">
        <div class="third-article">
            <div class="news-content">
                <img class="main-article-img" src="img/new-business-executive.jpg"
                    alt="A picture with a phone advertising jobs for new business exectuives">
                <h4 class="red-h4-news">New Business Executive</h4>
                <p class="description">Salary Range £22,000 & OTE Hours 40 hours per week, Monday - Friday
                    Location Wymondham, Norfolk/Part...</p>
                <a href="#"><button class="red-news-read-more-btn" type="button">Read More</button></a>
                <div class="posted-by-section">
                    <div>
                        <img class="avatar-img" src="img/news-avatar.png"
                            alt="An avatar of the user who posted the article.">
                    </div>
                    <div class="details">
                        <strong class="posted-strong">Posted by Netmatters</strong>
                        <br>
                        20th July 2022
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="view-all-section">
    <a class="view-link" href="#">View All <em>&rarr;</em></a>
</div>