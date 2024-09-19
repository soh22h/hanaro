module.exports = {
  searchByKoreanInitialSound: (data, firstSounds) => {
	const regex = /^[ㄱ-ㅎ|가-힣]+$/;
	const consonant = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
	const offset = 44032;

	return data.filter((d) => {
		let csa = "";
		d.split("").map((str, index) => {
			if(str == " " || !regex.test(str)) {
				csa += str;
				return null;
			}
			const begin = Math.floor(((d.charCodeAt(index) - offset) / 28) / 21);
			csa += consonant[begin];
		})

		if(csa.includes(firstSounds)) {
			return d;
		}
	})
  },
};
