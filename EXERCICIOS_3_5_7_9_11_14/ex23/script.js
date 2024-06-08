function count(text) {
    if (text.length > 10) {
        console.log("Text so Long!");
    } else {
        console.log("Text is in the limit!");
    }
    console.log(text.length);
}

count("12345678911");
count("12345");