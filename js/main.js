/*jslint browser:true */

// CREATE MOVIE ARRAY
var allMovies = [{
        name: 'Whale Rider',
        age: 'primary',
        subject: 'english',
    },
    {
        name: 'Remember the Titans',
        age: 'secondary',
        subject: 'english',
    },
    {
        name: 'Super Size Me',
        age: 'secondary',
        subject: 'english',
    },
    {
        name: 'Plastic Paradise',
        age: 'primary',
        subject: 'environment',
    },
    {
        name: 'March of the Penguins',
        age: 'primary',
        subject: 'environment',
    },
    {
        name: 'Imitation Game',
        age: 'secondary',
        subject: 'maths',
    },
    {
        name: 'Hidden Figures',
        age: 'primary',
        subject: 'maths',
    },
    {
        name: 'Before the Flood',
        age: 'primary',
        subject: 'science',
    },
    {
        name: 'Bully',
        age: 'secondary',
        subject: 'english',
    },
    {
        name: 'A Beautiful Planet',
        age: 'primary',
        subject: 'environment',
    },
    {
        name: 'Basquiat',
        age: 'secondary',
        subject: 'art',
    },
    {
        name: "Bang Bang You're Dead",
        age: 'secondary',
        subject: 'english',
    }
];

console.log(allMovies)

// EVENT LISTENERS
document.getElementById('clearMovies').addEventListener('click', clearMovies);
document.getElementById('filterPrimary').addEventListener('click', filterPrimary);
document.getElementById('filterSecondary').addEventListener('click', filterSecondary);

//CLEAR FILTER BUTTON (DISPLAY ALL MOVIES)
function clearMovies() {
    $(function () {
        $(".movie").show();
    });
    console.log(document.getElementsByClassName('.movie'));
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
    console.log(document.getElementsByClassName('.primary'));
}

//FILTER SECONDARY AGE
function filterSecondary() {
    $(function () {
        $(".primary").hide();
    });
    $(function () {
        $(".secondary").show();
    });
    console.log(document.getElementsByClassName('.secondary'));
}

// SUBJECT BUTTON (FILTER BY SUBJECT)
function englishFilter() {
    $(function () {
        $(".movieScience").hide();

    });
    $(function () {
        $(".movieArt").hide();

    });
    $(function () {
        $(".movieEnvironment").hide();

    });
    $(function () {
        $(".movieMaths").hide();

    });

    $(function () {
        $(".movieEnglish").show();
    });
}

function scienceFilter() {
    $(function () {
        $(".movieEnglish").hide();

    });
    $(function () {
        $(".movieArt").hide();

    });
    $(function () {
        $(".movieEnvironment").hide();

    });
    $(function () {
        $(".movieMaths").hide();

    });

    $(function () {
        $(".movieScience").show();
    });
}

function artFilter() {
    $(function () {
        $(".movieEnglish").hide();

    });
    $(function () {
        $(".movieScience").hide();

    });
    $(function () {
        $(".movieEnvironment").hide();

    });
    $(function () {
        $(".movieMaths").hide();

    });

    $(function () {
        $(".movieArt").show();
    });
}

function environmentFilter() {
    $(function () {
        $(".movieEnglish").hide();

    });
    $(function () {
        $(".movieScience").hide();

    });
    $(function () {
        $(".movieArt").hide();

    });
    $(function () {
        $(".movieMaths").hide();

    });

    $(function () {
        $(".movieEnvironment").show();
    });
}

function mathsFilter() {
    $(function () {
        $(".movieEnglish").hide();

    });
    $(function () {
        $(".movieScience").hide();

    });
    $(function () {
        $(".movieArt").hide();

    });
    $(function () {
        $(".movieEnvironment").hide();

    });

    $(function () {
        $(".movieMaths").show();
    });
}

// WATCHLIST BUTTONS
var list = [];
console.log(list);

jQuery(function ($) {
    $(".addWhale").click(function () {
        if ((list.includes("Whale Rider")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("Whale Rider")) == 0) && (allMovies[0].name.includes("Whale Rider"))) {
            list.push("Whale Rider");
            console.log(list.includes("Whale Rider"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetOne'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});

jQuery(function ($) {
    $(".addTitans").click(function () {
        if ((list.includes("Remember the Titans")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("Remember the Titans")) == 0) && (allMovies[1].name.includes("Remember the Titans"))) {
            list.push("Remember the Titans");
            console.log(list.includes("Remember the Titans"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetTwo'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});

jQuery(function ($) {
    $(".addSuper").click(function () {
        if ((list.includes("Super Size Me")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("Super Size Me")) == 0) && (allMovies[2].name.includes("Super Size Me"))) {
            list.push("Super Size Me");
            console.log(list.includes("Super Size Me"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetThree'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});

jQuery(function ($) {
    $(".addPlastic").click(function () {
        if ((list.includes("Plastic Paradise")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("Plastic Paradise")) == 0) && (allMovies[3].name.includes("Plastic Paradise"))) {
            list.push("Plastic Paradise");
            console.log(list.includes("Plastic Paradise"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetFour'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});

jQuery(function ($) {
    $(".addPenguins").click(function () {
        if ((list.includes("March of the Penguins")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("March of the Penguins")) == 0) && (allMovies[4].name.includes("March of the Penguins"))) {
            list.push("March of the Penguins");
            console.log(list.includes("March of the Penguins"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetFive'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});

jQuery(function ($) {
    $(".addImitation").click(function () {
        if ((list.includes("Imitation Game")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("Imitation Game")) == 0) && (allMovies[5].name.includes("Imitation Game"))) {
            list.push("Imitation Game");
            console.log(list.includes("Imitation Game"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetSix'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});

jQuery(function ($) {
    $(".addHidden").click(function () {
        if ((list.includes("Hidden Figures")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("Hidden Figures")) == 0) && (allMovies[6].name.includes("Hidden Figures"))) {
            list.push("Hidden Figures");
            console.log(list.includes("Hidden Figures"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetSeven'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});

jQuery(function ($) {
    $(".addFlood").click(function () {
        if ((list.includes("Before the Flood")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("Before the Flood")) == 0) && (allMovies[7].name.includes("Before the Flood"))) {
            list.push("Before the Flood");
            console.log(list.includes("Before the Flood"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetEight'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});

jQuery(function ($) {
    $(".addBully").click(function () {
        if ((list.includes("Bully")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("Bully")) == 0) && (allMovies[8].name.includes("Bully"))) {
            list.push("Bully");
            console.log(list.includes("Bully"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetNine'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});

jQuery(function ($) {
    $(".addPlanet").click(function () {
        if ((list.includes("A Beautiful Planet")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("A Beautiful Planet")) == 0) && (allMovies[9].name.includes("A Beautiful Planet"))) {
            list.push("A Beautiful Planet");
            console.log(list.includes("A Beautiful Planet"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetTen'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});

jQuery(function ($) {
    $(".addBasquiat").click(function () {
        if ((list.includes("Basquiat")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("Basquiat")) == 0) && (allMovies[10].name.includes("Basquiat"))) {
            list.push("Basquiat");
            console.log(list.includes("Basquiat"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetEleven'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});

jQuery(function ($) {
    $(".addBang").click(function () {
        if ((list.includes("Bang Bang You're Dead")) == 1) {
            console.log("Already added to watchlist");
            alert("Already added to watchlist");
        }
        if (((list.includes("Bang Bang You're Dead")) == 0) && (allMovies[11].name.includes("Bang Bang You're Dead"))) {
            list.push("Bang Bang You're Dead");
            console.log(list.includes("Bang Bang You're Dead"));
            console.log(list);
            document.getElementById("watchList").innerHTML = "";
            for (var i = 0; i < list.length; i++) {
                document.getElementById("watchList").innerHTML += "<a class='dropdown-item' href='#' data-toggle='modal' data-target='#modelTargetTwelve'>" + list[i] + "</a>";
            }
        }
        return list;
    });
});