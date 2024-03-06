import facebook from '../assets/Image/Contact Info Images/facebook.png'
import instagram from '../assets/Image/Contact Info Images/instagram.png'
import twitterX from '../assets/Image/Contact Info Images/twiterX.png'
import tikTok from '../assets/Image/Contact Info Images/tik-tok.png'

export const ContactInfo = () => {

   return (
      <section className="contact-info">
         <p>Pratite nas na društvenim mrežama</p>
         <div className='contact-icons'>
            <a href="#"><img src={facebook} alt="Facebook" style={{ paddingTop: '-15px' }} /></a>
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={twitterX} alt="TwitterX" /></a>
            <a href="#"><img src={tikTok} alt="Tik Tok" /></a>
         </div>
         <p>Radno vreme <br />Pon/Ned 08:00 - 19:45</p>
      </section>
   )
}