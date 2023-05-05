 import styles from "./homePage.module.css"
 import dog5 from "../../assets/images/dog5.png"
 import bestseller from "../../assets/images/bestseller.png"
 import { AiFillStar } from "react-icons/ai";
 import { AiOutlineStar } from "react-icons/ai";
 import dog6 from "../../assets/images/dog6.png"
 import dog7 from "../../assets/images/dog7.png"
 import dog8 from "../../assets/images/dog8.png"



const SeeAll = () => {
  return (
    <div className={styles.align4}>
      
      <div className= {styles.dog6}>
  <div className= {styles.dog5} style={{backgroundImage: `url(${dog5})`}}>
   <img src={ bestseller} alt='dog'></img>
  </div>
  <div className={styles.dog7}>
   <p className={styles.besth} style={{fontWeight: '800', marginBottom: '10px'}}>English Springer Spaniel</p>
   <p>Silky and furry puppy with a</p>
   <p style={{marginBottom:'10px'}}>playful and curious demeanor</p>
   <div style={{display: 'flex', marginBottom: '10px'}}>
    <p className={styles.seeallp}>4.1</p>
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiOutlineStar style={{color: 'yellow'}} />
    <p className={styles.seeallp}>(5.000)</p>
   </div>
   <p style={{fontSize: '12px', fontWeight: '700'}}>N72,500</p>
   </div>
  </div>

  <div className= {styles.dog6}>
  <div className= {styles.dog5} style={{backgroundImage: `url(${dog6})`}}>
  </div>
  <div className={styles.dog7}>
   <p className={styles.besth} style={{fontWeight: '800', marginBottom: '10px'}}>English Springer Spaniel</p>
   <p>Silky and furry puppy with a</p>
   <p style={{marginBottom:'10px'}}>playful and curious demeanor</p>
   <div style={{display: 'flex', marginBottom: '10px'}}>
    <p className={styles.seeallp}>4.1</p>
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiOutlineStar style={{color: 'yellow'}} />
    <p className={styles.seeallp}>(5.000)</p>
   </div>
   <p style={{fontSize: '12px', fontWeight: '700'}}>N72,500</p>
   </div>
  </div>

  <div className= {styles.dog6}>
  <div className= {styles.dog5} style={{backgroundImage: `url(${dog7})`}}>
  </div>
  <div className={styles.dog7}>
   <p className={styles.besth} style={{fontWeight: '800', marginBottom: '10px'}}>English Springer Spaniel</p>
   <p>Silky and furry puppy with a</p>
   <p style={{marginBottom:'10px'}}>playful and curious demeanor</p>
   <div style={{display: 'flex', marginBottom: '10px'}}>
    <p className={styles.seeallp}>4.1</p>
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiOutlineStar style={{color: 'yellow'}} />
    <p className={styles.seeallp}>(5.000)</p>
   </div>
   <p style={{fontSize: '12px', fontWeight: '700'}}>N72,500</p>
   </div>
  </div>

  <div className= {styles.dog6}>
  <div className= {styles.dog5} style={{backgroundImage: `url(${dog8})`}}>
   <img src={ bestseller} alt='dog'></img>
  </div>
  <div className={styles.dog7}>
   <p className={styles.besth} style={{fontWeight: '800', marginBottom: '10px'}}>English Springer Spaniel</p>
   <p>Silky and furry puppy with a</p>
   <p style={{marginBottom:'10px'}}>playful and curious demeanor</p>
   <div style={{display: 'flex', marginBottom: '10px'}}>
    <p className={styles.seeallp}>4.1</p>
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiFillStar style={{color: 'yellow'}} />
    <AiOutlineStar style={{color: 'yellow'}} />
    <p className={styles.seeallp}>(5.000)</p>
   </div>
   <p style={{fontSize: '12px', fontWeight: '700'}}>N72,500</p>
   </div>
  </div>
  </div>
  )
};

export default SeeAll;
