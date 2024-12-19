function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

function myFunction2() {
    const element = document.getElementsByTagName("about-me");
    if (element.length > 0) {
        document.getElementById("demo").innerHTML = '<br>The "About Me" section is: <br>' + aboutMeText;
    } else {
        document.getElementById("demo").innerHTML = "The 'About Me' section was not found.";
    }
}