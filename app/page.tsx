import styles from "./page.module.css";

const Home = async () => {
  const res = await fetch("http://localhost:3000/constituents");
  const constituents = await res.json();

  console.log("constituents: ", constituents);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Constituent Management System</h2>
        <div className={styles.cardBody}>
          {constituents.length > 0 ? (
            <>constituents</>
          ) : (
            <>There are no constituents</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
