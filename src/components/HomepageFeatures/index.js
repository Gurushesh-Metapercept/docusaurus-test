import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Markdown-based Content:",

    description: (
      <>
        Docusaurus allows users to write documentation content in Markdown
        format, making it easy to create and manage documentation.
      </>
    ),
  },
  {
    title: "Customizable Themes:",

    description: (
      <>
        It offers customizable themes and styling options, allowing users to
        tailor the look and feel of their documentation sites to match their
        project's branding.
      </>
    ),
  },
  {
    title: "Search Functionality:",

    description: (
      <>
        It includes built-in search functionality, making it easy for users to
        search for specific content within the documentation site.
      </>
    ),
  },
  {
    title: "Integration with GitHub Pages and Vercel:",

    description: (
      <>
        Docusaurus can be easily integrated with GitHub Pages or Vercel for
        hosting, making deployment straightforward.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div
      className={clsx("col col--4 item shadow--md")}
      style={{
        border: "1px solid var(--ifm-color-primary-darkest)",
        padding: "1rem",
        borderRadius: "5px",
      }}
    >
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
        <h2 style={{ textAlign: "center", marginBottom: "4rem" }}>
          Key features of Docusaurus include:
        </h2>
        <div
          className="row"
          style={{
            gap: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
