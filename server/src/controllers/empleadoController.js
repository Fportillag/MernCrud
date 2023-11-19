function create(req,res){
    const data = req.body;
    req.getConnection((err,conn)=>{
        if (err) {
            res.json(err)
        }else{
            conn.query("INSERT INTO empleados SET ? ", [ data ], (err,rows)=>{
                if (err) {
                    res.json(err)
                }else{
                    res.send('Empleado creado')
                }    
            })
        }
    })
}

function listar(req,res){
    req.getConnection((err,conn)=>{
        if (err) {
            res.json(err);
        }
        conn.query("SELECT * FROM empleados",(err,empleados)=>{
            if (err) {
                res.json(err);
            }
            res.send(empleados);
        })
    })
}

function editar(req,res){
    const id = req.params.id;
    const body = req.body;
    
    req.getConnection((err,conn)=>{
        if (err) {
            res.json(err);
        }
        conn.query("UPDATE empleados SET ? WHERE id = ?", [body,id],(err,rows)=>{
            if (err) {
                res.json(err);
            }
            res.send("Empleado Actualizado Con Éxito");
        })

    })
}

function eliminar(req,res){
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        if(err){
            res.json(err);
        }
        conn.query("DELETE FROM empleados WHERE id=?",[id],(err,rows)=>{
                if(err){
                    console.log(err);
                    res.json(err);
                    }else{
                        
                        res.send("Registro Eliminado con Exito")
                        }
                        });
        
    })
}

module.exports = {
    create:create,
    listar:listar,
    editar:editar,
    eliminar:eliminar,
}

