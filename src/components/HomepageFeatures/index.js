import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Hello World",

    description: (
      <>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero
        vitae tempora, repellendus veritatis nobis odio eligendi vero commodi
        minus sapiente tenetur officia? Saepe nisi modi ipsa recusandae vitae
        ducimus!
      </>
    ),
  },
  {
    title: "This is tile",

    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eligendi
        nesciunt. Quam quasi doloribus quidem praesentium accusamus neque
        recusandae magni debitis ducimus ipsam hic quod nihil, natus commodi
        harum! Laborum!
      </>
    ),
  },
  {
    title: "HEllooooo",

    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolores
        qui hic praesentium quo natus fugit, delectus tenetur ex laboriosam
        dolorum commodi quia. Fugit enim rerum quia reiciendis accusamus
        molestiae?
      </>
    ),
  },
  {
    title: "abc def",

    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolores
        qui hic praesentium quo natus fugit, delectus tenetur ex laboriosam
        dolorum commodi quia. Fugit enim rerum quia reiciendis accusamus
        molestiae?
      </>
    ),
  },
  {
    title: "lorem ipsum",

    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolores
        qui hic praesentium quo natus fugit, delectus tenetur ex laboriosam
        dolorum commodi quia. Fugit enim rerum quia reiciendis accusamus
        molestiae?
      </>
    ),
  },
  {
    title: "helo 123",

    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolores
        qui hic praesentium quo natus fugit, delectus tenetur ex laboriosam
        dolorum commodi quia. Fugit enim rerum quia reiciendis accusamus
        molestiae?
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
