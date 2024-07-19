import { AddLecturer } from "@/app/lib/actions/action-lecturer";

export default function Page() {
    return <>
        <h1 className="is-size-3">Add Lecturers</h1>
        <div className="columns">
            <div className="field my-4">
                <form className="box" action={AddLecturer}>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="name"
                            className="input is-primary"
                            placeholder="enter a name"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="surname"
                            className="input is-primary"
                            placeholder="enter a surname"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="subject"
                            className="input is-primary"
                            placeholder="enter a subject"
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