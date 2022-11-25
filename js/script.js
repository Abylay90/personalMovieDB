const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start : function() {
        personalMovieDB.count = +prompt('How many movies you have watched?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies you have watched?', '');
        }
    },
    rememberMyFilms : function() {
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
    },
    detectPersonalLevel : function() {
        if (personalMovieDB.count<10) {
            console.log("Not enough movies watched!");
        } else if (personalMovieDB.count>=10 && personalMovieDB.count<=30){
            console.log("You are classic viewer!");
        } else if (personalMovieDB.count>30) {
            console.log("Movie lover!");
        } else {
            console.log("Something is wrong!");
        }
    },
    showMyDB : function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB : function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres : function() {
        for (let i=1; i<=3; i++) {
            let genre = prompt(`Your number "${i}" favourite genre of movie?`, '');

            if (genre == '' || genre == null) {
                console.log('Non correct input! Please try again!');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Number ${i+1} favourite genre of movie is "${item}"`);
        });
    }
};