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

export const dates = ref([
    arrForYear(1989),
    arrForYear(2007)
]);