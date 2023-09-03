const creat = (req,res)=>{
    res.send("this is create route")
}

const read = (req,res)=>{
    res.send("this is read routes")
}

const update = (req,res)=>{
    res.send("this is update routes")
}

const deletes = (req,res)=>{
    res.send("this is update routes")
}


module.exports = {creat,read,update,deletes}