const box = require('../src/index.js');
const Box = new box();

(async () => {
    try {
        console.log(await Box.openBox());
        console.log(await Box.closeBox());
        // console.log(await Box.closeBox());
        console.log(await Box.openBox());
        console.log(await Box.dump());
        console.log(await Box.fetch());
        console.log(await Box.fetch());
        console.log(await Box.fetch());
        console.log(await Box.fetch());
        console.log(await Box.fetch());
        // console.log(await Box.fetch());
        console.log(await Box.dump());
    } catch (error) {
        console.log(error);
    }
})()