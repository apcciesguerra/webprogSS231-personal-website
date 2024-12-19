function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

function myFunction2() {
    const element = document.getElementsByTagName("p");
    // Check if any <p> elements exist
    if (element.length > 0) {
        document.getElementById("demo").innerHTML = '<br> The text in the first paragraph (index 0) is: <br>' + element[0].innerHTML;
    } else {
        document.getElementById("demo").innerHTML = "No paragraphs found.";
    }
}