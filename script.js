"use strict"

if (window.matchMedia("(max-width: 800px)").matches) {
    window.location.href = "mobile.html";
}
const repoArea = document.querySelector(".github__content")
const repoName = document.querySelectorAll(".git-name")
const repoDes = document.querySelectorAll(".git-des")
const repoStars = document.querySelectorAll(".git-stars")
const repoLang = document.querySelectorAll(".git-lang")

let username = "albertobed";


const fetchGitApi = async () => {
    try{
        const response = await fetch(`https://api.github.com/users/${username}/repos`)
        const veri = await response.json();
        return veri
    }catch(error){
        console.error(error)
    }
}



(async function(){
    repoArea.textContent = "";
    const data = await fetchGitApi();
    for(let d of data){
        const html = `
            <a href="${d.html_url
            }" class="box github-box">
                <div>
                    <h3 class="git-name">${d.name}</h3>
                    <p class="git-des">${d.description == null ? "" : d.description}</p>
                    <div class="g-lang-stars">
                        <span class="git-lang">
                            ${d.language}
                        </span>
                        <span class="git-stars">
                            ${d.stargazers_count} stars
                        </span>
                    </div>
                </div>
            </a>
        `
        repoArea.insertAdjacentHTML("afterbegin",html)
    }
})()


const slideService= document.querySelectorAll(".slide-service");
const box = document.querySelectorAll(".service-box");
let serviceIndex = 0;
let serviceNumSlide = 3;  
setInterval(function(){
    serviceIndex = (serviceIndex +1) % serviceNumSlide
    const slideWidth = box[0].clientWidth + 20;
    const translateValue = -serviceIndex * slideWidth;
    slideService.forEach(s => {
        s.style.transform = `translateX(${translateValue}px)`;
    });
},3000)




const slideSkill= document.querySelectorAll(".slide-skills");
const skilBox = document.querySelectorAll(".skill-box");

let skillIndex = 0;
let skillNumSlide = 5;  

setInterval(function(){
    skillIndex = (skillIndex +1) % skillNumSlide
    const slideWidth = skilBox[0].clientWidth + 21;
    const translateValue = -skillIndex * slideWidth;
    slideSkill.forEach(s => {
        s.style.transform = `translateX(${translateValue}px)`;
    });
   
},3000)

const songBoxs = document.querySelectorAll(".song-box");
const sbImg = document.querySelectorAll(".sb-img");
const sbTxt = document.querySelectorAll(".sb-txt");

let songIndex = 0

setInterval(function(){
    if(songIndex == 12){
        songIndex = 0;
    }else{
        songBoxs[songIndex].classList.add("flex10")
        sbTxt[songIndex].classList.add("scale-to-one")
    
        setTimeout(function(){
            songBoxs[songIndex].classList.remove("flex10")
            sbTxt[songIndex].classList.remove("scale-to-one")
            songIndex++;

        },2000)
    }
},2200)

const themeBtn = document.querySelector(".fa-moon")
//* change theme button event
themeBtn.addEventListener("click",() => {
    themeBtn.classList.toggle("fa-moon")
    themeBtn.classList.toggle("fa-sun")
    const 
    toBgWhite = "#F4F4F2", 
    toBgWhite2 ="#E0DEDE", 
    toRed = "#E40037",
    toBgDark ="#232322", 
    toBgDark2 ="#343333";

    document.documentElement.style.setProperty("--bg-dark",toBgWhite)
    document.documentElement.style.setProperty("--dark",toBgWhite2);
    document.documentElement.style.setProperty("--white",toBgDark)

    document.documentElement.style.setProperty("--white2",toBgDark2);
    document.documentElement.style.setProperty("--primary",toBgWhite);

    if(themeBtn.classList.contains("fa-moon")){
        document.documentElement.style.setProperty("--bg-dark",toBgDark)
        document.documentElement.style.setProperty("--dark",toBgDark2);
        document.documentElement.style.setProperty("--white",toBgWhite)

        document.documentElement.style.setProperty("--primary",toRed);
        document.documentElement.style.setProperty("--white2",toBgWhite2);
    }
})


