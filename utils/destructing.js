//kyc 인증 및 등록 시
const {kyc} = ajax.call();
/**
 * {
 *      name : string,
 *      gender : string,  //잘못 들어올 시 undefined로 처리 필요
 *      country : string,  
 *      phoneNumber : number,  //잘못 들어올 시 undefined로 처리 필요
 *      authentication : string  //잘못된 인증수단(신분증, 운전면허증, 여권 외 다른 것) 들어올 시 undefined 처리
 * }
 */

const data = response ?? {
    name : '',
    gender : undefined,
    country : '',
    phoneNumber : undefined,
    authentication : undefined
};
//or
const data = (repsonse == null || response == undefined) ? {
    name : '',
    gender : undefined,
    country : '',
    phoneNumber : undefined,
    authentication : undefined
}: response;