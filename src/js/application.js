function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function unicodeChar(hex) {
    return parseInt(hex,16);
}

let screen = document.getElementById('screen');

let chars  = range(unicodeChar('0021'),unicodeChar('007e'))
    .concat(
        [
            unicodeChar('00a3'),
            unicodeChar('00b7'),
            unicodeChar('03c0'),
            unicodeChar('2014'),
            unicodeChar('2019'),
            unicodeChar('2022'),
            unicodeChar('2026'),
            unicodeChar('2190'),
            unicodeChar('2191'),
            unicodeChar('2500'),
            unicodeChar('2502'),
            unicodeChar('250c'),
            unicodeChar('2510'),
            unicodeChar('2514'),
            unicodeChar('2518'),
            unicodeChar('251c'),
            unicodeChar('2524'),
            unicodeChar('252c'),
            unicodeChar('2534'),
            unicodeChar('253c'),
        ])
    .concat(range(unicodeChar('256d'),unicodeChar('2573')))
    .concat(range(unicodeChar('2580'),unicodeChar('2588')))
    .concat(range(unicodeChar('258a'),unicodeChar('2590')))
    .concat(unicodeChar('2592'))
    .concat(range(unicodeChar('2592'),unicodeChar('259f')))
    .concat(
        [
            unicodeChar('25c6'),
            unicodeChar('25cb'),
            unicodeChar('25cf')
        ]
    )
    .concat(range(unicodeChar('25e2'),unicodeChar('25e5')))
    .concat(
        [
            unicodeChar('2660'),
            unicodeChar('2663'),
            unicodeChar('2665'),
            unicodeChar('2666'),
            unicodeChar('2713')
        ]
    );

for (let i=0; i<chars.length; i++) {
    screen.innerHTML += '<span class="char" data-char-no="' + chars[i] + '">' + String.fromCharCode(chars[i]) + '</span>';
}
