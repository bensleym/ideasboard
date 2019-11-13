import React from "react";
import IdeaCreate from "./IdeaCreate";
import Idea from "./Idea";
import styles from "../css/idea/ideaBoard.module.css";

const IdeasBoard = ({ ideas, onCreate, sortBy, onDelete }) => {
  console.log(ideas);
  return (
    <div>
      <hedaer className={styles.ideaBoardHeader}>
        <h1 className={styles.ideaBoardTitle}>
          Ideas Board.{" "}
          <span className={styles.ideaBoardTitleSub}>What doing...</span>
        </h1>
        <select
          className={styles.ideaBoardSelect}
          defaultValue=""
          onChange={event => {
            sortBy(event, ideas);
          }}
        >
          <option value="" disabled>
            Sort by
          </option>
          <option value="title">Title</option>
          <option value="createdAt">Date</option>
        </select>
      </hedaer>
      <section className={styles.ideaBoard}>
        <div className={styles.ideaBoardResults}>
          {ideas.map(idea => (
            <Idea {...idea} key={idea.id} onDelete={onDelete} state={ideas} />
          ))}
        </div>
        <div className={styles.ideaBoardCreate}>
          <IdeaCreate onCreate={onCreate} />
        </div>
      </section>
    </div>
  );
};

export default IdeasBoard;
