function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

function myFunction2() {
    const elements = document.getElementsByTagName("p");  
    if (elements.length > 0) 
        document.getElementById("demo").innerHTML = '<br> The text in first paragraph (index 0) is: <br>' + elements[0].innerHTML;
}