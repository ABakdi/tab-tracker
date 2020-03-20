const Joi = require('joi')

module.exports = {
    register (req, res, next){

        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error){

            switch (error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email adress ' 
                    })

                    break
                
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules:
                        <br/>
                        1.it must contain ONLY the following characters: lower case, upper case, numerics
                        <br/>
                        2.it must be at least 8 charecters in length and not greater the 32`
                    })

                    break
                
                default:
                    res.status(400).send({
                        error: 'invalid registration information' + value
                    })
            }

        }else{
            next()
        }


    }
        
    
}