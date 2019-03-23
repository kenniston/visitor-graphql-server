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

const locationServiceConfig = {
    domain: process.env.LOCATION_SERVICE_DOMAIN || "location-service",
    port: process.env.LOCATION_SERVICE_PORT || "3001"
}


const Guest = {

    location: async (root, { orderBy }, context, info) => {
        var result = []
        const location = root.location

        for (var i = 0; i < host.length; i++) {
            const resp = await axios.get(`http://${locationServiceConfig.domain}:${locationServiceConfig.port}/location/${location}`)
            result.push(resp.data)
        }

        if (orderBy != undefined) {
            result.sort(sortByProperty(orderBy))
        }
        return result;
    },

    host: async (root, { orderBy }, context, info) => {
        var result = []
        const host = root.host

        for (var i = 0; i < host.length; i++) {
            const resp = await axios.get(`http://${hostServiceConfig.domain}:${hostServiceConfig.port}/host/${host[i].id}`)
            result.push(resp.data)
        }

        if (orderBy != undefined) {
            result.sort(sortByProperty(orderBy))
        }
        return result;
    }

}

export {
    Guest
}