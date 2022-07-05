function is_e(str) {
    if (str == null || str == "" || str == undefined) {
        return true;
    } else {
        str = str.replace(/\s/g, "");
        return str == "";
    }
}

function is_valid(str) {
    return str.startsWith("data:image");
}