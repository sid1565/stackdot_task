import db from "../../config/config.js";

export async function user_register(body) {
    try {
        console.log("IN the Service");
        const  insertRows =await db.query("INSERT INTO users (fk_institute_id, fk_board_id, fk_subject_id, fk_medium_id, fk_standard_id, fk_class_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",[
            body.institute_type,
            body.board_id,
            body.subject_id,
            body.medium_id,
            body.standard_id,
            body.class_id
        ])

        console.log("INSERT++", insertRows.rows[0]);
        
        const data = insertRows.rows[0];
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function get_institutes(body) {
    try {
        const getData = await db.query("SELECT * FROM institute");
        return getData.rows;
    } catch (error) {
        return Promise.reject(error);
    }
}