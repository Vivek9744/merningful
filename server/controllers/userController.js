const register1=async (req, res) => {
    console.log(req.body);
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const { name, email, given_name, picture, token, family_name } = req.body
    var pass = `QN@#m${token}`
    var m = 1;

    console.log(name)
    if (validator.validate(email)) {
        if (passwordStrength(pass).value === 'Strong' || passwordStrength(pass).value === 'Medium') {
            try {

                const preuser = await users.findOne({ email: email })
                console.log(preuser)
                if (preuser) {
                    res.status(404).send("This user already exists")
                }
                else {



                    const adduser = new users({
                        name, email, given_name, picture, token, family_name

                    })


                    await adduser.save();
                    response.status(201).json(adduser)
                    console.log(adduser)
                }
            } catch (error) {
                res.status(404).send(error)
            }
        } else {
            res.status(404).send("Weak Password")
        }

    } else {
        res.status(404).send("Email Not valid")
    }

}
module.exports = { register1 }