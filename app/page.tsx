import { DataTable } from "@/components/ui/dataTable/data-table";
import styles from "./page.module.css";
import { columns } from "@/components/columns";
import { ConstituentDialog } from "@/components/ui/constituentDialog/constituentDialog";

const Home = async () => {
  const res = await fetch("http://localhost:3000/constituents");
  const constituents = await res.json();

  console.log("constituents: ", constituents);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <ConstituentDialog />
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Constituent Management System</h2>
        </div>
        <div className={styles.cardBody}>
          {constituents.length > 0 ? (
            <DataTable columns={columns} data={constituents} />
          ) : (
            <>There are no constituents</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
