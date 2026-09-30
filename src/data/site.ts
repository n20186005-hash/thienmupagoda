// Tập hợp sự thật trung lập ngôn ngữ về Chùa Thiên Mụ.
// Mọi trang (vi/en) đều đọc từ đây — không hardcode tọa độ, địa chỉ, đánh giá rải rác.

export const GA_ID = 'G-HXM22WWPKP';

export const ATTRACTION = {
  name: 'Chùa Thiên Mụ',
  fullName: 'Thiên Mụ Pagoda',
  shortName: 'Thien Mu Pagoda',
  altNames: ['Thiên Mụ Temple', 'Linh Mụ Temple', 'Chùa Thiên Mụ'],
  city: 'Huế',
  region: 'Thừa Thiên Huế',
  country: 'Vietnam',
  countryCode: 'VN',
  postal: '532761',
  street: 'Kim Long',
  lat: 16.4536,
  lng: 107.5446,
  plusCode: 'FG3V+7W Kim Long',
  mapsUrl: 'https://maps.app.goo.gl/NY9gnNKVGTRhtfZF8',
  mapsEmbed:
    'https://www.google.com/maps?q=Ch%C3%B9a%20Thi%C3%AAn%20M%E1%BB%A5%2C%20Hu%E1%BA%BF%2C%20Vi%E1%BB%87t%20Nam&hl=vi&z=15&output=embed',
  govtUrl: 'https://vietnam.travel/',
  nearby1: 'Imperial City of Huế',
  nearby2: 'Perfume River',
  // Số đánh giá đồng bộ từ Google Maps (tháng 9/2026). Chỉ hiển thị, không đưa vào JSON-LD.
  rating: { value: '4.6', count: '20248' }
} as const;

export const HERO_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/6/65/Hue_Thien_Mu-Pagoda.JPG';
