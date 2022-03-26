import config from "../config"

const getHome = () => {
    return new Promise((resolve, reject) => {
        fetch(`${config.server}/acerca-de-alemanias`).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    if (data) {
                        resolve(data[0].media)
                    }
                })
                    .catch(error => {
                        console.log(error);
                        reject(error)
                    })
            }
        }).catch(error => {
            console.log(error);
            reject(error);
        })
    })
}

const getAboutGermany = () => {
    return new Promise((resolve, reject) => {
        fetch(`${config.server}/acerca-de-alemanias`).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    if (data) {
                        resolve(data[0])
                    } else {
                        reject(false)
                    }
                }).catch(error => {
                    console.log(error);
                    reject(error);
                })
            }
        }).catch(error => {
            console.log(error);
            reject(error);
        })
    })
}

const getCountries = () => {
    return new Promise((resolve, reject) => {
        fetch(`${config.server}/pais`).then(response => {
            if (response && response.ok) {
                response.json().then(data => {
                    resolve(data)
                })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            }
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

const getCountry = country => {
    return new Promise((resolve, reject) => {
        fetch(`${config.server}/pais?nombre=${country}`).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    resolve(data[0])
                })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            }
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

const getGroups = () => {
    return new Promise((resolve, reject) => {
        fetch(`${config.server}/grupos`).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    resolve(data)
                })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            }
        })
            .catch(error => {
                console.log(error)
                reject(error)
            })
    })
}
const getGroup = group => {
    return new Promise((resolve, reject) => {
        fetch(`${config.server}/grupos?grupo=${group}`).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    resolve(data)
                })
                    .catch(error => {
                        console.log(error)
                    })
            }
        })
            .catch(error => {
                console.log(error)
            })
    })
}


export {
    getHome,
    getAboutGermany,
    getGroups,
    getGroup,
    getCountries,
    getCountry
}