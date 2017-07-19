define([], function() {
    function count(arr, commandTokens) {
        if (commandTokens.length === 0 || commandTokens.length > 1 || commandTokens[0].trim() === '') {
            throw new Error("Error: invalid command parameters");
        }

        let targetString = commandTokens[0];
        let counter = 0;
        for (let element of arr) {
            if(element === targetString){
                counter++
            }
        }

        return counter ;
    }

    return {count};
});
