/* New Features:
lightbox to flip through excess portraits
*/

// page name, title
var seezoCrewPages = [
    ["character-min-theopolis.html", "Min Theopolis x"],
    ["character-maja-csonkava.html", "Maja Csonkava x"],
    ["character-danny-mcfarland.html", "Danny McFarland x"],
    ["character-lana-mcfarland.html", "Lana McFarland x"],
    ["character-eliza-foster.html", "Eliza Foster x"],
    ["character-elisabeth-huber.html", "Elisabeth H&uuml;ber x"],
    ["character-olya-huber.html", "Olya H&uuml;ber x"],
    ["character-sofia-huber.html", "Sofia H&uuml;ber x"],
    ["character-heredes.html", "Heredes"]
];
var seezoKidsPages = [
    ["character-johan-fisker.html", "Johan Fisker x"],
    ["character-simon-elliot.html", "Simon Elliot"],
    ["character-miriam-schafer.html", "Miriam Sch&auml;fer"],
    ["character-sabah-bintyahya.html", "Sabah bint Yahya"],
    ["character-joceline-poirier.html", "Joceline Poirier"],
    ["character-alexei-markin.html", "Alexei Markin"],
    ["character-ania-markin.html", "Ania Markin"],
    ["character-charlotte-decastille.html", "Charlotte de Castille"],
    ["character-annelie-rasmussen.html", "Annelie Rasmussen"],
    ["character-jakob-rasmussen.html", "Jakob Rasmussen"]
];
var lachtCrewPages = [
    ["character-vera-trumbauer.html", "Vera Trumbauer"],
    ["character-anika-knudsen.html", "Anika Knudsen"],
    ["character-karla.html", "Karla"],
    ["character-emily-moore.html", "Emily Moore"],
    ["character-sonia.html", "Sonia"],
    ["character-susanna-koppel.html", "Susanna Koppel"],
    ["character-hennie.html", "Hennie"],
    ["character-drika.html", "Drika"]
];
var godsPages = [
    ["character-hermes.html", "Hermes"],
    ["character-persephone.html", "Persephone"],
    ["character-gethos.html", "Gethos"],
    ["character-min-theopolis.html", "Minaria"],
    ["character-heredes.html", "Heredes"],
    ["character-akonitia.html", "Akonitia"],
    ["character-mekonos.html", "Mekonos"]
];
var villagersPages = [
    ["character-else-alfred-hofer.html", "Else and Alfred Hofer"],
    ["character-reiner-trumbauer.html", "Reiner Trumbauer"]
];
// pages array, category title
var noblesPages = [
    ["character-alexander-vonkleist.html", "Alexander von Kleist"],
    ["character-king-friedrich.html", "King Friedrich III"],
    ["character-antonia-vonkleist.html", "Antoina von Kleist"]
];
// pages array, category title
var characterPageArrays = [
    [seezoCrewPages, "Seezo crew"],
    [seezoKidsPages, "Seezo kids"],
    [lachtCrewPages, "Lacht crew"],
    [godsPages, "gods"],
    [villagersPages, "villagers"],
    [noblesPages, "nobles"]
];
var createNavText;

$(document).ready(function () {
    // insert logo
    $('<a href="index.html" id="logo"><div><p class="title">s</p></div></a>').appendTo("#sidebar");
    
    // insert nav menu framework
    $('<nav><ul><li id="story-list-item"></li><li id="characters-list-item"></li><li id="places-list-item"></li></ul></nav>').appendTo("#sidebar");
    // insert story nav into framework
    $('<a>Story &nbsp;<i class="fas fa-book"></i> &nbsp;>></a><ul class="first-subnav"><li><a href="story.html">all chapters</a></li><li><a href="story-timeline.html">timeline</a></li><li><a href="story-tags.html">tags</a></li></ul>').appendTo("#story-list-item");
    // insert characters nav into framework via arrays
    createNavText = '<a>Characters &nbsp;<i class="fas fa-users"></i> &nbsp;>></a><ul class="first-subnav">';
    for (i = 0; i < characterPageArrays.length; i++) { // for the number of arrays
        createNavText += '<li><a>' + characterPageArrays[i][1] + ' >></a><ul class="second-subnav">';
        for (var j = 0; j < characterPageArrays[i][0].length; j++) { // for the number of pages in given array
            var getArray = characterPageArrays[i][0];
            createNavText += '<li><a href="' + getArray[j][0] + '">' + getArray[j][1] + '</a></li>';
        }
        createNavText += '</ul></li>';
    }
    createNavText += '<li><a href="character-index.html">view all</a></li></ul>';
    $(createNavText).appendTo("#characters-list-item");
    // insert places nav into framework
    $('<a>Places &nbsp;<i class="fas fa-image"></i> &nbsp;>></a><ul class="first-subnav"><li><a href="place-caravan.html">Caravan</a></li><li><a href="place-hamburg.html">Hamburg orphanage</a></li><li><a href="place-huber.html">H&uuml;ber estate</a></li><li><a href="place-seezo.html">Seezo</a></li><li><a href="place-lacht-haus.html">Lacht Haus</a></li><li><a href="place-hafen.html">Hafen auf Gemensa</a></li><li><a href="place-underworld.html">Underworld</a></li><li><a href="place-berlin.html">Berlin</a></li></ul>').appendTo("#places-list-item");
    // insert footer
    $('<footer><p>&copy; 2020 Ruthie Carroll</p><a href="https://seezo.tumblr.com" target="_blank"><i class="fab fa-tumblr-square"></i></a>&nbsp;<a href="mailto:ruemca@gmail.com"><i class="fas fa-envelope-square"></i></a></footer>').appendTo("#sidebar");
    
    // image cycle
    $('#slider').cycle({
        speed: 0,
        timeout: 0,
        next: '#next',
        prev: '#prev',
    });
    
    // light box
    $('.portrait').click(function(){
        var source = $(this).attr('src');
        var artist = $(this).attr('artist');
        var title = $(this).attr('titled');
        $('body').append('<div id="curtain"></div>');
        $('body').append('<div id="lightbox"><img src="'+source+'"><p>'+artist+'<br>"'+title+'"</p></div>');
        $('#curtain').click(function(){
            $('#lightbox').remove();
            $('#lightbox-text').remove();
            $('#curtain').remove();
        });
    });
});

function insertRelatedLinks(category) {
    for (i = 0; i < category.length; i++) {
        $('<a href="' + category[i][0] + '">' + category[i][1] + '</a>').appendTo("#related");
    }
};
