HOLOX_GAME.initializers.textTool = () => {
    const image = HOLOX_GAME.images.text;
    const Frame = HOLOX_GAME.utilities.Frame;

    const letter_spacing =  1;
    const line_height    = 10;
    const space_width    =  3;

    const frames = {
        "A": Frame.create(  0,  0, 7, 11, 0, 0),
        "B": Frame.create(  8,  0, 7, 11, 0, 0),
        "C": Frame.create( 16,  0, 7, 11, 0, 0),
        "D": Frame.create( 24,  0, 7, 11, 0, 0),
        "E": Frame.create( 32,  0, 7, 11, 0, 0),
        "F": Frame.create( 40,  0, 7, 11, 0, 0),
        "G": Frame.create( 48,  0, 7, 11, 0, 0),
        "H": Frame.create( 56,  0, 7, 11, 0, 0),
        "I": Frame.create( 64,  0, 4, 11, 0, 0),
        "J": Frame.create( 69,  0, 7, 11, 0, 0),
        "K": Frame.create( 77,  0, 7, 11, 0, 0),
        "L": Frame.create( 85,  0, 7, 11, 0, 0),
        "M": Frame.create( 93,  0, 7, 11, 0, 0),
        "N": Frame.create(101,  0, 7, 11, 0, 0),
        "O": Frame.create(109,  0, 7, 11, 0, 0),
        "P": Frame.create(117,  0, 7, 11, 0, 0),
        "Q": Frame.create(125,  0, 7, 11, 0, 0),
        "R": Frame.create(133,  0, 7, 11, 0, 0),
        "S": Frame.create(141,  0, 7, 11, 0, 0),
        "T": Frame.create(149,  0, 7, 11, 0, 0),
        "U": Frame.create(157,  0, 7, 11, 0, 0),
        "V": Frame.create(165,  0, 7, 11, 0, 0),
        "W": Frame.create(173,  0, 7, 11, 0, 0),
        "X": Frame.create(181,  0, 7, 11, 0, 0),
        "Y": Frame.create(189,  0, 7, 11, 0, 0),
        "Z": Frame.create(197,  0, 7, 11, 0, 0),
        "a": Frame.create(  0, 16, 7, 11, 0, 4),
        "b": Frame.create(  8, 12, 7, 11, 0, 0),
        "c": Frame.create( 16, 16, 7, 11, 0, 4),
        "d": Frame.create( 24, 12, 7, 11, 0, 0),
        "e": Frame.create( 32, 16, 7, 11, 0, 4),
        "f": Frame.create( 40, 12, 7, 11, 0, 0),
        "g": Frame.create( 48, 12, 7, 11, 0, 4),
        "h": Frame.create( 56, 12, 7, 11, 0, 0),
        "i": Frame.create( 64, 12, 4, 11, 0, 0),
        "j": Frame.create( 69, 12, 7, 11, 0, 0),
        "k": Frame.create( 77, 12, 7, 11, 0, 0),
        "l": Frame.create( 85, 12, 4, 11, 0, 0),
        "m": Frame.create( 90, 16, 7, 11, 0, 4),
        "n": Frame.create( 98, 16, 7, 11, 0, 4),
        "o": Frame.create(106, 16, 7, 11, 0, 4),
        "p": Frame.create(114, 12, 7, 11, 0, 4),
        "q": Frame.create(122, 12, 7, 11, 0, 4),
        "r": Frame.create(130, 16, 7, 11, 0, 4),
        "s": Frame.create(138, 16, 7, 11, 0, 4),
        "t": Frame.create(146, 12, 7, 11, 0, 0),
        "u": Frame.create(154, 16, 7, 11, 0, 4),
        "v": Frame.create(162, 16, 7, 11, 0, 4),
        "w": Frame.create(170, 16, 7, 11, 0, 4),
        "x": Frame.create(178, 16, 7, 11, 0, 4),
        "y": Frame.create(186, 12, 7, 11, 0, 4),
        "z": Frame.create(194, 16, 7, 11, 0, 4),
        "0": Frame.create(  0, 24, 7, 11, 0, 0),
        "1": Frame.create(  8, 24, 7, 11, 0, 0),
        "2": Frame.create( 16, 24, 7, 11, 0, 0),
        "3": Frame.create( 24, 24, 7, 11, 0, 0),
        "4": Frame.create( 32, 24, 7, 11, 0, 0),
        "5": Frame.create( 40, 24, 7, 11, 0, 0),
        "6": Frame.create( 48, 24, 7, 11, 0, 0),
        "7": Frame.create( 56, 24, 7, 11, 0, 0),
        "8": Frame.create( 64, 24, 7, 11, 0, 0),
        "9": Frame.create( 72, 24, 7, 11, 0, 0),
        "?": Frame.create( 80, 24, 7, 14, 0, 0),
        "!": Frame.create( 88, 24, 4, 11, 0, 0),
        ".": Frame.create( 93, 24, 4,  3, 0, 8),
        ",": Frame.create( 98, 24, 4,  5, 0, 8),
        "'": Frame.create(103, 24, 4,  4, 0, 0),
        '"': Frame.create(108, 24, 4,  4, 0, 0),
    };

    function write(context, position_x, position_y, width, string, clear = false) {
        var start_x = position_x;

        if (clear) context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        var length = string.length;

        for (var i = 0; i < length; i ++) {
            var char = string.charAt(i);

            if (char = " ") { position_x += space_width; continue; }

            var frame = frames[char];

            if (!frame) continue;
            
            context.drawImage(image, frame.x, frame.y, frame.width, frame.height, position_x + frame.offset_x, position_y + frame.offset_y, frame.width, frame.height);

            position_x += frame.width + letter_spacing;

            if(position_x > width) {
                position_x = start_x;
                position_y += line_height;
            }
        }
    }

    HOLOX_GAME.tools.text = { write };
};