HOLOX_GAME.initializers.colliderUtility = () => {
    const Rectangle2D = HOLOX_GAME.utilities.Rectangle2D;

    HOLOX_GAME.utilities.Collider = {
        collideRectangleWithRectangle(r1, r2) {
            if (Rectangle2D.getLeft(r1) > Rectangle2D.getRight(r2) || Rectangle2D.getTop(r1) > Rectangle2D.getRight(r2) || Rectangle2D.getRight(r1) < Rectangle2D.getLeft(r2) || Rectangle2D.getBottom(r1) < Rectangle2D.getTop(r2)) return false;
            return true;
        },

        collideTop(rectangle, top) {
            if (Rectangle2D.getBottom(rectangle) > top) {
                Rectangle2D.setBottom(rectangle, top);
                return true;
            } return false;
        },

        keepPlayerInBounds(player, left, right, top, bottom) {
            if (Rectangle2D.getLeft(player) < left) {
                player.vx += 1;
            } else if (Rectangle2D.getRight(player) > right) {
                player.vx -= 1;
            }

            if(Rectangle2D.getTop(player) < top) {
                player.vy += 1;
            } else if (Rectangle2D.getBottom(player) > bottom) {
                player.vy -= 1;
            }
        }
    };
};