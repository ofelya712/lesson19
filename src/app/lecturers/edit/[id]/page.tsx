import { UpdateLecturer } from "@/app/lib/actions/action-lecturer"
import { getLecturerById } from "@/app/lib/api"

interface IProps {
    params:
    { id: number }
}

export default function Page({ params }: IProps) {
    const lecturers = getLecturerById(params.id)
    return <>
        <h1 className="is-size-3">Edit Lecturer NO.{params.id}</h1>
        <div className="columns">
            <div className="field my-4">
                <form className="box" action={UpdateLecturer.bind(null, params.id)}>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="name"
                            className="input is-primary"
                            placeholder="enter a name"
                            defaultValue={lecturers.name}

                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="surname"
                            className="input is-primary"
                            placeholder="enter a surname"
                            defaultValue={lecturers.surname}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="subject"
                            className="input is-primary"
                            placeholder="enter a subject"
                            defaultValue={lecturers.subject}
                        />
                        <div className="field my-4">
                            <button className="button is-danger">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}