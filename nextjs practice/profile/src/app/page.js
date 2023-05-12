import Image from 'next/image'
import Head from 'next/head'
import styles from './page.module.css'
import Navbar from '../../components/Navbar'

export default function Home() {
  return (
<div>
  <Head>
    <title>user profile</title>
    <meta name='keywords' content='user profile,profile details' ></meta>
    <meta name='description' content='shows different users profile'></meta>
  </Head>
  <Navbar />
    {/* <main className={styles.main}> */}
     <h1>User Profile <a href='/'>Application</a></h1>
    {/* </main> */}
    </div>
  )
}
