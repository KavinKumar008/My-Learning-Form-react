import React from "react";
import styles from "./styles.module.css";
import { FaAmazon } from "react-icons/fa";

const SecondPage = () => {
  return (
    <div>
      <main className={styles.mainContainer}>
        <section className={styles.firstSection}>
          <h1 className={styles.firstSectionHeading}>
            <FaAmazon className={styles.imgAmazon} /> Simple Flow
          </h1>
          <span className={styles.spanElement}>1/2</span>
          <p className={styles.firstCustomPara}>Customize Your Organization</p>
          <p className={styles.firstSetupPara}>
            Setup your organization for members that may join later.
          </p>
        </section>
        <section className={styles.formContainer}>
          <form className={styles.formBoxes}>
            <label htmlFor="cname" className={styles.labelTag}>
              <p className={styles.labelName}>
                Company Name<span>*</span>
              </p>
              <input type="text" id="cname" className={styles.inputField} />
            </label>
            <label htmlFor="ctype" className={styles.labelTag}>
              <p className={styles.labelName}>
                Company Type<span>*</span>
              </p>
              <select name="ctype" id="ctype" className={styles.inputField}>
                <option value="" className={styles.options}>
                  Select Company Type
                </option>
                <option value="A">A-Stress Level High</option>
                <option value="A">A-Stress Level Medium</option>
                <option value="A">A-Stress Level Low</option>
              </select>
            </label>
            <label htmlFor="cstrength" className={styles.labelTag}>
              <p className={styles.labelName}>
                Team Strength<span>*</span>
              </p>
              <select
                name="cstrength"
                id="cstrength"
                className={styles.inputField}
              >
                <option value="">Select Team Strength</option>
                <option value="group">Select Team Group</option>
                <option value="two">Select Team Two</option>
                <option value="individual">Select Team Individual</option>
              </select>
            </label>
            <button type="submit" className={styles.submitBtn}>
              Continue
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default SecondPage;
