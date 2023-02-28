const srtButt = document.querySelector(".srt")
const pauButt = document.querySelector(".pau")
const resButt = document.querySelector(".res")
const casButt = document.querySelector(".cas")
const stoptime = document.querySelector(".timer")
const allCast = document.querySelector(".cast-det")
// const d = new Date();
// let time = d.getTime();
// const disTime=()=>{
//     const hour= Math.floor(time)
// }
let timestart;
let timer = 0
function addZero(val){
     return val.toString().padStart(2,"0")

}

function DisTime(time){
    const ms = addZero(time % 1000)
    const sec = addZero(Math.floor(time/1000) %  60)
    const min = addZero(Math.floor((time/1000) /  60)%60)
    const hour = addZero(Math.floor(time/1000 /  60/60));
    return `${hour}:${min}:${sec}:${ms}`


}
function disTimeup(){
    stoptime.innerHTML = DisTime(timer)
}

function start(){
     timestart = setInterval(()=>{
        timer += 10
        disTimeup()

    },10)
}

function pau(){
    clearInterval(timestart)
}

function res(){
    timer=0
    disTimeup()
    allCast.innerHTML = " "
}

function cast(){
    const castin= allCast.children.length + 1
    const casttim= DisTime(timer)
    const castItem = document.createElement("li");
    castItem.textContent = `CAST  ${castin} - ${casttim}`
    allCast.appendChild(castItem)
}

srtButt.addEventListener("click", start)
pauButt.addEventListener("click", pau)
resButt.addEventListener("click", res)
casButt.addEventListener("click", cast)

