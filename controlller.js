
   export function login (req, res, next){
        res.status(201).json({sucess: true, message:"Please log to access"});
    }
    export function home (req, res, next){
        res.status(201).json({sucess: true, message:"HE Welcom kassim!"});
    }

