function rgb(red, green, blue) {
    return { red: red, green: green, blue: blue };
}

function bracket(from, to, color) {
    return { from: from, to: to, color: color };
}

const WN8_BRACKETS = [
    bracket(0, 300, rgb(0, 0, 0)),
    bracket(300, 600, rgb(205, 51, 51)),
    bracket(600, 900, rgb(215, 121, 0)),
    bracket(900, 1250, rgb(215, 182, 0)),
    bracket(1250, 1600, rgb(109, 149, 33)),
    bracket(1600, 1900, rgb(76, 118, 46)),
    bracket(1900, 2350, rgb(74, 146, 183)),
    bracket(2350, 2900, rgb(131, 87, 157)),
    bracket(2900, null, rgb(90, 49, 117)),
];

export function lookupWn8Color(winRate) {
    const predicate = bracket => bracket.from <= winRate && (!bracket.to || winRate < bracket.to);
    const bracket = WN8_BRACKETS.find(predicate);
    return bracket ? bracket.color : rgb(0, 0, 0);
}


const WIN_RATE_BRACKETS = [
    bracket(0, 0.45, rgb(0, 0, 0)),
    bracket(0.45, 0.47, rgb(205, 51, 51)),
    bracket(0.47, 0.49, rgb(215, 121, 0)),
    bracket(0.49, 0.52, rgb(215, 182, 0)),
    bracket(0.52, 0.54, rgb(109, 149, 33)),
    bracket(0.54, 0.56, rgb(76, 118, 46)),
    bracket(0.56, 0.60, rgb(74, 146, 183)),
    bracket(0.60, 0.65, rgb(131, 87, 157)),
    bracket(0.65, null, rgb(90, 49, 117)),
];

export function lookupWinRateColor(winRate1) {
    const predicate = bracket => bracket.from <= winRate1 && (!bracket.to || winRate1 < bracket.to);
    const bracket = WIN_RATE_BRACKETS.find(predicate);
    return bracket ? bracket.color : rgb(0, 0, 0);
}