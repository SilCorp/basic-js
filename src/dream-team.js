
module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.reduce( (abbr, member) => {
    if (typeof member !== "string") return abbr;
    return abbr + member.trim()[0];
  }, '').toUpperCase().split('').sort().join('');
};
