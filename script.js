function registr_form(el) {
    var data = new Array
    data[0] = el.nickname.value
    data[1] = el.password.value
    data[2] = el.repassword.value
    
    if (data[0] == "" || data[1] == "" || data[2] == ""){
        alert("Enter the data.")
        return false;
    }
    else if (data[1] != data[2]){
        alert("Passwords are not equal.")
        return false;
    }
    else if (data[0].indexOf(' ') >= 0 || data[1].indexOf(' ') >= 0 || data[2].indexOf(' ') >= 0) {
        alert("You can't use a space bar.")
        return false;
    }
    else {
        console.log(data)
        alert("Data entered successfully.")
    }
    return false
};