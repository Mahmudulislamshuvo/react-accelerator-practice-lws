import { useContext } from "react";
import { LevelContext } from "../../context/lavelContext";

export default function SectionTwo({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={"section " + (isFancy ? "fancy" : "")}>
      <LevelContext value={level + 1}>{children}</LevelContext>
    </section>
  );
}
