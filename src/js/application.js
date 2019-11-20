import charGen from './_characters.js';

let screen = document.getElementById('screen');
let palettes = document.getElementById('palettes');
let characterPalette = document.getElementById('palette-characters');
let shapePalette = document.getElementById('palette-shapes');
let colorPalette = document.getElementById('color-palette');
let selectedSwatch = document.getElementById('swatch');
let alphanumerical = charGen.getCharacterSymbols();
let shapes = charGen.getGraphicalSymbols();


for (let i=0; i<alphanumerical.length; i++) {
    characterPalette.innerHTML += '<span class="char" data-char-no="' + alphanumerical[i] + '">' + String.fromCharCode(alphanumerical[i]) + '</span>';
}

for (let i=0; i<shapes.length; i++) {
    shapePalette.innerHTML += '<span class="char" data-char-no="' + shapes[i] + '">' + String.fromCharCode(shapes[i]) + '</span>';
}

for (let i=1; i<=16; i++) {
    colorPalette.innerHTML += '<span class="swatch" data-bg-color="' +i + '"></span>';
}

for (let i=1; i<=40*25; i++) {
    screen.innerHTML += '<span class="char" data-fg-color="15" data-char-no="0032">' + String.fromCharCode(32) + '</span>';
}


colorPalette.addEventListener('click', function ( e ) {
    selectedSwatch.dataset.fgColor = e.target.dataset.bgColor;
});

palettes.addEventListener( 'click' , function( e ) {
    selectedSwatch.innerHTML = e.target.innerHTML;
});

screen.addEventListener( 'click', function( e ) {
    e.target.innerHTML = selectedSwatch.innerHTML;
    e.target.dataset.fgColor = selectedSwatch.dataset.fgColor;
});