import config from "../config"

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
        fetch(`${config.server}/pais?nombre=${country}`) .then(response => {
            if(response.ok){
                response.json().then(data => {
                    resolve(data[0])
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
            }
        }) .catch(error => {
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
    getGroups,
    getGroup,
    getCountries,
    getCountry
}