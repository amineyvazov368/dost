import {post} from "./API/requests/index.js";
import { endpoints } from "./API/constants.js";

const titleInp = document.querySelector("#title");
const posterInp = document.querySelector("#poster");
const trailerURLInp = document.querySelector("#trailerURL");
const genreInp = document.querySelector("#genre");
const ageInp = document.querySelector("#age");
const countryInp = document.querySelector("#country");
const directorInp = document.querySelector("#director");
const descTextArea = document.querySelector("#desc");
const backtohome = document.getElementById("backtohome");
const addMoviebtn = document.getElementById("addMoviebtn");

posterInp.addEventListener("change", function() {
    let file = this.files[0];
    let reader = new FileReader();

    reader.onload = function(event) {
        let fileContent = event.target.result;
        posterInp.value = fileContent;
    };

    reader.onerror = function(event) {
        console.error("Fayl oxunarkən səhv:", event.target.error);
    };


    reader.readAsDataURL(file); 
});


addMoviebtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("index.html");
    let newMovie = {
        "title": titleInp.value,
        "genre": genreInp.value,
        "country": countryInp.value,
        "poster": posterInp.value,
        "director": directorInp.value,
        "trailerURL": trailerURLInp.value,
        "description": descTextArea.value,
        "ageRestriction": ageInp.value,
        "id": "7",
    };
    post(endpoints.movies, newMovie);
});
