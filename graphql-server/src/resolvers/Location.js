import axios from 'axios'

var sortByProperty = function (property) {
    return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1))
    };
};

const hostServiceConfig = {
    domain: process.env.HOST_SERVICE_DOMAIN || "host-service",
    port: process.env.HOST_SERVICE_PORT || "3003"
}

const Location = {

}

export {
    Location
}