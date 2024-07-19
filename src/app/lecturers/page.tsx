import { AddLecturers, getAllLecturers } from "../lib/api"
import { LecturerList } from "../lib/components/lecturer-list"

export default function Page() {
    const list = getAllLecturers()
    console.log(list)
    return <>
        <h1 className="is-size-3">Lecturers</h1>
        <LecturerList
            lecturers={list}
        />

    </>
}