const express = require("express")
const { deletes, update, creat, read } = require("../controller/blogController")
const{read1,creat1,deletes1,update1} = require("../controller/blogDetailsController")
const { read2, creat2, update2, deletes2 } = require("../controller/commentController")
const {read3,creat3,update3,deletes3} = require("../controller/messageController")
const {read4,creat4,update4,deletes4} = require("../controller/portfolioController")
const {read5,creat5,update5,deletes5} = require("../controller/productController")
const {read6,creat6,update6,deletes6} = require("../controller/profitController")
const {read7,creat7,update7,deletes7} = require("../controller/projectController")
const {read8,creat8,update8,deletes8} = require("../controller/serviceController")
const {read9,creat9,update9,deletes9} = require("../controller/titleController")

const router = express.Router()

//blogController

router.get("/read",read)
router.post("/creat",creat)
router.put("/update",update)
router.delete("/delets",deletes)

// blogDetailsController

router.get("/read1",read1)
router.post("/creat1",creat1)
router.put("/update1",update1)
router.delete("/delets1",deletes1)

// commentController

router.get("/read2",read2)
router.post("/creat2",creat2)
router.put("/update2",update2)
router.delete("/delets2",deletes2)


// messageController.js


router.get("/read3",read3)
router.post("/creat3",creat3)
router.put("/update3",update3)
router.delete("/delets3",deletes3)


// portfolioController.js


router.get("/read4",read4)
router.post("/creat4",creat4)
router.put("/update4",update4)
router.delete("/delets4",deletes4)


// productController.js


router.get("/read5",read5)
router.post("/creat5",creat5)
router.put("/update5",update5)
router.delete("/delets5",deletes5)


//profitController.js


router.get("/read6",read6)
router.post("/creat6",creat6)
router.put("/update6",update6)
router.delete("/delets6",deletes6)


// projectController.js


router.get("/read7",read7)
router.post("/creat7",creat7)
router.put("/update7",update7)
router.delete("/delets7",deletes7)


// serviceController.js

router.get("/read8",read8)
router.post("/creat8",creat8)
router.put("/update8",update8)
router.delete("/delets8",deletes8)


// titleController.js


router.get("/read9",read9)
router.post("/creat9",creat9)
router.put("/update9",update9)
router.delete("/delets9",deletes9)

module.exports = router