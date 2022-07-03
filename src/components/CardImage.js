import Image from 'next/image'

const CardImage = () => (
  
      <Image
        alt="Picture of tubes"
        src="/images/tubes.png"
        layout="responsive" 
        height={140}
        width={345}
        quality={100}
      />
  
)
export default CardImage