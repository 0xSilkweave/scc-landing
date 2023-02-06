import styles from "../style";
import Button from "./Button";

const Lower = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Ready to build the future of finance?</h2>
        <p className={`${styles.paragraph} max-w-[650px] mt-5`}>
          By providing the activism, support and guidance early-stage projects benefit from, we are able to help push forward the Web3 movement.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-9 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default Lower;