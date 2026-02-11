const loadlessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((data) => data.json())
    .then((levels) => displaylevels(levels.data));
};

const loadwords = () => {
  fetch("https://openapi.programming-hero.com/api/words/all")
    .then((data) => data.json())
    .then((levels) => console.log("Shawra"));
};




const levelLessons = (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((id) => id.json())
    .then((idData) => displaylessons(idData.data));
};

function wordSpeak(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}

const detailModal = (id) => {
  const wordUrl = `https://openapi.programming-hero.com/api/word/${id}`;
  fetch(wordUrl)
    .then((word) => word.json())
    .then((wordData) => displayModal(wordData.data));
  
};

const displayModal = (wordDetails)=> {
    console.log(wordDetails) ;
    const modalContainer = document.getElementById("ModelView");

    modalContainer.innerHTML = `
    <dialog id="my_modal_1" class="modal">
          <div class="modal-box flex flex-col gap-5">
            <h3 class="text-3xl font-bold">${wordDetails.word}<span class="hind-siliguri-semibold">(${wordDetails.pronunciation})</span></h3>
            <div >
              <h2 class="text-sm font-semibold">Meaning</h2>
              <h2 class="text-xl hind-siliguri-bold ">
                ${wordDetails.meaning}
              </h2>
            </div>
            <div >
              <h2 class="text-sm font-semibold">Example</h2>
              <h2 class="text-xl font-medium">
                ${wordDetails.sentence}
              </h2>
            </div>
            <div >
              <h2 class="text-sm hind-siliguri-semibold">সমার্থক শব্দ গুলো</h2>
              <h2 class="text-xl font-medium">
                ${
                  wordDetails.synonyms && wordDetails.synonyms.length
                    ? wordDetails.synonyms
                        .map(
                          (word) =>
                            `<span class="inline-block bg-gray-200 px-2 py-1 rounded-md m-1 text-xs">${word}</span>`,
                        )
                        .join("")
                    : `<span class="text-gray-400">No synonyms found</span>`
                }
              </h2>
            </div>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="bg-indigo-600 text-sm text-white px-3 btn py-2 font-bold border-indigo-600 cursor-pointer  rounded-md">Continue Learning</button>
              </form>
            </div>
          </div>
        </dialog>

    `;
    const showModal = document.getElementById("my_modal_1");
    showModal.showModal() ;
    ;
}

const displaylessons = (lessons) => {
  const lessonContainer = document.getElementById("lessonCard");
  const LoadingContainer = document.getElementById("loadingCard");
  const EmptryContainer = document.getElementById("emptyCard");

  EmptryContainer.classList.add("hidden");
  LoadingContainer.classList.add("hidden");
  lessonContainer.classList.add("grid");
  lessonContainer.classList.remove("hidden");

  lessonContainer.innerHTML = "";

  if (lessons.length == 0 || !lessons) {
    EmptryContainer.classList.remove("hidden");
  }

  for (let lesson of lessons) {
    const cardDiv = document.createElement("div");
    cardDiv.className =
      "flex flex-col justify-center items-center gap-2 text-center p-5 bg-white rounded-md";
    cardDiv.innerHTML = `
            <h1 class="font-bold text-2xl">${lesson.word}</h1>
            <h2 class="font-medium text-ld">Meaning/Pronounciation</h2>
            <h1 class="font-semibold hind-siliguri-regular ">"${lesson.meaning}/ ${lesson.pronunciation}"</h1>
            <div class="flex justify-between items-center w-full pt-10 px-4">
              <button onClick="detailModal(${lesson.id})"
              class="p-2 cursor-pointer rounded-sm bg-slate-200 w-7"><img src="assets/fi-sr-info.png" alt="information"></button>
              <button onclick="wordSpeak('${lesson.word}')"
                class="p-2 cursor-pointer rounded-sm bg-slate-200 w-7"><img src="assets/fi-sr-volume.png" alt="information"></button>
            </div>

        `;

    lessonContainer.appendChild(cardDiv);
  }
};

const displaylevels = (datas) => {
  const levelContainer = document.getElementById("lessons");

  for (let data of datas) {
    const btndiv = document.createElement("div");
    btndiv.innerHTML = `
               <button
                onClick="levelLessons(${data.level_no})"
                class="cursor-pointer flex items-center gap-1 text-xs font-semibold border border-indigo-700 text-indigo-700 hover:bg-indigo-100 rounded-sm px-2 py-1"
          >
            <span class="flex items-center"
              ><img src="assets/fa-book-open.png" alt=""
            /></span>
            Lessons - ${data.level_no}
          </button> 
        `;
    levelContainer.appendChild(btndiv);
  }
};

loadlessons();
loadwords() ;