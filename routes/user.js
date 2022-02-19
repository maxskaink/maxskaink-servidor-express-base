
const { Router } = require("express");
const { getUsuarios, 
        putUsuarios, 
        postUsuarios, 
        deleateUsuarios 
      } = require("../controllers/userctr");

const router = Router();

router.get("/", getUsuarios)        

router.put("/:id", putUsuarios)        

router.post("/", postUsuarios)        

router.delete("/", deleateUsuarios)       


module.exports = router