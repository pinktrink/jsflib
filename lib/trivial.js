module.exports = {
      id
    , const_
    , cnst: const_
    , or
    , and
    , bitAnd
    , bitOr
    , bitXor
    , bitNot
    , boolToString
    , mergeAttrs
    , flip
    , mapNullable
    , min
    , max
    , mod
    , compare
};


var   id           = (x) => x
    , const_       = (x, _) => x
    , concat       = (x, y) => [...x, ...y]
    , or           = (x, y) => x || y
    , and          = (x, y) => x && y
    , bitAnd       = (x, y) => x & y
    , bitOr        = (x, y) => x | y
    , bitXor       = (x, y) => x ^ y
    , bitNot       = (x, y) => x ~ y
    , boolToString = (b) => b === true ? "true" : "false"
    , mergeAttrs   = (x, y) => {...x, ...y}
    , flip         = (f, a, b) => f(b, a)
    , mapNullable  = (f, x) => x === null ? x : f(x)
    , min          = (x, y) => x < y ? x : y
    , max          = (x, y) => x > y ? x : y
    , mod          = (b, i) => i % b
    , compare      = (a, b) => a < b ? -1 : (
        a > b ? 1 : 0
    )
;
