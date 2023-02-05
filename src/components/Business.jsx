import { features } from "../constants";
import styles, {layout} from '../style';
import Button from './Button';

const FeatureCard = ({icon,title,content,idx}) => {
  return(
    <div className={`flex flex-row p-6 rounded-[20px] ${idx !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} className="w-[50%] h-[50%] object-contain"/>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>The next technological revolution<br className="sm:block hidden"/></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We welcome upcoming early-stage projects within the Web3 sphere to aid with growth, scaling, networking and funding. By targeting areas we are passionate about, we combine strong fundamental analysis with personal engagement to provide the resources necessary for success.</p>

        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,idx) => (
          <FeatureCard key={feature.id} {...feature} idx={idx}/>
        ))}
      </div>
    </section>
  )
}

export default Business;