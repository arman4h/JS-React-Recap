const loadlessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all') 
        .then(data => data.json())
        .then(levels => displaylevels(levels.data))
}

const levelLessons = (id) => {
    console.log(id) ;
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url) 
        .then(id => id.json())
        .then(idData => displaylessons(idData.data)) ;
}

function wordSpeak(word){
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-EN"; // English
     window.speechSynthesis.speak(utterance);
}

const displaylessons = (lessons) => {
    const lessonContainer = document.getElementById('lessonCard') ;
    const LoadingContainer = document.getElementById('loadingCard');
    const EmptryContainer = document.getElementById('emptyCard') ;

    EmptryContainer.classList.add('hidden');
    LoadingContainer.classList.add('hidden');
    lessonContainer.classList.add('grid') ;
    lessonContainer.classList.remove('hidden') ;

    lessonContainer.innerHTML="" ;

    if (lessons.length == 0 || !lessons) {
        EmptryContainer.classList.remove('hidden');
    }

    for(let lesson of lessons){  
        const cardDiv = document.createElement('div') ;
        cardDiv.className ="flex flex-col justify-center items-center gap-2 text-center p-5 bg-white rounded-md"
        cardDiv.innerHTML=
        `
            <h1 class="font-bold text-2xl">${lesson.word}</h1>
            <h2 class="font-medium text-ld">Meaning/Pronounciation</h2>
            <h1 class="font-semibold hind-siliguri-regular ">"${lesson.meaning}/ ${lesson.pronunciation}"</h1>
            <div class="flex justify-between items-center w-full pt-10 px-4">
              <button class="p-2 rounded-sm bg-slate-200 w-7"><img src="assets/fi-sr-info.png" alt="information"></button>
              <button onClick="wordSpeak(${lesson.word})"
              class="p-2 rounded-sm bg-slate-200 w-7"><img src="assets/fi-sr-volume.png" alt="information"></button>
            </div>

        `

        lessonContainer.appendChild(cardDiv) ;
    }

}

const displaylevels = (datas) => {
    const levelContainer = document.getElementById('lessons') ;

    for(let data of datas){
        const btndiv = document.createElement('div') ; 
        btndiv.innerHTML= `
               <button
                onClick="levelLessons(${data.level_no})"
                class="cursor-pointer flex items-center gap-1 text-xs font-semibold border border-indigo-700 text-indigo-700 hover:bg-indigo-100 rounded-sm px-2 py-1"
          >
            <span class="flex items-center"
              ><img src="assets/fa-book-open.png" alt=""
            /></span>
            Lessons - ${data.level_no}
          </button> 
        `
        levelContainer.appendChild(btndiv) ;
    }
}

loadlessons() ;