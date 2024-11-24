import styles from './Homepage.module.css';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Form from '../components/Form/Form';
import Carousel from '../components/Carousel/Carousel';
import TextSection from '../components/TextSection/TextSection';
import TextData from '../components/TextSection/mockData.json';

function MainContent() {
  return (
    <div>
      <div>
        <HeroBanner />
      </div>
      <div className={styles.section}>
        {TextData?.map((data, index) => (
          <TextSection
            key={index}
            id={data.id}
            title={data.title}
            imageSrc={data.imageSrc}
            text={data.text}
            imageFirst={index % 2 === 0}
            url={data.buttonLinkUrl}
            linkText={data.buttonDescription}
          />
        ))}
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>What did others think</h2>
        <Carousel />
      </div>
      <div>
        <h2 className={styles.title}>Tell us what you think</h2>
        <Form />
      </div>
    </div>
  );
}

export default MainContent;
