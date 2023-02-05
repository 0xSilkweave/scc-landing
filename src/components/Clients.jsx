import {clients} from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[100px] min-w-[100px]`}>
            <img src={client.logo} className="sm:w-[100px] w-[100px] object-contain cursor-pointer hover:animate-pulse"/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients;