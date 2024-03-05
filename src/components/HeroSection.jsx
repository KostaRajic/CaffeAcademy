import coffeeImage from '../assets/Image/Hero Section Images/coffee-image.png'

export const HeroSection = () => {

    return (
        <section className='hero-section'>
            <img src={coffeeImage} alt='Coffee Image'/>
            <p>Zgrabi kafu. Izoštri fokus.</p>
        </section>
    )
}