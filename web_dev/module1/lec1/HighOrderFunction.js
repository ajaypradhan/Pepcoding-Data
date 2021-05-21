function getFirstName(fullname) {
    fullname.split(" ");
    return fullname[0];
}

function getLastName(fullname) {
    fullname = fullname.split(" ");
    return fullname[1];
}

function fun(fullname, cb) {
    let name = cb(fullname);
    console.log(name);
}

fun("Setve Roger", getFirstName);
fun("Iron Man", getLastName);