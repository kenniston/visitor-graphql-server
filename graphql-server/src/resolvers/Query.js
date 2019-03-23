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

const locationServiceConfig = {
    domain: process.env.LOCATION_SERVICE_DOMAIN || "location-service",
    port: process.env.LOCATION_SERVICE_PORT || "3001"
}

const hostServiceConfig = {
    domain: process.env.HOST_SERVICE_DOMAIN || "host-service",
    port: process.env.HOST_SERVICE_PORT || "3003"
}

const Query = {
    getAllGuests: async (_, { orderBy }) => {
        const resp = await axios.get(`http://${guestServiceConfig.domain}:${guestServiceConfig.port}/guest`);
        var data = resp.data
        
        if (orderBy != undefined) {
            data.sort(sortByProperty(orderBy))
        }
        return data;
    },

    getAllHosts: async (_, { orderBy }) => {
        const resp = await axios.get(`http://${hostServiceConfig.domain}:${hostServiceConfig.port}/host`);
        var data = resp.data
        
        if (orderBy != undefined) {
            data.sort(sortByProperty(orderBy))
        }
        return data;
    },

    getAllLocations: async (_, { orderBy }) => {
        const resp = await axios.get(`http://${locationServiceConfig.domain}:${locationServiceConfig.port}/location`);
        var data = resp.data
        
        if (orderBy != undefined) {
            data.sort(sortByProperty(orderBy))
        }
        return data;
    },
    guest: async (_, { id }) => {
        const resp = await axios.get(`http://${guestServiceConfig.domain}:${guestServiceConfig.port}/guest/${id}`);
        return resp.data;
    }
}

export {
    Query
}