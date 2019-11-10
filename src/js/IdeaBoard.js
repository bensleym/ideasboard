import React from "react";
import IdeaCreate from "./IdeaCreate";
import Idea from "./Idea";
import styles from "../css/idea/ideaBoard.module.css";

const IdeasBoard = ({ ideas, onCreate, sortBy, onDelete }) => {
  return (
    <div>
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
