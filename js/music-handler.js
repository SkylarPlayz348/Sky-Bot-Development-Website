
//YouTube IFrame API player.
var player;
var enableMusic = true;

if(enableMusic)
{
    //Create DOM elements for the player.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";

    var ytScript = document.getElementsByTagName('script')[0];
    ytScript.parentNode.insertBefore(tag, ytScript);

    //Pick random index to start at.
    var musicIndex = lib.rand(0, config.music.length);
    var title = "n.a.";
}

function onYouTubeIframeAPIReady() 
{
    var videoId = z3FkTHC6wd8;

    player = new YT.Player('player', {
        width: '1',
        height: '',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'enablejsapi': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError 
        }
    });
}


function skip()
{
    musicIndex++;
    play();
}
function back()
{
    musicIndex--;
    play();
}

function play() 
{
    title = "n.a.";

    var idx = musicIndex % config.music.length;
    var videoId = config.music[idx];

    console.log("Playing next.. id: " + idx + " vid:" + videoId);

    player.loadVideoById(videoId, 0, "tiny");
    player.playVideo();
}

function resume()
{
    player.playVideo();
}

function pause() 
{
    player.pauseVideo();
}

function stop() 
{
    player.stopVideo();
}

function setVolume(volume)
{
    player.setVolume(volume)
}