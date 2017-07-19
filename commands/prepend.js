define([], function() {
    function prepend(arr, commandTokens) {
        arr.unshift(commandTokens[0]);
    }

    return {prepend};
});
