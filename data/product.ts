export interface ProductItem {
  name: string;
  price: string;
}

export interface ProductGroup {
  groupName: string;
  items: ProductItem[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  priceList: ProductGroup[];
}

export const products: Product[] = [
{
    id: "beras-premium",
    name: "Beras Kemasan",
    category: "Beras",
    description: "Kami menyediakan beras kualitas premium, medium, pulen, dan wangi",
    image: "/images/products/beras.png",
    rating: 5,
priceList: [
      {
        groupName: "Merek Beras (50KG)",
        items: [
          { name: "Beras Gucimas Solo 50 Kg", price: "Rp 488.750" },
          { name: "Beras IR Cap Jago Pelung 50 Kg", price: "Rp 500.000" },
          { name: "Beras Karya Muda (KM) 50 Kg", price: "Rp 505.000" },
          { name: "Beras Cap Topi Koki 50 Kg", price: "Rp 540.000" },
          { name: "Beras Setra Ramos BMW Cianjur 50 Kg", price: "Rp 550.000" },
          { name: "Beras Cap Petruk 50 Kg", price: "Rp 565.000" },
          { name: "Beras Super Cap Ahmad 50 Kg", price: "Rp 570.000 – 625.000" },
          { name: "Beras Slyp Oyster 50 Kg", price: "Rp 607.500" },
          { name: "Beras Cap Walet 50 Kg", price: "Rp 430.000" },
          { name: "Beras Labuan Bajo 50 Kg", price: "Rp 450.000" },
          { name: "Beras Pandan Wangi 50 Kg", price: "Rp 475.000" },
          { name: "Beras LS 50 Kg", price: "Rp 510.000" },
          { name: "Beras Pera IR Merk Mercy 50 Kg", price: "Rp 590.000" },
          { name: "Beras IR 42 Super 50 Kg", price: "Rp 600.000" },
          { name: "Beras IR 42 KM 50 Kg", price: "Rp 575.000" },
          { name: "Beras Bola Mas IR 64 50 Kg", price: "Rp 450.000" },
          { name: "Beras RW IR 64 50 Kg", price: "Rp 540.000" },
          { name: "Beras LA IR 64 50 Kg", price: "Rp 520.000" },
          { name: "Beras GB IR 64 50 Kg", price: "Rp 542.000" },
          { name: "Beras Suling Mas 50 Kg", price: "Rp 786.000" },
          { name: "Beras TU IR 64 50 Kg", price: "Rp 530.000" },
          { name: "Beras LL IR 64 50 Kg", price: "Rp 495.000" },
          { name: "Beras SG IR 64 50 Kg", price: "Rp 505.000" },
          { name: "Beras SA IR 64 50 Kg", price: "Rp 515.000" },
          { name: "Beras ADT IR 64 50 Kg", price: "Rp 480.000" },
          { name: "Beras SA IR 64 50 Kg", price: "Rp 450.000" },
          { name: "Beras SJ IR 64 50 Kg", price: "Rp 450.000" },
          { name: "Beras FM IR 64 50 Kg", price: "Rp 440.000" },
          { name: "Beras SML IR 64 50 Kg", price: "Rp 445.000" },
          { name: "Beras HM IR 64 50 Kg", price: "Rp 435.000" },
          { name: "Beras Wayang IR 64 50 Kg", price: "Rp 420.000" },
          { name: "Beras Merpati 50 Kg", price: "Rp 420.000" },
          { name: "Beras KND IR 64 50 Kg", price: "Rp 400.000" }
        ]
      },
      {
        groupName: "Merk Beras (25 KG)",
        items: [
          { name: "Beras Cap Duren 25 Kg", price: "Rp 195.000" },
          { name: "Beras Cap Piala 25 Kg", price: "Rp 190.000" },
          { name: "Beras Cap Ketupat 25 Kg", price: "Rp 170.000" },
          { name: "Beras Cap Beras Mu 25 Kg", price: "Rp 200.000" },
          { name: "Beras Cap Rojo Lele 25 Kg", price: "Rp 180.000" },
          { name: "Beras Cap Maskot 25 Kg", price: "Rp 170.000" },
          { name: "Beras Bramo Cap Raja Udang 25 Kg", price: "Rp 200.000" },
          { name: "Beras Cap Mangga 25 Kg", price: "Rp 173.000" },
          { name: "Beras Cap Beruang Merah 25 Kg", price: "Rp 207.000" },
          { name: "Beras Cap Lahap 25 Kg", price: "Rp 192.000" },
          { name: "Beras Cap Kelapa 25 Kg", price: "Rp 174.000" },
          { name: "Beras Cap Nuri 25 Kg", price: "Rp 172.000" },
          { name: "Beras Cap Kereta Romawi 25 Kg", price: "Rp 185.000" },
          { name: "Beras Cap Pelangi 25 Kg", price: "Rp 200.000" }
        ]
      },
      {
        groupName: "Merk Beras (5KG)",
        items: [
          { name: "Beras Cap Bunga 5 KG Medium", price: "Rp. 47.300" },
          { name: "Beras Wanemo 5 KG", price: "Rp. 58.000" },
          { name: "Beras Kepala Super Rojolele 5 KG", price: "Rp. 50.000" },
          { name: "Beras Sintanola 5 KG", price: "Rp. 57.000" },
          { name: "Beras Sania 5 KG", price: "Rp. 58.200" },
          { name: "Beras Asli Solo 5 KG Premium Super Kepala", price: "Rp. 60.000" },
          { name: "Beras Lumbung Padi Indonesia 5 KG", price: "Rp. 49.000" },
          { name: "Beras Jagung Cap Kelapa Kualitas Super 5 KG", price: "Rp. 37.000" },
          { name: "Beras Ramos Kemasan Cap Kembang 5 KG", price: "Rp. 55.000" },
          { name: "Beras Kepala Super Cap Durian Petruk 5 KG", price: "Rp. 60.000" },
          { name: "Beras Piala Dunia 5 KG", price: "Rp. 55.000" },
          { name: "Beras Pandan Wangi Cap Tiga Mangga 5 KG", price: "Rp. 60.000" },
          { name: "Beras Raja Udang 5 KG", price: "Rp. 52.000" },
          { name: "Beras Cap Beruang Kuning 5 KG", price: "Rp. 48.000" },
          { name: "Beras Lahap 5 KG", price: "Rp. 55.000" },
          { name: "Beras Bengawan Super Cap Kelapa Muda 5 KG", price: "Rp. 50.000" },
          { name: "Beras Burung Nuri 5 KG", price: "Rp. 54.000" }
        ]
      }
    ]
  },
  {
    id: "minyak-goreng",
    name: "Minyak Goreng",
    category: "Minyak",
    description: "Minyak goreng berbagai merek terpercaya tersedia lengkap dengan harga grosir",
    image: "/images/products/minyak.png",
    rating: 5,
priceList: [
      {
        groupName: "(Minyak Bimoli)",
        items: [
          { name: "Harga 1 Karton Bimoli Minyak Goreng Botol ( Isi-12 Kemasan Botol 1 Liter )", price: "Rp. 140.500" },
          { name: "Harga 1 Karton Bimoli Minyak Goreng Klasik ( Isi-6 Kemasan Pouch 2 Liter )", price: "Rp. 150.777" },
          { name: "Harga 1 Karton Bimoli N. Kolesterol ( Isi-6 Kemasan 2 Liter )", price: "Rp. 150.000" },
          { name: "Harga 1 Karton Bimoli Special Refill ( Isi-6 Kemasan 2 Liter )", price: "Rp. 155.200" },
          { name: "Harga 1 Karton Bimoli Spesial Refill ( Isi-12 Kemasan 1 Liter )", price: "Rp. 150.500" },
          { name: "Harga 1 Karton Minyak Goreng Bimoli Klasik Refill ( Isi-12 Kemasan 1 Liter )", price: "Rp. 150.100" },
          { name: "Harga 1karton Minyak Goreng Bimoli (Isi 4 Kemasan 5 Liter)", price: "Rp. 220.000" },
          { name: "Harga Minyak Goreng Bimoli (Kemasan Jerigen.18 Liter)", price: "Rp. 230.000" }
        ]
      },
      {
        groupName: "(Minyak Tropical)",
        items: [
          { name: "Harga 1 Karton Tropical Non Kolesterol ( Isi-12 Kemasan 1 Liter )", price: "Rp. 145.500" },
          { name: "Harga 1 Karton Tropical Non Kolesterol ( Isi-6 Kemasan 2 Liter )", price: "Rp. 144.500" }
        ]
      },
      {
        groupName: "(Minyak Sunco)",
        items: [
          { name: "Harga 1 Karton Minyak Goreng Sunco ( Isi-12 Kemasan Pouch 1 Liter )", price: "Rp. 135.500" },
          { name: "Harga 1 Karton Minyak Goreng Sunco ( Isi-6 Kemasan Pouch 2 Liter )", price: "Rp. 133.800" },
          { name: "Harga 1 Karton Harga 1 Karton Minyak Goreng Sunco Refill ( Isi-12 Kemasan 1 Liter )", price: "Rp. 130.500" },
          { name: "Harga 1 Karton Minyak Goreng Sunco Refill ( Isi-6 Kemasan 2 Liter )", price: "Rp.127.800" }
        ]
      },
      {
        groupName: "(Minyak Kunci Mas)",
        items: [
          { name: "Harga 1 Karton Minyak Goreng Kunci Mas ( Isi-12 Kemasan 1 Liter )", price: "Rp. 130.800" },
          { name: "Harga 1 Karton Minyak Goreng Kunci Mas Refill ( Isi-6 Kemasan 2 Liter Pouch )", price: "Rp. 130.500" }
        ]
      },
      {
        groupName: "(Minyak Avena)",
        items: [
          { name: "Harga 1 Karton Avena Minyak Goreng ( Is-12 Kemasan 1 Liter Pouch )", price: "Rp. 130.700" },
          { name: "Harga 1 Karton Avena Minyak Goreng ( Isi-6 Kemasan 2 Liter Pouch )", price: "Rp. 129.700" },
          { name: "Harga 1 Karton Avena Minyak Goreng ( Isi-4 Kemasan Jerigen 5 Lter )", price: "Rp. 190.500" }
        ]
      },
      {
        groupName: "(Minyak Filma)",
        items: [
          { name: "Harga 1 Karton Filma Minyak Goreng Non Kolesterol Refill ( Isi-12 Kemasan 1 Liter )", price: "Rp. 130.200" },
          { name: "Harga 1 Karton Filma Refill ( Isi-6 Kemasan 2 Liter Kemasan Isi Ulang )", price: "Rp. 130.000" },
          { name: "Harga Minyak Goreng Curah Biasa 1 Kg", price: "Rp. 15.000" }
        ]
      },
      {
        groupName: "(Minyak Sania)",
        items: [
          { name: "Harga 1 Karton Sania Minyak Goreng ( Isi-12 Kemasan 1 Liter Pouch )", price: "Rp.132.500" },
          { name: "Harga 1 Karton Sania Minyak Goreng ( Isi-6 Kemasan 2 Liter Pouch )", price: "Rp. 127.800" },
          { name: "Harga 1 Karton Sania Minyak Goreng ( Isi-4 Kemasan 5 Lter )", price: "Rp. 220.500" },
          { name: "Harga 1 Karton Sania Minyak Goreng Non Kolestrol ( Isi-6 Kemasan 2 Liter )", price: "Rp. 132.500" }
        ]
      },
      {
        groupName: "(Minyak Fortune)",
        items: [
          { name: "Harga 1 Karton Fortune Minyak Goreng Refill Pouch ( Isi-12 Kemasan 1 Liter )", price: "Rp. 132.800" },
          { name: "Harga 1 Karton Fortune Minyak Goreng Refill Pouch ( Isi-6 Kemasan 2 Liter )", price: "Rp. 130.200" },
          { name: "Harga 1 Karton Fortune Minyak Goreng Djerigen ( Isi-4 Kemasan 5 Liter )", price: "Rp. 171.000" }
        ]
      },
      {
        groupName: "(Minyak Hermart)",
        items: [
          { name: "Harga 1 Karton Hemart & Higienis (12) Kemasan 1 Liter", price: "Rp. 125.000" },
          { name: "Harga Hemart Minyak Goreng 2000 Ml", price: "Rp. 30.000" }
        ]
      },
      {
        groupName: "(Minyak Madina)",
        items: [
          { name: "Harga 1 Karton Minyak Goreng Madina ( Isi-12 Kemasan 1 Liter )", price: "Rp. 130.000" },
          { name: "Harga 1 Karton Minyak Goreng Madina ( Isi-6 Kemasan 2 Liter )", price: "Rp.127.500" },
          { name: "Harga 1 Karton Minyaoreng Madina ( Isi- 4 Kemasan 5 Liter )", price: "Rp. 220.200" }
        ]
      },
      {
        groupName: "(MINYAK KITA)",
        items: [
          { name: "Untuk 1 Liter", price: "Harga 130/Dus Isi 12" },
          { name: "Untuk 2 Liter", price: "Harga 132/Dus Isi 6" }
        ]
      }
    ]
  },
  {
    id: "gula-kemasan",
    name: "Gula Pasir Kemasan",
    category: "Gula",
    description: "Kami menyediakan gula pasir berkualitas dalam berbagai ukuran kemasan",
    image: "/images/products/gula.png",
    rating: 5,
priceList: [
      {
        groupName: "ROSE BRAND",
        items: [
          { name: "1 Karton Isi 20 Pack.", price: "Harga Rp. 220.000" }
        ]
      },
      {
        groupName: "GULAKU PREMIUM HIJAU/KUNING",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 267.000" }
        ]
      },
      {
        groupName: "SANIA",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 220.000" }
        ]
      },
      {
        groupName: "RAJA GULA",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "GULARE",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "MATAHARI MERAH",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "MK",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 235.000" }
        ]
      },
      {
        groupName: "MANIS KITA",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "GMP GUNUNG MADU",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 235.000" }
        ]
      },
      {
        groupName: "FS PREMIUM Gula Kristal",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "SODAQO Gula Pasir Lokal",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "GULA PRAI Gula Pasir Kasar",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "SUS Gula Pasir Lokal",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "GULA PASIR CURAH Gula Pasir Lokal",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "PSM Gula Premium",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 250.000" }
        ]
      },
      {
        groupName: "SUGARO Gula Pasir",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "GULASIR Gula Pasir Tebu",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      },
      {
        groupName: "VALUE PLUS Gula Pasir",
        items: [
          { name: "1 Karton Isi 24 Pack.", price: "Harga Rp. 225.000" }
        ]
      }
    ]
  },
 {
    id: 'minyak-kita',
    name: "Minyak Kita",
    category: "Mie",
    description: "Kami menjual Minyak Kita dengan harga grosir, cocok untuk reseller dan toko",
    image: "/images/products/minyak-kita.png",
    rating: 5,
priceList: [
      {
        groupName: "Minyak Kita",
      items: [
    {
      "name": "PRODUK PT BINA KARYA PRIMA Untuk 1 liter",
      "price": "Rp150.800/dus isi 12pcs"
    },
    {
      "name": "PRODUK PT BINA KARYA PRIMA Untuk 2 liter",
      "price": "Rp152.800/dus isi 6pcs"
    },
    {
      "name": "PRODUK SINARMAS Untuk 1 liter",
      "price": "Rp 155.800/dus isi 12pcs"
    },
    {
      "name": "PRODUK SINARMAS Untuk 2 liter",
      "price": "Rp 160.800/dus isi 6pcs"
    },
    {
      "name": "PRODUK SANTOSO ABADI Untuk 1 liter",
      "price": "Rp 145.800/dus isi 12pcs"
    },
    {
      "name": "PRODUK SANTOSO ABADI Untuk 2 liter",
      "price": "Rp 150.800/dus isi 6pcs"
    },
    {
      "name": "PRODUK MAHESI AGRI KARYA Untuk 1 liter",
      "price": "Rp 149.800/dus isi 12pcs"
    },
    {
      "name": "PRODUK MAHESI AGRI KARYA Untuk 2 liter",
      "price": "Rp 157.800/dus isi 6pcs"
    },
    {
      "name": "PRODUK WINGS FOOD Untuk 1 liter",
      "price": "Rp 165.800/dus isi 12pcs"
    },
    {
      "name": "PRODUK WINGS FOOD Untuk 2 liter",
      "price": "Rp 170.800/dus isi 6pcs"
    },
    {
      "name": "PRODUK TUNASAGRO INDOLESTARI Untuk 1 liter",
      "price": "Rp 138.800/dus isi 12pcs"
    },
    {
      "name": "PRODUK TUNASAGRO INDOLESTARI Untuk 2 liter",
      "price": "Rp 140.800/dus isi 6pcs"
    },
    {
      "name": "PRODUK PT RESTO PANGAN UTAMA Untuk 1 liter",
      "price": "Rp 147.800/dus isi 12pcs"
    },
    {
      "name": "PRODUK PT RESTO PANGAN UTAMA Untuk 2 liter",
      "price": "Rp 151.800/dus isi 6pcs"
    }
  ]
      }
    ]
  },

];