import banner from '../../assets/images/partner-banner.png';
import { Banner, Section } from './styles';

const PartnerBanners = () => (
  <Section aria-label="Parceiros">
    {[1, 2].map((item) => (
      <Banner key={item} href="#produtos" aria-label="Parceiros - Confira">
        <img src={banner} alt="Parceiros. Lorem ipsum dolor sit amet, consectetur. Confira" width={634} height={350} loading="lazy" />
      </Banner>
    ))}
  </Section>
);

export default PartnerBanners;
