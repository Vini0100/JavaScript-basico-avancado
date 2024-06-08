let phrase = "Today was a good day";

convertToArray(phrase);

function convertToArray(text) {
    text = text.split(" ");
    console.log(text);

    for (let i = 0; i < text.length; i++) {
        console.log(`Word ${i+1} ` + text[i]);
    }
}