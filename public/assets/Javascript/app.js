$(document).ready(function () {
    
    // INDEX VARS
    var bottomMenu = $(".bottomMenu");
    var contactText = $(".contactContent");
    var contactArrow = $(".contactArrow");
    var line = $(".line");
    // 
    // Start of INDEX.HTML
    // 
    
    // Open Contact menu on hover
    $("#bottomMenu").hover(function openBottomMenu() {
        bottomMenu.css({ "height": "250px" });
        contactText.css({ "color": "#e8e8e8" });
        contactArrow.css({ "color": "#f23236" });
    });
    // 
    // Closes contact when you hover off of it
    $(".headerOverlay, img#davidVizena, body, .viewWorkContainer, .paraBG, .abstractBG, .projects, .paraBG, #backgroundImage, .nav, #am, #was, #textBoth, .aboutMeBG").hover(function closeBottomMenu() {
        bottomMenu.css({ "height": "0" });
        contactText.css({ "color": "#f0f0f0" });
        contactArrow.css({ "color": "#b8b8b8" });
        line.css({ "height": "50px" });
        line.css({ "background": "#b8b8b8" });
        line.css({ "opacity": ".2" });
    });
    // 
    // Makes the line to the view work button grow
    $(".viewWorkContainer").hover(function () {
        line.css({ "height": "190px" });
        line.css({ "background": "#f0f0f0" });
        line.css({ "opacity": "1" });
    });
        
    // 
    // Start of PORTFOLIO.HTML
    // 
    // Start of ABOUTME.HTML
    // 

    // Document.Ready closing
});