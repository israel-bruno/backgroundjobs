import Mail from "../lib/Mail";

export default {
    key:'RegistrationMail',
    options:{
        delay: 200
    },
    async handle({data}){
        const {user} = data;

        await Mail.sendMail({
            from:'Queue Test <queuetest@queuetest.com.br>',
            to:`${user.name}<${user.email}>`,
            subject:'Cadastro de Usuário',
            html:`Olá, ${user.name}`
        });
    }
};