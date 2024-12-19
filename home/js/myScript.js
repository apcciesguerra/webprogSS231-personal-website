function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

function myFunction2() {
     const aboutMeSection = document.getElementById("about-me"); 
     if (aboutMeSection) { 
         const aboutMeText = aboutMeSection.innerText; 
         document.getElementById("demo").innerHTML = '<br>The "About Me" section is: <br>' + aboutMeText;
     } else {
         document.getElementById("demo").innerHTML = "The 'About Me' section was not found.";
     }
 }