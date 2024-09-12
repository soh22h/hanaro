const isStringNumber = (value: unknown): value is [string, number] =>
    Array.isArray(value) &&
    typeof value[0] === 'string' &&
    typeof value[1] === 'number';

const f1 = (value: number | string | boolean | [string, number]) => {
    if(isStringNumber(value)) {
        console.log(value[0].toUpperCase(), value[1].toFixed());
    }
}

interface Animal {}
interface Dog extends Animal{
    name : string;
}
interface Cat extends Animal{
    punch(): void;
}

class Retriever implements Dog {
    name = "Retriever";
}

function isDog(a: Animal): a is Dog {
    return 'name' in a  //있으면 true 반환
    // && typeof a.name === 'string';
}   

let r = new Retriever();
console.log(isDog(r));

const cart = {
    X : 1,
    Y : 2,
    Z : 3,
}

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;

const constCart = {
    X : 1,
    Y : 2,
    Z : 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = typeof constCart[keyof typeof constCart];



class AError {
    constructor(public message: string) {
      // this.message = message;
    }
}
  
try {
  // throw new Error('some error!!!!');   // 가
  throw new AError('Aasome error!!!!');   // 가
  // throw 'some string error!!!';        // 나
  // throw ['some', 'array', 'error'];       // 다
} catch (error) {
  if (isMessageError(error))
    console.log(error.message); // (라)
}

function isMessageError(err: unknown): err is Error {
  console.log(err instanceof Error)
  return err instanceof Error
            || (typeof err === 'object' && err !== null && 'message' in err);
}


function deleteArray<T>(arr: T[], startOrKey: number | keyof T, endOrValue?: number | T[keyof T]) {
    if (typeof startOrKey === 'number') {
        return arr.filter((_, i) =>  i < startOrKey
           || i > (typeof endOrValue === 'number' ? endOrValue : Number.MAX_SAFE_INTEGER) - 1);
    }
 
    return arr.filter((a) =>
        a && typeof a === 'object' && a[startOrKey] !== endOrValue
    );
}
