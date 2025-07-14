// signup / register ya login logic

const userRegister = async function (req, res) {
    try {
        res.status(200).json({
            message: "Bank management system work properly.",
            fun: function(){
                console.log("the server is work properly.")
            },
        })
    } catch (error) {        
        console.log(error)
        process.exit(1)
    }
}

export { userRegister }