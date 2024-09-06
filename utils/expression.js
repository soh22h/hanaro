function fmt([label, unit], price) {
    return `${label}${price.toLocaleString().padStart(8)}${unit}`;
}

const ALPHANUMS = [108, 76, 109, 77, 110, 78, 114, 82, 49, 51, 54, 55, 56, 48];
const ㄱ = 'ㄱ'.charCodeAt(0);
const ㅎ = 'ㅎ'.charCodeAt(0);
const 가 = '가'.charCodeAt(0); // 44032
const isEndJaum = str => {
  const s = str.charCodeAt(str.length - 1);  // str.at(-1)
  console.log('🚀  s:', str, s, (s - 가) % 28);

  return ALPHANUMS.includes(s) || (s >= ㄱ && s <= ㅎ) || (s >= 가 && s <= 힣 && (s - 가) % 28 !== 0);
};

const josa = (str, ja_mo) => {
    const [ja, mo] = ja_mo.split('/');
    return `${str}${isEndJaum(str) ? ja : mo}`;
};

const iga = str => josa(str, '이/가');
const ennun = str => josa(str, '은/는');
const eulul = str => josa(str, '을/를');

function upperToLower(str) {
    return str.replace(/[A-Z]/g, match => `*${match.toLowerCase()}*`);
}

function telfmt(number) {
    if (number.length === 11) {
        return number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    } else if (number.length === 10) {
        return number.replace(/(\d{2,3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    } else if (number.length === 7) {
        return number.replace(/(\d{3})(\d{4})/, '$1-$2');
    } else {
        return number; // 예상하지 못한 형식의 경우, 원본을 반환
    }
}
