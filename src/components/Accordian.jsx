import { useState } from "react";
import Panel from "./Panel";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h1>Accordian</h1>
      <Panel
        title={"Free"}
        isactive={activeIndex === 0 && true}
        onActive={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ducimus
        repellendus cupiditate, unde harum vel doloribus molestias dolore
        officiis, dignissimos fugit. Sequi unde provident quae aliquid
        necessitatibus, nisi cumque dolorum mollitia delectus, laborum iure
        ipsam omnis similique, odio qui distinctio. Pariatur, reiciendis minus
        adipisci sed corrupti assumenda voluptatibus ex voluptatum. At harum,
        minima illo veritatis tempore, voluptatibus quaerat inventore commodi
        recusandae, cum dicta facere sunt. Placeat reprehenderit soluta
        voluptates vitae sequi quisquam porro nemo et amet ipsam hic esse,
        suscipit, commodi deleniti, molestiae explicabo accusantium. Illum rem,
        aperiam possimus ullam corrupti quos porro eligendi sapiente, temporibus
        delectus placeat natus adipisci!
      </Panel>
      <Panel
        title={"Paid"}
        isactive={activeIndex === 1 && true}
        onActive={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
        laborum ullam expedita porro veniam eum facilis, qui animi! Aliquid, eum
        ducimus magni, nihil minus porro earum qui, adipisci deleniti enim
        mollitia rem eaque molestias vero numquam autem quasi exercitationem
        reiciendis voluptas doloribus labore. Atque repudiandae voluptas tempore
        perferendis nostrum explicabo?
      </Panel>
    </div>
  );
};

export default Accordian;
