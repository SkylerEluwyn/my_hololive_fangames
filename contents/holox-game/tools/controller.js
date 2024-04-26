HOLOX_GAME.tools.controller = (() => {
    const Input = () => ({active: false, state: false});

    const keys = {
        "enter" : Input(),
        "shift" : Input(),
        "left"  : Input(),
        "up"    : Input(),
        "right" : Input(),
        "down"  : Input(),
        "a"     : Input(),
        "c"     : Input(),
        "x"     : Input(),
        "z"     : Input(),
    }

    function activate() {
        window.addEventListener("keydown", keyDownUp);
        window.addEventListener("keyup"  , keyDownUp);
    }

    function getKey(name)     { return keys(name).active };
    function keyDownUp(event) { event.preventDefault();
        var state = event.type == "keydown";

        switch(event.keyCode) {
            case 13: trigger(keys.enter, state); break;
            case 16: trigger(keys.shift, state); break;
            case 37: trigger(keys.left , state); break;
            case 38: trigger(keys.up   , state); break;
            case 39: trigger(keys.right, state); break;
            case 40: trigger(keys.down , state); break;
            case 65: trigger(keys.a    , state); break;
            case 67: trigger(keys.c    , state); break;
            case 88: trigger(keys.x    , state); break;
            case 90: trigger(keys.z    , state); break;
        }
    }

    function setKey(name,  active) { keys[name].active = active }
    function trigger(input, state) { if (state !== input.state) input.active = input.state = state; }
    return {activate, getKey, setKey};
})();