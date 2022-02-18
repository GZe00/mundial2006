
const server = process.env.SERVER

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