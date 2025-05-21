import HeadingTwo from "./HeadingTwo";
import SectionTwo from "./SectionTwo";

export default function Post({ title, body }) {
  return (
    <SectionTwo isFancy={true}>
      <HeadingTwo>{title}</HeadingTwo>
      <p>
        <i>{body}</i>
      </p>
    </SectionTwo>
  );
}
