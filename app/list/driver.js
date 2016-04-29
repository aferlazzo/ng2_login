"use strict";
var Driver = (function () {
    function Driver(drivername, password, ability, firstname, lastname, email, address, city, state, zip, phone) {
        this.drivername = drivername;
        this.password = password;
        this.ability = ability;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
    }
    return Driver;
}());
exports.Driver = Driver;
//# sourceMappingURL=driver.js.map