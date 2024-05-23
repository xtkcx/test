document.write("■■■問１■■■" + "<br>");
for (var i = 1; i <= 5; i++) {
    document.write("★");
}
document.write("<br><br>");


document.write("■■■問２■■■" + "<br>");
for (var i = 1; i <= 2; i++) {
    for (var a = 1; a <= 3; a++) {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");


document.write("■■■問３■■■" + "<br>");
for (var i = 1; i <= 2; i++) {
    for (var a = 1; a <= 5; a++) {
        document.write("☆");
    }
    document.write("<br>");
}
document.write("<br>");


document.write("■■■問４■■■" + "<br>");
for (var i = 1; i <= 4; i++) {
    for (var a = 1; a <= 5; a++) {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");


document.write("■■■問５■■■" + "<br>");
for (var i = 1; i <= 4; i++) {
    for (var a = 1; a <= 3; a++) {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");


document.write("■■■問６■■■" + "<br>");
for (var i = 1; i <= 3; i++) {
    for (var a = 1; a <= 3; a++) {
        if (a % 2 == 0) {
            document.write("☆");
        } else {
            document.write("★");
        }
    }
    document.write("<br>");
}
document.write("<br>");


document.write("■■■問７■■■" + "<br>");
for (var i = 1; i <= 4; i++) {
    for (var a = 1; a <= 5; a++) {
        if (a % 3 != 0) {
            document.write("☆");
        } else {
            document.write("★");
        }
    }
    document.write("<br>");
}
document.write("<br>");


document.write("■■■問８■■■" + "<br>");
for (var i = 1; i <= 5; i++) {
    for (var a = 1; a <= i; a++) {
        document.write("★");
    }
    document.write("<br>");
}
