// public api
let FlagService = {
  getFlag: getFlag
};
export default FlagService;


// public methods definitions
function getFlag(countryCode) {
  let flag = '';
  switch (countryCode) {
    case 'BG':
      flag = '🇧🇬';
      break;
    case 'CA':
      flag = '🇨🇦';
      break;
    case 'CL':
      flag = '🇨🇱';
      break;
    case 'CO':
      flag = '🇨🇴';
      break;
    case 'CN':
      flag = '🇨🇳';
      break;
    case 'CY':
      flag = '🇨🇾';
      break;
    case 'DE':
      flag = '🇩🇪';
      break;
    case 'ES':
      flag = '🇪🇸';
      break;
    case 'GR':
      flag = '🇬🇷';
      break;
    case 'RU':
      flag = '🇷🇺';
      break;
    case 'US':
      flag = '🇺🇸';
      break;
  }
  return flag;
}
