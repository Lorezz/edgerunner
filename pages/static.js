import styles from '../styles/Home.module.css';

const Page = ({ message }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title} id="message">
        {message}
      </h1>
    </main>
  );
};

export async function getStaticProps() {
  return {
    props: {
      message: 'This is a static page — and now this is a prop!',
    },
  };
}

export default Page;
