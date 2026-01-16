import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='section-padding bg-white'>
      <div className='container-custom grid md:grid-cols-2 gap-12 items-center'>
        <div className='relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg'>
          <Image
            src='/images/about.jpg'
            alt='Gudang Pusat Sembako'
            fill
            className='object-cover'
          />
        </div>
        <div className='space-y-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-text-main'>
            Pusat Sembako <br />
            <span className='text-primary'>
              Pusat Toko Sembako Murah & Terpercaya
            </span>
          </h2>
          <div className='prose text-text-muted'>
            <p>
              Pusat Sembako merupakan grosir dan distributor sembako murah yang
              menyediakan berbagai kebutuhan pokok berkualitas dengan harga
              terjangkau. Kami menghadirkan produk sembako lengkap seperti
              minyak goreng, gula, beras, dan Minyak Kita dengan stok yang
              selalu siap
            </p>
            <br />
            <p>
              Dengan komitmen pada pelayanan yang cepat, jujur, dan terpercaya,
              Sahabat Grosir menjalin kerja sama langsung dengan produsen dan
              distributor resmi sehingga setiap produk yang kami kirimkan
              terjamin mutu dan keasliannya.
            </p>
          </div>

          <ul className='space-y-3'>
            {[
              'Harga Grosir Kompetitif',
              'Stok Selalu Ready',
              'Produk Berkualitas Terjamin',
            ].map((item, i) => (
              <li
                key={i}
                className='flex items-center gap-3 font-semibold text-text-main'>
                <CheckCircle className='text-primary w-6 h-6' />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
