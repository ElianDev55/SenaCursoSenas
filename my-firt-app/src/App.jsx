import styles from './style';
import Navbar from '../src/components/Navbar.jsx';
import Hero from '../src/components/Hero.jsx';
import Search from '../src/components/Search.jsx'


const App = () => (

    <div className='bg-white w-full overflow-hidden'>

      <div className={'${styles.paddingX} ${styles.flexCenter}'}>

        <div className={'${styles.boxWidth}'}>
          <Navbar/>
        </div>
      </div>

      <div className={'border-black ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <Hero/>
        </div>
      </div>

      <div className={'border-black ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <Hero/>
        </div>
      </div>

      

    </div>

    );

export default App
