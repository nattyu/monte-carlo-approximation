function monte() {
    var tx = document.getElementById("textBox1").value;
    var n = parseInt(tx);
    var inC = 0;
    var PI = 0;
    var x = [];
    var y = [];
    var circle = [];
    for (var i = 0; i < n+1; i++) {
        x.push( 2 * Math.random() );
        y.push( 2 * Math.random() );
        if (x[i] <= 1 && y[i] <= 1) {
            var position = Math.sqrt(x[i] * x[i] + y[i] * y[i])
            circle.push( position );
            var cv = document.getElementById('canvas');
            var ctx = cv.getContext('2d');
            if (position <= 1) {
                ctx.fillStyle = "green";
            } else if (position > 1) {
                ctx.fillStyle = "red";
            }
            ctx.fillRect(x[i] * 400, y[i] * 400, 2, 2);
            
        }
    }
    for (var j = 0; j <= circle.length; j++){
        if (circle[j] <= 1) {
            inC++;
        }
    }

    PI = 4 * inC / circle.length;

    var mc = document.getElementById('PI');
    mc.innerHTML = PI;
};
