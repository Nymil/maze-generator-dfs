function init() {
    const $canvas = initCanvas();
}

function initCanvas() {
    const $mazeCanvas = document.querySelector("#maze-canvas");
    $mazeCanvas.width = 700;
    $mazeCanvas.height = 700;
    return $mazeCanvas;
}

init();
