//nexttick.js
process.netTick(function () {
    console.log('next tick');
});
console.log('immediate');