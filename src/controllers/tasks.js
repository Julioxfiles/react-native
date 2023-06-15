import { dbConnect } from '../database.js';

// En todas estas funciones se utiliza async porque la conexion a mysql2 la requiere;

export const getAllTasks = async (req,res) => {
    const db = await dbConnect();
    const [rows] = await db.query("SELECT * FROM tasks");
    console.log(rows);
    res.send(rows)
}

export const getTasks = async (req,res) => {
    const db = await dbConnect();
    const [rows] = await db.query("SELECT * FROM tasks");
    console.log(rows);
    res.send(rows)
}

export const getTask = async (req,res) => {
    const db = await dbConnect();
    const [rows] = await db.query("SELECT * FROM tasks WHERE id = ?",[req.params.id]);
    console.log(rows[0]);
    res.send(rows[0])
}

export const countTasks = async (req,res) => {
    const db = await dbConnect();
    const [rows] = await db.query("SELECT COUNT(id) AS records FROM tasks");
    console.log(rows[0]["records"]);
    res.json(rows[0]["records"]);
}

export const saveTask = async (req,res) => {
    const db = await dbConnect();
    //const r = req.body; // Lo uso para abreviar.
    const [response] = await db.query("INSERT INTO tasks (proyect_id, title, description, start_date, duration_days) VALUES (?,?,?,?,?)",
     [req.body.proyect_id,
      req.body.title, 
      req.body.description,
      req.body.start_date,
      req.body.duration_days
     ]);
    
     if (response.serverStatus === 2 && response.affectedRows === 1) {
        res.json({
            status:200,
            message:"New task added.",
            id:response.insertId,
        })
        return true;
     } else {
        res.json({
            status:409,
            message:"Task could not be added.",
        })
        return false
     }  
    

    const new_record = {
        id:response.insertId,
        ...req.body
    }
    console.log(new_record);
    //console.log(response);

    
}

export const deleteTask = async (req,res) => {
    const db = await dbConnect();
    const [response] = await db.query("DELETE FROM tasks WHERE id =?",[req.params.id]);
    //console.log(response);
    if (response.serverStatus === 2 && response.affectedRows === 1) {
        res.json({
            status:200,
            message:"Task deleted.",
            id:req.params.id
        })
    } else {
        res.json({
            status:409,
            message:"Task could not be deleted.",
        })
    }    
}

export const updateTask = async (req,res) => {
    const db = await dbConnect();
    const [response] = await db.query("UPDATE tasks SET ? WHERE id = ?",
     [req.body,
      req.params.id
     ]
    );
    if (response.serverStatus === 2 && response.affectedRows === 1) {
        res.json({
            status : 200,
            message : "Task updated.",
            id:req.params.id
        })
    } else {
        res.json({
            status : 409,
            message:"Task could not be updated.",
        })
    }  
        
}