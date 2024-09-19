Array.prototype.sortBy = function (sortProp = '') {
    let sp = sortProp.split(",");

    return this.sort((a, b) => {
        for (let s of sp) {
            let [key, order = 'asc'] = s.split(':');
            let o = order === 'desc' ? -1 : 1;

            if (a[key] > b[key]) return o;
            if (a[key] < b[key]) return -o;
        }
        return 0;
    });
};
