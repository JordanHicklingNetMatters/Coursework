<?php
    include_once 'dbh.php';

    $sql = "SELECT * FROM news WHERE id=1;";
    $result = $conn->query($sql);


    echo '<div class="flex-container">';

        if ($result->rowCount() > 0)  { //checks the results if its 0 then it can run the code (prevents errors)
            while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                echo '<div class="first-article">';
                    echo '<div class="news-content">';
                        echo '<img class="main-article-img" src="' . $row['imgsrc'] . '" alt="A picture advertising a job for junior digital marketing executive.">';
                        echo '<h4 class="h4-news">' . $row['title'] . '</h4>';
                        echo '<p class="description">' . $row['description'] . '</p>';
                        echo '<a href="#"><button class="news-read-more-btn" type="button">Read More</button></a>';
                        echo '<div class="posted-by-section">';
                            echo '<div>';
                                echo '<img class="avatar-img" src="' . $row['authorsrc'] . '" alt="An avatar of the user who posted the article.">';
                            echo '</div>';
                            echo '<div class="details">';
                                echo '<strong class="posted-strong">' . $row['author'] . '</strong><br>' . $row['dateposted'];
                            echo '</div>';
                        echo '</div>';
                    echo '</div>';
                echo '</div>';
            }
        }

        $secondSql = "SELECT * FROM news WHERE id=2;";
            $secondResults = $conn->query($secondSql);

            if ($secondResults->rowCount() > 0) { //checks the results if its 0 then it can run the code (prevents errors)
                while ($row = $secondResults->fetch(PDO::FETCH_ASSOC)) {
                    echo '<div class="second-article">';
                        echo '<div class="news-content">';
                            echo '<img class="main-article-img" src="' . $row['imgsrc'] . '" alt="Text stating What you dont know about seo">';
                            echo '<h4 class="h4-news">' . $row['title'] . '</h4>';
                            echo '<p class="description">' . $row['description'] . '</p>';
                            echo '<a href="#"><button class="news-read-more-btn" type="button">Read More</button></a>';
                            echo '<div class="posted-by-section">';
                                echo '<div>';
                                    echo '<img class="avatar-img" src="' . $row['authorsrc'] . '" alt="An avatar of the user who posted the article.">';
                                echo '</div>';
                                echo '<div class="details">';
                                    echo '<strong class="posted-strong">' . $row['author'] . '</strong><br>' . $row['dateposted'];
                                echo '</div>';
                            echo '</div>';
                        echo '</div>';
                    echo '</div>';
                    }
                }

        $thirdSql = "SELECT * FROM news WHERE id=3;";
        $thirdResults = $conn->query($thirdSql);

        if ($thirdResults->rowCount() > 0) { //checks the results if its 0 then it can run the code (prevents errors)
            while ($row = $thirdResults->fetch(PDO::FETCH_ASSOC)) {
                echo '<div class="hidden-card">';
                    echo '<div class="third-article">';
                        echo '<div class="news-content">';
                            echo '<img class="main-article-img" src="' . $row['imgsrc'] . '" alt="A picture with a phone advertising jobs for new business exectuives">';
                            echo '<h4 class="red-h4-news">' . $row['title'] . '</h4>';
                            echo '<p class="description">' . $row['description'] . '</p>';
                            echo '<a href="#"><button class="red-news-read-more-btn" type="button">Read More</button></a>';
                            echo '<div class="posted-by-section">';
                                echo '<div>';
                                    echo '<img class="avatar-img" src="' . $row['authorsrc'] . '" alt="An avatar of the user who posted the article.">';
                                echo '</div>';
                                echo '<div class="details">';
                                    echo '<strong class="posted-strong">' . $row['author'] . '</strong><br>' . $row['dateposted'];
                                echo '</div>';
                            echo '</div>';
                        echo '</div>';
                    echo '</div>';
                echo '</div>';
                }
            }
    echo '</div>';
?>
<div class="view-all-section">
    <a class="view-link" href="#">View All <em>&rarr;</em></a>
</div>