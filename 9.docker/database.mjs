const connectoToDatabase = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Database Connected");
        }, 5000)
    })
}

export default connectoToDatabase