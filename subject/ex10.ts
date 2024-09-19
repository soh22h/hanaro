class Collection<T> {
	protected arr: T[];  // protected to allow access in ArrayList

  	constructor(...args: T[]) {
		this.arr = [...args];
	}
}

interface List<T> {
    value: T;
    rest: List<T> | null;
}

// ArrayList 클래스를 작성하세요.
class ArrayList<T> extends Collection<T> {
	private list: List<T> | null;

	constructor(array: T[] = []) {
		super(...array);
        this.list = this.arrayToList(array);
    }

    arrayToList(array: T[]): List<T> | null {
        let list = null;
        for (let i = array.length - 1; i >= 0; i--) {
            list = { value: array[i], rest: list };
        }
        return list;
    }

	listToArray(list: List<T> |  null) : T[]{
        const array = [];
        while (list) {
            array.push(list.value);
            list = list.rest;
        }
        return array;
    }

    add(value: T, index: number | null = null) {
        if (index === null) {
			index = this.size();
		}

		let node = this.list;
		let i = 0;
		while (i < index - 1 && node) {
			node = node.rest == null ? node : node.rest;
			i++;
		}

		if(node) {
			node.rest = { value, rest: node.rest };
			this.arr.splice(index, 0, value);        // arr에도 넣어서 통일 시켜주기
		}


		return this.list;
    }

    remove(index: number | null = null) {
		if (index === null) return;
        if (index === 0 && this.list != null) {
            this.list = this.list.rest;
        } else {
            let node = this.list;
            let i = 0;
            while (i < index - 1 && node) {
                node = node.rest;
                i++;
            }
            if (node && node.rest) {
                node.rest = node.rest.rest;
            }
        }

		return this.list;
    }

    removeByIndex(index: number | null = null) {
		if (index === null) return;
        if (index === 0 && this.list != null) {
            this.list = this.list.rest;
        } else {
            let node = this.list;
            let i = 0;
            while (i < index - 1 && node) {
                node = node.rest;
                i++;
            }
            if (node && node.rest) {
                node.rest = node.rest.rest;
            }
        }

		return this.list;
    }

    get(index: number | null = null) {
        let node = this.list;
        let i = 0;

		if(index === null) return undefined;

        while (i < index && node) {
            node = node.rest;
            i++;
        }
        return node ? node.value : undefined;
    }

    set(index: number | null = null, value: T) {
        let node = this.list;
        let i = 0;

		if(index === null) return;

        while (i < index && node) {
            node = node.rest;
            i++;
        }

        if (node) {
            node.value = value;
        }

		return this.list;
    }

    size() {
        let node = this.list;
        let count = 0;
        while (node) {
            count++;
            node = node.rest;
        }
        return count;
    }

    indexOf(value : T) {
        let node = this.list;
        let index = 0;
        while (node) {
            if (node.value === value) return index;
            node = node.rest;
            index++;
        }
        return -1;
    }

    contains(value: T) {
        return this.indexOf(value) !== -1;
    }

    isEmpty() {
        return this.list === null;
    }

    peek() {
		let node = this.list;
        let i = 0;

        while (i < this.size() - 1 && node) {
            node = node.rest;
            i++;
        }

        if (node) {
            return node.value;
        }

        return undefined;
    }

    toArray() {
        return this.listToArray(this.list);
    }

    clear() {
        this.list = null;

        return 0;
    }

    *iterator() {
        let node = this.list;
        while (node) {
            yield node.value;
            node = node.rest;
        }
    }

    toString() : string {
		function listToString (list: List<T> | null): string {
			if (!list) return 'null';

            return `{ value: ${list.value || null}, rest: ${listToString(list.rest)} }`;
        }

        return listToString(this.list);
    }
}

export { ArrayList };
