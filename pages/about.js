import styles from '../styles/Home.module.css';

export default function About({ title }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: 'About',
    },
  };
}
