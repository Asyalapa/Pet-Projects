const {User, Token} = require('../models/models');
const bcrypt = require('bcrypt')

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            // throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        // const activationLink = uuid.v4();

        const user = await User.create({email, password: hashPassword, activationLink})
        // await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
        //
        // const userDto = new UserDto(user); // id, email, isActivated
        // const tokens = tokenService.generateTokens({...userDto});
        // await tokenService.saveToken(userDto.id, tokens.refreshToken);
        //
        // return {...tokens, user: userDto}
    }

}

module.exports = new UserService();