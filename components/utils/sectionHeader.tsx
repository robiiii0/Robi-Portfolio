import styles from "./header.module.scss";
import { Transition } from "@/components/utils";

interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className={styles.sectionHeader}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className={styles.line} />
      <h3>
        <Transition.reveal>
          <span className={styles.title}>
            {title}
            <span>.</span>
          </span>
        </Transition.reveal>
      </h3>
    </div>
  );
};
