
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;

  sampleActivity = Number(sampleActivity);

  if (
    isNaN(sampleActivity) ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity <= 0
  ) {
    return false;
  }

  const reactionRateConstant = Math.log(2) / HALF_LIFE_PERIOD;

  const estimatedYears = Math.log(MODERN_ACTIVITY / sampleActivity) / reactionRateConstant;

  return Math.round(estimatedYears);
};
