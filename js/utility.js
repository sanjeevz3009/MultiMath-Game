function getInputValue(elementID) {
    const inputElement = document.getElementById(elementID);
    return inputElement.value;
}
function logger(message) {
    console.log(message);
}
export { getInputValue as getValue, logger };
//# sourceMappingURL=utility.js.map