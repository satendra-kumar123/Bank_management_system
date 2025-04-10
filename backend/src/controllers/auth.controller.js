// signup / register ya login logic

const userRegister = async function (req, res) {
    try {
        const {username , email , password, phoneNO, address} =  req.body
    } catch (error) {        
        console.log(error)
    }
}

export { userRegister }