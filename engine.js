(function processCommands() {
    /**
     * TO DO
     * Require commands
     */

    let commands = {
        reverse: function () {
            if (arguments[0].length !== 0) {
                throw new Error("Error: invalid command parameters");
            }

            arr.reverse();
            terminal.value += arr.join(" ") + "\n";
        },
        sort: function () {
            if (arguments[0].length !== 0) {
                throw new Error("Error: invalid command parameters");
            }

            arr.sort();
            terminal.value += arr.join(" ") + "\n";
        }

    }


    let arr;
    let isInitialized = false;



    let terminal = document.getElementById("terminal");
    let input = document.getElementById("input");
    input.addEventListener("keypress", (e) => e.code === "Enter" ? submit() : '');
    document.getElementById("submit").addEventListener("click", submit);

    function submit() {
        let commandTokens = input.value.trim().split(/\s+/);
        if (isInitialized) {
            try {

                commands[commandTokens[0]](commandTokens.slice(1));
            } catch (err) {
                terminal.value += err.message + "\n";
            } finally {
                input.value = "";
            }
        } else {
            arr = commandTokens.slice(0);
            terminal.value += arr.join(" ") + "\n";
            isInitialized = true;
            input.value = "";
        }
    }
})();