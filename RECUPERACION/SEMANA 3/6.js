let values = [2, 56, 3, 41, 0, 4, 100, 23];
values.sort((a, b) => a - b);
let lowMiddle = Math.floor((values.length - 1) / 2);
let highMiddle = Math.ceil((values.length - 1) / 2);
let media = (values[lowMiddle] + values[highMiddle]) / 2;
console.log(media);