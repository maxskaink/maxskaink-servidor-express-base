const { response, request } = require("express")


const getUsuarios = (req = request, res = response) => {
    
    const params = req.query
    
    res.json({
        ok: true, 
        msg: "Esta es una peticion get uwu",
        params,
    })
}

const putUsuarios = (req = request, res = response) => {

    const { id } = req.params

    res.json({
        ok: true, 
        msg: "Esta es una peticion put uwu",
        id,
    })
}

const postUsuarios = (req = request, res = response) => {

    const body = req.body
    
    res.json({
        msg: "Esta es una peticion post uwu",
        body,
    })
}

const deleateUsuarios =(req, res = response) => {
    res.json({
        ok: true, 
        msg: "Esta es una peticion deleate uwu",
    })
}

module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleateUsuarios,
}