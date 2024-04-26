HOLOX_GAME.utilities.Rectangle2D = {
    create(x, y, width, height) {
        return {
            x     : x,
            y     : y,
            width : width,
            height: height,
            old_x : x,
            old_y : y,
        };
    },

    getBottom(r)    { return r.y + r.height },
    getCenterX(r)   { return r.x + r.width  * 0.5 },
    getCenterY(r)   { return r.y + r.height * 0.5 },
    getLeft(r)      { return r.x },
    getRight(r)     { return r.x + r.width },
    getTop(r)       { return r.y },

    getOldBottom(r) { return r.old_y + r.height   },
    getOldLeft(r)   { return r.old_x              },
    getOldRight(r)  { return r.old_x + r.width    },
    getOldTop(r)    { return r.old_y              },

    setBottom(r, y) { return r.y = y - r.height;  },
    setLeft(r, x)   { return r.x = x;             },
    setRight(r, x)  { return r.x = x - r.width;   },
    setTop(r, y)    { return r.y = y;             },

    moveX(r, x)     { r.old_x    = r.x; r.x  += x },
    moveY(r, y)     { r.old_y    = r.x; r.y  += y },
};