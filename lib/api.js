export async function fetcher(url, option = {}) {
    let response
    if (!options) {
        response = await fetch(url)
    } else {
        response = await fetch(url, options)
    }
    const data = await response.json()
    return data

}


// export async function getStaticProps() {
//     const data = await fetcher(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT)
//     return {
//         props: {
//             tutors: data,
//         },
//     }
// }