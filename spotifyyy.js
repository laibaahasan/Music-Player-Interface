console.log("welcome to music");
let masterplay=document.querySelector("#masterplay");
let myprogressbar=document.querySelector("#myprogressbar");
let gifs=document.querySelector("#gif");
let songItems=Array.from(document.getElementsByClassName("songone"));
let audioElement = new Audio('songs/1.mp3');
let bottomSongname=document.querySelector('#bottomSongname');
let songIndex=0;
let songs=[
    {songname:"I wanna be yours" , filePath:"songs/1.mp3", coverPath:"https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163" },
    {songname:"Perfect" , filePath:"songs/2.mp3", coverPath:"perfectimg.jpg" },
    {songname:"Sajda" , filePath:"songs/3.mp3", coverPath:"sajda.avif" },
    {songname:"tere naina" , filePath:"songs/2.mp3", coverPath:"photocover3.jpg" },
    {songname:"Summertime sadness" , filePath:"wannabe.mp3", coverPath:"" },
   
    // {songname:"Perfect" , filePath:"wannabe.mp3", coverPath:"" },
    // {songname:"Perfect" , filePath:"wannabe.mp3", coverPath:"" },
    // {songname:"Perfect" , filePath:"wannabe.mp3", coverPath:"" },
    // {songname:"Perfect" , filePath:"wannabe.mp3", coverPath:"" },g 
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.querySelectorAll("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname;
})
// playing song when pause clicked and it change tp play icon as well
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play(); 
        gifs.style.opacity=1;

        // masterplay.classList.remove('fa-solid fa-circle-play');
        // masterplay.classList.add('fa-solid fa-pause');
       
    }
    else{
        audioElement.pause();
        gifs.style.opacity=0;
        // masterplay.classList.remove('fa-solid fa-pause');
        // masterplay.classList.add('fa-solid fa-circle-play');
       
    }
}) 

//updating progress bar 
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    //jitna song play hua hai usko percentage mai covert kara
    progress=parseInt((audioElement.currentTime)/(audioElement.duration)*100);
    //ab uske according progess bar update karo
    myprogressbar.value=progress;
})

//agar progress bar ko main change karu,arey song ko aage badhaye
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime= myprogressbar.value* audioElement.duration/100;
})

//jo songs ki list hai usko

//this makeallplays jaise hee we click on another song to phle wale (sabko hee) play wala icon kar dega

// const makeallplays= ()=>{
//     Array.from(document.querySelectorAll('.playsongs')).forEach((element)=>{
//         // element.target.classList.remove('fa-solid fa-pause' );
//         // element.target.classList.add('fa-solid fa-circle-play');
//     })
// }
Array.from(document.getElementsByClassName('playsongs')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
    //   makeallplays();
      songIndex=parseInt(e.target.id);
    //   e.target.classList.remove( 'fa-solid fa-circle-play');
    //   e.target.classList.add('fa-solid fa-pause');
      audioElement.src=`songs/${songIndex+1}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      gifs.style.opacity=1;
      bottomSongname.innerText=songs[songIndex].songname;
    //   e.target.classList.remove( 'fa-solid fa-circle-play');
    //   e.target.classList.add('fa-solid fa-pause');
   })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    bottomSongname.innerText=songs[songIndex].songname;
    // e.target.classList.remove( 'fa-solid fa-circle-play');
    // e.target.classList.add('fa-solid fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    bottomSongname.innerText=songs[songIndex].songname;
    // e.target.classList.remove( 'fa-solid fa-circle-play');
    // e.target.classList.add('fa-solid fa-pause');
})