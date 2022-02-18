
const server = "http://localhost:1337"

const getGroups = () => {
    return new Promise((resolve, reject) => {
        fetch(`${server}/grupos`).then(response => {
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


export {
    getGroups

}