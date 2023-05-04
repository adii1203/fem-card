import image from './images/image-product-mobile.jpg'
import image_2 from './images/image-product-desktop.jpg'
import cartIcon from './images/icon-cart.svg'

function App() {
  return (
    <div className="main bg-secondry h-screen p-4 sm:grid sm:place-content-center">
      <div className="wrapper rounded-xl overflow-hidden bg-bg_primary sm:grid-cols-2 sm:grid max-w-[50rem] sm:my-auto sm:mx-auto md:w-[40rem]">
        <div className="image-div ">
          <img src={image} alt="" className='sm:hidden'/>
          <img src={image_2} alt="" className='hidden sm:block h-full object-cover'/>
        </div>
        <div className="content-div p-6">
            <p className='font-Montserrat text-fontLight tracking-[4px] text-sm font-[500]'>
              PERFUME
            </p>
            <h1 className='mt-4 font-Fraunces text-fontDark text-4xl'>
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className='pr-7 mt-4 text-fontLight font-Montserrat text-[1rem]'>
              A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className='mt-5 flex items-center gap-4'>
              <p className='font-Fraunces text-primary text-3xl'>
                $149.99
              </p>
              <p className='font-Montserrat text-fontLight'>
                $169.99
              </p>
        </div>
          <button className=' w-full flex items-center justify-center gap-3 font-Montserrat text-bg_primary bg-primary p-4 mt-4 sm:mt-8 rounded-md hover:bg-hoverColor'>
            <img src={cartIcon} alt="" />
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
