function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || "mx";
    console.log(name, age, country)
}

newUser();
newUser("David", 15, "CO");

function newAdmin(name = "Oscar", age = 32, country = 'Cl'){
console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, "PE");