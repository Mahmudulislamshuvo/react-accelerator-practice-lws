import HeadingTwo from "./HeadingTwo";
import Post from "./Post";
import SectionTwo from "./SectionTwo";

export default function RecentPosts() {
  return (
    <SectionTwo>
      <HeadingTwo>Recent Posts</HeadingTwo>
      <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
      <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
    </SectionTwo>
  );
}
