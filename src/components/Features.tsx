import Image from 'next/image'

interface Feature {
  title: string
  icon: string
  variant?: 'orange'
  description: string
}

const FEATURES: Feature[] = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
]

const FeatureItem = ({ icon, title, variant, description }: Feature) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className={`rounded-full p-4 lg:p-7 ${variant ? `bg-orange-50` : 'bg-green-50'}`}>
        <Image src={icon} alt='Map' width={28} height={28} />
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h2>
      <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  )
}

const Features = () => {
  return (
    <section
      className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'
      id='services'
    >
      <div className='max-container padding-container relative w-full flex justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image src='/phone.png' alt='Phone' width={440} height={1000} className='feature-phone' />
        </div>
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image
              src='/camp.svg'
              alt='Camp'
              width={50}
              height={50}
              className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
            />
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20'>
            {FEATURES.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features
