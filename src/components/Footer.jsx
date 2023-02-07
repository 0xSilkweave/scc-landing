import styles from "../style";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-norman text-center font-[18px] leading-[27px] text-white">
          2021-2023 Sad Cat Capital. All rights reserved. <a className="hover_text_scc" href="mailto:hello@sadcat.capital">hello@sadcat.capital</a>
        </p>

        <div className="flex flex-row md:mt-0 mt-6 ">
          {socialMedia.map((social, idx) => (
            <a href={social.link} key={social.id}>
              <img
                src={social.icon}
                className={`w-[21px] h-[21px] object-contain cursor-pointer transition ease-in-out duration-300 hover:ease-in hover:scale-[2] ${
                    idx !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
