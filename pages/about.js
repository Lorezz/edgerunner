import styles from '../styles/Home.module.css';

export default function About({ title }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
}

export function getServerSideProps({ query }) {
  console.log('context', query);
  return {
    props: {
      title: query?.locale === 'it' ? 'Chi Siamo' : 'About',
    },
  };
}
