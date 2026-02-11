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
        .then(idData => console.log(idData)) ;
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