import Database from 'better-sqlite3'
const db = new Database("lecturers.db")

export interface ILecturers {
    id: number
    name: string
    surname: string
    subject: string
}
export type InputTypes = Omit<ILecturers, "id">

export const getAllLecturers = (): ILecturers[] => {
    return db.prepare(`SELECT * FROM lecturers`).all() as ILecturers[]
}

export const AddLecturers = (lecturers: InputTypes) => {
    db.prepare(`
        INSERT INTO lecturers(name,surname,subject)
        VALUES(@name,@surname,@subject)
        `).run(lecturers)
}
export const getLecturerById=(id:number):ILecturers=>{
    return db.prepare(`SELECT * FROM lecturers WHERE id=?`).get(id) as ILecturers
}

export const updateLecturerById=(id:number,lecturers:InputTypes)=>{
    return db.prepare(`UPDATE lecturers SET name=?,surname=?,subject=? WHERE id=?`)
    .run(lecturers.name,lecturers.surname,lecturers.subject,id)
}