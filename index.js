/* TODO:
 * Jenkins instance for builds with (publishing)?, SonarQube checks/reporting,
 * nix/lib comparisons.
 * Should I test this? Do I honestly give enough of a fuck?
 * -chloe
 */
module.exports = {
      trivial: require('./lib/trivial.js')
    , arrays: require('./lib/arrays.js')
    , objects: require('./lib/objects.js')
    , strings: require('./lib/strings.js')
};
