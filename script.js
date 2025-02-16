console.log("wwlcome to spotify");

//initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "bisilu kududre", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "gagana nee", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "mehabooba", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "neeniradhe", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "sulthana", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "the monster", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "toofan", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "jhavchasg", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "ajhshbcsuyhsh", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "ajhshbcsuyhsh", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}
]

songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//handleplay or pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        gif.style.opacity = 1;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime =0
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime =0
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime =0
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})