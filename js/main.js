window.onload = loaded;



/**
 * Simple Function that will assign button functions when the webpage is finished loading
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    
    const submitWordBtn = document.querySelector('.submit-word-button');
    const phraseSelect = document.querySelectorAll('input[name="phrase-select"]');

    console.log("hello there");

    submitWordBtn.onclick = function() {

        console.log("submitted");
        let output = "No word has been selected";
        for (const word of phraseSelect){
            if (word.checked){
                output = word.value;
            }
        }
        reportWord(output);
    };
}



/**
 * This function gives the given output string in an alert popup and returns the string
 * @return the string variable output
 */

export function reportWord(output) {
    alert(output);
    return output;
}


