HOLOX_GAME.initializers.titleState = () => {
    // buffers
    const background_buffer = HOLOX_GAME.buffers.background;
    const display_buffer    = HOLOX_GAME.buffers.display;
    const text_buffer       = HOLOX_GAME.buffers.text;

    // tools
    const controller    = HOLOX_GAME.tools.controller;
    const state_manager = HOLOX_GAME.tools.state_manager;
    const text          = HOLOX_GAME.tools.text;

    // utilities
    const Buffer = HOLOX_GAME.utilities.Buffer;

    function activate(message) {
        Buffer.resize(text_buffer, 256, 256);

        text.write(text_buffer, 48, 100, 256, 'holoX Game');
        text.write(text_buffer, 72, 120, 256, 'Press Z to select');

        Buffer.draw(display_buffer, background_buffer.canvas, 0, 0);
        Buffer.draw(display_buffer, text_buffer.canvas,       0, 0);
    }

    function deactivate() {}

    function render() {}

    function update() {
        // if(controller.getKey("z")) {
        //     controller.setKey("z", false);

        //     state_manager.change("run", "reset");
        // }
    }

    HOLOX_GAME.states.title = { activate, deactivate, render, update };
};