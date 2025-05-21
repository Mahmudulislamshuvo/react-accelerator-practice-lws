import Heading from "./HeadingTwo";
import Section from "./SectionTwo";
import Post from "./Post";
import AllPosts from "./Allpost";

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
}
