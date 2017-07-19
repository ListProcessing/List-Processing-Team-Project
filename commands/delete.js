define([], function() {
    function remove(arr, commandTokens) {
        if (commandTokens.length === 0 || commandTokens.length > 1 || commandTokens[0].trim() === '') {
            throw new Error("Error: invalid command parameters");
        }

        let index = Number(commandTokens.shift(0));
        if(index < 0 || index >= arr.length){
            throw new Error('Error: invalid index ' + index);
        }

        arr.splice(index, 1);
    }

    return {remove};
});
