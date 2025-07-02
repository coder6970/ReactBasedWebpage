import Header from "./components/Header.jsx";
import { CORE_CONCEPTS } from "./data-with-examples.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data-with-examples.js";

function App() {
  const [selected, setSelected] = useState();
  function handleSelect(selectedButton) {
    setSelected(selectedButton);
  }
  let tabcontent = <p>Please select a topic.</p>;
  if (selected) {
    tabcontent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
          <code>{EXAMPLES[selected].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <div id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((obj) => (
              <CoreConcept key={obj.title} {...obj} />
            ))}
          </ul>
        </div>
        <div id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.entries(EXAMPLES).map(([key, value]) => (
               <TabButton
               key = {key}
              isSelected={selected === key}
              onSelect={() => handleSelect(key)}
            >
              {key}
            </TabButton>
            ))}
            {/* <TabButton
              isSelected={selected === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selected === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selected === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selected === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton> */}
          </menu>
          {tabcontent}
        </div>
      </main>
    </div>
  );
}

export default App;
