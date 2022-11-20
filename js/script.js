
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies you have watched?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies you have watched?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms() {
    for (let i=0; i<2; i++) {
        const a = prompt('One of the latest watched movie?', ''),    
              b = prompt('Could you rate it from 1 to 10?', '');
    
        if (a!=null && b!=null && a!='' && b!='' && a.length<50 && b.length<50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        } 
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count<10) {
        console.log("Not enough movies watched!");
    } else if (personalMovieDB.count>=10 && personalMovieDB.count<=30){
        console.log("You are classic viewer!");
    } else if (personalMovieDB.count>30) {
        console.log("Movie lover!");
    } else {
        console.log("Something is wrong!");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i=1; i<=3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Your number "${i}" best favourite genre of movie?`, '');
    }
}

writeYourGenres();