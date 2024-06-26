const sessionIdServiesmap =  new Map();

const setuser = (id , user) => {
    sessionIdServiesmap.set(id,user);
}

const getuser =  (id) => {
     sessionIdServiesmap.get(id,user);
}

module.exports = {
    setuser,
    getuser,
}