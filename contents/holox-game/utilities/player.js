HOLOX_GAME.initializers.playerUtility = () => {
    const Rectangle2D = HOLOX_GAME.utilities.Rectangle2D;

    HOLOX_GAME.utilities.Player = {
        create(x, y) {
            return {
                color: "#ff0000",
                dx   : 1,
                dy   : 0,

                grounded: false,
                move_force: 1,
                jump_force: 18,
                vx: 0,
                vy: 0,

                ...Rectangle2D.create(x, y, 16, 32)
            }
        },

        ground(p, vy = 0) {
            p.grounded = true;
            p.vy       = vy;
        },

        jump(p) {
            if(p.grounded) {
                p.grounded  = false;
                p.vy       -= p.jump_force;
            }
        },

        moveLeft(p) {
            p.dx  = -1;
            p.vx -= p.move_force;
        },

        moveRight(p) {
            p.dx  = 1;
            p.vx += p.move_force;
        },

        updatePosition(p, gravity, friction) {
            p.vx *= friction;
            p.vy += gravity;
            p.vy *= friction;

            p.x  += p.vx;

            Rectangle2D.moveY(p, p.vy);
        }
    }
};