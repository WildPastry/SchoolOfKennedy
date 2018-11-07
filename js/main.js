/*jslint browser:true */

// CREATE MOVIE ARRAY
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
function clearMovies() {
    $(function () {
        $(".movie").show();
    });
    console.log(".movie")
}

// AGE BUTTON (FILTER BY AGE)
//FILTER PRIMARY AGE
function filterPrimary() {
    $(function () {
        $(".secondary").hide();
    });
    $(function () {
        $(".primary").show();
    });
    console.log(".primary")
}

//FILTER PRIMARY AGE
function filterSecondary() {
    $(function () {
        $(".primary").hide();
    });
    $(function () {
        $(".secondary").show();
    });
    console.log(".secondary")
}

// WATCHLIST BUTTONS
// CREATE EMPTY WATCHLIST
// var watchList = [];
// var movies = ["whaleRider"]
// console.log(watchList);

// jQuery(function ($) {
//     $(".addWhaleBtn").click(function () {
//         if ((watchList.includes("whaleRider")) == 1) {
//             console.log("You have already added this movie to the Watchlist");
//             alert("You have already added this movie to the Watchlist");
//         }
//         if (((watchList.includes("whaleRider")) == 0) && (movies.includes("whaleRider"))) {
//             watchList.push("whaleRider");
//             console.log(watchList.includes("whaleRider"));
//             console.log(watchList);
//             document.getElementById("watchList").innerHTML = "";
//             for (var i = 0; i < watchList.length; i++) {
//                 document.getElementById("watchList").innerHTML += "<li >" + watchList[i] + "</li>";
//             }
//         }
//         return watchList;
//     });
//     console.log(document.getElementById('watchList'));
// });


// function addWhale() {

//     document.getElementsByClassName("addWhaleBtn").addEventListener('click', addWhale);
//     document.getElementsByClassName("watchList").innerHTML = "";

//     for (var i = 0; i < 3; i++) {

//         watchList = document.getElementsByClassName('watchList');
//         createListOuter = document.createElement('div');
//         createListInner = document.createElement('li');

//         createListOuter.className = 'dropdown-menu';
//         createListInner.className = 'dropdown-item';
//         createListOuter.appendChild(createListInner);

//         createListInner.innerHTML += '<li">' + allMovies[i].name + '</li>';
//         watchList.appendChild(createListOuter);
//     }
//     console.log(document.getElementsByClassName('watchList'));
//     console.log("Item added to Watchlist")
// }