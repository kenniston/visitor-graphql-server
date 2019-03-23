import axios from 'axios'

var sortByProperty = function (property) {
    return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
};

const guestServiceConfig = {
    domain: process.env.GUEST_SERVICE_DOMAIN || "guest-service",
    port: process.env.GUEST_SERVICE_PORT || "3002"
}

const Query = {
    getAllGuests: async (_, { orderBy }) => {
        const resp = await axios.get(`http://${guestServiceConfig.domain}:${guestServiceConfig.port}/guest`);
        var data = resp.data
        
        if (orderBy != undefined) {
            data.sort(sortByProperty(orderBy))
        }
        return data;
    }        
}

export {
    Query
}