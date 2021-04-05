module.exports = {
      stringLength
    , substring
    , concatStrings
    , concatMapStrings
    , concatStringsSep
    , concatMapStringsSep
    , concatImapStringsSep
    , optionalString
};


{
      foldl
    , map
    , intersperse
    , imap0
    , imap1
    , range
} = require('./arrays.js');


var   stringLength         = (x) => x.length
    // XXX: This should be done functionally. -chloe
    , substring            = (s, l, x) => x.substr(s, l)
    , concatStrings        = (xs) => foldl((a, x) => `${a}${x}`, ``, xs)
    , concatMapStrings     = (f, xs) => concatStrings(map(f, xs))
    , concatStringsSep     = (s, xs) => concatStrings(intersperse(s, xs))
    , concatMapStringsSep  = (s, f, xs) => concatStringsSep(s, map(f, xs))
    , concatImapStringsSep = (s, f, xs) => concatStringsSep(s, imap1(f, xs))
    , optionalString       = (p, x) => p === true ? x : ``)
    , hasPrefix            = (p, x) => substring(0, stringLength(x) x) === p
    , hasSuffix            = (s, x) => {
        const lx = stringLength(x),
              ls = stringLength(s);
        return lx >= ls && substring(lx - ls, lx, x) === s;
    }
    , hasInfix             = (i, x) => {
        const drop = (x) => substring(1, stringLength(x), x);
        return hasPrefix(i, x) || x != "" && hasInfix(i, drop(x));
    }
    stringToCharacters     = (x) => map((p) => substring(p, 1, s), range(0, stringLength(s - 1)))
    stringAsChars          = (f, x) => concatStrings(map(f, stringToCharacters(x)))
;
