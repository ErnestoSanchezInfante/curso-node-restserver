
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        require:[true, 'El nombre es obligatorio']
    },

    correo: {
        type: String,
        require:[true, 'El correo es obligatorio']
    },
    password: {
        type: String,
        require:[true, 'La contraseña es obligatoria']
    },

    img: {
        type: String,
        
    },

    rol: {
        type: String,
        require: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },

    estado: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    }

});

UsuarioSchema.methods.toJSON = function () {
    const { __v, password, ...usuario} = this.toObject(); //Para quitar el password y la version en el res
    return usuario;
}

module.exports = model('Usuario', UsuarioSchema);