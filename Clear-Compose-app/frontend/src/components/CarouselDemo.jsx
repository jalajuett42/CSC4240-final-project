import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const CarouselDemo = ({ startOnboarding, theme }) => {
 

  return (
    <div className='w-full flex justify-center mt-4 pr-8 pb-10'>
      <Swiper
        style={{
          '--swiper-pagination-color': '#fff',
          '--swiper-navigation-color': '#fff'
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className='h-[150px] min-w-full max-w-screen-sm overflow-hidden rounded-3xl'>
        <SwiperSlide>
          <div
            className={`flex justify-center items-center h-full p-8 rounded-3xl ${
              theme === 'light' ? 'bg-blue-300' : 'bg-blue-400/85'
            }`}>
            <div className='cursor-pointer w-[90%] h-full'>
              <div
                onClick={startOnboarding}
                className='text-center cursor-pointer'>
                <h2 className='text-2xl font-bold mb-1 text-black'>
                  carouselHelpTitle
                </h2>
                <p className='text-gray-900 text-xl'>
                  carouselHelpDescription
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`flex justify-center items-center h-full p-8 rounded-3xl ${
              theme === 'light' ? 'bg-red-300' : 'bg-red-400/85'
            }`}>
            <div className='cursor-pointer w-[90%] h-full'>
              <div
                className='text-center cursor-pointer'
                onClick={() => {
                  const confirmDownload = window.confirm(
                    'carouselDownloadConfirmation'
                  )
                  if (confirmDownload) {
                    const link = document.createElement('a')
                    link.href = '/AddMaterialTemplate.xlsx'
                    link.download = 'AddMaterialTemplate.xlsx'
                    link.click()
                  }
                }}>
                <h2 className='text-2xl font-bold mb-1 text-black'>
                  carouselTemplateTitle
                </h2>
                <p className='text-gray-950 text-xl'>
                  carouselTemplateDescription
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`flex justify-center items-center h-full p-8 rounded-3xl  ${
              theme === 'light' ? 'bg-green-300' : 'bg-green-400/85'
            }`}>
            <div className='cursor-pointer w-[90%] h-full'>
              <div className='text-center'>
                <h2 className='text-2xl font-bold mb-1 text-black'>
                  carouselInfoTitle
                </h2>
                <p className='text-gray-900 text-xl'>
                  carouselInfoDescription'
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CarouselDemo