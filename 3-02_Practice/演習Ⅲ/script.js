document.write("■■■問1■■■" + "<br><br>");
document.write("半径5cm の円、半径 7cm の円、半径 10cm の円の面積をそれぞれ求めてください。" + "<br>");
document.write("円周率は、3.14 とします。" + "<br>");
document.write("<br>");

function Area(Radius, Pi = 3.14) {
    return "面積は" + Radius * Radius * Pi + "㎠です。";
}

document.write(Area(5) + "<br>");
document.write(Area(7) + "<br>");
document.write(Area(10) + "<br>");

document.write("<br>");


document.write("■■■問2■■■" + "<br><br>");
document.write("大人料金が 500 円、子供料金が 200 円の遊園地があります。" + "<br>");
document.write("A グループは、大人 2 人、子供 4 人" + "<br>");
document.write("B グループは、大人 1 人、子供 5 人" + "<br>");
document.write("C グループは、大人 3 人、子供 7 人" + "<br>");
document.write("合計金額をそれぞれ、○○円です。と表示しなさい。" + "<br>");
document.write("<br>");

function Totalprice(Adult, Child, Adultprice = 500, Childprice = 200) {
    return "グループの合計金額は" + (Adult * Adultprice + Child * Childprice) + "円です。" + "<br>";
}

document.write("A " + Totalprice(2, 4));
document.write("B " + Totalprice(1, 5));
document.write("C " + Totalprice(3, 7));
