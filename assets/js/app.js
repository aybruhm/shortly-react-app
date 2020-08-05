function copyShortUrl() {
    /* Select the text field */
    var textToCopy = document.getElementById("shortUrl");
    textToCopy.select();
    /* For Mobile devices */
    textToCopy.setSelectionRange(0, 99999);
    /* Copy the text inside the text field */
    document.execCommand("Copied!");
    /* Alert the copied text*/
    alert("Copied the text: " + textToCopy.value);
}