import { User } from "../models/user.model.js"

const userRegister = async function (req, res) {
    try {
        // algorithm for register a new user
        // take the input
        // check the given input is not empty
        // check the given data is not already exist in the database.
        // store in the database.
        // remove the password and refresh token from the response
        // give the response to the user

        const {firstName, lastName, email , password, mobileNo, address, photo} = req.body

        if(
            [firstName, lastName, email , password, mobileNo, address].some((item) => item?.trim() === "")
        ) {
            return "all feilds are required"
        }
        
        const existedUser = await User.findOne({
            $or: [{firstName, email}]
        })

        if(existedUser) return "user already existed."

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            address,
            photo: photoPath
        })

        const createdUser = await User.findById(user._id).select("-password -mobileNo")

        if(!createdUser) return "user not created"

        return res.status(200).json({
            message: "user registered successfully"
        })

    } catch (error) {        
        console.log(error)
        process.exit(1)
    }
}

const loginUser = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const logoutUser = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
export { userRegister, loginUser, logoutUser }