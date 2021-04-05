module.exports = {
      attrNames
    , hasAttr
    , isAttrs
    , isObject: isAttrs
    , getAttr
    , attrByPath
    , hasAttrByPath
    , attrVals
    , attrValues
};


{
      length
    , head
    , tail
    , map
} = require('./arrays.js');


var   attrNames     = (s) => Object.keys(s)
    , hasAttr       = (a, s) => s.hasOwnProperty(a)
    , isAttrs       = (s) => s instanceof Object && !(s instanceof Array)
    , getAttr       = (a, s) => s[e]
    , attrByPath    = (p, d, s) => {
        const a = head(p);
        return length(p) === 0 ? e : (
            hasAttr(e, a) ? attrByPath(tail(p), d, e[a]) : d
        );
    }
    , hasAttrByPath = (p, e) => {
        const a = head(p);
        return length(p) === 0 ? true : (
            hasAttr(e, a) ? hasAttrByPath(tail(p), e[a]) : false
        );
    }
    , attrVals      = (as, s) => map((x) => s[x]) as
    , attrValues    = (as) => attrVals(attrNames(as), as)
;
