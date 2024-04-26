(() => {
    const BUFFERS      = HOLOX_GAME.buffers;
    const IMAGES       = HOLOX_GAME.images;
    const INITIALIZERS = HOLOX_GAME.initializers;
    const TOOLS        = HOLOX_GAME.tools;

    const Buffer = HOLOX_GAME.utilities.Buffer;

    INITIALIZERS.colliderUtility();
    INITIALIZERS.playerUtility();

    INITIALIZERS.stateManagerTool();

    function resize(event) {
        const display = BUFFERS.display;

        const width_ratio  = document.documentElement.clientWidth  / display.canvas.width;
        const height_ratio = document.documentElement.clientHeight / display.canvas.height;

        const scale        = width_ratio < height_ratio ? width_ratio : height_ratio;

        display.canvas.style.width  = Math.floor(display.canvas.width  * scale) + "px";
        display.canvas.style.height = Math.floor(display.canvas.height * scale) + "px";
    }

    window.addEventListener("resize", resize);

    TOOLS.loader.loadImages([
        'media/images/text.png',
    ],

    function(images_) {
        IMAGES.text = images_[0];

        INITIALIZERS.textTool();
        
        BUFFERS.text = Buffer.create(0, 0, true, true);
    
        INITIALIZERS.pauseState();
        INITIALIZERS.titleState();

        document.body.appendChild(BUFFERS.display.canvas);
    
        var buffer = BUFFERS.background;
        var image      = IMAGES.tile;
        var x, y;

        for(x = 240; x > -1; x -= 16) for (y = 240; y > -1; y -= 16) {
            var random_x = Math.floor(Math.random() * 3) * 16;
            
            buffer.drawImage(image, random_x, 0, 16, 16, x, y, 16, 16);
        }

        buffer = BUFFERS.text_box;
        image  = IMAGES.text_box;

        buffer.drawImage(image, 32, 0, 16, 28, 240, 0, 16, 28);

        for (x = 224; x > 0; x -= 16) buffer.drawImage(image, 16, 0, 16, 28, x, 0, 16, 28);

        buffer.drawImage(image, 0, 0, 16, 28, 0, 0, 16, 28);

        resize();

        TOOLS.controller.activate();

        TOOLS.state_manager.change('title');

        TOOLS.engine.start();
    });
})();