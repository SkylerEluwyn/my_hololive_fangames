HOLOX_GAME.utilities.Buffer = {
    create(width, height, alpha = false, desynchronized = true) {
        const buffer = document.createElement("canvas").getContext("2d", { alpha, desynchronized });

        buffer.canvas.width  = width;
        buffer.canvas.height = height;
        buffer.imageSmoothingEnabled = false;
        
        return buffer;
    },

    draw(b, image, x, y) {
        b.drawImage(image, Math.floor(x), Math.floor(y));
    },

    resize(b, width, height, smoothing = false) {
        b.canvas.width  = width;
        b.canvas.height = height;
        b.imageSmoothingEnabled = smoothing;
    }
};