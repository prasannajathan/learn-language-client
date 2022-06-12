import Head from "next/head"
import Image from "next/image"
import styles from "../../styles/Home.module.css"
import { gql } from "@apollo/client"
import client from "../../apollo-client"

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
        query {
            articles  {
                data {
                id
                attributes {
                    title
                    description
                }
                }
            }
            }`,
    })
    // console.log(data)
    return {
        props: {
            articles: data.articles.data,
        }
    }
}

export default function Blog({ articles }) {


    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Blog
                </h1>
                <div className={styles.grid}>
                    {articles.map((article) => (
                        <div key={article.id} className={styles.card}>
                            <a href="article.attributes.title">
                            <h3>{article.attributes.title}</h3>
                            {article.attributes.description}
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}