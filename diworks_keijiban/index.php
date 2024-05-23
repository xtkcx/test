<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>diworksblog 掲示板</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <header>
        <div class="logo">
            <img src="diblog_logo.jpg">
        </div>
        <ul class="menu">
            <li>トップ</li>
            <li>プロフィール</li>
            <li>D.I.Blogについて</li>
            <li>登録フォーム</li>
            <li>問い合わせ</li>
            <li>その他</li>
        </ul>
    </header>

    <main>
        <div class="left">
            <h1>プログラミングに役立つ掲示板</h1>
            <form method="post" action="insert.php">
                <h2> 入力フォーム</h2>
                <div>
                    <label>ハンドルネーム</label> <br>
                    <input type="text" class="text" size="35" name="handlename">
                </div>
                <div>
                    <label>タイトル</label>
                    <br>
                    <input type="text" class="text" size="35" name="title">
                </div>
                <div>
                    <label>コメント</label>
                    <br>
                    <textarea cols="50" rows="7" name="comments"></textarea>
                </div>
                <div>
                    <input type="submit" class="submit" value="投稿する">
                </div>
            </form>
            <?php

            mb_internal_encoding("utf8");
            $pdo = new PDO("mysql:dbname=lesson1;host=localhost;", "root", "mysql");
            $stmt = $pdo->query("select * from diworks_keijiban");

            ?>

            <?php
            while ($row = $stmt->fetch()) {
                echo "<div class='kiji'>";
                echo "<h3>" . $row['title'] . "</h3>";
                echo "<div class='contents'>";
                echo $row['comments'];
                echo "<div class='handlename'>posted by" . $row['handlename'] . "</div>";
                echo "</div>";
                echo "</div>";
            }
            ?>

        </div>
        <div class="right">
            <h4 class="a">人気の記事</h4>
            <ul class="bar_1">
                <li>PHPオススメ本</li>
                <li>PHP MyAdminの使い方</li>
                <li>いま人気のエディタTops</li>
                <li>HTMLの基礎</li>
            </ul>
            <h4 class="b">オススメリンク</h4>
            <ul class="bar_2">
                <li>ﾃﾞｨｰｱｲﾜｰｸｽ株式会社</li>
                <li>XAMPPのダウンロード</li>
                <li>Eclipseのダウンロード</li>
                <li>Braketsのダウンロード</li>
            </ul>
            <h4 class="c">カテゴリ</h4>
            <ul class="bar_3">
                <li>HTML</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>JavaScript</li>
            </ul>
        </div>
    </main>
    <footer>
        Copyright D.I.works|D.I.blog is the one which provides A to Z about programming
    </footer>
</body>