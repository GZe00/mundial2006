import config from "../config"

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
    getGroup

}