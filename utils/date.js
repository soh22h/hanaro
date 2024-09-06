const getLastDayOfMonth = (year, month) => {
    return new Date(year, month, 1);  //주어진 달의 날짜 1은 1 - 1이 되어서 해당 달의 마지막 날을 가르키게 됨
}
console.log(getLastDayOfMonth(2024, 8));
console.log(getLastDayOfMonth(2024, 9));


const getDateInTimeZone = (date, timeZone) => {
    const options = {timeZone, year : 'numeric', month : '2-digit', day : '2-digit', hour : '2-digit', minute : '2-digit', second : '2-digit'};
    const formatter = new Intl.DateTimeFormat([], options);

    return formatter.format(date);
}

const now = new Date();
console.log(getDateInTimeZone(now, 'Asia/Seoul'));  //09/04/2024, 11:16:01 AM


console.log(Math.round((new Date('1970-01-02') - new Date('1970-01-01')) / 1000));

const randomDates = [];
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();

for (let i = 0; i < 5; i++) {
    const randomDay = Math.floor(Math.random() * 28) + 1; // 1부터 28 사이의 무작위 날짜 생성
    randomDates.push(new Date(year, month, randomDay));
}

randomDates.sort((a, b) => b - a);  // 역순으로 정렬

randomDates.forEach(date => console.log(date.toDateString()));


const nextYearToday = new Date(2025, 5, 29);  // 6월은 인덱스 5 (0부터 시작)
const dayOfWeek = nextYearToday.toLocaleString('ko-KR', { weekday: 'long' });
console.log(dayOfWeek);  // 예: "일요일"

const todayDate = new Date(2024, 1, 1);  // 2월 1일 (인덱스 1)
const futureDate = new Date(todayDate);
futureDate.setDate(todayDate.getDate() + 100);

console.log(futureDate.toDateString());  // 예: "Thu May 11 2024"


const WEEKS = '일월화수목금토'.split('');
const calendar = dateStr => {
  const [year, month] = dateStr.split('-');
  const d = new Date(year, Number(month) - 1, 1);
  let outStr = '       ' + month + '월 ' + year + '\n';
//   console.log('out : ' + outStr);
  for (let i = 0; i < 30; i += 1) {
    outStr += d.getDate().toString().padStart(3);
    if (d.getDay() === 6) outStr += '\n';
    d.setDate(d.getDate() + 1);
  }

  return outStr;
};

console.log(calendar('2024-09-04'));
console.log(calendar('2024-04-04'));
console.log(calendar('2024-10-04'));


