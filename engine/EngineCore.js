export const name = 'EngineCore';

var items = []

var fps = 24

export function add(object) {
    items.push(object);
}

export function fsSpr(x, y, image) {
    var newSpr = document.createElement("img")

    var nX = 0;
    var nY = 0;
    var nImage = "";

    if (x != null) {
        nX = x
    }

    if (y != null) {
        nY = y
    }

    if (x != null) {
        nImage = image
    }

    newSpr.x = nX
    newSpr.y = nY
    newSpr.src = nImage

    return fsSpr
}



setInterval(function() {
    items.forEach(element => {
        var c = document.getElementById("Game");
        var ctx = c.getContext("2d")

        ctx.beginPath()
        ctx.rect(20, 20, 150, 100)
        ctx.stroke();

        if (typeof object == "img") {
           ctx.drawImage(c, element.x, element.y, element.width, element.height);
        }
    });
}, (1 / fps) * 1000)