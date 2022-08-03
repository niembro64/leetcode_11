function maxArea(height) {
    if (height.length < 2) {
        return 0;
    }
    if (height.length === 2) {
        if (height[0] < height[1]) {
            return height[0];
        }
        else {
            return height[1];
        }
    }
    var largest = { left: -1, right: -1, volume: -1 };
    var curr = -1;
    for (var i = 0; i < height.length - 1; i++) {
        for (var j = i + 1; j < height.length; j++) {
            curr = (j - i) * (height[i] < height[j] ? height[i] : height[j]);
            if (curr > largest.volume) {
                largest.volume = curr;
                largest.left = i;
                largest.right = j;
            }
        }
    }
    return largest.volume;
}
var x = [
    [1, 8, 6, 2, 5, 4, 8, 3, 7],
    [1, 1],
    [3],
    [],
    [2, 2, 1],
    [3, 1, 3],
    [2, 1],
    [1, 2],
];
x.forEach(function (x, i) {
    console.log(x, maxArea(x));
    console.log("_____________");
});
