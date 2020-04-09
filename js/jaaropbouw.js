function ShowFirstYear() {
    disableAllElements();
    document.getElementById('year1').style.display = "block";
}

function ShowSecondYear() {
    disableAllElements();
    document.getElementById('year2').style.display = "block";
}

function ShowThirdYear() {
    disableAllElements();
    document.getElementById('year3').style.display = "block";
}

function ShowFourthYear() {
    disableAllElements();
    document.getElementById('year4').style.display = "block";
}

function disableAllElements() {
    document.getElementById('year1').style.display = "none";
    document.getElementById('year2').style.display = "none";
    document.getElementById('year3').style.display = "none";
    document.getElementById('year4').style.display = "none";
}