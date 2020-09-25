
module.exports = function getSeason(date) {
  const isDate = (obj) => (
    {}.toString.call(obj).slice(8, -1) === 'Date'
  );

  if (date === undefined) return 'Unable to determine the time of year!';

  if ( !isDate(date) ) {
    throw new Error('Wrong date parameter');
  }

  let month = date.getMonth();

  switch (month) {
    case 11:
    case 0:
    case 1: return 'winter';

    case 2:
    case 3:
    case 4: return 'spring';

    case 5:
    case 6:
    case 7: return 'summer';

    case 8:
    case 9:
    case 10: return 'autumn';
  }
};
