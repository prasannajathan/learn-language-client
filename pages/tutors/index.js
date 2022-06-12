import Layout from "../../components/Layout";
import { useState } from "react";
import { gql } from "@apollo/client"
import client from "../../lib/apollo-client"
import { fetcher } from "../../lib/api";
import Tutors from "../../components/Tutors";

import useSWR from "swr";

const query = {
    'query': `{
        tutors (limit: 5, order_by:{created_at: desc}) {
            data{
            id
                attributes {
                    name
                    about

                }
            }
        }
    }`
}

const getData = async (...args) => {
    return await fetch(query);
};

const TutorsList = ({ tutors }) => {
    const [pageIndex, setPageIndex] = useState(1);

    const { data, error } = useSWR(query, getData, {
        fallbackData: tutors
    });

    return (
        <Layout>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                    Tutors
                </span>
            </h1>
            <Tutors tutors={tutors} />

            {/* <div className="space-x-2 space-y-2">
                <button
                    className={`md:p-2 rounded py-2 text-black text-white p-2 ${pageIndex === 1 ? 'bg-gray-300' : 'bg-blue-400'
                        }`}
                    disabled={pageIndex === 1}
                    onClick={() => setPageIndex(pageIndex - 1)}
                >
                    {' '}
                    Previous
                </button>
                <button
                    className={`md:p-2 rounded py-2 text-black text-white p-2 ${pageIndex === (data && data.meta.pagination.pageCount)
                            ? 'bg-gray-300'
                            : 'bg-blue-400'
                        }`}
                    disabled={pageIndex === (data && data.meta.pagination.pageCount)}
                    onClick={() => setPageIndex(pageIndex + 1)}
                >
                    Next
                </button>
                <span>{`${pageIndex} of ${data && data.meta.pagination.pageCount
                    }`}</span>
            </div> */}
        </Layout>

    )
}

export default TutorsList

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
                meta {
                pagination {
                    page
                    pageSize
                    total
                    pageCount
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