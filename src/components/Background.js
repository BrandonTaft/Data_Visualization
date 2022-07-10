import Image from 'next/image'

const Background = () => (
  <div>
    <div className="bgWrap" id="bgWrap">
      <Image
        alt="Background Image"
        src="/images/background2.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
)

export default Background