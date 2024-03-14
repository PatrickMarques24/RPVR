import { ref } from "vue";

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function dateAlea(year) {
    return year + getRandomInt(6, 15);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function arrForYear(year) {
    let years = [year]
    while (years.length < 4) {
        let newDate = dateAlea(year);
        if (years.includes(newDate)) {
            continue;
        }
        years.push(newDate);
    }

    return shuffle([
        {year: years[0], isAnswer: true},
        {year: years[1], isAnswer: false},
        {year: years[2], isAnswer: false},
        {year: years[3], isAnswer: false}
    ]);
}

export let currentNextScene = {x: 0, y: 0, z: 0};
export function setCurrentNextScene(newScene) {
    currentNextScene = newScene;
}

export const dates = ref([
    [
        {year: 1946, isAnswer: false},
        {year: 1989, isAnswer: false},
        {year: 1967, isAnswer: true},
        {year: 1974, isAnswer: false}
    ],
    [
        {year: 2007, isAnswer: false},
        {year: 1990, isAnswer: false},
        {year: 1999, isAnswer: false},
        {year: 2001, isAnswer: true}
    ]
]);