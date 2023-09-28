if (window.matchMedia("(min-width: 801px)").matches) {
    window.location.href = "index.html";
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

const slideSkill= document.querySelectorAll(".slide-skills");
const skilBox = document.querySelectorAll(".skill-box");

let skillIndex = 0;
let skillNumSlide = 3;

setInterval(function(){
    skillIndex = (skillIndex +1) % skillNumSlide
    const slideWidth = skilBox[0].clientWidth + 10;
    const translateValue = -skillIndex * slideWidth;
    slideSkill.forEach(s => {
        s.style.transform = `translateX(${translateValue}px)`;
    });
   
},3000)

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


