import Image from 'next/image'

const HomeBackground = () => (
  <div>
    <div className="bgWrap home-background" id="bgWrap">
      <Image
        alt="Background Image"
        src="/images/black-orchid.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
)

export default HomeBackground