import type { PageDoc, Locale } from './pages';

export const extraPageDocs: Record<Locale, Record<string, PageDoc>> = {
  vi: {
    'parking': {
      path: 'parking',
      metaTitle: 'Bãi đỗ xe Chùa Thiên Mụ – Gửi xe & lối vào | Huế',
      metaDescription: 'Gửi xe tại Chùa Thiên Mụ: chỗ để xe máy, xe đạp, ô tô, lối đi bộ lên chùa và lưu ý an toàn. Chưa có nguồn chính thức, hãy xác nhận khi đến.',
      ogTitle: 'Bãi đỗ xe Chùa Thiên Mụ – Gửi xe & lối vào',
      ogDescription: 'Chỗ để xe, lối đi bộ lên chùa và lưu ý gửi xe tại Chùa Thiên Mụ, Huế.',
      breadcrumb: 'Chùa Thiên Mụ → Gửi xe',
      hero: { kicker: 'Tham quan · Huế', title: 'Bãi đỗ xe Chùa Thiên Mụ', sub: 'Chùa nằm trên đồi Hà Khê bên sông Hương. Khu vực gửi xe thường ở chân đồi; hãy xác nhận chỗ và giá với người trông xe khi đến.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ không có bãi đỗ xe chính thức được xác minh. Du khách thường gửi xe máy, xe đạp và ô tô ở khu vực chân đồi gần cổng, do người dân địa phương trông xe.' },
        { type: 'info', title: 'Thông tin cần biết', rows: [
          { label: 'Xe máy / xe đạp', value: 'Gửi ở chân đồi; giá nhỏ, chưa xác minh' },
          { label: 'Ô tô', value: 'Đỗ khu vực gần cổng; xác nhận chỗ khi đến' },
          { label: 'Lối lên chùa', value: 'Bậc thang từ chân đồi lên khuôn viên' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Chưa xác minh', body: 'Không có nguồn chính thức về bãi đỗ xe và giá. Hãy hỏi người trông xe và nhà cung cấp di chuyển khi đến.' },
        { type: 'map', note: 'Mở Google Maps theo tên chùa để xem khu vực chân đồi và lối vào.' }
      ],
      faqs: [
        ['Có bãi đỗ xe ô tô không?', 'Chưa có xác nhận chính thức; ô tô thường đỗ khu vực gần cổng. Hỏi người trông xe khi đến.'],
        ['Giá gửi xe bao nhiêu?', 'Giá gửi xe nhỏ do người dân trông, chưa xác minh. Xác nhận trực tiếp khi gửi.'],
        ['Đi từ bãi xe lên chùa xa không?', 'Lên chùa bằng bậc thang từ chân đồi; khoảng cách ngắn nhưng có độ dốc.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'best-time-to-visit-hue': {
      path: 'best-time-to-visit-hue',
      metaTitle: 'Thời điểm đẹp nhất đến Huế & Chùa Thiên Mụ | Du lịch',
      metaDescription: 'Nên đi Huế và Chùa Thiên Mụ khi nào: mùa khô tháng 2–8, sáng sớm và chiều muộn đẹp nhất. Lưu ý mùa mưa và lễ hội.',
      ogTitle: 'Thời điểm đẹp nhất đến Huế & Chùa Thiên Mụ',
      ogDescription: 'Mùa khô, sáng sớm và chiều muộn; lưu ý mùa mưa và lễ hội khi thăm Huế.',
      breadcrumb: 'Chùa Thiên Mụ → Mùa thăm',
      hero: { kicker: 'Lên kế hoạch · Huế', title: 'Thời điểm đẹp nhất đến Huế', sub: 'Huế có hai mùa rõ rệt. Chùa Thiên Mụ bên sông Hương sáng sớm và cuối chiều thường cho ánh sáng và không khí dễ chịu nhất.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Huế có mùa khô (thường tháng 2–8) và mùa mưa (thường tháng 9–1). Mùa khô thuận tiện hơn cho tham quan chùa và sông Hương.' },
        { type: 'cards', kicker: 'Góc thời gian', title: 'Nên thăm khi nào', items: [
          { title: 'Sáng sớm', body: 'Ít nắng gắt, ánh sáng mềm bên sông; chùa vắng hơn.' },
          { title: 'Chiều muộn', body: 'Hoàng hôn trên sông Hương và tháp Phước Duyên rất đẹp.' },
          { title: 'Mùa khô', body: 'Tháng 2–8 thuận tiện đi lại, ít mưa ngắt quãng.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Lưu ý mùa mưa', body: 'Mùa mưa có thể có mưa lớn và ngập cục bộ. Kiểm tra dự báo và giờ mở cửa khi đến.' },
        { type: 'map', note: 'Xác nhận lộ trình và thời tiết theo tên chùa trên bản đồ trước khi đi.' }
      ],
      faqs: [
        ['Tháng nào đẹp nhất?', 'Thường tháng 2–4 và 7–8; sáng sớm hoặc chiều muộn trong ngày đều đẹp.'],
        ['Mùa mưa có đi được không?', 'Được, nhưng mang áo mưa và kiểm tra dự báo; một số tuyến sông có thể thay đổi.'],
        ['Có lễ hội nào gần chùa không?', 'Huế có các dịp lễ hội văn hóa; hỏi ban quản lý hoặc nguồn du lịch địa phương về lịch cụ thể.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'dress-code': {
      path: 'dress-code',
      metaTitle: 'Trang phục khi thăm Chùa Thiên Mụ – Quy định & gợi ý | Huế',
      metaDescription: 'Gợi ý trang phục kín đáo khi thăm Chùa Thiên Mụ: che vai, quần váy dài qua đầu gối. Tôn trọng không gian thờ tự Phật giáo.',
      ogTitle: 'Trang phục khi thăm Chùa Thiên Mụ – Quy định & gợi ý',
      ogDescription: 'Trang phục kín đáo, tôn trọng không gian thờ tự khi thăm chùa ở Huế.',
      breadcrumb: 'Chùa Thiên Mụ → Trang phục',
      hero: { kicker: 'Tham quan · Huế', title: 'Trang phục khi thăm chùa', sub: 'Chùa Thiên Mụ là nơi tu hành Phật giáo đang hoạt động. Chọn trang phục kín đáo để tôn trọng không gian thờ tự.' },
      heroImage: '/images/thien-mu-main-hall-real.jpg',
      sections: [
        { type: 'lead', body: 'Không có biển cấm cụ thể được xác minh, nhưng quy tắc chung khi vào chùa Việt Nam là ăn mặc kín đáo, lịch sự.' },
        { type: 'info', title: 'Gợi ý cơ bản', rows: [
          { label: 'Che vai', value: 'Áo có tay, tránh hở vai và ngực' },
          { label: 'Quần / váy', value: 'Dài qua đầu gối là phù hợp' },
          { label: 'Giày', value: 'Tiện tháo dép khi vào điện thờ' }
        ] },
        { type: 'callout', tone: 'info', title: 'Khi vào điện thờ', body: 'Tháo giày dép trước khi bước vào chính điện, giữ im lặng và tránh quay lưng với tượng Phật khi chụp ảnh.' },
        { type: 'map', note: 'Xác nhận lối vào và khu vực thờ tự theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Có được mặc váy ngắn không?', 'Nên chọn váy dài qua đầu gối để tôn trọng không gian thờ tự.'],
        ['Có phải bỏ giày trong chùa không?', 'Có, tháo giày dép khi bước vào chính điện và các gian thờ.'],
        ['Mặc gì mùa hè cho mát?', 'Áo cotton tay dài mỏng, quần dài thoáng; vừa mát vừa lịch sự.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'photography-tips': {
      path: 'photography-tips',
      metaTitle: 'Chụp ảnh Chùa Thiên Mụ – Góc đẹp & lưu ý | Huế',
      metaDescription: 'Góc chụp ảnh Chùa Thiên Mụ: tháp Phước Duyên, sông Hương, chính điện. Lưu ý giờ sáng/chiều và tôn trọng không gian thờ tự.',
      ogTitle: 'Chụp ảnh Chùa Thiên Mụ – Góc đẹp & lưu ý',
      ogDescription: 'Tháp Phước Duyên, sông Hương và chính điện; giờ sáng chiều và quy tắc chụp ảnh.',
      breadcrumb: 'Chùa Thiên Mụ → Chụp ảnh',
      hero: { kicker: 'Trải nghiệm · Huế', title: 'Chụp ảnh Chùa Thiên Mụ', sub: 'Tháp Phước Duyên bảy tầng là biểu tượng dễ nhận diện nhất. Sông Hương và chính điện cũng cho khung hình đẹp.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ nằm trên đồi Hà Khê hướng ra sông Hương, nên góc máy từ sông hoặc từ sân chùa đều đẹp.' },
        { type: 'cards', kicker: 'Góc chính', title: 'Nên chụp đâu', items: [
          { title: 'Tháp Phước Duyên', body: 'Tháp bảy tầng làm điểm nhấn trung tâm.' },
          { title: 'Sông Hương', body: 'Chụp chùa từ thuyền hoặc bờ sông.' },
          { title: 'Chính điện', body: 'Kiến trúc mái và sân chùa.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Giờ và phép lịch sự', body: 'Sáng sớm và cuối chiều ánh sáng đẹp nhất. Trong điện thờ, tránh đèn flash và quay lưng với tượng Phật.' },
        { type: 'map', note: 'Xác nhận bến sông và sân chùa theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Giờ nào chụp đẹp nhất?', 'Sáng sớm và cuối chiều, khi ánh sáng mềm và tránh nắng gắt.'],
        ['Có bay flycam được không?', 'Chưa xác minh; khu vực tâm linh thường hạn chế. Hỏi ban quản lý trước.'],
        ['Chụp ảnh cưới có được không?', 'Có thể, nhưng giữ kín đáo và tôn trọng không gian thờ tự.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'facilities-restrooms': {
      path: 'facilities-restrooms',
      metaTitle: 'Tiện ích Chùa Thiên Mụ – Nhà vệ sinh & nghỉ chân | Huế',
      metaDescription: 'Tiện ích tại Chùa Thiên Mụ: nhà vệ sinh, chỗ nghỉ chân, nước uống. Thông tin chưa xác minh, hãy hỏi ban quản lý khi đến.',
      ogTitle: 'Tiện ích Chùa Thiên Mụ – Nhà vệ sinh & nghỉ chân',
      ogDescription: 'Nhà vệ sinh, nghỉ chân và lưu ý tiện ích khi thăm chùa ở Huế.',
      breadcrumb: 'Chùa Thiên Mụ → Tiện ích',
      hero: { kicker: 'Tham quan · Huế', title: 'Tiện ích tại chùa', sub: 'Chùa Thiên Mụ là khuôn viên rộng trên đồi Hà Khê. Các tiện ích cơ bản thường có nhưng chưa được xác minh chính thức.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Du khách hỏi nhiều về nhà vệ sinh và chỗ nghỉ chân. Các công trình này thường có trong khuôn viên chùa, nhưng tình trạng cụ thể chưa xác minh.' },
        { type: 'info', title: 'Tiện ích thường có', rows: [
          { label: 'Nhà vệ sinh', value: 'Thường có trong khuôn viên; chưa xác minh' },
          { label: 'Nghỉ chân', value: 'Sân chùa, ghế đá ven sông' },
          { label: 'Nước uống', value: 'Mang theo; không hứa có bán tại chỗ' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Chưa xác minh', body: 'Không có nguồn chính thức về nhà vệ sinh và tiện ích. Hãy hỏi ban quản lý hoặc hướng dẫn viên khi đến.' },
        { type: 'map', note: 'Xác nhận lối đi và công trình phụ theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Có nhà vệ sinh không?', 'Thường có trong khuôn viên chùa, nhưng chưa xác minh tình trạng và vị trí cụ thể.'],
        ['Có chỗ nghỉ chân không?', 'Có sân chùa và ghế đá ven sông Hương để nghỉ.'],
        ['Có bán nước không?', 'Chưa xác minh; nên tự mang nước uống theo.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'accessibility': {
      path: 'accessibility',
      metaTitle: 'Chùa Thiên Mụ tiếp cận thế nào – Xe lăn, trẻ em, người già | Huế',
      metaDescription: 'Khả năng tiếp cận Chùa Thiên Mụ: bậc thang, xe lăn, trẻ em và người già. Lối đi dốc, hãy chuẩn bị trước.',
      ogTitle: 'Chùa Thiên Mụ tiếp cận thế nào – Xe lăn, trẻ em, người già',
      ogDescription: 'Bậc thang, xe lăn và lưu ý cho trẻ em, người già khi thăm chùa.',
      breadcrumb: 'Chùa Thiên Mụ → Tiếp cận',
      hero: { kicker: 'Tham quan · Huế', title: 'Khả năng tiếp cận', sub: 'Chùa nằm trên đồi Hà Khê, lối lên chủ yếu là bậc thang. Người già, trẻ em và xe lăn cần lưu ý độ dốc.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ có cảnh quan đẹp nhưng địa hình dốc. Việc tiếp cận thuận tiện hơn nếu chuẩn bị trước.' },
        { type: 'info', title: 'Lưu ý tiếp cận', rows: [
          { label: 'Bậc thang', value: 'Lối chính là bậc thang dốc' },
          { label: 'Xe lăn', value: 'Chưa xác minh lối riêng; hỏi ban quản lý' },
          { label: 'Trẻ em / người già', value: 'Đi chậm, mang nước và giày chống trượt' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Chưa xác minh', body: 'Không có nguồn chính thức về lối tiếp cận xe lăn. Hãy hỏi ban quản lý khi đến.' },
        { type: 'map', note: 'Xem độ dốc lối vào theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Đi xe lăn được không?', 'Chưa xác minh lối riêng; liên hệ ban quản lý trước khi đến.'],
        ['Có phù hợp cho người già không?', 'Phù hợp nếu đi chậm; lối dốc cần thận trọng.'],
        ['Đem trẻ em đi có sao không?', 'Được, nhưng giữ trẻ gần và cẩn thận bậc thang ven sông.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'maps-navigation': {
      path: 'maps-navigation',
      metaTitle: 'Bản đồ & chỉ đường Chùa Thiên Mụ – Google Maps | Huế',
      metaDescription: 'Bản đồ và chỉ đường Chùa Thiên Mụ: tìm theo tên chùa, xác nhận lối vào Kim Long. Không dựa vào một tọa độ duy nhất.',
      ogTitle: 'Bản đồ & chỉ đường Chùa Thiên Mụ – Google Maps',
      ogDescription: 'Tìm chùa theo tên trên bản đồ, xác nhận lối vào và điểm trả khách.',
      breadcrumb: 'Chùa Thiên Mụ → Bản đồ',
      hero: { kicker: 'Đường đi · Huế', title: 'Bản đồ & chỉ đường', sub: 'Maps ghi Kim Long, Huế là tham chiếu khu vực. Tìm theo tên chùa và xác nhận lối vào với nhà vận chuyển.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ nằm trên đồi Hà Khê, phía tây trung tâm Huế, ven sông Hương. Tọa độ duy nhất có thể không khớp với lối vào thực tế.' },
        { type: 'steps', kicker: 'Cách tìm', title: 'Ba bước chỉ đường', items: [
          { title: 'Tìm tên chùa', body: 'Gõ “Chùa Thiên Mụ” hoặc “Thien Mu Pagoda” trên bản đồ.' },
          { title: 'Xác nhận lối vào', body: 'Hỏi tài xế điểm trả khách gần cổng chùa.' },
          { title: 'So sánh tuyến', body: 'Xem vài tuyến từ trung tâm để chọn đường hợp lý.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Không dựa vào một tọa độ', body: 'Maps liệt kê Kim Long là tham chiếu, không phải cổng vào chính xác. Luôn xác nhận khi đến.' },
        { type: 'map', note: 'Mở Google Maps theo tên chùa để xem lối vào và tuyến đường thực tế.' }
      ],
      faqs: [
        ['Gõ gì trên bản đồ?', '“Chùa Thiên Mụ” (tiếng Việt) hoặc “Thien Mu Pagoda” (tiếng Anh).'],
        ['Tọa độ có đúng không?', 'Chưa xác minh; hãy dùng tên chùa và xác nhận lối vào.'],
        ['Từ trung tâm đi mất bao lâu?', 'Tùy phương tiện; thường quãng ngắn về phía tây Huế.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'founder-nguyen-hoang': {
      path: 'founder-nguyen-hoang',
      metaTitle: 'Chúa Nguyễn Hoàng & Chùa Thiên Mụ – Người sáng lập (1601) | Huế',
      metaDescription: 'Chùa Thiên Mụ do Chúa Nguyễn Hoàng khởi dựng năm 1601 bên sông Hương. Tìm hiểu vị chúa khai sinh chùa và cố đô Huế.',
      ogTitle: 'Chúa Nguyễn Hoàng & Chùa Thiên Mụ – Người sáng lập (1601)',
      ogDescription: 'Nguyễn Hoàng khởi dựng chùa năm 1601; bối cảnh lịch sử cố đô Huế.',
      breadcrumb: 'Chùa Thiên Mụ → Lịch sử → Nguyễn Hoàng',
      hero: { kicker: 'Lịch sử · Huế', title: 'Chúa Nguyễn Hoàng và chùa', sub: 'Theo tư liệu, chùa do Chúa Nguyễn Hoàng cho xây dựng năm 1601, gắn với sự hình thành cố đô Huế về sau.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ được cho là do Chúa Nguyễn Hoàng khởi dựng năm 1601, đánh dấu một trong những công trình tôn giáo sớm nhất vùng Thuận Hóa.' },
        { type: 'prose', title: 'Vị chúa khai sinh', html: 'Nguyễn Hoàng (1525–1613) là người mở mang vùng Thuận Hóa, tiền thân của xứ Đàng Trong. Việc dựng chùa bên sông Hương gắn với cảnh quan và tâm linh vùng đất mới.' },
        { type: 'info', title: 'Mốc lịch sử', rows: [
          { label: 'Năm khởi dựng', value: '1601 (theo tư liệu)' },
          { label: 'Người sáng lập', value: 'Chúa Nguyễn Hoàng' },
          { label: 'Bối cảnh', value: 'Khai mở vùng Thuận Hóa, cố đô Huế' }
        ] },
        { type: 'callout', tone: 'info', title: 'Nguồn tư liệu', body: 'Năm 1601 và vai trò Nguyễn Hoàng được nhiều nguồn du lịch và lịch sử Huế dẫn lại; chi tiết cụ thể xem tại nguồn.' },
        { type: 'map', note: 'Xác nhận vị trí chùa theo tên trên bản đồ khi đến.' }
      ],
      faqs: [
        ['Ai sáng lập chùa?', 'Theo tư liệu, Chúa Nguyễn Hoàng cho xây dựng chùa năm 1601.'],
        ['Chùa có từ năm nào?', 'Năm 1601 theo các nguồn lịch sử và du lịch Huế.'],
        ['Nguyễn Hoàng là ai?', 'Vị chúa khai mở vùng Thuận Hóa, nền tảng của cố đô Huế sau này.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'nguyen-dynasty': {
      path: 'nguyen-dynasty',
      metaTitle: 'Chùa Thiên Mụ & triều Nguyễn – Di sản cố đô Huế | Lịch sử',
      metaDescription: 'Vai trò Chùa Thiên Mụ dưới triều Nguyễn: chùa thuộc hoàng quyền, gắn với cố đô Huế. Tìm hiểu di sản thời Nguyễn.',
      ogTitle: 'Chùa Thiên Mụ & triều Nguyễn – Di sản cố đô Huế',
      ogDescription: 'Chùa gắn với hoàng quyền triều Nguyễn và quần thể di sản Huế.',
      breadcrumb: 'Chùa Thiên Mụ → Lịch sử → Triều Nguyễn',
      hero: { kicker: 'Lịch sử · Huế', title: 'Chùa và triều Nguyễn', sub: 'Dưới triều Nguyễn, Chùa Thiên Mụ thuộc quần thể di tích cố đô Huế, từng được liệt vào “Thần Kinh nhị thập cảnh”.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ gắn bó với lịch sử cố đô Huế và triều Nguyễn, thường xuất hiện trong các miêu tả cảnh quan kinh thành xưa.' },
        { type: 'prose', title: 'Dưới thời Nguyễn', html: 'Chùa nằm trong vùng cảnh quan kinh thành Huế và từng được xếp vào “Thần Kinh nhị thập cảnh” — hai mươi cảnh đẹp của kinh đô. Nhiều nguồn du lịch Huế dẫn lại vai trò này.' },
        { type: 'info', title: 'Góc nhìn di sản', rows: [
          { label: 'Thuộc', value: 'Quần thể di tích cố đô Huế' },
          { label: 'Cảnh quan', value: 'Một trong “Thần Kinh nhị thập cảnh”' },
          { label: 'Thời Nguyễn', value: 'Gắn với hoàng quyền kinh thành' }
        ] },
        { type: 'callout', tone: 'info', title: 'Nguồn tư liệu', body: 'Chi tiết lịch sử triều Nguyễn và chùa xem tại các nguồn du lịch và di sản Huế.' },
        { type: 'map', note: 'Xác nhận vị trí chùa theo tên trên bản đồ khi đến.' }
      ],
      faqs: [
        ['Chùa có thuộc di sản Nguyễn không?', 'Chùa nằm trong quần thể di tích cố đô Huế được công nhận.'],
        ['“Thần Kinh nhị thập cảnh” là gì?', 'Hai mươi cảnh đẹp của kinh thành Huế xưa; chùa thường được liệt vào đó.'],
        ['Triều Nguyễn xây chùa không?', 'Chùa khởi dựng 1601 (Nguyễn Hoàng); triều Nguyễn sau này gắn chùa với cảnh quan hoàng cung.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Quần thể di tích Cố đô Huế</a>'
      ],
      updated: '2026-11-10'
    },
    'pagoda-architecture': {
      path: 'pagoda-architecture',
      metaTitle: 'Kiến trúc Chùa Thiên Mụ – Tháp Phước Duyên & chính điện | Huế',
      metaDescription: 'Kiến trúc Chùa Thiên Mụ: tháp Phước Duyên bảy tầng, chính điện, sân chùa hướng sông. Tìm hiểu bố cục và vật liệu.',
      ogTitle: 'Kiến trúc Chùa Thiên Mụ – Tháp Phước Duyên & chính điện',
      ogDescription: 'Tháp bảy tầng, chính điện và bố cục chùa hướng sông Hương.',
      breadcrumb: 'Chùa Thiên Mụ → Kiến trúc',
      hero: { kicker: 'Kiến trúc · Huế', title: 'Kiến trúc chùa', sub: 'Điểm nhấn là tháp Phước Duyên bảy tầng và các điện thờ dọc trục hướng ra sông Hương.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ bố cục theo trục dọc từ cổng lên đồi, với tháp Phước Duyên ở trung tâm và các điện thờ quanh sân.' },
        { type: 'cards', kicker: 'Hạng mục', title: 'Các phần chính', items: [
          { title: 'Tháp Phước Duyên', body: 'Tháp bảy tầng, biểu tượng của chùa.' },
          { title: 'Chính điện', body: 'Nơi thờ Phật và sinh hoạt tôn giáo.' },
          { title: 'Sân & cổng', body: 'Mở hướng sông Hương, cảnh quan rộng.' }
        ] },
        { type: 'prose', title: 'Bố cục', html: 'Công trình theo trục từ chân đồi lên đỉnh, tháp Phước Duyên đặt ở vị trí trung tâm nhìn xuống sông. Các điện thờ nối tiếp nhau tạo không gian thanh tịnh.' },
        { type: 'callout', tone: 'info', title: 'Tháp Phước Duyên', body: 'Tháp được xây sau thời khởi dựng 1601; chi tiết niên đại xem tại nguồn di sản.' },
        { type: 'map', note: 'Xác nhận vị trí tháp và điện theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Tháp mấy tầng?', 'Tháp Phước Duyên có bảy tầng.'],
        ['Chùa hướng nào?', 'Hướng ra sông Hương, phía tây trung tâm Huế.'],
        ['Có mấy điện thờ?', 'Nhiều điện quanh sân; chi tiết xem tại chùa khi đến.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'the-old-car': {
      path: 'the-old-car',
      metaTitle: 'Chiếc xe cũ Chùa Thiên Mụ – Kết nối lịch sử 1963 | Huế',
      metaDescription: 'Chiếc ô tô cũ trong chùa gắn với Hòa thượng Thích Quảng Đức và sự kiện 1963. Tìm hiểu ý nghĩa lịch sử, không phải hiện vật trưng bày xác nhận.',
      ogTitle: 'Chiếc xe cũ Chùa Thiên Mụ – Kết nối lịch sử 1963',
      ogDescription: 'Ô tô gắn với Thích Quảng Đức và bối cảnh lịch sử 1963 tại chùa.',
      breadcrumb: 'Chùa Thiên Mụ → Lịch sử → Chiếc xe',
      hero: { kicker: 'Lịch sử · Huế', title: 'Chiếc ô tô trong chùa', sub: 'Trong khuôn viên có chiếc ô tô gắn với Hòa thượng Thích Quảng Đức. Ý nghĩa lịch sử cần xem nguồn xác minh.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chiếc ô tô trong chùa thường được nhắc đến gắn với Hòa thượng Thích Quảng Đức và sự kiện lịch sử 1963. Đây là hiện vật mang ý nghĩa tưởng niệm.' },
        { type: 'prose', title: 'Bối cảnh', html: 'Năm 1963, Hòa thượng Thích Quảng Đức đã để lại dấu ấn lịch sử gắn với Phật giáo Việt Nam. Chiếc xe trong chùa được nhiều nguồn du lịch nhắc đến như vật chứng ký ức.' },
        { type: 'callout', tone: 'warn', title: 'Xác minh khi đến', body: 'Thông tin hiện vật và niên đại chưa được chùa xác nhận chính thức tại đây. Hãy xem bảng trình bày hoặc hỏi ban quản lý.' },
        { type: 'map', note: 'Xác nhận vị trí trưng bày theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Chiếc xe gắn với ai?', 'Thường được nhắc gắn với Hòa thượng Thích Quảng Đức.'],
        ['Có phải xe nguyên bản không?', 'Chưa xác minh; xem bảng trình bày tại chùa.'],
        ['Vào xem có mất phí không?', 'Tham quan chùa thường miễn phí; chi tiết xem trang tổng quan.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'the-bell': {
      path: 'the-bell',
      metaTitle: 'Chuông Chùa Thiên Mụ – Đại Hồng Chung & ý nghĩa | Huế',
      metaDescription: 'Chiếc chuông lớn (Đại Hồng Chung) tại Chùa Thiên Mụ: kích thước, âm thanh và ý nghĩa tâm linh. Thông tin chưa xác minh, hãy hỏi ban quản lý.',
      ogTitle: 'Chuông Chùa Thiên Mụ – Đại Hồng Chung & ý nghĩa',
      ogDescription: 'Chuông lớn, âm thanh và ý nghĩa tâm linh tại chùa bên sông Hương.',
      breadcrumb: 'Chùa Thiên Mụ → Kiến trúc → Chuông',
      hero: { kicker: 'Kiến trúc · Huế', title: 'Chiếc chuông lớn', sub: 'Chùa có chuông lớn được nhắc đến trong tư liệu. Âm chuông vang xa là nét quen thuộc của cảnh chùa sông Hương.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chuông chùa là một trong những âm thanh đặc trưng của Chùa Thiên Mụ bên sông Hương, thường xuất hiện trong miêu tả cảnh quan Huế.' },
        { type: 'info', title: 'Về chuông', rows: [
          { label: 'Tên gọi', value: 'Đại Hồng Chung (theo tư liệu)' },
          { label: 'Kích thước', value: 'Lớn; niên đại chưa xác minh' },
          { label: 'Ý nghĩa', value: 'Âm thanh tâm linh, báo giờ hành lễ' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Chưa xác minh', body: 'Niên đại và kích thước chuông chưa được chùa xác nhận tại đây. Hãy hỏi ban quản lý.' },
        { type: 'map', note: 'Xác nhận vị trí chuông theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Chùa có chuông lớn không?', 'Có, chuông lớn được nhắc trong tư liệu; niên đại chưa xác minh.'],
        ['Có nghe chuông không?', 'Chuông vang trong giờ hành lễ; không hứa lịch cố định.'],
        ['Chuông đúc năm nào?', 'Chưa xác minh; xem nguồn di sản Huế.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'legend-of-thien-mu': {
      path: 'legend-of-thien-mu',
      metaTitle: 'Truyền thuyết Chùa Thiên Mụ – Bà chúa sông Hương | Huế',
      metaDescription: 'Truyền thuyết tên chùa: điềm báo người phụ nữ hiện ra trên đồi Hà Khê bên sông Hương. Chuyện dân gian gắn với tên “Thiên Mụ”.',
      ogTitle: 'Truyền thuyết Chùa Thiên Mụ – Bà chúa sông Hương',
      ogDescription: 'Điềm báo và truyền thuyết về tên gọi Thiên Mụ bên sông Hương.',
      breadcrumb: 'Chùa Thiên Mụ → Lịch sử → Truyền thuyết',
      hero: { kicker: 'Lịch sử · Huế', title: 'Truyền thuyết chùa', sub: 'Tên “Thiên Mụ” (bà chúa trời) gắn với truyền thuyết người phụ nữ hiện ra báo mộng trên đồi Hà Khê.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Truyền thuyết kể rằng một bà lão hiện ra trên đồi Hà Khê bên sông Hương, báo điềm là nơi sẽ có chùa ngôi quốc tự, gắn với tên “Thiên Mụ”.' },
        { type: 'prose', title: 'Câu chuyện', html: 'Theo lời kể dân gian được nhiều nguồn du lịch Huế dẫn lại, bà lão tự xưng là Thiên Mụ hiện lên báo rằng trên đồi này sẽ xuất hiện chùa ngôi quốc tự để phật pháp hưng long. Nguyễn Hoàng sau đó cho dựng chùa và lấy tên ấy.' },
        { type: 'callout', tone: 'info', title: 'Truyền thuyết, không phải sử liệu', body: 'Đây là chuyện dân gian giải thích tên gọi, không phải ghi chép lịch sử xác minh.' },
        { type: 'map', note: 'Xác nhận vị trí đồi Hà Khê theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['“Thiên Mụ” nghĩa là gì?', '“Thiên Mụ” gợi ý “bà chúa trời” trong truyền thuyết.'],
        ['Truyền thuyết kể gì?', 'Bà lão báo điềm trên đồi Hà Khê về chùa ngôi quốc tự.'],
        ['Có đúng lịch sử không?', 'Là truyền thuyết giải thích tên gọi, không phải sử liệu.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'religious-significance': {
      path: 'religious-significance',
      metaTitle: 'Ý nghĩa tôn giáo Chùa Thiên Mụ – Phật giáo Việt Nam | Huế',
      metaDescription: 'Chùa Thiên Mụ là chùa hoạt động Phật giáo: thờ Phật, tụng kinh, sinh hoạt tu học. Tôn trọng không gian thờ tự khi tham quan.',
      ogTitle: 'Ý nghĩa tôn giáo Chùa Thiên Mụ – Phật giáo Việt Nam',
      ogDescription: 'Chùa là nơi tu hành Phật giáo; tôn trọng thờ tự khi thăm.',
      breadcrumb: 'Chùa Thiên Mụ → Ý nghĩa tôn giáo',
      hero: { kicker: 'Tâm linh · Huế', title: 'Ý nghĩa tôn giáo', sub: 'Chùa Thiên Mụ là cơ sở Phật giáo đang hoạt động, nơi tụng kinh và tu học của tăng ni, không chỉ là điểm tham quan.' },
      heroImage: '/images/thien-mu-main-hall-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ là chùa Phật giáo Việt Nam còn hoạt động, nên thờ tự và sinh hoạt tôn giáo là ưu tiên hàng đầu.' },
        { type: 'cards', kicker: 'Sinh hoạt', title: 'Chùa còn sống', items: [
          { title: 'Thờ Phật', body: 'Chính điện thờ Phật, nơi hành lễ.' },
          { title: 'Tu học', body: 'Tăng ni sinh hoạt tu tập thường ngày.' },
          { title: 'Lễ hội', body: 'Các ngày rằm, lễ Phật giáo tại chùa.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Ưu tiên không gian thờ tự', body: 'Khi tham quan, hãy nhường không gian hành lễ, giữ im lặng và kín đáo.' },
        { type: 'map', note: 'Xác nhận khu vực thờ tự theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Chùa có đang hoạt động không?', 'Có, là chùa Phật giáo còn sinh hoạt tu học.'],
        ['Có được dự lễ không?', 'Du khách có thể quan sát tôn trọng; tránh làm gián đoạn hành lễ.'],
        ['Có cần đóng góp không?', 'Tự nguyện; không bắt buộc khi tham quan.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/tomb-of-tu-duc': {
      path: 'nearby/tomb-of-tu-duc',
      metaTitle: 'Khiêm Lăng (Vua Tự Đức) gần Chùa Thiên Mụ | Huế',
      metaDescription: 'Khiêm Lăng – lăng Tự Đức, di sản Huế gần Chùa Thiên Mụ. Tìm hiểu vị trí, cảnh quan và lưu ý vé/giờ chưa xác minh.',
      ogTitle: 'Khiêm Lăng (Vua Tự Đức) gần Chùa Thiên Mụ',
      ogDescription: 'Lăng Tự Đức, di sản UNESCO gần chùa; vé và giờ chưa xác minh.',
      breadcrumb: 'Chùa Thiên Mụ → Lân cận → Khiêm Lăng',
      hero: { kicker: 'Lân cận · Huế', title: 'Khiêm Lăng (Vua Tự Đức)', sub: 'Lăng Tự Đức là di tích riêng thuộc quần thể cố đô Huế, thường được kết hợp với Chùa Thiên Mụ trong hành trình Huế.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Khiêm Lăng là nơi an táng vua Tự Đức, nằm trong quần thể di sản cố đô Huế. Đây là di tích riêng, không thuộc khuôn viên chùa.' },
        { type: 'info', title: 'Thông tin cơ bản', rows: [
          { label: 'Di sản', value: 'UNESCO (Cố đô Huế)' },
          { label: 'Vé / giờ', value: 'Riêng — chưa xác minh, xem nguồn chính thức' },
          { label: 'Vị trí', value: 'Gần chùa, phía tây Huế' }
        ] },
        { type: 'cards', kicker: 'Điểm nhấn', title: 'Xem gì', items: [
          { title: 'Hồ nước', body: 'Cảnh quan hồ và cầu trong lăng.' },
          { title: 'Điện thờ', body: 'Khu thờ vua và hoàng hậu.' },
          { title: 'Vườn thông', body: 'Không gian xanh quanh lăng.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Vé và giờ riêng', body: 'Lăng có vé, giờ riêng độc lập với chùa. Kiểm tra nguồn chính thức trước khi đi.' },
        { type: 'map', note: 'Tìm Khiêm Lăng trên bản đồ; xác nhận cổng vào và vé riêng.' }
      ],
      faqs: [
        ['Khiêm Lăng gần chùa không?', 'Một quãng ngắn về phía tây Huế; thường gộp chung hành trình.'],
        ['Có vé riêng không?', 'Có, lăng có vé riêng chưa xác minh; xem nguồn chính thức.'],
        ['Đi từ chùa sao?', 'Taxi hoặc xe máy về phía tây Huế; xác nhận tuyến với tài xế.']
      ],
      sources: [
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Quần thể di tích Cố đô Huế</a>',
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/tomb-of-khai-dinh': {
      path: 'nearby/tomb-of-khai-dinh',
      metaTitle: 'Ứng Lăng (Vua Khải Định) gần Chùa Thiên Mụ | Huế',
      metaDescription: 'Ứng Lăng – lăng Khải Định, di sản Huế gần Chùa Thiên Mụ. Kiến trúc pha trộn Đông Tây; vé/giờ chưa xác minh.',
      ogTitle: 'Ứng Lăng (Vua Khải Định) gần Chùa Thiên Mụ',
      ogDescription: 'Lăng Khải Định, di sản UNESCO gần chùa; vé và giờ chưa xác minh.',
      breadcrumb: 'Chùa Thiên Mụ → Lân cận → Ứng Lăng',
      hero: { kicker: 'Lân cận · Huế', title: 'Ứng Lăng (Vua Khải Định)', sub: 'Lăng Khải Định nổi bật với kiến trúc pha trộn Đông – Tây, nằm trong quần thể di sản cố đô Huế.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Ứng Lăng là nơi an táng vua Khải Định, một trong những lăng tẩm Huế với phong cách eclectic Đông – Tây.' },
        { type: 'info', title: 'Thông tin cơ bản', rows: [
          { label: 'Di sản', value: 'UNESCO (Cố đô Huế)' },
          { label: 'Vé / giờ', value: 'Riêng — chưa xác minh' },
          { label: 'Vị trí', value: 'Phía nam trung tâm Huế' }
        ] },
        { type: 'cards', kicker: 'Điểm nhấn', title: 'Xem gì', items: [
          { title: 'Bậc thang', body: 'Hàng bậc dẫn lên điện thờ.' },
          { title: 'Sảnh chính', body: 'Trang trí tranh sành sứ, pha trộn phong cách.' },
          { title: 'Tượng đá', body: 'Hàng tượng quan viên hai bên.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Vé và giờ riêng', body: 'Lăng có vé, giờ riêng độc lập với chùa. Kiểm tra nguồn chính thức trước khi đi.' },
        { type: 'map', note: 'Tìm Ứng Lăng trên bản đồ; xác nhận cổng vào và vé riêng.' }
      ],
      faqs: [
        ['Ứng Lăng có gần chùa không?', 'Cách chùa một đoạn về phía nam Huế; gộp chung hành trình được.'],
        ['Có vé riêng không?', 'Có, vé riêng chưa xác minh; xem nguồn chính thức.'],
        ['Kiến trúc đặc biệt gì?', 'Pha trộn Đông – Tây, nổi bật với sảnh trang trí sành sứ.']
      ],
      sources: [
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Quần thể di tích Cố đô Huế</a>',
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/tomb-of-minh-mang': {
      path: 'nearby/tomb-of-minh-mang',
      metaTitle: 'Hiếu Lăng (Vua Minh Mạng) gần Chùa Thiên Mụ | Huế',
      metaDescription: 'Hiếu Lăng – lăng Minh Mạng, di sản Huế gần Chùa Thiên Mụ. Bố cục hài hòa giữa hồ và đồi; vé/giờ chưa xác minh.',
      ogTitle: 'Hiếu Lăng (Vua Minh Mạng) gần Chùa Thiên Mụ',
      ogDescription: 'Lăng Minh Mạng, di sản UNESCO gần chùa; vé và giờ chưa xác minh.',
      breadcrumb: 'Chùa Thiên Mụ → Lân cận → Hiếu Lăng',
      hero: { kicker: 'Lân cận · Huế', title: 'Hiếu Lăng (Vua Minh Mạng)', sub: 'Hiếu Lăng nổi bật với bố cục cân đối giữa mặt nước và đồi núi, thuộc quần thể di sản cố đô Huế.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Hiếu Lăng là nơi an táng vua Minh Mạng, được đánh giá là một trong những lăng tẩm cân đối và đẹp nhất Huế.' },
        { type: 'info', title: 'Thông tin cơ bản', rows: [
          { label: 'Di sản', value: 'UNESCO (Cố đô Huế)' },
          { label: 'Vé / giờ', value: 'Riêng — chưa xác minh' },
          { label: 'Vị trí', value: 'Phía nam Huế, ven sông' }
        ] },
        { type: 'cards', kicker: 'Điểm nhấn', title: 'Xem gì', items: [
          { title: 'Mặt nước', body: 'Hồ bao quanh tạo cảnh quan.' },
          { title: 'Cổng và điện', body: 'Trục kiến trúc đối xứng.' },
          { title: 'Cây xanh', body: 'Không gian rợp bóng.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Vé và giờ riêng', body: 'Lăng có vé, giờ riêng độc lập với chùa. Kiểm tra nguồn chính thức trước khi đi.' },
        { type: 'map', note: 'Tìm Hiếu Lăng trên bản đồ; xác nhận cổng vào và vé riêng.' }
      ],
      faqs: [
        ['Hiếu Lăng có gần chùa không?', 'Cách chùa một đoạn về phía nam Huế; gộp hành trình được.'],
        ['Có vé riêng không?', 'Có, vé riêng chưa xác minh; xem nguồn chính thức.'],
        ['Lăng nào đẹp nhất?', 'Tùy sở thích; Hiếu Lăng thường được khen cân đối.']
      ],
      sources: [
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Quần thể di tích Cố đô Huế</a>',
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/dong-ba-market': {
      path: 'nearby/dong-ba-market',
      metaTitle: 'Chợ Đông Ba gần Chùa Thiên Mụ | Ẩm thực & mua sắm Huế',
      metaDescription: 'Chợ Đông Ba – chợ truyền thống Huế gần Chùa Thiên Mụ. Mua sắm, ẩm thực đường phố và đặc sản; giờ chưa xác minh.',
      ogTitle: 'Chợ Đông Ba gần Chùa Thiên Mụ | Ẩm thực & mua sắm',
      ogDescription: 'Chợ truyền thống Huế: ẩm thực, đặc sản và mua sắm.',
      breadcrumb: 'Chùa Thiên Mụ → Lân cận → Chợ Đông Ba',
      hero: { kicker: 'Lân cận · Huế', title: 'Chợ Đông Ba', sub: 'Chợ Đông Ba là chợ truyền thống lớn bên sông Hương, nơi tập trung ẩm thực đường phố và đặc sản Huế.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chợ Đông Ba nằm gần cầu Trường Tiền, bên sông Hương, thuận tiện ghé sau khi thăm chùa.' },
        { type: 'cards', kicker: 'Tại chợ', title: 'Trải nghiệm', items: [
          { title: 'Ẩm thực', body: 'Bún bò, chè, bánh lọc và đồ ăn đường phố.' },
          { title: 'Đặc sản', body: 'Mắm, trái cây và quà Huế.' },
          { title: 'Mua sắm', body: 'Đồ lưu niệm và vải vóc.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Giờ chưa xác minh', body: 'Giờ chợ có thể thay đổi; hỏi hoặc xem nguồn địa phương khi đến.' },
        { type: 'map', note: 'Tìm Chợ Đông Ba trên bản đồ; xác nhận lối vào gần cầu Trường Tiền.' }
      ],
      faqs: [
        ['Chợ gần chùa không?', 'Cách chùa qua trung tâm, gần cầu Trường Tiền.'],
        ['Có ăn uống không?', 'Có, nhiều quán ẩm thực đường phố trong chợ.'],
        ['Giờ mở cửa?', 'Chưa xác minh; chợ thường nhộn nhịp ban ngày.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/perfume-river': {
      path: 'nearby/perfume-river',
      metaTitle: 'Sông Hương & Chùa Thiên Mụ – Cảnh quan Huế | Du lịch',
      metaDescription: 'Sông Hương chảy qua Chùa Thiên Mụ: ngắm cảnh từ thuyền, bờ sông và hoàng hôn. Tìm hiểu giá trị cảnh quan sông.',
      ogTitle: 'Sông Hương & Chùa Thiên Mụ – Cảnh quan Huế',
      ogDescription: 'Sông Hương, thuyền và hoàng hôn bên chùa Thiên Mụ.',
      breadcrumb: 'Chùa Thiên Mụ → Lân cận → Sông Hương',
      hero: { kicker: 'Lân cận · Huế', title: 'Sông Hương', sub: 'Sông Hương ôm lấy đồi Hà Khê, tạo nên cảnh quan đặc trưng của chùa và cố đô Huế.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Sông Hương là hình ảnh gắn liền với Huế và Chùa Thiên Mụ, thường xuất hiện trong thơ ca và du lịch.' },
        { type: 'cards', kicker: 'Trải nghiệm', title: 'Trên sông', items: [
          { title: 'Ngắm từ thuyền', body: 'Chùa và tháp hiện ra từ mặt nước.' },
          { title: 'Bờ sông', body: 'Dạo bờ, chụp ảnh hoàng hôn.' },
          { title: 'Âm nhạc', body: 'Ca Huế trên sông vào một số dịp.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Thuyền chưa mặc định', body: 'Dịch vụ thuyền cần xác nhận với nhà cung cấp; xem trang hành trình sông.' },
        { type: 'map', note: 'Xác nhận bến sông theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Sông Hương ở đâu?', 'Chảy qua trung tâm và chân đồi Hà Khê, bên chùa.'],
        ['Có đi thuyền không?', 'Có dịch vụ nhưng cần xác nhận; xem trang lộ trình.'],
        ['Hoàng hôn đẹp không?', 'Chiều tà trên sông và tháp Phước Duyên rất đẹp.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'food/vegetarian-food-at-pagoda': {
      path: 'food/vegetarian-food-at-pagoda',
      metaTitle: 'Ăn chay tại Chùa Thiên Mụ – Cơm chay Huế | Ẩm thực',
      metaDescription: 'Ăn chay tại Chùa Thiên Mụ: cơm chay ngày rằm, món chay Huế. Thông tin quán/chỗ ăn chưa xác minh, hãy hỏi ban quản lý.',
      ogTitle: 'Ăn chay tại Chùa Thiên Mụ – Cơm chay Huế',
      ogDescription: 'Cơm chay và món chay Huế quanh chùa; xác nhận khi đến.',
      breadcrumb: 'Chùa Thiên Mụ → Ẩm thực → Ăn chay',
      hero: { kicker: 'Ẩm thực · Huế', title: 'Ăn chay quanh chùa', sub: 'Huế nổi tiếng món chay. Quanh Chùa Thiên Mụ thường có cơm chay vào ngày rằm, nhưng chỗ cụ thể chưa xác minh.' },
      heroImage: '/images/thien-mu-main-hall-real.jpg',
      sections: [
        { type: 'lead', body: 'Ẩm thực chay là nét riêng của Huế. Du khách thắc mắc về ăn chay tại chùa, nhưng thông tin quán/chỗ ăn cụ thể chưa được xác minh.' },
        { type: 'info', title: 'Góc chay Huế', rows: [
          { label: 'Ngày rằm', value: 'Nhiều nơi phục vụ cơm chay' },
          { label: 'Món', value: 'Chay Huế đa dạng, nhẹ nhàng' },
          { label: 'Tại chùa', value: 'Chưa xác minh quán cụ thể' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Chưa xác minh', body: 'Không có nguồn chính thức về quán ăn chay tại chùa. Hãy hỏi ban quản lý hoặc tìm quanh khu vực.' },
        { type: 'map', note: 'Tìm quán chay quanh chùa theo tên trên bản đồ.' }
      ],
      faqs: [
        ['Chùa có bán cơm chay không?', 'Chưa xác minh; hỏi ban quản lý khi đến.'],
        ['Ăn chay ở đâu gần chùa?', 'Khu vực quanh chùa có quán; xác nhận trực tiếp.'],
        ['Ngày nào có cơm chay?', 'Thường ngày rằm; lịch cụ thể chưa xác minh.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'food/hue-cuisine': {
      path: 'food/hue-cuisine',
      metaTitle: 'Ẩm thực Huế – Món phải thử gần Chùa Thiên Mụ | Du lịch',
      metaDescription: 'Ẩm thực Huế: bún bò Huế, bánh bèo, chè, cơm chay. Gợi ý món và lưu ý quán chưa xác minh.',
      ogTitle: 'Ẩm thực Huế – Món phải thử gần Chùa Thiên Mụ',
      ogDescription: 'Bún bò Huế, bánh bèo, chè và cơm chay; gợi ý quán.',
      breadcrumb: 'Chùa Thiên Mụ → Ẩm thực → Ẩm thực Huế',
      hero: { kicker: 'Ẩm thực · Huế', title: 'Ẩm thực Huế', sub: 'Huế có nền ẩm thực cung đình và dân dã tinh tế. Gần chùa bạn dễ tìm bún bò, bánh bèo và chè.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Ẩm thực Huế nhẹ nhàng, nhiều món nhỏ và chay. Đây là một lý do nhiều du khách ghé lại thành phố này.' },
        { type: 'cards', kicker: 'Món tiêu biểu', title: 'Nên thử', items: [
          { title: 'Bún bò Huế', body: 'Tô bún đậm vị, cay nhẹ.' },
          { title: 'Bánh bèo / nậm / lọc', body: 'Bánh mỏng hấp, ăn kèm nước mắm.' },
          { title: 'Chè Huế', body: 'Nhiều loại chè ngọt thanh.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Quán chưa xác minh', body: 'Tên quán cụ thể không được liệt kê để tránh xác nhận sai. Hãy tìm quanh chợ Đông Ba và trung tâm.' },
        { type: 'map', note: 'Tìm quán ăn quanh chùa và chợ Đông Ba trên bản đồ.' }
      ],
      faqs: [
        ['Món nào phải thử?', 'Bún bò Huế, bánh bèo, chè và cơm chay.'],
        ['Ăn chay dễ không?', 'Dễ; Huế có nhiều món chay.'],
        ['Gần chùa có quán không?', 'Có quán quanh chùa và trung tâm; xác nhận khi đến.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'food/coffee-by-perfume-river': {
      path: 'food/coffee-by-perfume-river',
      metaTitle: 'Cà phê bờ sông Hương gần Chùa Thiên Mụ | Huế',
      metaDescription: 'Cà phê bờ sông Hương: không gian thư giãn ngắm chùa và sông. Quán cụ thể chưa xác minh, hãy tìm theo tên trên bản đồ.',
      ogTitle: 'Cà phê bờ sông Hương gần Chùa Thiên Mụ',
      ogDescription: 'Cà phê ven sông Hương ngắm chùa; quán chưa xác minh.',
      breadcrumb: 'Chùa Thiên Mụ → Ẩm thực → Cà phê sông',
      hero: { kicker: 'Ẩm thực · Huế', title: 'Cà phê bờ sông', sub: 'Những quán cà phê ven sông Hương là cách thư giãn phổ biến ở Huế, ngắm chùa từ xa.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Cà phê ven sông Hương là thói quen thư giãn của người Huế, và là góc nhìn đẹp về Chùa Thiên Mụ.' },
        { type: 'cards', kicker: 'Góc thư giãn', title: 'Gợi ý', items: [
          { title: 'Bờ tây', body: 'Hướng nhìn về đồi Hà Khê.' },
          { title: 'Hoàng hôn', body: 'Uống cà phê lúc chiều tà.' },
          { title: 'Yên tĩnh', body: 'Tránh giờ đông nếu muốn vắng.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Quán chưa xác minh', body: 'Không liệt kê tên quán cụ thể để tránh xác nhận sai; hãy tìm theo tên trên bản đồ.' },
        { type: 'map', note: 'Tìm quán cà phê bờ sông Hương trên bản đồ.' }
      ],
      faqs: [
        ['Có quán cà phê sông không?', 'Nhiều quán ven sông; tìm theo tên trên bản đồ.'],
        ['Góc nào ngắm chùa?', 'Bờ hướng về đồi Hà Khê, phía tây sông.'],
        ['Giờ nào đẹp?', 'Chiều tà và sáng sớm.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'itineraries/half-day-hue': {
      path: 'itineraries/half-day-hue',
      metaTitle: 'Lịch trình nửa ngày Huế – Chùa Thiên Mụ & cố đô | Du lịch',
      metaDescription: 'Lộ trình nửa ngày Huế: Chùa Thiên Mụ, Kinh thành và sông Hương. Gợi ý trình tự và thời gian linh hoạt.',
      ogTitle: 'Lịch trình nửa ngày Huế – Chùa Thiên Mụ & cố đô',
      ogDescription: 'Nửa ngày với chùa, kinh thành và sông Hương.',
      breadcrumb: 'Chùa Thiên Mụ → Hành trình → Nửa ngày',
      hero: { kicker: 'Hành trình · Huế', title: 'Nửa ngày ở Huế', sub: 'Với nửa ngày, bạn có thể kết hợp Chùa Thiên Mụ, Kinh thành Huế và một góc sông Hương.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Lộ trình nửa ngày tập trung vào hai biểu tượng: chùa bên sông và kinh thành cố đô.' },
        { type: 'steps', kicker: 'Gợi ý', title: 'Trình tự', items: [
          { title: 'Sáng', body: 'Chùa Thiên Mụ khi mát và vắng.' },
          { title: 'Trưa', body: 'Kinh thành Huế trước giờ nóng.' },
          { title: 'Chiều', body: 'Dạo bờ sông Hương hoặc chợ Đông Ba.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Thời gian linh hoạt', body: 'Giờ mở cửa từng nơi chưa xác minh; sắp xếp theo ngày thực tế.' },
        { type: 'map', note: 'Xác nhận tuyến và điểm đỗ theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Nửa ngày đủ không?', 'Đủ cho chùa và kinh thành; chi tiết xem lộ trình.'],
        ['Đi lại sao?', 'Taxi, Grab hoặc xe máy đều tiện.'],
        ['Có kịp chụp ảnh?', 'Có, sáng và chiều ánh sáng đẹp.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'itineraries/hue-2-day-itinerary': {
      path: 'itineraries/hue-2-day-itinerary',
      metaTitle: 'Lịch trình 2 ngày Huế – Chùa, lăng tẩm & sông Hương | Du lịch',
      metaDescription: 'Lộ trình 2 ngày Huế: Chùa Thiên Mụ, các lăng tẩm, Kinh thành và ẩm thực. Gợi ý chia ngày linh hoạt.',
      ogTitle: 'Lịch trình 2 ngày Huế – Chùa, lăng tẩm & sông Hương',
      ogDescription: 'Hai ngày với chùa, lăng tẩm, kinh thành và ẩm thực.',
      breadcrumb: 'Chùa Thiên Mụ → Hành trình → 2 ngày',
      hero: { kicker: 'Hành trình · Huế', title: '2 ngày ở Huế', sub: 'Hai ngày giúp bạn kết hợp chùa, lăng tẩm Nguyễn và ẩm thực mà không vội vàng.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Với hai ngày, bạn chia nhẹ: ngày một chùa và kinh thành, ngày hai các lăng tẩm và sông Hương.' },
        { type: 'steps', kicker: 'Chia ngày', title: 'Gợi ý', items: [
          { title: 'Ngày 1', body: 'Chùa Thiên Mụ, Kinh thành Huế, chợ Đông Ba.' },
          { title: 'Ngày 2', body: 'Khiêm Lăng, Ứng Lăng, dạo sông Hương.' },
          { title: 'Ẩm thực', body: 'Dành bữa chay và bún bò Huế.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Vé lăng riêng', body: 'Các lăng có vé riêng chưa xác minh; xem nguồn chính thức.' },
        { type: 'map', note: 'Xác nhận tuyến giữa các điểm trên bản đồ.' }
      ],
      faqs: [
        ['2 ngày có đủ?', 'Đủ cho chùa, lăng và ẩm thực chính.'],
        ['Có nên thuê xe?', 'Thuận tiện nếu đi lăng ngoại ô; hỏi giá trước.'],
        ['Ăn gì?', 'Bún bò, cơm chay và chè Huế.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Quần thể di tích Cố đô Huế</a>'
      ],
      updated: '2026-11-10'
    },
    'itineraries/sunset-itinerary': {
      path: 'itineraries/sunset-itinerary',
      metaTitle: 'Lộ trình hoàng hôn Huế – Chùa Thiên Mụ & sông Hương | Du lịch',
      metaDescription: 'Lộ trình chiều tà Huế: Chùa Thiên Mụ, bờ sông Hương và chợ đêm. Gợi ý ngắm hoàng hôn bên chùa.',
      ogTitle: 'Lộ trình hoàng hôn Huế – Chùa Thiên Mụ & sông Hương',
      ogDescription: 'Chiều tà với chùa, sông Hương và chợ đêm.',
      breadcrumb: 'Chùa Thiên Mụ → Hành trình → Hoàng hôn',
      hero: { kicker: 'Hành trình · Huế', title: 'Hoàng hôn ở Huế', sub: 'Chiều tà là lúc Chùa Thiên Mụ và sông Hương đẹp nhất, trước khi dạo chợ đêm.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Lộ trình chiều tà tập trung vào ánh sáng mềm trên sông và tháp Phước Duyên.' },
        { type: 'steps', kicker: 'Gợi ý', title: 'Trình tự', items: [
          { title: 'Chiều', body: 'Chùa Thiên Mụ lúc ánh sáng nghiêng.' },
          { title: 'Chập tối', body: 'Bờ sông Hương ngắm phản chiếu.' },
          { title: 'Tối', body: 'Chợ đêm Huế hoặc cà phê sông.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Thời gian linh hoạt', body: 'Giờ hoàng hôn thay đổi theo mùa; xem dự báo khi đến.' },
        { type: 'map', note: 'Xác nhận bến sông và chùa trên bản đồ.' }
      ],
      faqs: [
        ['Giờ nào đẹp nhất?', 'Gần hoàng hôn, khi ánh sáng mềm.'],
        ['Có đi thuyền chiều không?', 'Có dịch vụ nhưng cần xác nhận; xem trang lộ trình sông.'],
        ['Tối có gì chơi?', 'Chợ đêm Huế và cà phê bờ sông.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'itineraries/hue-day-trip-from-da-nang': {
      path: 'itineraries/hue-day-trip-from-da-nang',
      metaTitle: 'Đi Huế trong ngày từ Đà Nẵng – Chùa Thiên Mụ | Du lịch',
      metaDescription: 'Lộ trình Huế một ngày từ Đà Nẵng: đường đi, chùa, kinh thành và về lại. Gợi ý thời gian và phương tiện.',
      ogTitle: 'Đi Huế trong ngày từ Đà Nẵng – Chùa Thiên Mụ',
      ogDescription: 'Một ngày Huế từ Đà Nẵng: chùa, kinh thành và về.',
      breadcrumb: 'Chùa Thiên Mụ → Hành trình → Từ Đà Nẵng',
      hero: { kicker: 'Hành trình · Huế', title: 'Huế trong ngày từ Đà Nẵng', sub: 'Khoảng 2–3 giờ lái xe, bạn có thể ghé Chùa Thiên Mụ và vài điểm chính rồi về Đà Nẵng.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Huế cách Đà Nẵng khoảng 2–3 giờ đường bộ, thuận tiện cho chuyến đi trong ngày.' },
        { type: 'steps', kicker: 'Gợi ý', title: 'Trình tự', items: [
          { title: 'Sáng', body: 'Đi từ Đà Nẵng sớm, ghé chùa khi mát.' },
          { title: 'Trưa', body: 'Kinh thành Huế hoặc chợ Đông Ba.' },
          { title: 'Chiều', body: 'Trở lại Đà Nẵng trước tối.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Thời gian di chuyển', body: 'Giờ di chuyển thay đổi theo giao thông; không hứa lịch cố định.' },
        { type: 'map', note: 'Xác nhận tuyến đường Đà Nẵng – Huế trên bản đồ.' }
      ],
      faqs: [
        ['Mất bao lâu đi Đà Nẵng?', 'Khoảng 2–3 giờ tùy đường và giao thông.'],
        ['Có kịp thăm chùa?', 'Có, dành 1–2 giờ tại chùa là đủ.'],
        ['Nên đi phương tiện nào?', 'Xe riêng, xe khách hoặc tour đều được.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'stay/where-to-stay-in-hue': {
      path: 'stay/where-to-stay-in-hue',
      metaTitle: 'Nên ở đâu khi đi Huế – Khu vực & gợi ý | Du lịch',
      metaDescription: 'Nên ở khu vực nào khi đi Huế: trung tâm, bờ sông Hương hay gần chùa. Gợi ý chọn nơi ở, không xác nhận khách sạn cụ thể.',
      ogTitle: 'Nên ở đâu khi đi Huế – Khu vực & gợi ý',
      ogDescription: 'Khu vực trung tâm, bờ sông và gần chùa; gợi ý chọn nơi ở.',
      breadcrumb: 'Chùa Thiên Mụ → Lưu trú → Ở đâu',
      hero: { kicker: 'Lưu trú · Huế', title: 'Ở đâu khi đi Huế', sub: 'Huế có lựa chọn từ khách sạn trung tâm đến homestay bờ sông. Chọn khu vực theo lộ trình của bạn.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Du khách thường chọn ở trung tâm Huế hoặc dọc sông Hương để thuận tiện đi lại.' },
        { type: 'cards', kicker: 'Khu vực', title: 'Chọn nơi ở', items: [
          { title: 'Trung tâm', body: 'Gần chợ Đông Ba, ăn uống tiện.' },
          { title: 'Bờ sông', body: 'Không gian thư giãn ngắm sông.' },
          { title: 'Gần chùa', body: 'Tiện nếu ưu tiên Chùa Thiên Mụ.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Không xác nhận cụ thể', body: 'Trang không liệt kê tên khách sạn cụ thể để tránh xác nhận sai. Hãy so sánh trên nền tảng đặt phòng.' },
        { type: 'map', note: 'Tìm khu vực lưu trú theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Nên ở khu nào?', 'Trung tâm hoặc bờ sông tùy sở thích.'],
        ['Gần chùa có tiện không?', 'Có, nhưng trung tâm thuận tiện ăn uống hơn.'],
        ['Giá thế nào?', 'Đa dạng; so sánh trên nền tảng đặt phòng.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'stay/best-hotels-near-pagoda': {
      path: 'stay/best-hotels-near-pagoda',
      metaTitle: 'Khách sạn gần Chùa Thiên Mụ – Gợi ý khu vực | Huế',
      metaDescription: 'Gợi ý khu vực khách sạn gần Chùa Thiên Mụ: bờ tây sông Hương, trung tâm Huế. Không xác nhận tên khách sạn cụ thể.',
      ogTitle: 'Khách sạn gần Chùa Thiên Mụ – Gợi ý khu vực',
      ogDescription: 'Khu vực lưu trú gần chùa; không xác nhận tên cụ thể.',
      breadcrumb: 'Chùa Thiên Mụ → Lưu trú → Gần chùa',
      hero: { kicker: 'Lưu trú · Huế', title: 'Khách sạn gần chùa', sub: 'Khu vực bờ tây sông Hương và trung tâm Huế là gợi ý cho ai muốn ở gần Chùa Thiên Mụ.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa nằm phía tây trung tâm, nên các khách sạn bờ tây sông Hương thường thuận tiện.' },
        { type: 'info', title: 'Góc lưu trú', rows: [
          { label: 'Bờ tây', value: 'Gần chùa, ngắm sông' },
          { label: 'Trung tâm', value: 'Ăn uống, di chuyển tiện' },
          { label: 'Xác nhận', value: 'So sánh giá trên nền tảng' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Không xác nhận cụ thể', body: 'Trang không nêu tên khách sạn để tránh xác nhận sai. Hãy tự so sánh.' },
        { type: 'map', note: 'Tìm nơi lưu trú quanh chùa trên bản đồ.' }
      ],
      faqs: [
        ['Khu nào gần chùa nhất?', 'Bờ tây sông Hương, phía tây trung tâm.'],
        ['Có khách sạn sát chùa không?', 'Có vài lựa chọn quanh khu vực; so sánh khi đặt.'],
        ['Nên đặt trước?', 'Nên, nhất là mùa cao điểm.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'stay/is-thien-mu-worth-visiting': {
      path: 'stay/is-thien-mu-worth-visiting',
      metaTitle: 'Chùa Thiên Mụ có đáng đi không? – Đánh giá & lưu ý | Huế',
      metaDescription: 'Chùa Thiên Mụ có đáng ghé không: cảnh quan sông Hương, tháp Phước Duyên, không gian tâm linh. Đánh giá và lưu ý thực tế.',
      ogTitle: 'Chùa Thiên Mụ có đáng đi không? – Đánh giá & lưu ý',
      ogDescription: 'Cảnh quan, tháp Phước Duyên và không gian tâm linh; đánh giá chân thực.',
      breadcrumb: 'Chùa Thiên Mụ → Đánh giá → Có đáng đi',
      hero: { kicker: 'Đánh giá · Huế', title: 'Chùa Thiên Mụ có đáng đi?', sub: 'Nếu bạn thích cảnh quan sông Hương, kiến trúc chùa cổ và không gian tĩnh lặng, đây là điểm nên ghé khi đến Huế.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Chùa Thiên Mụ là một trong những biểu tượng của Huế, nằm trên đồi Hà Khê hướng ra sông Hương.' },
        { type: 'cards', kicker: 'Tại sao ghé', title: 'Điểm cộng', items: [
          { title: 'Cảnh quan', body: 'Đồi Hà Khê và sông Hương rất đẹp.' },
          { title: 'Biểu tượng', body: 'Tháp Phước Duyên bảy tầng đặc trưng.' },
          { title: 'Tĩnh lặng', body: 'Không gian tu hành còn sống.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Lưu ý thực tế', body: 'Chùa thường miễn phí tham quan theo tư liệu, nhưng giờ và điều kiện chưa xác minh. Kết hợp với Kinh thành hoặc sông Hương cho trọn vẹn.' },
        { type: 'map', note: 'Xác nhận lối vào theo tên chùa trên bản đồ.' }
      ],
      faqs: [
        ['Có nên ghé không?', 'Nên, đặc biệt nếu thích cảnh chùa bên sông và kiến trúc cổ.'],
        ['Mất bao lâu tham quan?', 'Thường 1–2 giờ đủ để đi quanh khuôn viên.'],
        ['Kết hợp với đâu?', 'Kinh thành Huế hoặc hành trình thuyền sông Hương.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
    'stay/hue-travel-guide': {
      path: 'stay/hue-travel-guide',
      metaTitle: 'Cẩm nang du lịch Huế – Tổng quan & kết hợp Chùa Thiên Mụ | Huế',
      metaDescription: 'Cẩm nang Huế: thời điểm, di chuyển, điểm chính và cách gộp Chùa Thiên Mụ. Tổng quan cho chuyến đi đầu tiên.',
      ogTitle: 'Cẩm nang du lịch Huế – Tổng quan & kết hợp Chùa Thiên Mụ',
      ogDescription: 'Thời điểm, di chuyển và điểm chính; gộp chùa vào lộ trình.',
      breadcrumb: 'Chùa Thiên Mụ → Cẩm nang → Tổng quan Huế',
      hero: { kicker: 'Cẩm nang · Huế', title: 'Cẩm nang du lịch Huế', sub: 'Huế là cố đô di sản UNESCO, dễ kết hợp Chùa Thiên Mụ, Kinh thành và các lăng tẩm trong một chuyến.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Huế gọn gàng và di chuyển thuận tiện, nên dễ gộp chùa, cung đình và sông Hương trong vài ngày.' },
        { type: 'steps', kicker: 'Lộ trình gợi ý', title: 'Tổng quan', items: [
          { title: 'Ngày 1', body: 'Chùa Thiên Mụ, Kinh thành Huế, chợ Đông Ba.' },
          { title: 'Ngày 2', body: 'Các lăng tẩm Nguyễn và sông Hương.' },
          { title: 'Ẩm thực', body: 'Bún bò, cơm chay và chè Huế.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Di chuyển', body: 'Taxi, Grab, xe máy hoặc thuyền sông đều dùng được; xác nhận lối vào chùa theo tên trên bản đồ.' },
        { type: 'map', note: 'Xem tổng quan các điểm trên bản đồ Huế.' }
      ],
      faqs: [
        ['Mấy ngày ở Huế?', '2–3 ngày đủ cho chùa, lăng và ẩm thực.'],
        ['Đi lại thế nào?', 'Taxi, Grab, xe máy hoặc thuyền sông.'],
        ['Thời điểm nào?', 'Mùa khô tháng 2–8 thường thuận tiện.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — vị trí và bối cảnh</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Huế — tư liệu du lịch số</a>'
      ],
      updated: '2026-11-10'
    },
  },
  en: {
    'parking': {
      path: 'parking',
      metaTitle: 'Thien Mu Pagoda Parking – Where to Park & Entrance | Hue',
      metaDescription: 'Parking at Thien Mu Pagoda: motorcycle, bicycle and car parking, walking path up the hill and safety notes. No official data confirmed; verify on arrival.',
      ogTitle: 'Thien Mu Pagoda Parking – Where to Park & Entrance',
      ogDescription: 'Where to park, the walking path up the hill and parking notes at Thien Mu Pagoda, Hue.',
      breadcrumb: 'Thien Mu Pagoda → Parking',
      hero: { kicker: 'Visit · Hue', title: 'Parking at Thien Mu Pagoda', sub: 'The pagoda sits on Ha Khe Hill by the Perfume River. Parking is usually at the foot of the hill; confirm the spot and fee with the attendant on arrival.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda has no verified official parking lot. Visitors typically leave motorbikes, bicycles and cars near the foot of the hill by the gate, looked after by local attendants.' },
        { type: 'info', title: 'What to know', rows: [
          { label: 'Motorbike / bicycle', value: 'Park at the foot of the hill; small fee, unverified' },
          { label: 'Car', value: 'Park near the gate area; confirm space on arrival' },
          { label: 'Path to pagoda', value: 'Stone steps from the foot up to the grounds' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Not verified', body: 'There is no official source for the parking lot or fees. Ask the attendant and your transport provider on arrival.' },
        { type: 'map', note: 'Open Google Maps by the pagoda name to see the foot-of-hill area and entrance.' }
      ],
      faqs: [
        ['Is there car parking?', 'No official confirmation; cars usually park near the gate. Ask the attendant on arrival.'],
        ['How much is parking?', 'A small fee handled by locals, unverified. Confirm directly when you park.'],
        ['Is it far from the car to the pagoda?', 'You climb stone steps from the foot of the hill; the distance is short but sloped.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'best-time-to-visit-hue': {
      path: 'best-time-to-visit-hue',
      metaTitle: 'Best Time to Visit Hue & Thien Mu Pagoda | Travel',
      metaDescription: 'When to visit Hue and Thien Mu Pagoda: dry season Feb–Aug, early morning and late afternoon are best. Note the rainy season and festivals.',
      ogTitle: 'Best Time to Visit Hue & Thien Mu Pagoda',
      ogDescription: 'Dry season, early morning and late afternoon; note the rainy season and festivals.',
      breadcrumb: 'Thien Mu Pagoda → When to visit',
      hero: { kicker: 'Plan · Hue', title: 'Best time to visit Hue', sub: 'Hue has two distinct seasons. Thien Mu Pagoda by the Perfume River is usually most pleasant in the early morning and late afternoon.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Hue has a dry season (roughly Feb–Aug) and a rainy season (roughly Sep–Jan). The dry season is more convenient for visiting the pagoda and the river.' },
        { type: 'cards', kicker: 'Timing', title: 'When to go', items: [
          { title: 'Early morning', body: 'Softer light, fewer crowds by the river.' },
          { title: 'Late afternoon', body: 'Sunset over the Perfume River and Phuoc Duyen Tower is beautiful.' },
          { title: 'Dry season', body: 'Feb–Aug, easier travel, fewer rain interruptions.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Rainy season note', body: 'The rainy season can bring heavy rain and local flooding. Check the forecast and opening status on arrival.' },
        { type: 'map', note: 'Confirm the route and weather by the pagoda name on the map before you go.' }
      ],
      faqs: [
        ['Which month is best?', 'Usually Feb–Apr and Jul–Aug; both early morning and late afternoon are pleasant.'],
        ['Can I visit in the rainy season?', 'Yes, but bring rain gear and check the forecast; some river services may change.'],
        ['Are there festivals near the pagoda?', 'Hue has cultural festival periods; ask the management or local tourism for the schedule.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'dress-code': {
      path: 'dress-code',
      metaTitle: 'Dress Code for Thien Mu Pagoda – Rules & Tips | Hue',
      metaDescription: 'Dress code for Thien Mu Pagoda: cover shoulders, no short or low-cut tops, length past the knees. Respect the Buddhist worship space.',
      ogTitle: 'Dress Code for Thien Mu Pagoda – Rules & Tips',
      ogDescription: 'Modest clothing that respects the worship space when visiting the pagoda in Hue.',
      breadcrumb: 'Thien Mu Pagoda → Dress code',
      hero: { kicker: 'Visit · Hue', title: 'Dress code at the pagoda', sub: 'Thien Mu Pagoda is an active Buddhist site. Choose modest clothing to respect the worship space.' },
      heroImage: '/images/thien-mu-main-hall-real.jpg',
      sections: [
        { type: 'lead', body: 'There is no verified signage, but the general rule at Vietnamese pagodas is to dress neatly and modestly.' },
        { type: 'info', title: 'Basic guidance', rows: [
          { label: 'Shoulders', value: 'Sleeved tops; avoid bare shoulders and chest' },
          { label: 'Trousers / skirt', value: 'Below the knee is appropriate' },
          { label: 'Shoes', value: 'Easy to remove before the worship hall' }
        ] },
        { type: 'callout', tone: 'info', title: 'Inside the hall', body: 'Remove shoes before entering the main hall, keep quiet and avoid turning your back to the Buddha statues when taking photos.' },
        { type: 'map', note: 'Confirm the entrance and worship area by the pagoda name on the map.' }
      ],
      faqs: [
        ['Can I wear a short skirt?', 'Choose a skirt below the knee to respect the worship space.'],
        ['Do I remove shoes inside?', 'Yes, remove shoes before entering the main hall and worship rooms.'],
        ['What to wear in summer?', 'Thin long-sleeve cotton and loose long bottoms — cool and modest.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'photography-tips': {
      path: 'photography-tips',
      metaTitle: 'Thien Mu Pagoda Photography – Best Spots & Etiquette | Hue',
      metaDescription: 'Photo spots at Thien Mu Pagoda: Phuoc Duyen Tower, the Perfume River, the main hall. Morning/afternoon timing and respectful shooting.',
      ogTitle: 'Thien Mu Pagoda Photography – Best Spots & Etiquette',
      ogDescription: 'Phuoc Duyen Tower, the river and the hall; morning/afternoon light and photo etiquette.',
      breadcrumb: 'Thien Mu Pagoda → Photography',
      hero: { kicker: 'Experience · Hue', title: 'Photography at Thien Mu Pagoda', sub: 'The seven-tier Phuoc Duyen Tower is the most recognizable frame. The Perfume River and main hall also make great shots.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'The pagoda sits on Ha Khe Hill facing the Perfume River, so framing from the river or the courtyard both work well.' },
        { type: 'cards', kicker: 'Key spots', title: 'Where to shoot', items: [
          { title: 'Phuoc Duyen Tower', body: 'The seven-tier tower as the central subject.' },
          { title: 'Perfume River', body: 'Shoot the pagoda from a boat or the riverbank.' },
          { title: 'Main hall', body: 'Roof architecture and the courtyard.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Timing and etiquette', body: 'Early morning and late afternoon give the softest light. Inside the hall, avoid flash and turning your back to the Buddha.' },
        { type: 'map', note: 'Confirm the riverbank and courtyard by the pagoda name on the map.' }
      ],
      faqs: [
        ['When is light best?', 'Early morning and late afternoon, avoiding harsh midday sun.'],
        ['Can I fly a drone?', 'Unverified; spiritual sites often restrict it. Ask management first.'],
        ['Are pre-wedding shoots allowed?', 'Usually yes, but stay modest and respect the worship space.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'facilities-restrooms': {
      path: 'facilities-restrooms',
      metaTitle: 'Thien Mu Pagoda Facilities – Toilets & Rest Areas | Hue',
      metaDescription: 'Facilities at Thien Mu Pagoda: toilets, rest areas, drinking water. Not officially verified; ask management on arrival.',
      ogTitle: 'Thien Mu Pagoda Facilities – Toilets & Rest Areas',
      ogDescription: 'Toilets, rest areas and facility notes when visiting the pagoda in Hue.',
      breadcrumb: 'Thien Mu Pagoda → Facilities',
      hero: { kicker: 'Visit · Hue', title: 'Facilities at the pagoda', sub: 'The pagoda is a large hillside grounds on Ha Khe Hill. Basic facilities usually exist but are not officially verified.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Visitors often ask about toilets and rest areas. These are usually within the grounds, but the specifics are not verified.' },
        { type: 'info', title: 'Common facilities', rows: [
          { label: 'Toilets', value: 'Usually in the grounds; unverified' },
          { label: 'Rest areas', value: 'Courtyard and riverside stone benches' },
          { label: 'Drinking water', value: 'Bring your own; no guaranteed on-site sale' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Not verified', body: 'There is no official source for toilets and facilities. Ask management or a guide on arrival.' },
        { type: 'map', note: 'Confirm the path and amenities by the pagoda name on the map.' }
      ],
      faqs: [
        ['Are there toilets?', 'Usually within the grounds, but location and condition are unverified.'],
        ['Are there rest areas?', 'Yes, the courtyard and riverside stone benches for resting.'],
        ['Is water sold there?', 'Unverified; bring your own drinking water.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'accessibility': {
      path: 'accessibility',
      metaTitle: 'Thien Mu Pagoda Accessibility – Wheelchair, Kids, Elderly | Hue',
      metaDescription: 'Accessibility at Thien Mu Pagoda: steps, wheelchair, kids and elderly. Sloped path — prepare in advance.',
      ogTitle: 'Thien Mu Pagoda Accessibility – Wheelchair, Kids, Elderly',
      ogDescription: 'Steps, wheelchair and notes for kids and elderly when visiting the pagoda.',
      breadcrumb: 'Thien Mu Pagoda → Accessibility',
      hero: { kicker: 'Visit · Hue', title: 'Accessibility', sub: 'The pagoda is on Ha Khe Hill; the main access is stepped and sloped. Plan ahead for easier access.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda has beautiful grounds but sloped terrain. Access is smoother with some preparation.' },
        { type: 'info', title: 'Access notes', rows: [
          { label: 'Steps', value: 'Main path is stepped and sloped' },
          { label: 'Wheelchair', value: 'No verified dedicated path; ask management' },
          { label: 'Kids / elderly', value: 'Go slowly, bring water and grippy shoes' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Not verified', body: 'There is no official source for wheelchair access. Contact management before arrival.' },
        { type: 'map', note: 'Check the slope of the entrance by the pagoda name on the map.' }
      ],
      faqs: [
        ['Is it wheelchair accessible?', 'No verified dedicated path; contact management before arrival.'],
        ['Is it suitable for elderly?', 'Yes if taken slowly; the slope needs care.'],
        ['Is it okay with kids?', 'Yes, but keep them close and watch the riverside steps.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'maps-navigation': {
      path: 'maps-navigation',
      metaTitle: 'Thien Mu Pagoda Map & Directions – Google Maps | Hue',
      metaDescription: 'Map and directions to Thien Mu Pagoda: search by the pagoda name, confirm the entrance in Kim Long. Do not rely on a single coordinate.',
      ogTitle: 'Thien Mu Pagoda Map & Directions – Google Maps',
      ogDescription: 'Find the pagoda by name on the map, confirm the entrance and drop-off point.',
      breadcrumb: 'Thien Mu Pagoda → Map',
      hero: { kicker: 'Directions · Hue', title: 'Map & directions', sub: 'Maps lists Kim Long, Hue as an area reference. Search by the pagoda name and confirm the entrance with your transport provider.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda is on Ha Khe Hill, west of central Hue, by the Perfume River. A single coordinate may not match the actual entrance.' },
        { type: 'steps', kicker: 'How to find it', title: 'Three steps', items: [
          { title: 'Search the name', body: 'Type “Chùa Thiên Mụ” or “Thien Mu Pagoda” on the map.' },
          { title: 'Confirm entrance', body: 'Ask the driver for the drop-off near the pagoda gate.' },
          { title: 'Compare routes', body: 'Check a few routes from the center to pick a sensible one.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Do not rely on one coordinate', body: 'Maps lists Kim Long as an area reference, not the exact gate. Always confirm on arrival.' },
        { type: 'map', note: 'Open Google Maps by the pagoda name to see the entrance and actual routes.' }
      ],
      faqs: [
        ['What to type on the map?', '“Chùa Thiên Mụ” (Vietnamese) or “Thien Mu Pagoda” (English).'],
        ['Is the coordinate correct?', 'Unverified; use the pagoda name and confirm the entrance.'],
        ['How long from the center?', 'Depends on transport; usually a short distance west of Hue.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'founder-nguyen-hoang': {
      path: 'founder-nguyen-hoang',
      metaTitle: 'Lord Nguyen Hoang & Thien Mu Pagoda – Founder (1601) | Hue',
      metaDescription: 'Thien Mu Pagoda was founded by Lord Nguyen Hoang in 1601 by the Perfume River. Learn about the founder and the old capital Hue.',
      ogTitle: 'Lord Nguyen Hoang & Thien Mu Pagoda – Founder (1601)',
      ogDescription: 'Nguyen Hoang founded the pagoda in 1601; the historical backdrop of old capital Hue.',
      breadcrumb: 'Thien Mu Pagoda → History → Nguyen Hoang',
      hero: { kicker: 'History · Hue', title: 'Lord Nguyen Hoang and the pagoda', sub: 'According to records, the pagoda was founded by Lord Nguyen Hoang in 1601, tied to the later formation of the old capital Hue.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda is said to have been founded by Lord Nguyen Hoang in 1601, marking one of the earliest religious structures in the Thuan Hoa region.' },
        { type: 'prose', title: 'The founding lord', html: 'Nguyen Hoang (1525–1613) opened up the Thuan Hoa region, the precursor of the southern realm (Dang Trong). Building the pagoda by the Perfume River was tied to the landscape and spirituality of the new land.' },
        { type: 'info', title: 'Historical markers', rows: [
          { label: 'Founded', value: '1601 (per records)' },
          { label: 'Founder', value: 'Lord Nguyen Hoang' },
          { label: 'Context', value: 'Opening Thuan Hoa, old capital Hue' }
        ] },
        { type: 'callout', tone: 'info', title: 'Source note', body: 'The 1601 date and Nguyen Hoang’s role are repeated by many Hue history and tourism sources; see the sources for specifics.' },
        { type: 'map', note: 'Confirm the pagoda location by name on the map on arrival.' }
      ],
      faqs: [
        ['Who founded the pagoda?', 'Per records, Lord Nguyen Hoang built it in 1601.'],
        ['When was it built?', '1601, according to Hue historical and tourism sources.'],
        ['Who was Nguyen Hoang?', 'The lord who opened Thuan Hoa, the foundation of later old capital Hue.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'nguyen-dynasty': {
      path: 'nguyen-dynasty',
      metaTitle: 'Thien Mu Pagoda & the Nguyen Dynasty – Hue Heritage | History',
      metaDescription: 'The role of Thien Mu Pagoda under the Nguyen Dynasty: a royal-site pagoda tied to old capital Hue. Learn the dynastic heritage.',
      ogTitle: 'Thien Mu Pagoda & the Nguyen Dynasty – Hue Heritage',
      ogDescription: 'The pagoda tied to Nguyen royalty and the Hue heritage complex.',
      breadcrumb: 'Thien Mu Pagoda → History → Nguyen Dynasty',
      hero: { kicker: 'History · Hue', title: 'The pagoda and the Nguyen Dynasty', sub: 'Under the Nguyen Dynasty, Thien Mu Pagoda belonged to the old capital Hue complex and was listed among the “Twenty Scenes of the Imperial Capital”.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda is tied to the history of old capital Hue and the Nguyen Dynasty, often appearing in descriptions of the old citadel’s landscape.' },
        { type: 'prose', title: 'Under the Nguyen', html: 'The pagoda sits within the landscape of the imperial city and was listed among the “Thần Kinh nhị thập cảnh” — the twenty scenes of the capital. Many Hue tourism sources cite this role.' },
        { type: 'info', title: 'Heritage view', rows: [
          { label: 'Belongs to', value: 'Hue Imperial City heritage complex' },
          { label: 'Landscape', value: 'One of the “Twenty Scenes of the Capital”' },
          { label: 'Nguyen era', value: 'Tied to the imperial citadel' }
        ] },
        { type: 'callout', tone: 'info', title: 'Source note', body: 'For detailed Nguyen-era history and the pagoda, see the Hue heritage and tourism sources.' },
        { type: 'map', note: 'Confirm the pagoda location by name on the map on arrival.' }
      ],
      faqs: [
        ['Is the pagoda part of Nguyen heritage?', 'It lies within the Hue Imperial City heritage complex.'],
        ['What are the “Twenty Scenes”?', 'Twenty celebrated views of the old capital; the pagoda is often listed among them.'],
        ['Did the Nguyen build the pagoda?', 'Founded 1601 (Nguyen Hoang); later Nguyen court tied it to the citadel landscape.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Hue Monument Complex</a>'
      ],
      updated: '2026-11-10'
    },
    'pagoda-architecture': {
      path: 'pagoda-architecture',
      metaTitle: 'Thien Mu Pagoda Architecture – Phuoc Duyen Tower & Halls | Hue',
      metaDescription: 'Thien Mu Pagoda architecture: the seven-tier Phuoc Duyen Tower, the main hall, the riverside courtyard. Layout and materials.',
      ogTitle: 'Thien Mu Pagoda Architecture – Phuoc Duyen Tower & Halls',
      ogDescription: 'The seven-tier tower, the main hall and the riverside layout.',
      breadcrumb: 'Thien Mu Pagoda → Architecture',
      hero: { kicker: 'Architecture · Hue', title: 'Pagoda architecture', sub: 'The highlight is the seven-tier Phuoc Duyen Tower and the worship halls aligned along an axis facing the Perfume River.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda is laid out along a vertical axis from the gate up the hill, with Phuoc Duyen Tower at the center and worship halls around the courtyard.' },
        { type: 'cards', kicker: 'Elements', title: 'Main parts', items: [
          { title: 'Phuoc Duyen Tower', body: 'The seven-tier tower, the pagoda’s symbol.' },
          { title: 'Main hall', body: 'Where the Buddha is enshrined and rites are held.' },
          { title: 'Courtyard & gate', body: 'Facing the Perfume River, open landscape.' }
        ] },
        { type: 'prose', title: 'Layout', html: 'The compound follows an axis from the foot of the hill to the top, with Phuoc Duyen Tower at the center overlooking the river. The halls follow one another, creating a calm sacred space.' },
        { type: 'callout', tone: 'info', title: 'Phuoc Duyen Tower', body: 'The tower was built after the 1601 founding; see the heritage sources for its exact dating.' },
        { type: 'map', note: 'Confirm the tower and hall positions by the pagoda name on the map.' }
      ],
      faqs: [
        ['How many tiers?', 'Phuoc Duyen Tower has seven tiers.'],
        ['Which way does it face?', 'Toward the Perfume River, west of central Hue.'],
        ['How many halls?', 'Several halls around the courtyard; see on arrival.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'the-old-car': {
      path: 'the-old-car',
      metaTitle: 'The Old Car at Thien Mu Pagoda – 1963 History Link | Hue',
      metaDescription: 'The old car in the pagoda grounds is linked to Venerable Thich Quang Duc and the 1963 events. Historical meaning, not a confirmed exhibit.',
      ogTitle: 'The Old Car at Thien Mu Pagoda – 1963 History Link',
      ogDescription: 'The car linked to Thich Quang Duc and the 1963 historical backdrop at the pagoda.',
      breadcrumb: 'Thien Mu Pagoda → History → The car',
      hero: { kicker: 'History · Hue', title: 'The car in the grounds', sub: 'In the grounds there is an old car linked to Venerable Thich Quang Duc. Its historical meaning needs verification on site.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'The car in the grounds is often mentioned in connection with Venerable Thich Quang Duc and the 1963 historical events. It is a memorial artifact.' },
        { type: 'prose', title: 'Context', html: 'In 1963, Venerable Thich Quang Duc left a lasting mark on Vietnamese Buddhist history. The car in the grounds is mentioned by many tourism sources as a memory artifact.' },
        { type: 'callout', tone: 'warn', title: 'Verify on arrival', body: 'The artifact details and dating are not officially confirmed here. Check the on-site plaque or ask management.' },
        { type: 'map', note: 'Confirm the display location by the pagoda name on the map.' }
      ],
      faqs: [
        ['Who is the car linked to?', 'Often mentioned in connection with Venerable Thich Quang Duc.'],
        ['Is it the original car?', 'Unverified; check the on-site plaque.'],
        ['Is entry free?', 'Pagoda visits are usually free; see the overview page for details.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'the-bell': {
      path: 'the-bell',
      metaTitle: 'Thien Mu Pagoda Bell – Great Hong Chung & Meaning | Hue',
      metaDescription: 'The large bell (Dai Hong Chung) at Thien Mu Pagoda: size, sound and spiritual meaning. Details unverified; ask management.',
      ogTitle: 'Thien Mu Pagoda Bell – Great Hong Chung & Meaning',
      ogDescription: 'The large bell, its sound and spiritual meaning at the riverside pagoda.',
      breadcrumb: 'Thien Mu Pagoda → Architecture → Bell',
      hero: { kicker: 'Architecture · Hue', title: 'The large bell', sub: 'The pagoda has a large bell mentioned in records. Its sound across the river is a familiar part of the Hue pagoda scene.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'The temple bell is one of the characteristic sounds of Thien Mu Pagoda by the Perfume River, often appearing in descriptions of the Hue landscape.' },
        { type: 'info', title: 'About the bell', rows: [
          { label: 'Name', value: 'Dai Hong Chung (per records)' },
          { label: 'Size', value: 'Large; dating unverified' },
          { label: 'Meaning', value: 'Spiritual sound marking rites' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Not verified', body: 'The bell’s dating and size are not confirmed here. Ask management.' },
        { type: 'map', note: 'Confirm the bell location by the pagoda name on the map.' }
      ],
      faqs: [
        ['Does the pagoda have a large bell?', 'Yes, a large bell is mentioned in records; dating unverified.'],
        ['Can I hear it?', 'It sounds during rites; no fixed public schedule promised.'],
        ['When was it cast?', 'Unverified; see the Hue heritage sources.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'legend-of-thien-mu': {
      path: 'legend-of-thien-mu',
      metaTitle: 'Legend of Thien Mu Pagoda – The Lady of the Perfume River | Hue',
      metaDescription: 'The pagoda’s name legend: an omen of a lady appearing on Ha Khe Hill by the Perfume River. Folklore tied to the name “Thien Mu”.',
      ogTitle: 'Legend of Thien Mu Pagoda – The Lady of the Perfume River',
      ogDescription: 'The omen and legend behind the name “Thien Mu” by the Perfume River.',
      breadcrumb: 'Thien Mu Pagoda → History → Legend',
      hero: { kicker: 'History · Hue', title: 'The pagoda legend', sub: 'The name “Thien Mu” (celestial lady) is tied to a legend of a lady who appeared and foretold a great pagoda on Ha Khe Hill.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'The legend tells of an old lady who appeared on Ha Khe Hill by the Perfume River, foretelling that a great national pagoda would rise there — linked to the name “Thien Mu”.' },
        { type: 'prose', title: 'The story', html: 'According to folk tales cited by many Hue tourism sources, the lady called herself Thien Mu and appeared on the hill to proclaim that a national pagoda would be built there for Buddhism to flourish. Nguyen Hoang later founded the pagoda and took the name.' },
        { type: 'callout', tone: 'info', title: 'Legend, not chronicle', body: 'This is folklore explaining the name, not a verified historical record.' },
        { type: 'map', note: 'Confirm Ha Khe Hill location by the pagoda name on the map.' }
      ],
      faqs: [
        ['What does “Thien Mu” mean?', '“Thien Mu” suggests “celestial lady” in the legend.'],
        ['What does the legend say?', 'A lady foretold a great pagoda on Ha Khe Hill.'],
        ['Is it historically true?', 'It is folklore explaining the name, not a verified chronicle.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'religious-significance': {
      path: 'religious-significance',
      metaTitle: 'Thien Mu Pagoda Religious Meaning – Vietnamese Buddhism | Hue',
      metaDescription: 'Thien Mu Pagoda is an active Buddhist site: enshrining the Buddha, chanting, monastic study. Respect the worship space when visiting.',
      ogTitle: 'Thien Mu Pagoda Religious Meaning – Vietnamese Buddhism',
      ogDescription: 'An active Buddhist site; respect the worship space when visiting.',
      breadcrumb: 'Thien Mu Pagoda → Religious meaning',
      hero: { kicker: 'Spirituality · Hue', title: 'Religious meaning', sub: 'Thien Mu Pagoda is a working Vietnamese Buddhist site where monks chant and study — more than a tourist stop.' },
      heroImage: '/images/thien-mu-main-hall-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda is an active Vietnamese Buddhist temple, so worship and monastic life take priority.' },
        { type: 'cards', kicker: 'Life at the pagoda', title: 'A living temple', items: [
          { title: 'Buddha enshrined', body: 'The main hall enshrines the Buddha for rites.' },
          { title: 'Study', body: 'Monks’ daily practice and study.' },
          { title: 'Festivals', body: 'Full-moon and Buddhist feast days at the pagoda.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Prioritize the worship space', body: 'When visiting, yield the ritual space, keep quiet and dress modestly.' },
        { type: 'map', note: 'Confirm the worship area by the pagoda name on the map.' }
      ],
      faqs: [
        ['Is the pagoda active?', 'Yes, it is a Buddhist temple with ongoing monastic life.'],
        ['Can I attend a rite?', 'Visitors may observe respectfully; avoid disrupting ceremonies.'],
        ['Is a donation required?', 'Voluntary; not required to visit.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/tomb-of-tu-duc': {
      path: 'nearby/tomb-of-tu-duc',
      metaTitle: 'Tomb of Tu Duc (Khiem Lang) near Thien Mu Pagoda | Hue',
      metaDescription: 'Khiem Lang – Emperor Tu Duc’s tomb, a Hue heritage site near Thien Mu Pagoda. Location, scenery and separate ticket/hours (unverified).',
      ogTitle: 'Tomb of Tu Duc (Khiem Lang) near Thien Mu Pagoda',
      ogDescription: 'Tu Duc’s tomb, a UNESCO site near the pagoda; ticket and hours unverified.',
      breadcrumb: 'Thien Mu Pagoda → Nearby → Khiem Lang',
      hero: { kicker: 'Nearby · Hue', title: 'Khiem Lang (Emperor Tu Duc)', sub: 'Tu Duc’s tomb is a separate monument in the Hue heritage complex, often paired with Thien Mu Pagoda on a Hue itinerary.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Khiem Lang is the burial site of Emperor Tu Duc, part of the Hue Monument Complex. It is a separate site, not part of the pagoda grounds.' },
        { type: 'info', title: 'Basics', rows: [
          { label: 'Heritage', value: 'UNESCO (Hue Monument Complex)' },
          { label: 'Ticket / hours', value: 'Separate — unverified, check official source' },
          { label: 'Location', value: 'West of Hue, near the pagoda' }
        ] },
        { type: 'cards', kicker: 'Highlights', title: 'What to see', items: [
          { title: 'Lake', body: 'Pavilions and bridges over the water.' },
          { title: 'Worship hall', body: 'Hall honoring the emperor and empress.' },
          { title: 'Pine garden', body: 'Green, calm grounds.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Separate ticket & hours', body: 'The tomb has its own ticket and hours, independent of the pagoda. Check the official source before going.' },
        { type: 'map', note: 'Find Khiem Lang on the map; confirm the gate and separate ticket.' }
      ],
      faqs: [
        ['Is it near the pagoda?', 'A short distance west of Hue; often combined in one trip.'],
        ['Is there a separate ticket?', 'Yes, the tomb has its own ticket (unverified); check the official source.'],
        ['How to get from the pagoda?', 'Taxi or motorbike west of Hue; confirm the route with your driver.']
      ],
      sources: [
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Hue Monument Complex</a>',
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/tomb-of-khai-dinh': {
      path: 'nearby/tomb-of-khai-dinh',
      metaTitle: 'Tomb of Khai Dinh (Ung Lang) near Thien Mu Pagoda | Hue',
      metaDescription: 'Ung Lang – Emperor Khai Dinh’s tomb, a Hue heritage site near Thien Mu Pagoda. East–West blended architecture; ticket/hours unverified.',
      ogTitle: 'Tomb of Khai Dinh (Ung Lang) near Thien Mu Pagoda',
      ogDescription: 'Khai Dinh’s tomb, a UNESCO site near the pagoda; ticket and hours unverified.',
      breadcrumb: 'Thien Mu Pagoda → Nearby → Ung Lang',
      hero: { kicker: 'Nearby · Hue', title: 'Ung Lang (Emperor Khai Dinh)', sub: 'Khai Dinh’s tomb stands out with East–West blended architecture, within the Hue heritage complex.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Ung Lang is the burial site of Emperor Khai Dinh, one of the Hue tombs with an eclectic East–West style.' },
        { type: 'info', title: 'Basics', rows: [
          { label: 'Heritage', value: 'UNESCO (Hue Monument Complex)' },
          { label: 'Ticket / hours', value: 'Separate — unverified' },
          { label: 'Location', value: 'South of central Hue' }
        ] },
        { type: 'cards', kicker: 'Highlights', title: 'What to see', items: [
          { title: 'Stairway', body: 'Steps leading up to the worship hall.' },
          { title: 'Main hall', body: 'Porcelain mosaic decor, blended style.' },
          { title: 'Stone statues', body: 'Rows of courtier statues on both sides.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Separate ticket & hours', body: 'The tomb has its own ticket and hours, independent of the pagoda. Check the official source before going.' },
        { type: 'map', note: 'Find Ung Lang on the map; confirm the gate and separate ticket.' }
      ],
      faqs: [
        ['Is Ung Lang near the pagoda?', 'Some distance south of Hue; combinable in one trip.'],
        ['Is there a separate ticket?', 'Yes, a separate ticket (unverified); check the official source.'],
        ['What is special architecturally?', 'An East–West blend, notably the mosaic-decorated hall.']
      ],
      sources: [
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Hue Monument Complex</a>',
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/tomb-of-minh-mang': {
      path: 'nearby/tomb-of-minh-mang',
      metaTitle: 'Tomb of Minh Mang (Hieu Lang) near Thien Mu Pagoda | Hue',
      metaDescription: 'Hieu Lang – Emperor Minh Mang’s tomb, a Hue heritage site near Thien Mu Pagoda. Balanced layout between lake and hill; ticket/hours unverified.',
      ogTitle: 'Tomb of Minh Mang (Hieu Lang) near Thien Mu Pagoda',
      ogDescription: 'Minh Mang’s tomb, a UNESCO site near the pagoda; ticket and hours unverified.',
      breadcrumb: 'Thien Mu Pagoda → Nearby → Hieu Lang',
      hero: { kicker: 'Nearby · Hue', title: 'Hieu Lang (Emperor Minh Mang)', sub: 'Hieu Lang is noted for its balanced layout between water and hill, within the Hue heritage complex.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Hieu Lang is the burial site of Emperor Minh Mang, regarded as one of the most balanced and beautiful of the Hue tombs.' },
        { type: 'info', title: 'Basics', rows: [
          { label: 'Heritage', value: 'UNESCO (Hue Monument Complex)' },
          { label: 'Ticket / hours', value: 'Separate — unverified' },
          { label: 'Location', value: 'South of Hue, by the river' }
        ] },
        { type: 'cards', kicker: 'Highlights', title: 'What to see', items: [
          { title: 'Water', body: 'Lakes framing the landscape.' },
          { title: 'Gate & hall', body: 'A symmetrical architectural axis.' },
          { title: 'Shade', body: 'A leafy, calm setting.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Separate ticket & hours', body: 'The tomb has its own ticket and hours, independent of the pagoda. Check the official source before going.' },
        { type: 'map', note: 'Find Hieu Lang on the map; confirm the gate and separate ticket.' }
      ],
      faqs: [
        ['Is Hieu Lang near the pagoda?', 'Some distance south of Hue; combinable in one trip.'],
        ['Is there a separate ticket?', 'Yes, a separate ticket (unverified); check the official source.'],
        ['Which tomb is most beautiful?', 'A matter of taste; Hieu Lang is often praised for balance.']
      ],
      sources: [
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Hue Monument Complex</a>',
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/dong-ba-market': {
      path: 'nearby/dong-ba-market',
      metaTitle: 'Dong Ba Market near Thien Mu Pagoda | Food & Shopping Hue',
      metaDescription: 'Dong Ba Market – a traditional Hue market near Thien Mu Pagoda. Street food, specialties and shopping; hours unverified.',
      ogTitle: 'Dong Ba Market near Thien Mu Pagoda | Food & Shopping',
      ogDescription: 'A traditional Hue market: street food, specialties and shopping.',
      breadcrumb: 'Thien Mu Pagoda → Nearby → Dong Ba Market',
      hero: { kicker: 'Nearby · Hue', title: 'Dong Ba Market', sub: 'Dong Ba is a large traditional market by the Perfume River, a hub of Hue street food and specialties.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Dong Ba Market sits near Trang Tien Bridge by the Perfume River, convenient to visit after the pagoda.' },
        { type: 'cards', kicker: 'At the market', title: 'Experience', items: [
          { title: 'Food', body: 'Bun bo, che, banh loc and street eats.' },
          { title: 'Specialties', body: 'Fermented shrimp, fruit and Hue gifts.' },
          { title: 'Shopping', body: 'Souvenirs and fabrics.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Hours unverified', body: 'Market hours may vary; ask or check a local source on arrival.' },
        { type: 'map', note: 'Find Dong Ba Market on the map; confirm the entrance near Trang Tien Bridge.' }
      ],
      faqs: [
        ['Is the market near the pagoda?', 'Across the center from the pagoda, near Trang Tien Bridge.'],
        ['Is there food?', 'Yes, many street-food stalls inside the market.'],
        ['What are the hours?', 'Unverified; the market is usually lively by day.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'nearby/perfume-river': {
      path: 'nearby/perfume-river',
      metaTitle: 'Perfume River & Thien Mu Pagoda – Hue Landscape | Travel',
      metaDescription: 'The Perfume River flows past Thien Mu Pagoda: river views from a boat, the bank and sunset. Learn the river’s scenic value.',
      ogTitle: 'Perfume River & Thien Mu Pagoda – Hue Landscape',
      ogDescription: 'The river, boats and sunset by Thien Mu Pagoda.',
      breadcrumb: 'Thien Mu Pagoda → Nearby → Perfume River',
      hero: { kicker: 'Nearby · Hue', title: 'The Perfume River', sub: 'The Perfume River embraces Ha Khe Hill, shaping the signature scene of the pagoda and old Hue.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'The Perfume River is inseparable from Hue and Thien Mu Pagoda, appearing often in poetry and tourism.' },
        { type: 'cards', kicker: 'Experience', title: 'On the river', items: [
          { title: 'View from a boat', body: 'The pagoda and tower appear from the water.' },
          { title: 'The bank', body: 'Stroll the bank, photograph the sunset.' },
          { title: 'Music', body: 'Hue folk music on the river on some occasions.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Boats not assumed', body: 'Boat services need confirmation with a provider; see the river itinerary page.' },
        { type: 'map', note: 'Confirm the riverbank by the pagoda name on the map.' }
      ],
      faqs: [
        ['Where is the river?', 'It flows through the center and past Ha Khe Hill by the pagoda.'],
        ['Are there boat trips?', 'Yes, but confirm with a provider; see the itinerary page.'],
        ['Is the sunset nice?', 'Late afternoon over the river and Phuoc Duyen Tower is beautiful.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'food/vegetarian-food-at-pagoda': {
      path: 'food/vegetarian-food-at-pagoda',
      metaTitle: 'Vegetarian Food at Thien Mu Pagoda – Hue Vegan Meals | Food',
      metaDescription: 'Vegetarian food at Thien Mu Pagoda: vegan meals on full-moon days, Hue vegetarian cuisine. Restaurant details unverified; ask management.',
      ogTitle: 'Vegetarian Food at Thien Mu Pagoda – Hue Vegan Meals',
      ogDescription: 'Vegan meals and Hue vegetarian cuisine near the pagoda; verify on arrival.',
      breadcrumb: 'Thien Mu Pagoda → Food → Vegetarian',
      hero: { kicker: 'Food · Hue', title: 'Vegetarian food near the pagoda', sub: 'Hue is famous for vegetarian cuisine. Around Thien Mu Pagoda there is often vegetarian food on full-moon days, but specific spots are unverified.' },
      heroImage: '/images/thien-mu-main-hall-real.jpg',
      sections: [
        { type: 'lead', body: 'Vegetarian dining is a Hue specialty. Visitors ask about food at the pagoda, but specific restaurant details are not verified.' },
        { type: 'info', title: 'Hue vegetarian notes', rows: [
          { label: 'Full-moon days', value: 'Many places serve vegetarian meals' },
          { label: 'Dishes', value: 'Diverse, light Hue vegetarian food' },
          { label: 'At the pagoda', value: 'Specific spot unverified' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Not verified', body: 'There is no official source for a vegetarian eatery at the pagoda. Ask management or look around the area.' },
        { type: 'map', note: 'Find vegetarian spots around the pagoda by name on the map.' }
      ],
      faqs: [
        ['Does the pagoda sell meals?', 'Unverified; ask management on arrival.'],
        ['Where to eat vegetarian nearby?', 'Options around the pagoda; confirm directly.'],
        ['Which days have meals?', 'Usually full-moon days; specific schedule unverified.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'food/hue-cuisine': {
      path: 'food/hue-cuisine',
      metaTitle: 'Hue Cuisine – Dishes to Try near Thien Mu Pagoda | Travel',
      metaDescription: 'Hue cuisine: bun bo Hue, banh beo, che, vegetarian food. Dish suggestions and unverified restaurant notes.',
      ogTitle: 'Hue Cuisine – Dishes to Try near Thien Mu Pagoda',
      ogDescription: 'Bun bo Hue, banh beo, che and vegetarian food; where to look.',
      breadcrumb: 'Thien Mu Pagoda → Food → Hue cuisine',
      hero: { kicker: 'Food · Hue', title: 'Hue cuisine', sub: 'Hue pairs refined court and rustic folk food. Near the pagoda you can easily find bun bo, banh beo and che.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Hue food is light, with many small dishes and vegetarian options — a reason many travelers linger in the city.' },
        { type: 'cards', kicker: 'Signature dishes', title: 'Try these', items: [
          { title: 'Bun bo Hue', body: 'A savory, lightly spicy noodle bowl.' },
          { title: 'Banh beo / nam / loc', body: 'Steamed thin cakes with dipping sauce.' },
          { title: 'Hue che', body: 'Many kinds of sweet desserts.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Restaurants unverified', body: 'Specific restaurant names are not listed to avoid wrong claims. Look around Dong Ba Market and the center.' },
        { type: 'map', note: 'Find eateries around the pagoda and Dong Ba Market on the map.' }
      ],
      faqs: [
        ['Which dish must I try?', 'Bun bo Hue, banh beo, che and vegetarian food.'],
        ['Is vegetarian easy?', 'Yes; Hue has many vegetarian options.'],
        ['Are there eateries near the pagoda?', 'Yes around the pagoda and center; confirm on arrival.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'food/coffee-by-perfume-river': {
      path: 'food/coffee-by-perfume-river',
      metaTitle: 'Coffee by the Perfume River near Thien Mu Pagoda | Hue',
      metaDescription: 'Coffee by the Perfume River: a relaxed spot to view the pagoda and river. Specific cafes unverified; search by name on the map.',
      ogTitle: 'Coffee by the Perfume River near Thien Mu Pagoda',
      ogDescription: 'Riverside cafes to view the pagoda; cafes unverified.',
      breadcrumb: 'Thien Mu Pagoda → Food → River coffee',
      hero: { kicker: 'Food · Hue', title: 'Coffee by the river', sub: 'Riverside cafes by the Perfume River are a popular Hue way to relax, viewing the pagoda from afar.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Coffee along the Perfume River is a Hue relaxation habit, and a nice vantage for Thien Mu Pagoda.' },
        { type: 'cards', kicker: 'Relax', title: 'Suggestions', items: [
          { title: 'West bank', body: 'Views toward Ha Khe Hill.' },
          { title: 'Sunset', body: 'Coffee at late afternoon.' },
          { title: 'Quiet', body: 'Avoid peak hours for calm.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Cafes unverified', body: 'No specific cafe names are listed to avoid wrong claims; search by name on the map.' },
        { type: 'map', note: 'Find riverside cafes on the Perfume River on the map.' }
      ],
      faqs: [
        ['Are there river cafes?', 'Many along the river; search by name on the map.'],
        ['Which side views the pagoda?', 'The bank facing Ha Khe Hill, west of the river.'],
        ['When is best?', 'Late afternoon and early morning.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'itineraries/half-day-hue': {
      path: 'itineraries/half-day-hue',
      metaTitle: 'Half-Day Hue Itinerary – Thien Mu Pagoda & Citadel | Travel',
      metaDescription: 'A half-day Hue plan: Thien Mu Pagoda, the Imperial City and the Perfume River. Suggested order and flexible timing.',
      ogTitle: 'Half-Day Hue Itinerary – Thien Mu Pagoda & Citadel',
      ogDescription: 'A half day with the pagoda, citadel and river.',
      breadcrumb: 'Thien Mu Pagoda → Itinerary → Half day',
      hero: { kicker: 'Itinerary · Hue', title: 'Half a day in Hue', sub: 'With half a day you can combine Thien Mu Pagoda, the Imperial City and a slice of the Perfume River.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'The half-day plan focuses on two icons: the riverside pagoda and the imperial citadel.' },
        { type: 'steps', kicker: 'Suggested', title: 'Order', items: [
          { title: 'Morning', body: 'Thien Mu Pagoda while it is cool and quiet.' },
          { title: 'Midday', body: 'Imperial City before the heat.' },
          { title: 'Afternoon', body: 'Stroll the Perfume River or Dong Ba Market.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Flexible timing', body: 'Opening hours of each site are unverified; arrange by the actual day.' },
        { type: 'map', note: 'Confirm the route and drop-off by the pagoda name on the map.' }
      ],
      faqs: [
        ['Is half a day enough?', 'Enough for the pagoda and citadel; see the itinerary.'],
        ['How to get around?', 'Taxi, Grab or motorbike are all convenient.'],
        ['Time for photos?', 'Yes, morning and afternoon light are nice.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'itineraries/hue-2-day-itinerary': {
      path: 'itineraries/hue-2-day-itinerary',
      metaTitle: '2-Day Hue Itinerary – Pagoda, Tombs & River | Travel',
      metaDescription: 'A 2-day Hue plan: Thien Mu Pagoda, Nguyen tombs, Imperial City and food. Suggested day split, flexible.',
      ogTitle: '2-Day Hue Itinerary – Pagoda, Tombs & River',
      ogDescription: 'Two days with the pagoda, tombs, citadel and food.',
      breadcrumb: 'Thien Mu Pagoda → Itinerary → 2 days',
      hero: { kicker: 'Itinerary · Hue', title: '2 days in Hue', sub: 'Two days let you combine the pagoda, Nguyen tombs and food without rushing.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'With two days, split lightly: day one pagoda and citadel, day two tombs and the river.' },
        { type: 'steps', kicker: 'Day split', title: 'Suggested', items: [
          { title: 'Day 1', body: 'Thien Mu Pagoda, Imperial City, Dong Ba Market.' },
          { title: 'Day 2', body: 'Khiem Lang, Ung Lang, Perfume River stroll.' },
          { title: 'Food', body: 'Save a meal for vegetarian and bun bo Hue.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Tombs have separate tickets', body: 'The tombs have their own tickets (unverified); check the official source.' },
        { type: 'map', note: 'Confirm the route between sites on the map.' }
      ],
      faqs: [
        ['Is 2 days enough?', 'Enough for the pagoda, tombs and main food.'],
        ['Should I hire a car?', 'Convenient for out-of-town tombs; agree the price first.'],
        ['What to eat?', 'Bun bo, vegetarian meals and Hue che.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://whc.unesco.org/en/list/678/">UNESCO — Hue Monument Complex</a>'
      ],
      updated: '2026-11-10'
    },
    'itineraries/sunset-itinerary': {
      path: 'itineraries/sunset-itinerary',
      metaTitle: 'Hue Sunset Itinerary – Thien Mu Pagoda & Perfume River | Travel',
      metaDescription: 'A Hue sunset plan: Thien Mu Pagoda, the Perfume River bank and night market. Suggested golden-hour viewing.',
      ogTitle: 'Hue Sunset Itinerary – Thien Mu Pagoda & Perfume River',
      ogDescription: 'Golden hour with the pagoda, river and night market.',
      breadcrumb: 'Thien Mu Pagoda → Itinerary → Sunset',
      hero: { kicker: 'Itinerary · Hue', title: 'Sunset in Hue', sub: 'Late afternoon is when Thien Mu Pagoda and the Perfume River look best, before a night market stroll.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'The sunset plan focuses on soft light on the river and Phuoc Duyen Tower.' },
        { type: 'steps', kicker: 'Suggested', title: 'Order', items: [
          { title: 'Afternoon', body: 'Pagoda in the slanting light.' },
          { title: 'Dusk', body: 'River bank to watch the reflection.' },
          { title: 'Evening', body: 'Hue night market or riverside coffee.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Flexible timing', body: 'Sunset time shifts by season; check the forecast on arrival.' },
        { type: 'map', note: 'Confirm the riverbank and pagoda on the map.' }
      ],
      faqs: [
        ['When is light best?', 'Near sunset, when the light is soft.'],
        ['Are there evening boat trips?', 'Services exist but confirm; see the river itinerary page.'],
        ['What to do at night?', 'Hue night market and riverside coffee.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'itineraries/hue-day-trip-from-da-nang': {
      path: 'itineraries/hue-day-trip-from-da-nang',
      metaTitle: 'Hue Day Trip from Da Nang – Thien Mu Pagoda | Travel',
      metaDescription: 'A Hue day trip from Da Nang: drive, pagoda, citadel and return. Suggested timing and transport.',
      ogTitle: 'Hue Day Trip from Da Nang – Thien Mu Pagoda',
      ogDescription: 'A Hue day trip from Da Nang: pagoda, citadel and return.',
      breadcrumb: 'Thien Mu Pagoda → Itinerary → From Da Nang',
      hero: { kicker: 'Itinerary · Hue', title: 'Hue day trip from Da Nang', sub: 'About 2–3 hours’ drive, you can visit Thien Mu Pagoda and a few key spots, then return to Da Nang.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Hue is about 2–3 hours overland from Da Nang, convenient for a day trip.' },
        { type: 'steps', kicker: 'Suggested', title: 'Order', items: [
          { title: 'Morning', body: 'Leave Da Nang early, reach the pagoda while cool.' },
          { title: 'Midday', body: 'Imperial City or Dong Ba Market.' },
          { title: 'Afternoon', body: 'Return to Da Nang before evening.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Travel time', body: 'Travel time varies with traffic; no fixed schedule promised.' },
        { type: 'map', note: 'Confirm the Da Nang–Hue route on the map.' }
      ],
      faqs: [
        ['How long from Da Nang?', 'About 2–3 hours depending on road and traffic.'],
        ['Enough time for the pagoda?', 'Yes, 1–2 hours at the pagoda is enough.'],
        ['Which transport?', 'Private car, coach or a tour all work.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'stay/where-to-stay-in-hue': {
      path: 'stay/where-to-stay-in-hue',
      metaTitle: 'Where to Stay in Hue – Areas & Tips | Travel',
      metaDescription: 'Where to stay in Hue: city center, Perfume River bank or near the pagoda. Area suggestions, no specific hotel claims.',
      ogTitle: 'Where to Stay in Hue – Areas & Tips',
      ogDescription: 'Center, river bank and near-pagoda areas; lodging tips.',
      breadcrumb: 'Thien Mu Pagoda → Stay → Where to stay',
      hero: { kicker: 'Stay · Hue', title: 'Where to stay in Hue', sub: 'Hue offers everything from center hotels to riverside homestays. Pick an area by your itinerary.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Travelers often choose central Hue or along the Perfume River for easy movement.' },
        { type: 'cards', kicker: 'Areas', title: 'Pick a base', items: [
          { title: 'Center', body: 'Near Dong Ba Market, convenient dining.' },
          { title: 'River bank', body: 'Relaxed riverside vibe.' },
          { title: 'Near pagoda', body: 'Handy if the pagoda is the priority.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'No specific claims', body: 'The page does not list hotel names to avoid wrong claims. Compare on a booking platform.' },
        { type: 'map', note: 'Find lodging areas by the pagoda name on the map.' }
      ],
      faqs: [
        ['Which area?', 'Center or river bank, by preference.'],
        ['Is near the pagoda convenient?', 'Yes, but the center is better for dining.'],
        ['What about price?', 'Varied; compare on a booking platform.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'stay/best-hotels-near-pagoda': {
      path: 'stay/best-hotels-near-pagoda',
      metaTitle: 'Hotels near Thien Mu Pagoda – Area Tips | Hue',
      metaDescription: 'Hotel areas near Thien Mu Pagoda: west bank of the Perfume River, central Hue. No specific hotel names claimed.',
      ogTitle: 'Hotels near Thien Mu Pagoda – Area Tips',
      ogDescription: 'Lodging areas near the pagoda; no specific names claimed.',
      breadcrumb: 'Thien Mu Pagoda → Stay → Near pagoda',
      hero: { kicker: 'Stay · Hue', title: 'Hotels near the pagoda', sub: 'The west bank of the Perfume River and central Hue are suggestions for staying near Thien Mu Pagoda.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'The pagoda is west of the center, so west-bank riverside hotels are usually convenient.' },
        { type: 'info', title: 'Lodging notes', rows: [
          { label: 'West bank', value: 'Near pagoda, river views' },
          { label: 'Center', value: 'Dining and transport handy' },
          { label: 'Confirm', value: 'Compare prices on a platform' }
        ] },
        { type: 'callout', tone: 'warn', title: 'No specific claims', body: 'The page does not name hotels to avoid wrong claims. Compare yourself.' },
        { type: 'map', note: 'Find lodging around the pagoda on the map.' }
      ],
      faqs: [
        ['Which area is closest?', 'West bank of the Perfume River, west of center.'],
        ['Are there hotels right by the pagoda?', 'A few options around the area; compare when booking.'],
        ['Book ahead?', 'Yes, especially in peak season.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'stay/is-thien-mu-worth-visiting': {
      path: 'stay/is-thien-mu-worth-visiting',
      metaTitle: 'Is Thien Mu Pagoda Worth Visiting? – Review & Notes | Hue',
      metaDescription: 'Is Thien Mu Pagoda worth it: Perfume River scenery, Phuoc Duyen Tower, spiritual space. Honest review and practical notes.',
      ogTitle: 'Is Thien Mu Pagoda Worth Visiting? – Review & Notes',
      ogDescription: 'Scenery, the tower and spiritual space; an honest review.',
      breadcrumb: 'Thien Mu Pagoda → Review → Worth it?',
      hero: { kicker: 'Review · Hue', title: 'Is Thien Mu Pagoda worth it?', sub: 'If you like riverside scenery, old temple architecture and quiet space, it is a spot to include when in Hue.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Thien Mu Pagoda is one of Hue’s symbols, on Ha Khe Hill facing the Perfume River.' },
        { type: 'cards', kicker: 'Why go', title: 'Pros', items: [
          { title: 'Scenery', body: 'Ha Khe Hill and the Perfume River are beautiful.' },
          { title: 'Icon', body: 'The seven-tier Phuoc Duyen Tower is distinctive.' },
          { title: 'Calm', body: 'A living monastic space.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Practical note', body: 'Pagoda visits are usually free per sources, but hours and conditions are unverified. Pair it with the Citadel or river.' },
        { type: 'map', note: 'Confirm the entrance by the pagoda name on the map.' }
      ],
      faqs: [
        ['Should I go?', 'Yes, especially if you like riverside temples and old architecture.'],
        ['How long to visit?', 'Usually 1–2 hours to walk the grounds.'],
        ['What to combine with?', 'The Imperial City or a Perfume River boat trip.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    },
    'stay/hue-travel-guide': {
      path: 'stay/hue-travel-guide',
      metaTitle: 'Hue Travel Guide – Overview & Combine Thien Mu Pagoda | Hue',
      metaDescription: 'Hue travel guide: timing, transport, key sights and how to include Thien Mu Pagoda. Overview for a first trip.',
      ogTitle: 'Hue Travel Guide – Overview & Combine Thien Mu Pagoda',
      ogDescription: 'Timing, transport and key sights; include the pagoda in your plan.',
      breadcrumb: 'Thien Mu Pagoda → Guide → Hue overview',
      hero: { kicker: 'Guide · Hue', title: 'Hue travel guide', sub: 'Hue is a UNESCO heritage old capital, easily combining Thien Mu Pagoda, the Citadel and the tombs in one trip.' },
      heroImage: '/images/thien-mu-pagoda-real.jpg',
      sections: [
        { type: 'lead', body: 'Hue is compact and easy to get around, so the pagoda, citadel and river fit into a few days.' },
        { type: 'steps', kicker: 'Suggested', title: 'Overview', items: [
          { title: 'Day 1', body: 'Thien Mu Pagoda, Imperial City, Dong Ba Market.' },
          { title: 'Day 2', body: 'Nguyen tombs and the Perfume River.' },
          { title: 'Food', body: 'Bun bo, vegetarian meals and Hue che.' }
        ] },
        { type: 'callout', tone: 'info', title: 'Transport', body: 'Taxi, Grab, motorbike or river boat all work; confirm the pagoda entrance by name on the map.' },
        { type: 'map', note: 'See the overall map of Hue sights.' }
      ],
      faqs: [
        ['How many days in Hue?', '2–3 days covers pagoda, tombs and food.'],
        ['How to get around?', 'Taxi, Grab, motorbike or river boat.'],
        ['When to go?', 'Dry season Feb–Aug is usually convenient.']
      ],
      sources: [
        '<a class="underline" href="https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0">Visit Hue — location and context</a>',
        '<a class="underline" href="https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm">Hue — digital tourism archive</a>'
      ],
      updated: '2026-11-10'
    }
  }
};
