import Link from "next/link"
import { ILecturers } from "../api"

interface IProps {
    lecturers: ILecturers[]
}
export const LecturerList = ({ lecturers }: IProps) => {
    return <>

        {
            lecturers.map(elm => <div key={elm.id} className="box field my-4">
                <p>Name: {elm.name}</p>
                <p>Surname: {elm.surname}</p>
                <p>Subject: {elm.subject}</p>
                <Link href={"/lecturers/edit/" + elm.id}>edit</Link>
            </div>)
        }

    </>
}