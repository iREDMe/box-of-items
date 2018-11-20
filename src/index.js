class Box {
    constructor() {
        this.open = false;
        this.size = 5;
        this.common = ['A Water Bottle', 'A Can of Soda', 'A Cookie', 'A Normal Egg'];
        this.rare = ['Some Frozen Yogurt', 'An Ice Cream', 'A Scrambled Egg'];
        this.why = ['Some Instant Noodles', 'A Pickle Jar', 'A Hard-Boiled Egg', 'An 8-Foot Long Pizza?!!'];
        this.exclusive = ['Platinum Egg?', '24-Pack of Empty Soda Cans!', 'Potato with a Silver Border?!'];
    }

    /**
     * Returns all.
     * @private
     * @returns {string[]}
     */
    get randomizer() {
        return [...this.common, ...this.common, ...this.common, ...this.common, ...this.common, ...this.rare, ...this.rare, ...this.rare, ...this.why, ...this.why, ...this.exclusive];
    }

    /**
     * Open the box.
     * @returns {Promise<string>}
     */
    openBox() {
        return new Promise((resolve, reject) => {
            if (this.open) reject('Already open.');
            setTimeout(() => {
                this.open = true;
                resolve('Box now opened.');
            }, 1000);
        });
    }

    /**
     * Close the box.
     * @returns {Promise<string>}
     */
    closeBox() {
        return new Promise((resolve, reject) => {
            if (!this.open) reject('Already closed.');
            setTimeout(() => {
                this.open = false;
                resolve('Box now closed.');
            }, 1000);
        });
    }

    /**
     * Fetch an item.
     * @returns {Promise<string>}
     */
    fetch() {
        return new Promise((resolve, reject) => {
            if (!this.open) reject('Not open yet.');
            setTimeout(() => {
                if (this.size <= 0) reject('No more items.');
                this.size--;
                resolve(this.randomizer[Math.floor(Math.random() * this.randomizer.length)]);
            }, 2000);
        });
    }

    /**
     * Dump out all items. Hidden message.
     * @returns {Promise<string>}
     */
    dump() {
        return new Promise((resolve, reject) => {
            if (this.size <= 0) reject('Already empty.');
            setTimeout(() => {
                this.size = 0;
                if (Math.random() < 0.03) resolve('A mysterious BLU coin magically made all of the items disappear.');
                else resolve('Successfully dumped out contents.');
            }, this.size * 300);
        });
    }
}

module.exports = Box;
