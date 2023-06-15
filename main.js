MoonLight = "";
Hope = "";

function preload()
{
    MoonLight = loadSound("XXXTENTACION-MOONLIGHT.mp3");
    Hope = loadSound("XXXTENTACION-Hope.mp3");
}

function setup()
{
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture();
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 530);
}