function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
 let cantUnswer = "I can't hear you!";
 let yesUnswer = "YES INDEED!";
 let lovUnswer = "I would love to!";
if (string.toLowerCase() === string)
return cantUnswer;

else if (string.toUpperCase() === string)
return yesUnswer;

else if (string === "Let's have dinner together!")
return lovUnswer; 

}