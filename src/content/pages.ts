import type { Locale } from '../i18n';
import { extraPageDocs } from './pages-extra';

export type PageSection =
  | { type: 'lead'; body: string }
  | { type: 'prose'; title?: string; html: string }
  | { type: 'cards'; kicker?: string; title?: string; items: { title: string; body: string }[] }
  | { type: 'info'; title?: string; rows: { label: string; value: string }[] }
  | { type: 'steps'; kicker?: string; title?: string; items: { title: string; body: string }[] }
  | { type: 'callout'; tone?: 'info' | 'warn'; title?: string; body: string }
  | { type: 'map'; note?: string };

export interface PageDoc {
  path: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  breadcrumb: string;
  hero: { kicker: string; title: string; sub: string };
  heroImage?: string;
  sections: PageSection[];
  faqs?: [string, string][];
  sources?: string[];
  updated?: string;
}

export const pageGroups = {
  top: ['entrance-fee', 'opening-hours', 'how-to-get-there', 'visitor-guide', 'phuoc-duyen-tower', 'history', 'parking', 'best-time-to-visit-hue', 'dress-code', 'photography-tips', 'facilities-restrooms', 'accessibility', 'maps-navigation', 'founder-nguyen-hoang', 'nguyen-dynasty', 'pagoda-architecture', 'the-old-car', 'the-bell', 'legend-of-thien-mu', 'religious-significance'],
  nearby: ['hue-imperial-city', 'tomb-of-tu-duc', 'tomb-of-khai-dinh', 'tomb-of-minh-mang', 'dong-ba-market', 'perfume-river'],
  itineraries: ['perfume-river-boat-trip', 'half-day-hue', 'hue-2-day-itinerary', 'sunset-itinerary', 'hue-day-trip-from-da-nang'],
  food: ['vegetarian-food-at-pagoda', 'hue-cuisine', 'coffee-by-perfume-river'],
  stay: ['where-to-stay-in-hue', 'best-hotels-near-pagoda', 'is-thien-mu-worth-visiting', 'hue-travel-guide']
} as const;

export const pageDocs: Record<Locale, Record<string, PageDoc>> = {
  vi: {
    'entrance-fee': {
      path: 'entrance-fee',
      metaTitle: 'Vé tham quan Chùa Thiên Mụ – Có mất vé không? | Huế',
      metaDescription: 'Chùa Thiên Mụ có thu vé không? Tư liệu du lịch phổ biến mô tả khuôn viên chùa vào cửa miễn phí. Các chi phí thuyền, gửi xe, hướng dẫn là dịch vụ riêng. Hãy xác nhận trước khi đi.',
      ogTitle: 'Vé tham quan Chùa Thiên Mụ – Có mất vé không?',
      ogDescription: 'Thông tin du lịch phổ biến thường mô tả khuôn viên chùa miễn phí, nhưng chưa xác minh được thông báo giá vé hiện hành của nhà chùa. Thuyền, gửi xe, hướng dẫn là dịch vụ riêng.',
      breadcrumb: 'Chùa Thiên Mụ → Vé tham quan',
      hero: { kicker: 'Cẩm nang tham quan · Huế', title: 'Vé tham quan Chùa Thiên Mụ', sub: 'Tư liệu du lịch phổ biến mô tả khuôn viên chùa vào cửa miễn phí, nhưng chưa xác minh được thông báo giá vé hiện hành của nhà chùa. Hãy tách biệt giá tour, thuyền, gửi xe với phí vào chùa.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ vẫn là nơi sinh hoạt Phật giáo. Thông tin du lịch phổ biến thường mô tả khuôn viên chùa vào cửa miễn phí, nhưng trang này chưa xác minh được một thông báo giá vé hiện hành, rõ ràng do nhà chùa phát hành. Hãy xác nhận từng dịch vụ riêng biệt trước khi đi.' },
        { type: 'info', title: 'Thông tin nhanh về chi phí', rows: [
          { label: 'Vào khuôn viên chùa', value: 'Thường miễn phí (theo thông tin du lịch phổ biến, chưa phải thông báo của nhà chùa)' },
          { label: 'Tour, thuyền, gửi xe', value: 'Dịch vụ riêng, không tính là phí vào chùa' },
          { label: 'Hướng dẫn viên', value: 'Dịch vụ riêng, hỏi nhà cung cấp' },
          { label: 'Quyên góp', value: 'Tùy tâm, thường có hòm công đức' }
        ] },
        { type: 'prose', title: 'Chùa Thiên Mụ có thu vé không?', html: 'Các nguồn du lịch phổ biến thường liệt kê việc tham quan chùa là miễn phí. Tuy nhiên, trang này <b>chưa xác minh</b> được một thông báo giá vé hiện hành, chính thức do nhà chùa phát hành. Do đó, hãy coi thông tin  miễn phí là tham khảo từ tư liệu du lịch, không phải xác nhận trực tiếp tại chùa.' },
        { type: 'cards', kicker: 'Các khoản riêng biệt', title: 'Chi phí cần tách biệt', items: [
          { title: 'Tour và thuyền', body: 'Giá tour hoặc thuyền trên sông Hương là dịch vụ của nhà cung cấp, không phải phí vào chùa. Hỏi giá, lịch trình và điều kiện trước.' },
          { title: 'Gửi xe', body: 'Chưa xác minh bãi xe, giá hoặc chỗ trống hiện hành. Hỏi đơn vị vận chuyển và đọc biển tại chỗ.' },
          { title: 'Hướng dẫn viên', body: 'Nếu dùng hướng dẫn, thỏa thuận giá và thời gian riêng; không xem là phí tham quan chùa.' },
          { title: 'Quyên góp', body: 'Việc công đức là tự nguyện. Không bắt buộc và không thay thế cho bất kỳ phí dịch vụ nào.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Chưa xác minh giá hiện hành', body: 'Không coi giá tour, thuyền hay gửi xe là phí vào chùa. Xác nhận từng dịch vụ và điều kiện tiếp cận riêng biệt với nhà cung cấp hoặc nhà chùa trước khi đi, nhất là vào ngày lễ hoặc khóa lễ.' },
        { type: 'map', note: 'Xác nhận điểm đến theo tên chùa trên bản đồ, không chỉ dựa vào một địa chỉ duy nhất.' }
      ],
      faqs: [
        ['Chùa Thiên Mụ có thu vé không?', 'Thông tin du lịch phổ biến thường mô tả khuôn viên chùa miễn phí, nhưng chưa xác minh được thông báo giá vé hiện hành của nhà chùa. Hãy xác nhận trực tiếp trước khi đi.'],
        ['Có cần đặt trước không?', 'Tham quan chùa thường không yêu cầu đặt trước. Các dịch vụ thuyền hoặc hướng dẫn riêng mới cần hỏi nhà cung cấp.'],
        ['Giá thuyền có bao gồm vào chùa không?', 'Không. Thuyền trên sông Hương là dịch vụ riêng của nhà cung cấp; không tính là phí vào chùa.'],
        ['Gửi xe có mất phí không?', 'Chưa xác minh giá gửi xe hiện hành. Hỏi đơn vị vận chuyển và đọc biển tại chỗ.'],
        ['Có nhận quyên góp không?', 'Có hòm công đức tùy tâm, nhưng việc này tự nguyện và không thay thế cho bất kỳ phí dịch vụ nào.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí, tháp và bối cảnh lịch sử</a>',
        '<a class="underline" href="https://vietnam.travel/de/plan-your-trip/recommended-trip/heritage-sites-vietnam/">Vietnam Tourism — sông Hương và năm khởi dựng</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số của khuôn viên</a>'
      ],
      updated: '2026-11-10'
    },
    'opening-hours': {
      path: 'opening-hours',
      metaTitle: 'Giờ mở cửa Chùa Thiên Mụ – Mấy giờ mở và đóng? | Huế',
      metaDescription: 'Chùa Thiên Mụ mở cửa mấy giờ? Google Maps hiển thị đóng cửa lúc 17:30 khi kiểm tra ngày 2026-11-10. Đây là ảnh chụp bên thứ ba, không phải lịch tuần do nhà chùa xác nhận. Hãy hỏi lại trước khi đi.',
      ogTitle: 'Giờ mở cửa Chùa Thiên Mụ – Mấy giờ mở và đóng?',
      ogDescription: 'Google Maps hiển thị đóng cửa lúc 17:30 khi kiểm tra ngày 2026-11-10. Đây chỉ là ảnh chụp thông tin bên thứ ba, không phải lịch hằng tuần được nhà chùa xác nhận.',
      breadcrumb: 'Chùa Thiên Mụ → Giờ mở cửa',
      hero: { kicker: 'Cẩm nang tham quan · Huế', title: 'Giờ mở cửa Chùa Thiên Mụ', sub: 'Google Maps hiển thị đóng cửa lúc 17:30 khi kiểm tra ngày 2026-11-10. Đây chỉ là ảnh chụp thông tin bên thứ ba, không phải lịch hằng tuần được nhà chùa xác nhận.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa là nơi sinh hoạt Phật giáo, nên giờ mở cửa có thể thay đổi theo nghi lễ, ngày lễ và bảo trì. Trang này không có lịch hằng tuần được nhà chùa xác nhận; hãy hỏi lại trước khi đi.' },
        { type: 'info', title: 'Ảnh chụp thông tin hiện có', rows: [
          { label: 'Maps ghi đóng cửa', value: '17:30 (ảnh chụp 2026-11-10)' },
          { label: 'Nguồn', value: 'Google Maps – bên thứ ba' },
          { label: 'Xác nhận', value: 'Chưa phải lịch do nhà chùa phát hành' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Không coi ảnh chụp là lịch chính thức', body: 'Ảnh chụp từ Maps chỉ phản ánh một thời điểm. Không dùng nó làm lịch đóng/mở cố định. Hỏi lại trước khi đi, nhất là vào ngày lễ, khóa lễ hoặc bảo trì.' },
        { type: 'prose', title: 'Cuối tuần và ngày lễ có mở không?', html: 'Chùa thường mở đón khách tham quan, nhưng <b>chưa xác minh</b> được lịch cố định cho cuối tuần hay ngày lễ. Vào ngày lễ Phật giáo hoặc khóa lễ, một phần không gian thờ tự có thể ưu tiên cho sinh hoạt tôn giáo; hãy tôn trọng và xác nhận trước.' },
        { type: 'cards', kicker: 'Thời điểm nên đến', title: 'Gợi ý khung giờ', items: [
          { title: 'Sáng sớm', body: 'Thường mát hơn, ít đông và ánh sáng tốt cho chụp ảnh kiến trúc.' },
          { title: 'Chiều', body: 'Có thể kết hợp hoàng hôn trên sông Hương, nhưng chú ý giờ đóng cửa theo ảnh chụp Maps.' },
          { title: 'Ngày mưa', body: 'Tránh bậc thang trơn; kiểm tra dự báo trước khi đi.' }
        ] },
        { type: 'map', note: 'Xác nhận giờ thực tế qua nhà chùa hoặc nhà cung cấp vận chuyển khi đến gần.' }
      ],
      faqs: [
        ['Mấy giờ Chùa Thiên Mụ mở cửa?', 'Google Maps hiển thị đóng cửa lúc 17:30 khi kiểm tra ngày 2026-11-10. Đây là ảnh chụp bên thứ ba, không phải lịch tuần do nhà chùa xác nhận. Hãy hỏi lại trước khi đi.'],
        ['Mấy giờ đóng cửa?', 'Ảnh chụp Maps ghi 17:30 (2026-11-10). Chưa xác minh được lịch đóng cửa chính thức; xác nhận lại khi đến gần.'],
        ['Cuối tuần có mở không?', 'Thường có đón khách, nhưng chưa xác minh lịch cố định. Vào ngày lễ hoặc khóa lễ, ưu tiên không gian thờ tự.'],
        ['Có thể tham quan trong lễ Phật giáo không?', 'Có thể, nhưng một phần không gian dành cho nghi lễ. Tôn trọng sinh hoạt tôn giáo và xác nhận trước.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí, tháp và bối cảnh lịch sử</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số của khuôn viên</a>'
      ],
      updated: '2026-11-10'
    },
    'how-to-get-there': {
      path: 'how-to-get-there',
      metaTitle: 'Đường đến Chùa Thiên Mụ – Từ trung tâm Huế | Huế',
      metaDescription: 'Chỉ đường đến Chùa Thiên Mụ từ Kinh thành Huế, ga Huế và trung tâm thành phố: taxi, Grab, xe máy, xe đạp và thuyền sông Hương, kèm điều hướng Google Maps.',
      ogTitle: 'Đường đến Chùa Thiên Mụ – Từ trung tâm Huế',
      ogDescription: 'Các cách di chuyển đến Chùa Thiên Mụ từ Kinh thành Huế, ga Huế và trung tâm thành phố: đường bộ, xe máy, xe đạp và thuyền trên sông Hương.',
      breadcrumb: 'Chùa Thiên Mụ → Đường đi',
      hero: { kicker: 'Cẩm nang tham quan · Huế', title: 'Đường đến Chùa Thiên Mụ', sub: 'Chùa nằm trên đồi Hà Khê bên sông Hương, phía tây trung tâm Huế. Dùng tên chùa trên bản đồ và xác nhận lối vào, không dựa vào một tọa độ duy nhất.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa cách trung tâm Huế một đoạn ngắn về phía tây, ven sông Hương. Không hứa thời gian hay khoảng cách cố định từ mọi điểm; hãy xác nhận lối vào và điểm trả khách với nhà cung cấp.' },
        { type: 'steps', kicker: 'Từ các điểm xuất phát', title: 'Ba lộ trình thường gặp', items: [
          { title: 'Từ Kinh thành Huế', body: 'Di chuyển về phía tây qua cầu Trường Tiền và men theo sông Hương đến đồi Hà Khê. Hỏi tài xế điểm trả khách gần cổng chùa.' },
          { title: 'Từ ga Huế', body: 'Ga nằm gần trung tâm; đi taxi hoặc xe máy về phía tây nam dọc sông Hương đến chùa. Xác nhận giá trước khi lên xe.' },
          { title: 'Từ trung tâm thành phố', body: 'Các khách sạn khu vực trung tâm thường cách chùa một quãng ngắn; taxi, Grab, xe máy hoặc xe đạp đều tiếp cận được.' }
        ] },
        { type: 'cards', kicker: 'Lựa chọn phương tiện', title: 'Cách di chuyển', items: [
          { title: 'Taxi / Grab', body: 'Thuận tiện nhất; thỏa thuận hoặc xem giá trên ứng dụng, xác nhận điểm trả khách gần cổng chùa.' },
          { title: 'Xe máy / xe đạp', body: 'Linh hoạt, phù hợp đi qua cầu Trường Tiền và ven sông. Chú ý gửi xe và an toàn.' },
          { title: 'Thuyền sông Hương', body: 'Bến sông của chùa xuất hiện trong tư liệu du lịch số; hỏi nhà cung cấp về chuyến, giá và điều kiện, không mặc định có chuyến hằng ngày.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Xác nhận lối vào', body: 'Maps ghi Kim Long, Huế là tham chiếu khu vực, không phải địa chỉ bưu chính hay cổng vào chính xác. Tìm theo tên chùa và xác nhận điểm đến với đơn vị vận chuyển.' },
        { type: 'map', note: 'Mở Google Maps theo tên chùa để xem lối vào và tuyến đường thực tế.' }
      ],
      faqs: [
        ['Từ Kinh thành Huế đi sao?', 'Di chuyển về phía tây qua cầu Trường Tiền và men theo sông Hương đến đồi Hà Khê. Xác nhận điểm trả khách gần cổng chùa với tài xế.'],
        ['Từ ga Huế đi sao?', 'Ga gần trung tâm; đi taxi hoặc xe máy về phía tây nam dọc sông Hương. Xác nhận giá trước khi lên xe.'],
        ['Có đi thuyền được không?', 'Bến sông chùa có trong tư liệu du lịch số. Hỏi nhà cung cấp về chuyến, giá và điều kiện; không mặc định có chuyến hằng ngày.'],
        ['Có nên tự lái xe máy?', 'Có, linh hoạt qua cầu Trường Tiền và ven sông. Chú ý gửi xe và an toàn giao thông.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí, tháp và bối cảnh lịch sử</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số của khuôn viên</a>'
      ],
      updated: '2026-11-10'
    },
    'visitor-guide': {
      path: 'visitor-guide',
      metaTitle: 'Cẩm nang tham quan Chùa Thiên Mụ – Xem gì & Mất bao lâu',
      metaDescription: 'Cẩm nang thực tế cho Chùa Thiên Mụ: thời gian tham quan, thứ tự đi, cổng vào, tiện ích, trang phục và tôn trọng không gian Phật giáo.',
      ogTitle: 'Cẩm nang tham quan Chùa Thiên Mụ – Xem gì & Mất bao lâu',
      ogDescription: 'Hướng dẫn tham quan Chùa Thiên Mụ: thời gian, thứ tự đường đi, cổng vào, tiện ích và ứng xử tại nơi thờ tự.',
      breadcrumb: 'Chùa Thiên Mụ → Cẩm nang',
      hero: { kicker: 'Cẩm nang tham quan · Huế', title: 'Cẩm nang tham quan Chùa Thiên Mụ', sub: 'Chùa là nơi sinh hoạt Phật giáo đang hoạt động. Dành khoảng 1–1,5 giờ, ưu tiên không gian thờ tự và tôn trọng nghi lễ khi tham quan.' },
      heroImage: '/images/thien-mu-main-hall-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ không chỉ là điểm tham quan mà là chùa đang tu tập. Cẩm nang này giúp bạn sắp xếp thứ tự, thời gian và ứng xử mà không làm gián đoạn sinh hoạt tôn giáo.' },
        { type: 'info', title: 'Thông tin tham quan', rows: [
          { label: 'Thời gian nên dành', value: 'Khoảng 1–1,5 giờ (tham khảo)' },
          { label: 'Cổng vào', value: 'Xác nhận theo tên chùa trên bản đồ' },
          { label: 'Tiện ích', value: 'Chưa xác minh đầy đủ; hỏi tại chỗ' },
          { label: 'Trang phục', value: 'Kín đáo, tôn nghiêm' }
        ] },
        { type: 'steps', kicker: 'Gợi ý đường đi', title: 'Thứ tự tham quan', items: [
          { title: 'Cổng và sân', body: 'Từ lối vào, dạo quanh sân và quan sát tổng thể kiến trúc hướng ra sông Hương.' },
          { title: 'Tháp Phước Duyên', body: 'Tháp bảy tầng, cao 21 m — biểu tượng của chùa và điểm chụp ảnh chính.' },
          { title: 'Chính điện', body: 'Không gian thờ tự; ăn mặc kín đáo, nói nhỏ và không gián đoạn nghi lễ.' },
          { title: 'Bến sông và bậc lên', body: 'Góc nhìn xuống sông Hương; chú ý bậc thang và an toàn.' }
        ] },
        { type: 'cards', kicker: 'Nên xem', title: 'Điểm dừng đáng giá', items: [
          { title: 'Tháp Phước Duyên', body: 'Công trình sau này, không phải từ 1601; biểu tượng nhận diện chùa.' },
          { title: 'Chính điện', body: 'Trung tâm sinh hoạt Phật giáo; tôn trọng không gian thờ tự.' },
          { title: 'Sân thượng nhìn sông', body: 'Góc chụp ảnh kiến trúc và sông Hương.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Ưu tiên không gian thờ tự', body: 'Nếu gặp khóa lễ hoặc nghi thức, hãy nhường không gian và giữ trật tự. Làm theo biển báo, không chạm đồ thờ hoặc lễ vật.' },
        { type: 'prose', title: 'Trang phục và ứng xử', html: 'Ăn mặc kín đáo, nói nhỏ và tránh làm ồn. Xin phép trước khi chụp ảnh người hoặc không gian hạn chế. Không chạm vào đồ thờ, chuông, trống hay lễ vật.' },
        { type: 'map', note: 'Xác nhận điểm đến theo tên chùa; hỏi nhà cung cấp về lối vào phù hợp.' }
      ],
      faqs: [
        ['Tham quan mất bao lâu?', 'Khoảng 1–1,5 giờ là đủ để xem tháp, chính điện và sân chùa. Chưa xác minh lịch cố định; xem mục giờ mở cửa.'],
        ['Có cần hướng dẫn viên không?', 'Không bắt buộc. Bạn có thể tự tham quan; hướng dẫn viên là dịch vụ riêng nếu muốn.'],
        ['Mặc gì khi đi chùa?', 'Trang phục kín đáo, tôn nghiêm. Tránh váy ngắn hoặc áo hở vai khi vào không gian thờ tự.'],
        ['Có toilet không?', 'Chưa xác minh đầy đủ tại chùa; hỏi nhà cung cấp vận chuyển hoặc tìm tiện ích công cộng gần đó.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí, tháp và bối cảnh lịch sử</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số của khuôn viên</a>'
      ],
      updated: '2026-11-10'
    },
    'phuoc-duyen-tower': {
      path: 'phuoc-duyen-tower',
      metaTitle: 'Tháp Phước Duyên – Biểu tượng Chùa Thiên Mụ | Huế',
      metaDescription: 'Tháp Phước Duyên bảy tầng, cao 21 m tại Chùa Thiên Mụ: lịch sử, kiến trúc, ý nghĩa và nơi chụp ảnh bên sông Hương.',
      ogTitle: 'Tháp Phước Duyên – Biểu tượng Chùa Thiên Mụ',
      ogDescription: 'Tháp bảy tầng, cao 21 m, là công trình xây sau thời khởi dựng chùa. Tìm hiểu lịch sử, kiến trúc và góc chụp ảnh của tháp Phước Duyên.',
      breadcrumb: 'Chùa Thiên Mụ → Tháp Phước Duyên',
      hero: { kicker: 'Kiến trúc & lịch sử · Huế', title: 'Tháp Phước Duyên', sub: 'Tháp bảy tầng, cao 21 m, là biểu tượng nhận diện của Chùa Thiên Mụ. Đây là công trình xây sau thời khởi dựng chùa năm 1601, không nên hiểu tháp hiện nay có từ 1601.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Phước Duyên là tháp hình bát giác, bảy tầng, cao 21 m, nằm trước chính điện. Nguồn du lịch Huế phân biệt rõ tháp với thời điểm khởi dựng chùa.' },
        { type: 'info', title: 'Thông số chính', rows: [
          { label: 'Số tầng', value: '7 tầng' },
          { label: 'Chiều cao', value: '21 m (theo tư liệu du lịch)' },
          { label: 'Hình dáng', value: 'Bát giác' },
          { label: 'Thời điểm', value: 'Xây sau năm 1601 (không từ 1601)' }
        ] },
        { type: 'prose', title: 'Lịch sử và kiến trúc', html: 'Chùa được khởi dựng năm 1601 gắn với chúa Nguyễn Hoàng, trong khi tháp Phước Duyên là công trình được xây dựng về sau. Tháp bát giác bảy tầng cao 21 m trở thành hình ảnh đại diện của chùa và thường xuất hiện trong tư liệu du lịch Huế.' },
        { type: 'cards', kicker: 'Điều nên chú ý', title: 'Quan sát tháp', items: [
          { title: 'Bảy tầng', body: 'Mỗi tầng thể hiện lớp ý nghĩa Phật giáo; quan sát tỷ lệ và trang trí.' },
          { title: 'Vị trí', body: 'Đứng trước chính điện, hướng ra sông Hương — góc nhìn kinh điển.' },
          { title: 'Tương phản', body: 'Màu tháp với nền trời và sông tạo khung ảnh đặc trưng Huế.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Không nhầm năm 1601', body: 'Nguồn du lịch chính thức ghi chùa khởi dựng 1601; tháp Phước Duyên là công trình sau đó. Đừng gán niên đại 1601 cho tháp hiện nay.' },
        { type: 'prose', title: 'Chụp ảnh tháp', html: 'Góc kinh điển là từ sân chùa hướng lên tháp với nền sông Hương. Sáng sớm và chiều thường cho ánh sáng đẹp. Tránh chạm hoặc trèo lên kết cấu tháp.' },
        { type: 'map', note: 'Tháp nằm trong khuôn viên chùa; xác nhận lối vào theo tên chùa.' }
      ],
      faqs: [
        ['Tháp Phước Duyên cao bao nhiêu?', 'Khoảng 21 m, bảy tầng, theo tư liệu du lịch Huế.'],
        ['Tháp có từ năm 1601 không?', 'Không. Chùa khởi dựng 1601, tháp là công trình xây sau đó.'],
        ['Chụp ảnh ở đâu đẹp?', 'Từ sân chùa hướng lên tháp với nền sông Hương; sáng sớm và chiều cho ánh sáng tốt.'],
        ['Có vào trong tháp không?', 'Chưa xác minh điều kiện tham quan bên trong; tôn trọng biển báo tại chỗ.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí, tháp và bối cảnh lịch sử</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số của khuôn viên</a>'
      ],
      updated: '2026-11-10'
    },
    'history': {
      path: 'history',
      metaTitle: 'Lịch sử Chùa Thiên Mụ – Từ 1601 đến nay',
      metaDescription: 'Chùa Thiên Mụ khởi dựng năm 1601 dưới thời chúa Nguyễn Hoàng. Cùng xem dòng thời gian từ thời Nguyễn sớm đến trung tâm Phật giáo bên sông Hương.',
      ogTitle: 'Lịch sử Chùa Thiên Mụ – Từ 1601 đến nay',
      ogDescription: 'Từ khởi dựng 1601 dưới Nguyễn Hoàng đến một trung tâm Phật giáo còn hoạt động tại Huế bên sông Hương.',
      breadcrumb: 'Chùa Thiên Mụ → Lịch sử',
      hero: { kicker: 'Lịch sử & văn hóa · Huế', title: 'Lịch sử Chùa Thiên Mụ', sub: 'Chùa được khởi dựng năm 1601, gắn với chúa Nguyễn Hoàng, và nay là trung tâm Phật giáo còn hoạt động bên sông Hương ở Huế.' },
      heroImage: '/images/thien-mu-main-hall-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ là một trong những ngôi chùa cổ và nổi tiếng nhất Huế. Nguồn du lịch chính thức ghi nhận năm khởi dựng 1601 và gắn với chúa Nguyễn Hoàng.' },
        { type: 'info', title: 'Thông tin gốc', rows: [
          { label: 'Khởi dựng', value: '1601' },
          { label: 'Người liên quan', value: 'Chúa Nguyễn Hoàng' },
          { label: 'Vị trí', value: 'Đồi Hà Khê, sông Hương' },
          { label: 'Tên khác', value: 'Linh Mụ' }
        ] },
        { type: 'steps', kicker: 'Dòng thời gian', title: 'Từ 1601 đến nay', items: [
          { title: '1601 – Khởi dựng', body: 'Theo nguồn du lịch chính thức, chùa được khởi dựng năm 1601 dưới thời chúa Nguyễn Hoàng.' },
          { title: 'Sau đó – Tháp Phước Duyên', body: 'Tháp bảy tầng được xây dựng về sau, trở thành biểu tượng của chùa (không từ 1601).' },
          { title: 'Hiện đại – Trung tâm Phật giáo', body: 'Chùa tiếp tục là nơi sinh hoạt Phật giáo và điểm tham quan văn hóa của Huế.' }
        ] },
        { type: 'prose', title: 'Vai trò văn hóa', html: 'Bên cạnh giá trị tôn giáo, chùa gắn với lịch sử và văn hóa Huế, thường xuất hiện trong tư liệu du lịch về sông Hương và các di tích cố đô.' },
        { type: 'callout', tone: 'warn', title: 'Phân biệt chùa và tháp', body: 'Chùa khởi dựng 1601; tháp Phước Duyên là công trình sau đó. Không gán niên đại 1601 cho tháp hiện nay.' },
        { type: 'map', note: 'Chùa nằm trên đồi Hà Khê; xác nhận lối vào theo tên chùa.' }
      ],
      faqs: [
        ['Chùa Thiên Mụ xây năm nào?', 'Nguồn du lịch chính thức ghi 1601, gắn với chúa Nguyễn Hoàng.'],
        ['Ai xây chùa?', 'Gắn với chúa Nguyễn Hoàng theo tư liệu du lịch.'],
        ['Tháp Phước Duyên có từ 1601 không?', 'Không. Tháp là công trình xây sau thời khởi dựng chùa.'],
        ['Chùa còn hoạt động không?', 'Có, chùa vẫn là nơi sinh hoạt Phật giáo bên sông Hương.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí, tháp và bối cảnh lịch sử</a>',
        '<a class="underline" href="https://vietnam.travel/de/plan-your-trip/recommended-trip/heritage-sites-vietnam/">Vietnam Tourism — sông Hương và năm khởi dựng</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số của khuôn viên</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/hue-imperial-city': {
      path: 'nearby/hue-imperial-city',
      metaTitle: 'Kinh thành Huế – Gần Chùa Thiên Mụ | Cẩm nang',
      metaDescription: 'Kinh thành Huế, di sản UNESCO, kết hợp tự nhiên với Chùa Thiên Mụ. Tìm hiểu điểm nhấn, cách đi và gộp hai nơi.',
      ogTitle: 'Kinh thành Huế – Gần Chùa Thiên Mụ',
      ogDescription: 'Di sản UNESCO, Kinh thành Huế là di tích riêng, thường được kết hợp với Chùa Thiên Mụ trong hành trình Huế.',
      breadcrumb: 'Chùa Thiên Mụ → Lân cận → Kinh thành Huế',
      hero: { kicker: 'Lân cận · Huế', title: 'Kinh thành Huế', sub: 'Di sản UNESCO và di tích riêng, thường được gộp với Chùa Thiên Mụ trong hành trình Huế. Kiểm tra vé, giờ và lối vào riêng của nó.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Kinh thành Huế là trung tâm của cố đô, thuộc quần thể di sản UNESCO. Đây là di tích riêng, không thuộc khuôn viên chùa; hãy kiểm tra vé, giờ và lộ trình riêng.' },
        { type: 'info', title: 'Thông tin cơ bản', rows: [
          { label: 'Di sản', value: 'UNESCO (Quần thể di tích Cố đô Huế)' },
          { label: 'Vé', value: 'Riêng — chưa xác minh, xem nguồn chính thức' },
          { label: 'Giờ', value: 'Riêng — chưa xác minh' },
          { label: 'Vị trí', value: 'Phía đông chùa, qua trung tâm Huế' }
        ] },
        { type: 'cards', kicker: 'Điểm nhấn', title: 'Xem gì', items: [
          { title: 'Kinh thành', body: 'Thành cổ có cửa và sân chầu.' },
          { title: 'Điện Thái Hòa', body: 'Sảnh thiết triều chính của hoàng cung.' },
          { title: 'Tường và cửa', body: 'Tường bao quanh và cửa Ngọ Môn biểu tượng.' }
        ] },
        { type: 'prose', title: 'Lịch sử', html: 'Kinh thành là kinh đô của triều Nguyễn, gắn với lịch sử cố đô và các di tích dọc sông Hương. Nhiều nguồn du lịch Huế giới thiệu chùa và Kinh thành như những điểm bổ trợ cho nhau.' },
        { type: 'steps', kicker: 'Kết hợp', title: 'Gộp chùa và kinh thành', items: [
          { title: 'Sáng', body: 'Thăm Kinh thành trước khi đông và nóng.' },
          { title: 'Trưa', body: 'Đi về phía tây dọc sông Hương.' },
          { title: 'Chiều', body: 'Thăm Chùa Thiên Mụ và bờ sông.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Vé và giờ riêng', body: 'Kinh thành có vé, giờ và quy định riêng, độc lập với chùa. Kiểm tra nguồn chính thức hoặc tại chỗ trước khi đi.' },
        { type: 'map', note: 'Tìm Kinh thành Huế trên bản đồ; xác nhận cổng vào và vé riêng.' }
      ],
      faqs: [
        ['Kinh thành có gần chùa không?', 'Một khoảng ngắn về phía đông qua trung tâm Huế; thường gộp chung một hành trình.'],
        ['Có cần vé riêng không?', 'Có. Kinh thành có vé riêng, chưa xác minh tại đây; xem nguồn chính thức.'],
        ['Đi từ chùa sao?', 'Đi về phía đông dọc sông Hương qua cầu Trường Tiền; taxi hoặc xe máy đều được.'],
        ['Mất bao lâu?', 'Kinh thành rộng; thường nửa ngày. Giờ cố định chưa xác minh.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí, tháp và bối cảnh lịch sử</a>',
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Quần thể di tích Cố đô Huế</a>'
      ],
      updated: '2026-11-10'
    },
    'itineraries/perfume-river-boat-trip': {
      path: 'itineraries/perfume-river-boat-trip',
      metaTitle: 'Sông Hương & Chùa Thiên Mụ bằng thuyền – Hành trình Huế',
      metaDescription: 'Hành trình thuyền trên sông Hương từ Huế đến Chùa Thiên Mụ: bến sông, tham quan chùa và quay lại. Lên kế hoạch thời gian, lối vào và xác nhận với nhà cung cấp thuyền.',
      ogTitle: 'Sông Hương & Chùa Thiên Mụ bằng thuyền – Hành trình Huế',
      ogDescription: 'Tuyến đường sông từ Huế đến bến chùa, tham quan và quay lại. Lên kế hoạch thời gian và hỏi nhà cung cấp.',
      breadcrumb: 'Chùa Thiên Mụ → Hành trình → Thuyền sông Hương',
      hero: { kicker: 'Hành trình · Huế', title: 'Sông Hương & Chùa Thiên Mụ bằng thuyền', sub: 'Tuyến kết hợp sông và chùa: xuôi sông Hương đến bến chùa, tham quan rồi quay lại. Xác nhận lịch thuyền và điều kiện với nhà cung cấp.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ nằm bên sông Hương, nên thuyền là cách đến mang tính biểu tượng. Bến sông chùa có trong tư liệu du lịch số, nhưng dịch vụ thuyền cần xác nhận với nhà cung cấp.' },
        { type: 'steps', kicker: 'Tuyến gợi ý', title: 'Huế đến chùa bằng thuyền', items: [
          { title: 'Khởi hành', body: 'Lên thuyền tại bến trung tâm Huế. Xác nhận giờ và giá với nhà cung cấp.' },
          { title: 'Xuôi sông', body: 'Ngắm sông Hương và hai bờ trước khi đến chùa.' },
          { title: 'Bến chùa', body: 'Thuyền neo trong khuôn viên; đi lên bậc thang.' },
          { title: 'Thăm & quay lại', body: 'Tham quan chùa rồi quay lại trung tâm bằng thuyền.' }
        ] },
        { type: 'info', title: 'Bối cảnh sông Hương', rows: [
          { label: 'Vị trí chùa', value: 'Đồi Hà Khê, bờ sông' },
          { label: 'Bến chùa', value: 'Có trong tư liệu du lịch số' },
          { label: 'Thuyền', value: 'Dịch vụ riêng — xác nhận trước' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Thuyền không mặc định hằng ngày', body: 'Bến chùa có trong tư liệu du lịch số, nhưng chuyến thuyền hằng ngày chưa được xác nhận. Hỏi nhà cung cấp về lịch, giá, thời tiết và tiếp cận.' },
        { type: 'cards', kicker: 'Chuẩn bị', title: 'Mang theo gì', items: [
          { title: 'Nước & mũ', body: 'Huế có thể nắng; mang nước và mũ.' },
          { title: 'Trang phục kín đáo', body: 'Cho không gian thờ tự chùa.' },
          { title: 'Máy ảnh', body: 'Sông và tháp Phước Duyên rất đẹp.' }
        ] },
        { type: 'prose', title: 'Chụp ảnh trên sông', html: 'Từ thuyền bạn có tháp Phước Duyên và chùa hướng ra sông. Sáng sớm và cuối chiều thường cho ánh sáng đẹp nhất.' },
        { type: 'map', note: 'Xác nhận bến thuyền và cổng chùa theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Có thuyền từ Huế đến chùa không?', 'Bến chùa có trong tư liệu du lịch số. Hỏi nhà cung cấp về lịch, giá và điều kiện; không mặc định hằng ngày.'],
        ['Mất bao lâu?', 'Tùy tuyến thuyền và thời gian tham quan chùa; lịch cố định chưa xác minh.'],
        ['Giá thuyền gồm vé chùa?', 'Không. Thuyền là dịch vụ riêng; tham quan chùa thường miễn phí theo nguồn du lịch.'],
        ['An toàn cho trẻ em?', 'Hỏi nhà cung cấp về áo phao và an toàn; chú ý bậc thang lên chùa.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí, tháp và bối cảnh lịch sử</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số của khuôn viên</a>'
      ],
      updated: '2026-11-10'
    }
  },
  en: {
    'entrance-fee': {
      path: 'entrance-fee',
      metaTitle: 'Thien Mu Pagoda Entrance Fee – Is It Free? | Hue',
      metaDescription: 'Does Thien Mu Pagoda charge admission? General tourism information lists the temple grounds as free to visit. Boat trips, parking and guides are separate services. Verify before you go.',
      ogTitle: 'Thien Mu Pagoda Entrance Fee – Is It Free?',
      ogDescription: 'General tourism information commonly describes the pagoda grounds as free to enter, but no pagoda-specific current admission notice was verified. Boat, parking and guide are separate services.',
      breadcrumb: 'Thien Mu Pagoda → Entrance Fee',
      hero: { kicker: 'Visitor guide · Hue', title: 'Thien Mu Pagoda Entrance Fee', sub: 'General tourism information commonly describes the pagoda grounds as free to enter, but no pagoda-specific current admission notice was verified. Keep tour, boat and parking prices separate from temple admission.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda remains a working Buddhist site. General tourism information commonly describes the grounds as free to enter, but this guide has not verified a current, clearly pagoda-issued admission notice. Confirm each service separately before travelling.' },
        { type: 'info', title: 'Quick cost facts', rows: [
          { label: 'Pagoda grounds', value: 'Usually free (per general tourism info, not a verified pagoda notice)' },
          { label: 'Tours, boats, parking', value: 'Separate services, not temple admission' },
          { label: 'Guide', value: 'Separate service — ask provider' },
          { label: 'Donations', value: 'Voluntary, often a donation box' }
        ] },
        { type: 'prose', title: 'Is there an admission charge?', html: 'General tourism sources often list visiting the pagoda as free. However, this page <b>has not verified</b> a current, official admission notice issued by the pagoda. Treat  free as reference information from tourism sources, not direct on-site confirmation.' },
        { type: 'cards', kicker: 'Separate costs', title: 'Costs to keep apart', items: [
          { title: 'Tours and boats', body: 'A Perfume River boat or tour price is the provider's service, not temple admission. Ask about price, route and conditions first.' },
          { title: 'Parking', body: 'Current parking locations, tariffs and availability were not verified. Ask your transport provider and follow on-site signs.' },
          { title: 'Guides', body: 'If you use a guide, agree on price and duration separately; it is not a pagoda entry fee.' },
          { title: 'Donations', body: 'Donations are voluntary and do not replace any service fee.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Current tariff unverified', body: 'Do not treat a tour, boat or parking price as temple admission. Confirm each service and its access conditions separately with the provider or pagoda, especially around ceremonies or holidays.' },
        { type: 'map', note: 'Confirm the destination by the pagoda's name on the map, not a single assumed address.' }
      ],
      faqs: [
        ['Is there an entrance fee?', 'General tourism information often describes the grounds as free, but no current pagoda-issued admission notice was verified. Confirm directly before visiting.'],
        ['Do I need to book?', 'Visiting the pagoda usually does not require booking. Separate boat or guide services may need arrangement with a provider.'],
        ['Is the boat price included?', 'No. A Perfume River boat is the provider's separate service; it is not temple admission.'],
        ['Is parking free?', 'Current parking tariff was not verified. Ask your transport provider and read on-site signs.'],
        ['Are donations accepted?', 'Yes, voluntary donation boxes exist, but this is optional and does not replace any service fee.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location, tower and historical setting</a>',
        '<a class="underline" href="https://vietnam.travel/de/plan-your-trip/recommended-trip/heritage-sites-vietnam/">Vietnam Tourism — riverside setting and founding date</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — digital tourism record of the compound</a>'
      ],
      updated: '2026-11-10'
    },
    'opening-hours': {
      path: 'opening-hours',
      metaTitle: 'Thien Mu Pagoda Opening Hours – When to Visit | Hue',
      metaDescription: 'What time does Thien Mu Pagoda open and close? Google Maps showed closing at 17:30 when checked on 2026-11-10. That is a third-party snapshot, not a weekly schedule confirmed by the pagoda. Confirm before visiting.',
      ogTitle: 'Thien Mu Pagoda Opening Hours – When to Visit',
      ogDescription: 'Google Maps showed closing at 17:30 when checked on 2026-11-10. This is a third-party snapshot, not a weekly schedule confirmed by the pagoda.',
      breadcrumb: 'Thien Mu Pagoda → Opening Hours',
      hero: { kicker: 'Visitor guide · Hue', title: 'Thien Mu Pagoda Opening Hours', sub: 'Google Maps showed closing at 17:30 when checked on 2026-11-10. This is a third-party snapshot, not a weekly schedule confirmed by the pagoda.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'The pagoda is a working Buddhist site, so opening times can shift with ceremonies, holidays and maintenance. This page has no weekly schedule confirmed by the pagoda; check again before travelling.' },
        { type: 'info', title: 'Available snapshot', rows: [
          { label: 'Maps closing time', value: '17:30 (snapshot 2026-11-10)' },
          { label: 'Source', value: 'Google Maps — third party' },
          { label: 'Confirmation', value: 'Not a pagoda-issued schedule' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Do not treat the snapshot as official hours', body: 'The Maps snapshot reflects one moment. Do not use it as a fixed open/close timetable. Check again before travelling, especially around ceremonies, holidays or maintenance.' },
        { type: 'prose', title: 'Open on weekends and holidays?', html: 'The pagoda generally welcomes visitors, but a <b>fixed weekend or holiday timetable was not verified</b>. On Buddhist holidays or during ceremonies, part of the worship space may be reserved for religious activity; be respectful and confirm ahead.' },
        { type: 'cards', kicker: 'When to go', title: 'Suggested windows', items: [
          { title: 'Early morning', body: 'Usually cooler, less crowded and good light for architecture photos.' },
          { title: 'Afternoon', body: 'Can combine with a Perfume River sunset, but watch the Maps closing snapshot.' },
          { title: 'Rainy days', body: 'Avoid slippery steps; check the forecast before going.' }
        ] },
        { type: 'map', note: 'Confirm actual hours through the pagoda or your transport provider when nearby.' }
      ],
      faqs: [
        ['What time does it open?', 'Google Maps showed closing at 17:30 when checked on 2026-11-10. This is a third-party snapshot, not a pagoda-confirmed weekly schedule. Check again before visiting.'],
        ['What time does it close?', 'The Maps snapshot shows 17:30 (2026-11-10). Official closing hours were not verified; reconfirm when nearby.'],
        ['Open on weekends?', 'Generally open to visitors, but a fixed timetable was not verified. During holidays or ceremonies, worship space takes priority.'],
        ['Can I visit during Buddhist ceremonies?', 'Yes, but part of the space is for rituals. Respect religious activity and confirm ahead.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location, tower and historical setting</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — digital tourism record of the compound</a>'
      ],
      updated: '2026-11-10'
    },
    'how-to-get-there': {
      path: 'how-to-get-there',
      metaTitle: 'How to Get to Thien Mu Pagoda – From Hue City',
      metaDescription: 'Directions to Thien Mu Pagoda from Hue Imperial City, the train station and the city centre: taxi, Grab, motorbike, bicycle and Perfume River boat, with Google Maps navigation.',
      ogTitle: 'How to Get to Thien Mu Pagoda – From Hue City',
      ogDescription: 'Ways to reach Thien Mu Pagoda from Hue Imperial City, the train station and the city centre: by road, motorbike, bicycle and Perfume River boat.',
      breadcrumb: 'Thien Mu Pagoda → Getting there',
      hero: { kicker: 'Visitor guide · Hue', title: 'How to Get to Thien Mu Pagoda', sub: 'The pagoda sits on Hà Khê Hill beside the Perfume River, west of central Huế. Use the pagoda's name on the map and confirm the entrance; do not rely on a single assumed coordinate.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'The pagoda is a short distance west of central Huế, along the Perfume River. No fixed journey time or distance is promised from every point; confirm the entrance and drop-off with your provider.' },
        { type: 'steps', kicker: 'From common start points', title: 'Three typical routes', items: [
          { title: 'From Hue Imperial City', body: 'Head west across Trường Tiền Bridge and follow the Perfume River to Hà Khê Hill. Ask the driver for the drop-off near the pagoda gate.' },
          { title: 'From Hue train station', body: 'The station is near the centre; take a taxi or motorbike southwest along the river to the pagoda. Agree on price before boarding.' },
          { title: 'From the city centre', body: 'Hotels in the centre are a short distance away; taxi, Grab, motorbike or bicycle all reach the pagoda.' }
        ] },
        { type: 'cards', kicker: 'Transport options', title: 'How to travel', items: [
          { title: 'Taxi / Grab', body: 'Most convenient; agree or check the app price and confirm the drop-off near the gate.' },
          { title: 'Motorbike / bicycle', body: 'Flexible, good via Trường Tiền Bridge and the riverside. Mind parking and safety.' },
          { title: 'Perfume River boat', body: 'The pagoda's river landing appears in the digital tourism record; ask a provider about departures, price and conditions — do not assume daily operation.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Confirm the entrance', body: 'Maps lists Kim Long, Huế as a place reference, not a verified postal address or exact entrance. Search by the pagoda's name and confirm the destination with your transport provider.' },
        { type: 'map', note: 'Open Google Maps by the pagoda's name to see the entrance and actual route.' }
      ],
      faqs: [
        ['How do I get there from the Imperial City?', 'Head west across Trường Tiền Bridge and follow the Perfume River to Hà Khê Hill. Confirm the drop-off near the gate with your driver.'],
        ['From the train station?', 'The station is near the centre; take a taxi or motorbike southwest along the river. Agree on price before boarding.'],
        ['Can I take a boat?', 'The pagoda's river landing is in the digital tourism record. Ask a provider about departures, price and conditions; do not assume daily operation.'],
        ['Should I ride a motorbike myself?', 'Yes, flexible via the bridge and riverside. Mind parking and traffic safety.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location, tower and historical setting</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — digital tourism record of the compound</a>'
      ],
      updated: '2026-11-10'
    },
    'visitor-guide': {
      path: 'visitor-guide',
      metaTitle: 'Thien Mu Pagoda Visitor Guide – What to See & How Long',
      metaDescription: 'A practical visitor guide to Thien Mu Pagoda: suggested visit length, route order, entrance, facilities, dress code and respect for the Buddhist setting.',
      ogTitle: 'Thien Mu Pagoda Visitor Guide – What to See & How Long',
      ogDescription: 'A visitor guide to Thien Mu Pagoda: duration, route order, entrance, facilities and conduct at a place of worship.',
      breadcrumb: 'Thien Mu Pagoda → Visitor Guide',
      hero: { kicker: 'Visitor guide · Hue', title: 'Thien Mu Pagoda Visitor Guide', sub: 'Thien Mu Pagoda is an active Buddhist site. Plan about 1–1.5 hours, give worship space priority and respect ceremonies during your visit.' },
      heroImage: '/images/thien-mu-main-hall-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda is not only a sightseeing stop but a functioning temple. This guide helps you plan the order, timing and conduct without disrupting religious life.' },
        { type: 'info', title: 'Visit basics', rows: [
          { label: 'Time to spend', value: 'About 1–1.5 hours (reference)' },
          { label: 'Entrance', value: 'Confirm by pagoda name on the map' },
          { label: 'Facilities', value: 'Not fully verified; ask on site' },
          { label: 'Dress', value: 'Modest, respectful' }
        ] },
        { type: 'steps', kicker: 'Suggested route', title: 'Visit order', items: [
          { title: 'Gate and courtyard', body: 'From the entrance, walk the courtyard and take in the layout facing the river.' },
          { title: 'Phước Duyên Tower', body: 'The seven-tier, 21 m tower — the pagoda's symbol and main photo spot.' },
          { title: 'Main hall', body: 'The worship space; dress modestly, speak quietly and avoid interrupting rituals.' },
          { title: 'River landing and steps', body: 'A viewpoint down to the Perfume River; mind the steps and safety.' }
        ] },
        { type: 'cards', kicker: 'Worth stopping', title: 'Highlights', items: [
          { title: 'Phước Duyên Tower', body: 'A later structure, not from 1601; the pagoda's identifying symbol.' },
          { title: 'Main hall', body: 'The centre of Buddhist life; respect the worship space.' },
          { title: 'Riverside terrace', body: 'A frame for architecture and the Perfume River.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Give worship space priority', body: 'If you meet a ceremony or ritual, step back and keep order. Follow signs and do not touch offerings, bells, drums or ritual objects.' },
        { type: 'prose', title: 'Dress and conduct', html: 'Dress modestly, speak quietly and avoid noise. Ask before photographing people or restricted spaces. Do not touch altars, bells, drums or offerings.' },
        { type: 'map', note: 'Confirm the destination by the pagoda's name; ask your provider about the suitable entrance.' }
      ],
      faqs: [
        ['How long does a visit take?', 'About 1–1.5 hours covers the tower, main hall and courtyard. Fixed hours were not verified; see the opening-hours page.'],
        ['Do I need a guide?', 'Not required. You can self-guide; a guide is a separate service if you want one.'],
        ['What should I wear?', 'Modest, respectful clothing. Avoid short skirts or sleeveless tops in worship areas.'],
        ['Are there toilets?', 'Not fully verified at the pagoda; ask your transport provider or look for nearby public facilities.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location, tower and historical setting</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — digital tourism record of the compound</a>'
      ],
      updated: '2026-11-10'
    },
    'phuoc-duyen-tower': {
      path: 'phuoc-duyen-tower',
      metaTitle: 'Phuoc Duyen Tower – The Symbol of Thien Mu Pagoda',
      metaDescription: 'The seven-tier, 21 m Phuoc Duyen Tower at Thien Mu Pagoda in Hue: history, architecture, symbolism, and where to photograph it by the Perfume River.',
      ogTitle: 'Phuoc Duyen Tower – The Symbol of Thien Mu Pagoda',
      ogDescription: 'The seven-tier, 21 m tower is a later structure, not from the 1601 founding. Learn its history, architecture and photo spots.',
      breadcrumb: 'Thien Mu Pagoda → Phuoc Duyen Tower',
      hero: { kicker: 'Architecture & history · Hue', title: 'Phuoc Duyen Tower', sub: 'The seven-tier, 21 m tower is the identifying symbol of Thien Mu Pagoda. It is a later structure, not from the 1601 founding — the visible tower should not be dated to 1601.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Phước Duyên is an octagonal, seven-tier tower, 21 m tall, standing before the main hall. Hue tourism sources clearly distinguish the tower from the pagoda's founding date.' },
        { type: 'info', title: 'Key facts', rows: [
          { label: 'Tiers', value: '7 tiers' },
          { label: 'Height', value: '21 m (per tourism record)' },
          { label: 'Shape', value: 'Octagonal' },
          { label: 'Period', value: 'Built after 1601 (not from 1601)' }
        ] },
        { type: 'prose', title: 'History and architecture', html: 'The pagoda was founded in 1601 under Nguyễn Hoàng, while the Phước Duyên Tower is a later structure. The octagonal seven-tier, 21 m tower became the pagoda's representative image and frequently appears in Hue tourism material.' },
        { type: 'cards', kicker: 'What to notice', title: 'Observing the tower', items: [
          { title: 'Seven tiers', body: 'Each tier carries Buddhist symbolism; observe the proportions and decoration.' },
          { title: 'Position', body: 'In front of the main hall, facing the Perfume River — the classic view.' },
          { title: 'Contrast', body: 'The tower against sky and river makes a signature Huế frame.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Do not date it to 1601', body: 'Official tourism dates the pagoda's founding to 1601; the Phước Duyên Tower is a later building. Do not assign the 1601 date to the visible tower.' },
        { type: 'prose', title: 'Photographing the tower', html: 'The classic angle is from the courtyard looking up at the tower with the river behind. Early morning and afternoon usually give good light. Avoid touching or climbing the structure.' },
        { type: 'map', note: 'The tower is within the pagoda compound; confirm the entrance by the pagoda's name.' }
      ],
      faqs: [
        ['How tall is Phuoc Duyen Tower?', 'About 21 m, seven tiers, per Hue tourism records.'],
        ['Does it date to 1601?', 'No. The pagoda was founded in 1601; the tower is a later structure.'],
        ['Where is the best photo spot?', 'From the courtyard looking up at the tower with the river behind; morning and afternoon light are good.'],
        ['Can you go inside?', 'Interior access was not verified; respect on-site signs.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location, tower and historical setting</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — digital tourism record of the compound</a>'
      ],
      updated: '2026-11-10'
    },
    'history': {
      path: 'history',
      metaTitle: 'History of Thien Mu Pagoda – From 1601 to Today',
      metaDescription: 'Thien Mu Pagoda was founded in 1601 under Nguyen Hoang. Trace its history from the early Nguyen period to a living Buddhist centre on the Perfume River in Hue.',
      ogTitle: 'History of Thien Mu Pagoda – From 1601 to Today',
      ogDescription: 'From its 1601 founding under Nguyễn Hoàng to a still-active Buddhist centre on the Perfume River in Huế.',
      breadcrumb: 'Thien Mu Pagoda → History',
      hero: { kicker: 'History & culture · Hue', title: 'History of Thien Mu Pagoda', sub: 'The pagoda was founded in 1601, associated with Nguyễn Hoàng, and today remains an active Buddhist centre beside the Perfume River in Huế.' },
      heroImage: '/images/thien-mu-main-hall-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda is among the oldest and most renowned temples in Huế. Official tourism sources date its founding to 1601 and associate it with Nguyễn Hoàng.' },
        { type: 'info', title: 'Origins', rows: [
          { label: 'Founded', value: '1601' },
          { label: 'Associated with', value: 'Lord Nguyễn Hoàng' },
          { label: 'Location', value: 'Hà Khê Hill, Perfume River' },
          { label: 'Also called', value: 'Linh Mụ' }
        ] },
        { type: 'steps', kicker: 'Timeline', title: 'From 1601 to today', items: [
          { title: '1601 – Founding', body: 'Per official tourism sources, the pagoda was founded in 1601 under Lord Nguyễn Hoàng.' },
          { title: 'Later – Phước Duyên Tower', body: 'The seven-tier tower was built afterwards and became the pagoda's symbol (not from 1601).' },
          { title: 'Modern – Buddhist centre', body: 'The pagoda continues as a place of Buddhist life and a cultural visit in Huế.' }
        ] },
        { type: 'prose', title: 'Cultural role', html: 'Beyond its religious value, the pagoda is tied to the history and culture of Huế and often appears in tourism material about the Perfume River and the former imperial capital.' },
        { type: 'callout', tone: 'warn', title: 'Distinguish pagoda from tower', body: 'The pagoda was founded in 1601; the Phước Duyên Tower is a later structure. Do not assign the 1601 date to the visible tower.' },
        { type: 'map', note: 'The pagoda sits on Hà Khê Hill; confirm the entrance by its name.' }
      ],
      faqs: [
        ['When was the pagoda built?', 'Official tourism sources give 1601, associated with Lord Nguyễn Hoàng.'],
        ['Who founded it?', 'Associated with Lord Nguyễn Hoàng per tourism records.'],
        ['Does the tower date to 1601?', 'No. The tower is a later structure built after the pagoda's founding.'],
        ['Is it still active?', 'Yes, it remains a Buddhist site beside the Perfume River.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location, tower and historical setting</a>',
        '<a class="underline" href="https://vietnam.travel/de/plan-your-trip/recommended-trip/heritage-sites-vietnam/">Vietnam Tourism — riverside setting and founding date</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — digital tourism record of the compound</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/hue-imperial-city': {
      path: 'nearby/hue-imperial-city',
      metaTitle: 'Hue Imperial City – Near Thien Mu Pagoda | Visitor Guide',
      metaDescription: 'The Hue Imperial City, a UNESCO World Heritage site, pairs naturally with Thien Mu Pagoda. Read about its highlights, access and how to combine the two.',
      ogTitle: 'Hue Imperial City – Near Thien Mu Pagoda',
      ogDescription: 'A UNESCO World Heritage site, the Imperial City is a separate monument that pairs conveniently with Thien Mu Pagoda in a Hue itinerary.',
      breadcrumb: 'Thien Mu Pagoda → Nearby → Hue Imperial City',
      hero: { kicker: 'Nearby · Hue', title: 'Hue Imperial City', sub: 'A UNESCO World Heritage site and a separate monument, often paired with Thien Mu Pagoda in a Hue itinerary. Check its own tickets, hours and access.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'The Hue Imperial City is the heart of the former capital, part of the UNESCO World Heritage complex. It is a separate site, not part of the pagoda compound; check its own tickets, hours and route.' },
        { type: 'info', title: 'Basic facts', rows: [
          { label: 'Heritage', value: 'UNESCO (Complex of Hué Monuments)' },
          { label: 'Tickets', value: 'Separate — unverified, see official source' },
          { label: 'Hours', value: 'Separate — unverified' },
          { label: 'Position', value: 'East of the pagoda, via central Huế' }
        ] },
        { type: 'cards', kicker: 'Highlights', title: 'What to see', items: [
          { title: 'The Citadel', body: 'The imperial walled city with gates and courtyards.' },
          { title: 'Thai Hoa Palace', body: 'The main ceremonial hall of the royal court.' },
          { title: 'Walls and gates', body: 'The enclosing walls and the iconic Ngọ Môn gate.' }
        ] },
        { type: 'prose', title: 'History', html: 'The Imperial City was the seat of the Nguyễn dynasty, tied to the history of the former capital and the monuments along the Perfume River. Many Hue tourism sources present the pagoda and the Imperial City as complementary stops.' },
        { type: 'steps', kicker: 'Combine', title: 'Pair the pagoda and citadel', items: [
          { title: 'Morning', body: 'Visit the Imperial City before it gets crowded and hot.' },
          { title: 'Midday', body: 'Travel west along the Perfume River.' },
          { title: 'Afternoon', body: 'Visit Thien Mu Pagoda and the riverside.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Separate tickets and hours', body: 'The Imperial City has its own tickets, hours and rules, independent of the pagoda. Check the official source or on site before going.' },
        { type: 'map', note: 'Find the Hue Imperial City on the map; confirm its entrance and separate ticket.' }
      ],
      faqs: [
        ['Is the Imperial City near the pagoda?', 'A short distance east via central Huế; often combined in one itinerary.'],
        ['Does it need a separate ticket?', 'Yes. The Imperial City has its own ticket, unverified here; check the official source.'],
        ['How do I get from the pagoda?', 'Travel east along the Perfume River across Trường Tiền Bridge; taxi or motorbike both work.'],
        ['How long to visit?', 'The citadel is large; usually half a day. Fixed hours were not verified.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location, tower and historical setting</a>',
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Complex of Hué Monuments</a>'
      ],
      updated: '2026-11-10'
    },
    'itineraries/perfume-river-boat-trip': {
      path: 'itineraries/perfume-river-boat-trip',
      metaTitle: 'Perfume River & Thien Mu Pagoda Boat Trip – Hue Itinerary',
      metaDescription: 'A Perfume River boat trip from Hue to Thien Mu Pagoda: river landing, temple visit and return. Plan timing, access and what to confirm with boat providers.',
      ogTitle: 'Perfume River & Thien Mu Pagoda Boat Trip – Hue Itinerary',
      ogDescription: 'A river route from Huế to the pagoda's landing, a visit and the return. Plan timing and what to ask providers.',
      breadcrumb: 'Thien Mu Pagoda → Itineraries → Perfume River Boat',
      hero: { kicker: 'Itineraries · Hue', title: 'Perfume River & Thien Mu Pagoda Boat Trip', sub: 'A route that combines river and temple: drift down the Perfume River to the pagoda's landing, visit, then return. Confirm boat schedule and conditions with a provider.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda stands on the Perfume River, so a boat is a symbolic way to arrive. The pagoda's river landing appears in the digital tourism record, but boat service should be confirmed with a provider.' },
        { type: 'steps', kicker: 'Suggested route', title: 'Huế to the pagoda by boat', items: [
          { title: 'Depart', body: 'Board at a central Huế riverside pier. Confirm time and price with the provider.' },
          { title: 'Down the river', body: 'Enjoy the Perfume River and both banks before reaching the pagoda.' },
          { title: 'Pagoda landing', body: 'The boat docks within the compound; walk up the steps.' },
          { title: 'Visit & return', body: 'Tour the pagoda, then return by boat to the centre.' }
        ] },
        { type: 'info', title: 'Perfume River context', rows: [
          { label: 'Pagoda setting', value: 'Hà Khê Hill, riverbank' },
          { label: 'Pagoda landing', value: 'In the digital tourism record' },
          { label: 'Boat', value: 'Separate service — confirm first' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Boats are not assumed daily', body: 'The pagoda's landing appears in the digital tourism record, but daily boat operation is not confirmed. Ask a provider about departures, price, weather and accessibility.' },
        { type: 'cards', kicker: 'Prepare', title: 'What to bring', items: [
          { title: 'Water & hat', body: 'Huế can be sunny; bring water and a hat.' },
          { title: 'Modest clothing', body: 'For the pagoda's worship spaces.' },
          { title: 'Camera', body: 'The river and Phước Duyên Tower are very photogenic.' }
        ] },
        { type: 'prose', title: 'Photography on the river', html: 'From the boat you get the Phước Duyên Tower and the pagoda facing the river. Early morning and late afternoon usually give the best light.' },
        { type: 'map', note: 'Confirm the boat pier and pagoda entrance by the pagoda's name on the map.' }
      ],
      faqs: [
        ['Is there a boat from Huế to the pagoda?', 'The pagoda's landing is in the digital tourism record. Ask a provider about departures, price and conditions; do not assume daily operation.'],
        ['How long does it take?', 'Depends on the boat route and pagoda visit; a fixed timetable was not verified.'],
        ['Is the boat price included in admission?', 'No. The boat is a separate service; pagoda visiting is usually free per tourism sources.'],
        ['Is it safe for children?', 'Ask the provider about life jackets and safety; mind the steps up to the pagoda.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location, tower and historical setting</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — digital tourism record of the compound</a>'
      ],
      updated: '2026-11-10'
    }
  }
};

for (const l of ['vi', 'en'] as Locale[]) {
  Object.assign(pageDocs[l], extraPageDocs[l]);
}

export function getPageDoc(locale: Locale, path: string): PageDoc | undefined {
  return pageDocs[locale]?.[path];
}

export function pageStaticPaths(group: keyof typeof pageGroups) {
  return pageGroups[group].map((slug) => ({
    params: { slug },
    props: { path: group === 'top' ? slug : `${group}/${slug}` }
  }));
}

