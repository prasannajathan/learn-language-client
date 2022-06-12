import Link from "next/link";
const Tutors = ({ tutors }) => {
    // console.log('test', tutors);
    return (
        <>
            <h1>Tutors</h1>
            <ul className="list-none space-y-4 text-4xl font-bold mb-3">
                {tutors && tutors.map(tutor => {
                    return (
                        <li key={tutor.id}>
                            <Link href={`/tutors/${tutor.id}`}>{tutor.attributes.name}</Link>
                            {/* <p>{tutor.attributes.about}</p> */}
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default Tutors;
