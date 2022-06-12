import Layout from "../../components/Layout";
import { gql } from "@apollo/client"
import client from "../../lib/apollo-client"

const Tutors = () => {
    return (
        <Layout>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                    Films
                </span>
            </h1>
        </Layout>
    )
}

export default Tutors

export async function getStaticProps() {

    const { data } = await client.query({
        query: gql`
        query {
            tutors{
                data{
                id
                    attributes {
                        name
                        about

                    }
                }
            }
        }
`,
    })
    return {
        props: {
            tutors: data.tutors.data,
        },
    }
}