//#1 method
//Props = new Object();
//Props.rectSize = 100;
//#2 method
Props = {
    rectSize: 100
};

$(function() {
    console.info('DOM ready');
    var canvas = document.getElementById('canvas1');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        processContext(ctx);
    } else {
        console.error('no context available');
    }
});

function processContext(ctx) {
//    ctx.fillStyle = "rgb(200,0,0)";
//    ctx.fillRect (10, 10, 55, 50);
//    
//    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//    ctx.fillRect (30, 30, 55, 50);
    var rect_size = 50;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
                    Math.floor(255 - 42.5 * j) + ',0)';
            ctx.fillRect(j * rect_size, i * rect_size, rect_size, rect_size);
        }
    }
    
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.font = "50px Times New Roman";
    ctx.fillStyle = "Black";
    ctx.fillText("Sample String", 5, 130);
}

function drawRect(ctx, color, x, y){
//    ctx.fillRect(x, y, )
}


