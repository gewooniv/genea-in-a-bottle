import Person from "./Person";
import { FAMILY_TREE } from "../data/data.js";
import { useState } from "react";

export default function Rolodex() {
  const data = [];
  data.push(FAMILY_TREE.database.people.person);

  const [people, setPeople] = useState(data[0]);

  return (
    <section id="rolodex">
      <h2>Rolodex</h2>
      <ul>
        {people.map((person) => {
          <Person
            key={person._id}
            people={people}
            firstName={person.name.first}
            surName={person.name.surname}
            gender={person.gender}
          />;
        })}
      </ul>
    </section>
  );
}