const userRegister = async function (req, res) {
    try {
        res.status(200).json({
            message: "ok",
            para: "this is the second ok , ok "
        })
        // console.log(res)
        // console.log(req)
    } catch (error) {
        console.log(error)
    }
}

export { userRegister }