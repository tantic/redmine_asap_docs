import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'New UX/UI',
    Svg: require('@site/static/img/undraw_design_sprint_re_tke3.svg').default,
    description: (
      <>
        Based on new libraries like Hotwire and tailwindCSS
      </>
    ),
  },
  {
    title: 'New features',
    Svg: require('@site/static/img/feature.svg').default,
    description: (
      <>
        Many little improvments
      </>
    ),
  },
  {
    title: 'Documentation',
    Svg: require('@site/static/img/doc.svg').default,
    description: (
      <>
        Knowledge base to help users, admins and developers
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
