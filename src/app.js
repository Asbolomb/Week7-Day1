const yargs = require("yargs");

const {Movie, movieArr} = require ("./utils")

// console.log(yargs.argv);

const app = (yargsObject) => {
    if(yargsObject.add) {
        const movie = new Movie(yargsObject.title, yargsObject.actor);
        movie.add();
        console.log(movieArr);
    } else{
        console.log("Incorrect command")
    }
}

app(yargs.argv)