HOLOX_GAME.initializers.stateManagerTool = () => {
    const ENGINE = HOLOX_GAME.tools.engine;
    const STATES = HOLOX_GAME.states;

    var state;

    function change(name, message) {
        if (state) state.deactivate();

        state = STATES[name];

        state.activate(message);

        ENGINE.setState(state);
    };

    HOLOX_GAME.tools.state_manager = { change };
};