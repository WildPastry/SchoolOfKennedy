/*jslint browser:true */

// CREATE ARRAY
var allMovies = [{
        name: 'whaleRider',
        age: 'primary',
        subject: 'english',
    },
    {
        name: 'theTitans',
        age: 'secondary',
        subject: 'english',
    },
    {
        name: 'superSizeMe',
        age: 'secondary',
        subject: 'english',
    },
    {
        name: 'plasticParadise',
        age: 'primary',
        subject: 'environment',
    },
    {
        name: 'marchPenguins',
        age: 'primary',
        subject: 'environment',
    },
    {
        name: 'imitationGame',
        age: 'secondary',
        subject: 'maths',
    },
    {
        name: 'hiddenFigures',
        age: 'primary',
        subject: 'maths',
    },
    {
        name: 'beforeTheFlood',
        age: 'primary',
        subject: 'science',
    },
    {
        name: 'bully',
        age: 'secondary',
        subject: 'english',
    },
    {
        name: 'aBeautifulPlanet',
        age: 'primary',
        subject: 'environment',
    },
    {
        name: 'basquiat',
        age: 'secondary',
        subject: 'art',
    },
    {
        name: 'bangBang',
        age: 'secondary',
        subject: 'english',
    }
];

console.log(allMovies)

// EVENT LISTENERS
document.getElementById('clearMovies').addEventListener('click', clearMovies);
document.getElementById('filterPrimary').addEventListener('click', filterPrimary);
document.getElementById('filterSecondary').addEventListener('click', filterSecondary);

//CLEAR FILTER BUTTON (DISPLAY ALL)
function clearMovies(){
    $(function(){
        $(".movie").show();
    });
    console.log(".movie")
}

// AGE BUTTON (FILTER BY AGE)
//FILTER PRIMARY AGE
function filterPrimary(){
    $(function(){
        $(".secondary").hide();
    });
    $(function(){
        $(".primary").show();
    });
    console.log(".primary")
}

//FILTER PRIMARY AGE
function filterSecondary(){
    $(function(){
        $(".primary").hide();
    });
    $(function(){
        $(".secondary").show();
    });
    console.log(".secondary")
}