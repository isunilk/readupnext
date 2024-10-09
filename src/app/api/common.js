import cache from 'node-cache'

export const cacheName = async (keyName) => {
    // let user_id = req.token?.user_id
    // let query = req.query
    // let body = req.body
    // let api = req.originalUrl

    let object = {}
    if (keyName) {
        object.keyName = keyName
    }
    // if (user_id) {
    //     object.user_id = user_id
    // }
    // if (query) {
    //     object.query = query
    // }
    // if (body) {
    //     object.body = body
    // }
    // if (api) {
    //     object.api = api
    // }

    return JSON.stringify(object)
}

const myCache = new cache({ stdTTL: 2592000 }); //29 days

export const setCache = async (keyName, data) => {
    myCache.set(await cacheName(keyName), data);
};

export const getCache = async (keyName) => {
    return myCache.has(await cacheName(keyName));
};

export const giveCacheData = async (keyName) => {
    return myCache.get(await cacheName(keyName));
};

export const deleteAllCache = async () => {
    myCache.flushStats()
    myCache.getStats()
    myCache.close()
}