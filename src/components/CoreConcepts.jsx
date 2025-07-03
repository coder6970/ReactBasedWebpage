import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data-with-examples";

export default function Coreconcepts() {
  return (
    <div id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((obj) => (
          <CoreConcept key={obj.title} {...obj} />
        ))}
      </ul>
    </div>
  );
}
