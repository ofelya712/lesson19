"use server"

import { redirect } from "next/navigation"
import { AddLecturers, InputTypes, updateLecturerById } from "../api"

export const AddLecturer = (data: FormData) => {
    const lecturers: InputTypes = {
        name: data.get("name") as string,
        surname: data.get("surname") as string,
        subject: data.get("subject") as string
    }
    AddLecturers(lecturers)
    redirect("/lecturers")
}

export const UpdateLecturer = async (id: number, data: FormData) => {
    const lecturers: InputTypes = {
        name: data.get("name") as string,
        surname: data.get("surname") as string,
        subject: data.get("subject") as string
    }

    updateLecturerById(id, lecturers)
    redirect("/lecturers")

}