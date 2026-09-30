import { ATTRACTION } from '../data/site';
import type { Locale } from '../i18n';

// Toàn bộ nội dung theo ngôn ngữ. Mỗi khối văn bản nằm ở đây, GuidePage.astro
// chỉ lo trình bày. Các dòng có liên kết (bản đồ, du lịch chính thức) được dựng
// sẵn thành HTML và render bằng set:html.

export interface Guide {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;

  heroKicker: string;
  heroTitle: string;
  heroSub: string;
  heroRating: string;
  heroFree: string;
  heroHeritage: string;
  heroMapsNote: string;

  introKicker: string;
  introTitle: string;
  introBody: string;
  quickInfoTitle: string;
  quickInfo: { label: string; value: string }[];

  aboutKicker: string;
  aboutTitle: string;
  aboutBody1: string;
  aboutBreadcrumb: string;
  aboutBody2: string;
  aboutQuickTitle: string;
  aboutQuick: { label: string; value: string }[];
  aboutGovt: string;

  spacesKicker: string;
  spacesTitle: string;
  spaces: { n: string; title: string; body: string }[];

  visitKicker: string;
  visitCards: { kicker: string; title: string; body: string }[];

  transportKicker: string;
  transportTitle: string;
  transportItems: { b: string; text: string }[];

  parkingKicker: string;
  parkingTitle: string;
  parkingBody: string;
  etiquetteTitle: string;
  etiquetteBody: string;

  foodKicker: string;
  foodTitle: string;
  foods: { title: string; body: string }[];

  nearbyKicker: string;
  nearbyTitle: string;
  nearbyItems: { title: string; body: string }[];
  nearbyNote?: string;

  reviewsKicker: string;
  faqTitle: string;
  reviewsTitle: string;
  reviewsBody: string;
  reviewsCta: string;

  faqs: [string, string][];

  sourcesKicker: string;
  sourcesTitle: string;
  sourcesItems: string[];

  footerText: string;
  footerDisclaimer: string;
}

const mapsLink = (label: string) =>
  `<a class="underline" href="${ATTRACTION.mapsUrl}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const govtLink = (label: string) =>
  `<a class="underline" href="${ATTRACTION.govtUrl}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const vi: Guide = {
  metaTitle: 'Chùa Thiên Mụ (Thiên Mụ Pagoda) — Huế, Việt Nam | Lịch sử, đường đi & đánh giá',
  metaDescription:
    'Cẩm nang tham quan Chùa Thiên Mụ (Thiên Mụ Pagoda) ở Kim Long, Huế: vị trí trên bản đồ, giờ mở cửa, miễn phí vào cửa, tháp Phước Duyên 7 tầng, gần Kinh thành Huế và sông Hương, cùng đánh giá từ Google Maps.',
  ogTitle: 'Chùa Thiên Mụ — Huế Travel Guide',
  ogDescription:
    'Cẩm nang độc lập về Chùa Thiên Mụ (Thiên Mụ Pagoda) tại Huế, Thừa Thiên Huế, Việt Nam: vị trí, giờ tham quan, đánh giá và gợi ý lịch trình.',

  heroKicker: 'Kim Long · Huế · Việt Nam',
  heroTitle: 'Chùa Thiên Mụ',
  heroSub:
    'Một nhịp tĩnh lặng trên đồi Hà Khê — nơi tháp Phước Duyên bảy tầng soi bóng xuống dòng Hương Giang.',
  heroRating: '★ 4,6 · 20.248 đánh giá',
  heroFree: 'Vào cửa miễn phí',
  heroHeritage: 'Di sản trong Quần thể Di tích Cố đô Huế',
  heroMapsNote: `Đánh giá &amp; số lượt đánh giá đồng bộ từ đánh giá người dùng Google Maps · tháng 9/2026 · Xem tất cả trên Google Maps ↗`,

  introKicker: 'Cốt cách xứ Huế',
  introTitle: 'Từ năm 1601 đến biểu tượng Phước Duyên',
  introBody:
    'Chùa được khởi dựng dưới thời chúa Nguyễn Hoàng. UNESCO ghi nhận Thiên Mụ là một thành phần của Quần thể Di tích Cố đô Huế; tháp Phước Duyên bảy tầng được xây dưới triều Thiệu Trị vào thế kỷ XIX. Không gian chùa kéo dài từ bờ sông lên các lớp sân, cổng, điện thờ và vườn cây — một trục tham quan nên đi thật chậm.',
  quickInfoTitle: 'Thông tin nhanh',
  quickInfo: [
    { label: 'Địa chỉ', value: 'Kim Long, Huế 532761' },
    { label: 'Giờ tham khảo', value: '08:00–18:00' },
    { label: 'Chi phí vào cửa', value: 'Miễn phí' },
    { label: 'Plus Code', value: 'FG3V+7W Kim Long' }
  ],

  aboutKicker: 'Visitor Guide',
  aboutTitle: 'Về Chùa Thiên Mụ',
  aboutBody1:
    'Chào mừng đến với <strong>Chùa Thiên Mụ</strong>, ngôi chùa được biết đến rộng rãi với tên <strong>Thien Mu Pagoda</strong>. Tọa lạc tại lõi <strong>Huế</strong>, <strong>Thừa Thiên Huế</strong>, <strong>Vietnam</strong>, đây là điểm đến tâm linh và di sản nổi bật bên sông Hương, dễ dàng kết hợp trong hành trình khám phá miền Trung.',
  aboutBreadcrumb: 'Chùa Thiên Mụ → Huế → Thừa Thiên Huế → Vietnam',
  aboutBody2:
    'Khi viếng <strong>Chùa Thiên Mụ</strong>, du khách có thể dễ dàng ghép thêm các di tích lân cận như <strong>Kinh thành Huế</strong> và <strong>sông Hương</strong> trong cùng một ngày.',
  aboutQuickTitle: 'Thông tin tóm tắt',
  aboutQuick: [
    { label: 'Điểm tham quan', value: 'Thien Mu Pagoda' },
    { label: 'Thành phố', value: 'Huế' },
    { label: 'Tỉnh/Thành', value: 'Thừa Thiên Huế' },
    { label: 'Quốc gia', value: 'Vietnam' }
  ],
  aboutGovt: `Thông tin du lịch chính thức vùng, xem ${govtLink('Vietnam National Authority of Tourism ↗')}.`,

  spacesKicker: 'Một vòng tham quan',
  spacesTitle: 'Những lớp không gian đáng dừng lại',
  spaces: [
    {
      n: '01',
      title: 'Tháp Phước Duyên',
      body: 'Biểu tượng nổi bật nhất của chùa, bảy tầng, dựng dưới triều Thiệu Trị.'
    },
    {
      n: '02',
      title: 'Cổng Tam Quan & Điện Đại Hùng',
      body: 'Trục nghi lễ chính; hãy giữ giọng nói nhỏ và quan sát quy định trước khi vào nội điện.'
    },
    {
      n: '03',
      title: 'Vườn chùa & sông Hương',
      body: 'Khoảng lặng sau các công trình chính, hợp để nghỉ chân trước khi xuống bến sông.'
    }
  ],

  visitKicker: 'Tham quan',
  visitCards: [
    {
      kicker: 'Vé / chi phí',
      title: 'Miễn phí tham quan',
      body: 'Không thu vé vào khuôn viên theo các nguồn du lịch cập nhật. Các khoản như gửi xe, thuyền sông Hương, đồ lễ hoặc hướng dẫn viên là chi phí riêng và có thể thay đổi.'
    },
    {
      kicker: 'Thời điểm',
      title: 'Sáng sớm hoặc cuối chiều',
      body: 'Mùa xuân Huế thường dễ chịu nhất. Sáng cho không khí tĩnh, chiều có ánh sáng đẹp bên sông; mùa mưa kéo dài nên nên xem dự báo trước khi đi.'
    },
    {
      kicker: 'Thời lượng',
      title: 'Khoảng 60–90 phút',
      body: 'Đủ để đi trọn tuyến chính mà không vội. Nếu kết hợp đi thuyền, chụp ảnh hoặc dự lễ, nên chừa thêm thời gian.'
    }
  ],

  transportKicker: 'Chi tiết giao thông',
  transportTitle: 'Đi theo bờ sông, hoặc đến bằng thuyền',
  transportItems: [
    {
      b: 'Xe máy / ô tô:',
      text: 'từ trung tâm Huế đi theo hướng Kim Long – Nguyễn Phúc Nguyên. Đường dễ đi, quãng đường khoảng vài kilomet tùy điểm xuất phát.'
    },
    {
      b: 'Xe đạp:',
      text: 'phù hợp nếu thời tiết mát; cung đường ven sông cho nhịp đi chậm.'
    },
    {
      b: 'Thuyền rồng:',
      text: 'có các chuyến trên sông Hương kết nối khu trung tâm và bến gần chùa; nên hỏi giờ chạy và giá tại ngày đi.'
    },
    {
      b: 'Taxi / xe công nghệ:',
      text: 'thuận tiện cho nhóm nhỏ và khi trời mưa.'
    }
  ],

  parkingKicker: 'Gửi xe & ứng xử',
  parkingTitle: 'Gửi xe quanh lối vào',
  parkingBody:
    'Khu vực gần chùa có các điểm trông xe phục vụ khách. Mức phí có thể thay đổi theo loại xe và thời điểm; hãy xem bảng giá niêm yết tại chỗ trước khi gửi. Tránh đỗ chắn lối dân sinh và bến thuyền.',
  etiquetteTitle: 'Ứng xử tại nơi thờ tự',
  etiquetteBody:
    'Che vai và đầu gối, không tạo dáng phản cảm trước điện thờ, hạn chế dùng flash và làm theo biển hướng dẫn. Khi có khóa lễ, ưu tiên không gian cho Phật tử.',

  foodKicker: 'Quanh Kim Long',
  foodTitle: 'Ẩm thực nên tìm sau khi vãn cảnh',
  foods: [
    { title: 'Bún bò Huế', body: 'Nước dùng đậm, sả thơm; hợp cho bữa sáng hoặc trưa.' },
    { title: 'Bánh bèo · nậm · lọc', body: 'Nhóm bánh nhỏ đặc trưng Huế, dễ gọi nhiều món để chia sẻ.' },
    { title: 'Cơm chay', body: 'Phù hợp tinh thần chuyến viếng chùa; Huế có truyền thống ẩm thực chay phong phú.' },
    { title: 'Chè Huế', body: 'Một kết thúc nhẹ nhàng sau buổi đi bộ trong khuôn viên chùa.' }
  ],

  nearbyKicker: 'Điểm lân cận',
  nearbyTitle: "Ghép thành một ngày rất “Huế”",
  nearbyItems: [
    { title: 'Kinh thành Huế', body: 'Trung tâm di sản triều Nguyễn, dễ kết hợp trước hoặc sau Thiên Mụ.' },
    { title: 'Văn Miếu Huế', body: 'Nằm cùng hành lang di sản phía tây bắc, gần tuyến ven sông.' },
    { title: 'Hổ Quyền – Điện Voi Ré', body: 'Một cụm di tích ít ồn hơn, giúp hiểu thêm nghi lễ và lịch sử triều Nguyễn.' },
    { title: 'Lăng Tự Đức', body: 'Không gian lăng tẩm nổi tiếng phía tây nam thành phố; nên dành thời gian riêng để tham quan chậm.' }
  ],
  nearbyNote:
    'For an English-speaking itinerary, nearby highlights include the <strong>Imperial City of Huế</strong> and a cruise on the <strong>Perfume River</strong>.',

  reviewsKicker: 'Đánh giá từ Google Maps',
  faqTitle: 'Câu hỏi thường gặp',
  reviewsTitle: '4,6 / 5 · 20.248 đánh giá',
  reviewsBody:
    'Đồng bộ từ đánh giá người dùng Google Maps, thời gian đồng bộ: tháng 9/2026. Bản quyền thuộc về tác giả gốc và Google Maps.',
  reviewsCta: 'Xem tất cả đánh giá trên Google Maps ↗',

  faqs: [
    [
      'Chùa Thiên Mụ có thu vé không?',
      'Không. Việc vào khuôn viên chùa được nhiều nguồn du lịch hiện hành ghi nhận là miễn phí; nên chuẩn bị chi phí riêng cho gửi xe, đi thuyền hoặc dịch vụ cá nhân.'
    ],
    [
      'Nên dành bao lâu để tham quan?',
      'Khoảng 60–90 phút là phù hợp để đi chậm qua tháp Phước Duyên, cổng Tam Quan, điện Đại Hùng, khu vườn và bờ sông.'
    ],
    [
      'Nên mặc gì khi vào chùa?',
      'Trang phục kín đáo, lịch sự; che vai và đầu gối, nói nhỏ và tuân theo hướng dẫn tại khu thờ tự.'
    ],
    [
      'Thời điểm nào đẹp nhất?',
      'Buổi sáng mát và yên tĩnh; cuối chiều đẹp để nhìn sông Hương và ánh sáng nghiêng quanh tháp.'
    ],
    [
      'Có thể đến bằng thuyền không?',
      'Có. Tuyến thuyền trên sông Hương là một cách phổ biến để tiếp cận chùa; lịch và giá thay đổi theo đơn vị khai thác.'
    ],
    [
      'Where is Thiên Mụ Pagoda located?',
      'Thiên Mụ Pagoda is located in Kim Long, Huế, Thừa Thiên Huế province, Vietnam, on the northern bank of the Perfume River.'
    ],
    [
      'Is Thiên Mụ Pagoda free to visit?',
      'Yes, entry to the temple grounds is free. Separate costs may apply for parking, boat trips on the Perfume River, or personal services.'
    ],
    [
      'What are the opening hours?',
      'The grounds are generally open during daylight hours, roughly 08:00–18:00; hours may vary with religious events and on-site management.'
    ]
  ],

  sourcesKicker: 'Nguồn tham khảo',
  sourcesTitle: 'Đánh giá &amp; tài liệu tham khảo',
  sourcesItems: [
    'Đánh giá · đồng bộ tháng 9/2026 — nguồn: đánh giá người dùng Google Maps (Google Maps). Bản quyền thuộc về tác giả gốc và Google Maps.',
    `Google Maps: ${mapsLink('Xem Chùa Thiên Mụ trên Google Maps ↗')}`,
    `Du lịch chính thức: ${govtLink('Vietnam National Authority of Tourism ↗')}`
  ],

  footerText: 'Chùa Thiên Mụ · Kim Long, Huế',
  footerDisclaimer:
    'Trang thông tin độc lập dành cho khách tham quan; không phải website chính thức của Chùa Thiên Mụ hay cơ quan quản lý di sản.'
};

const en: Guide = {
  metaTitle: 'Thien Mu Pagoda (Chùa Thiên Mụ) — Hue, Vietnam | History, Directions & Reviews',
  metaDescription:
    'Visitor guide to Thien Mu Pagoda (Chùa Thiên Mụ) in Kim Long, Hue: map location, opening hours, free entry, the seven-tier Phước Duyên Tower, near the Imperial City of Huế and Perfume River, plus Google Maps reviews.',
  ogTitle: 'Thien Mu Pagoda — Hue Travel Guide',
  ogDescription:
    'Independent visitor guide to Thien Mu Pagoda (Chùa Thiên Mụ) in Huế, Thừa Thiên Huế, Vietnam: location, hours, reviews and itinerary tips.',

  heroKicker: 'Kim Long · Huế · Vietnam',
  heroTitle: 'Thien Mu Pagoda',
  heroSub:
    'A quiet pause on Hà Khê hill — where the seven-tier Phước Duyên Tower mirrors into the Perfume River.',
  heroRating: '★ 4.6 · 20,248 reviews',
  heroFree: 'Free entry',
  heroHeritage: 'Part of the Hue Monument Complex (UNESCO)',
  heroMapsNote: `Ratings synced from Google Maps user reviews · Sep 2026 · See all on Google Maps ↗`,

  introKicker: 'The spirit of Huế',
  introTitle: 'From 1601 to the symbol of Phước Duyên',
  introBody:
    'The pagoda was first founded under Lord Nguyễn Hoàng. UNESCO recognizes Thiên Mụ as part of the Hue Monument Complex; the seven-tier Phước Duyên Tower was built under the Thiệu Trị reign in the 19th century. The temple grounds rise from the riverbank through successive courtyards, gates, worship halls and gardens — a route best explored slowly.',
  quickInfoTitle: 'Quick info',
  quickInfo: [
    { label: 'Address', value: 'Kim Long, Huế 532761' },
    { label: 'Suggested hours', value: '08:00–18:00' },
    { label: 'Entry fee', value: 'Free' },
    { label: 'Plus Code', value: 'FG3V+7W Kim Long' }
  ],

  aboutKicker: 'Visitor Guide',
  aboutTitle: 'About Thien Mu Pagoda',
  aboutBody1:
    'Welcome to <strong>Chùa Thiên Mụ</strong>, widely known as <strong>Thien Mu Pagoda</strong>. Located in the heart of <strong>Huế</strong>, <strong>Thừa Thiên Huế</strong>, <strong>Vietnam</strong>, this is a leading spiritual and heritage landmark on the Perfume River, easy to combine with a central-Vietnam itinerary.',
  aboutBreadcrumb: 'Chùa Thiên Mụ → Huế → Thừa Thiên Huế → Vietnam',
  aboutBody2:
    'When visiting <strong>Chùa Thiên Mụ</strong>, travellers can easily add nearby heritage sites such as the <strong>Imperial City of Huế</strong> and the <strong>Perfume River</strong> to the same day.',
  aboutQuickTitle: 'Quick facts',
  aboutQuick: [
    { label: 'Attraction', value: 'Thien Mu Pagoda' },
    { label: 'City', value: 'Huế' },
    { label: 'Province', value: 'Thừa Thiên Huế' },
    { label: 'Country', value: 'Vietnam' }
  ],
  aboutGovt: `For official regional tourism information, visit the ${govtLink('Vietnam National Authority of Tourism ↗')}.`,

  spacesKicker: 'A walk through the grounds',
  spacesTitle: 'Spaces worth pausing at',
  spaces: [
    {
      n: '01',
      title: 'Phước Duyên Tower',
      body: 'The pagoda’s most prominent symbol — seven tiers, built under the Thiệu Trị reign.'
    },
    {
      n: '02',
      title: 'Tam Quan Gate & Đại Hùng Hall',
      body: 'The main ceremonial axis; keep your voice low and follow the rules before entering the inner hall.'
    },
    {
      n: '03',
      title: 'Temple garden & Perfume River',
      body: 'A calm stretch behind the main structures, good for a rest before heading down to the river pier.'
    }
  ],

  visitKicker: 'Visiting',
  visitCards: [
    {
      kicker: 'Tickets / cost',
      title: 'Free to visit',
      body: 'No entry fee to the temple grounds per current travel sources. Separate costs such as parking, Perfume River boats, offerings or guides are personal and may vary.'
    },
    {
      kicker: 'Timing',
      title: 'Early morning or late afternoon',
      body: 'Spring in Huế is usually the most pleasant. Mornings are calm; late afternoons give beautiful light by the river. The rainy season is long, so check the forecast before going.'
    },
    {
      kicker: 'Duration',
      title: 'About 60–90 minutes',
      body: 'Enough to cover the main route without rushing. Allow extra time if you add a boat trip, photos or a ceremony.'
    }
  ],

  transportKicker: 'Getting there',
  transportTitle: 'Along the riverbank, or arrive by boat',
  transportItems: [
    {
      b: 'Motorbike / car:',
      text: 'from central Huế head toward Kim Long – Nguyễn Phúc Nguyên. The road is easy; distance is a few kilometres depending on the starting point.'
    },
    {
      b: 'Bicycle:',
      text: 'good if the weather is cool; the riverside route invites a slow pace.'
    },
    {
      b: 'Dragon boat:',
      text: 'boats on the Perfume River connect the city centre with the pier near the pagoda; ask for departure times and price on the day.'
    },
    {
      b: 'Taxi / ride-hailing:',
      text: 'convenient for small groups and when it rains.'
    }
  ],

  parkingKicker: 'Parking & conduct',
  parkingTitle: 'Parking near the entrance',
  parkingBody:
    'There are attendants near the pagoda for visitor vehicles. Fees may vary by vehicle type and time; check the posted price board before leaving your vehicle. Avoid blocking local access paths and the boat pier.',
  etiquetteTitle: 'Conduct at a place of worship',
  etiquetteBody:
    'Cover shoulders and knees, avoid posed shots in front of the altars, limit flash, and follow signage. When a ceremony is in progress, give priority to worshippers.',

  foodKicker: 'Around Kim Long',
  foodTitle: 'Food to seek after your visit',
  foods: [
    { title: 'Bún bò Huế', body: 'A rich, lemongrass-scented broth; good for breakfast or lunch.' },
    { title: 'Bánh bèo · nậm · lọc', body: 'Huế’s signature small cakes — easy to order several to share.' },
    { title: 'Vegetarian cuisine', body: 'Fits the spirit of a temple visit; Huế has a rich vegetarian tradition.' },
    { title: 'Chè Huế', body: 'A light finish after a walk through the temple grounds.' }
  ],

  nearbyKicker: 'Nearby',
  nearbyTitle: 'A very “Huế” day out',
  nearbyItems: [
    { title: 'Imperial City of Huế', body: 'The Nguyen-dynasty citadel core, easy to pair before or after Thiên Mụ.' },
    { title: 'Huế Temple of Literature', body: 'On the same north-west heritage corridor, near the riverside route.' },
    { title: 'Hổ Quyền & Elephant Arena', body: 'A quieter complex that adds context on Nguyen court ritual and history.' },
    { title: 'Tomb of Tự Đức', body: 'A celebrated tomb complex south-west of the city; allow separate time for a slow visit.' }
  ],

  reviewsKicker: 'Reviews from Google Maps',
  faqTitle: 'Frequently asked questions',
  reviewsTitle: '4.6 / 5 · 20,248 reviews',
  reviewsBody:
    'Synced from Google Maps user reviews, sync time: Sep 2026. Copyright belongs to the original authors and Google Maps.',
  reviewsCta: 'See all reviews on Google Maps ↗',

  faqs: [
    [
      'Is Thien Mu Pagoda free to visit?',
      'Yes, entry to the temple grounds is free. Separate costs may apply for parking, boat trips on the Perfume River, or personal services.'
    ],
    [
      'How long should I spend there?',
      'About 60–90 minutes is right to walk slowly through the Phước Duyên Tower, Tam Quan Gate, Đại Hùng Hall, the garden and the riverbank.'
    ],
    [
      'What should I wear?',
      'Modest, respectful clothing — cover shoulders and knees, speak softly and follow the signs in the worship areas.'
    ],
    [
      'When is the best time to go?',
      'Cool, quiet mornings; late afternoons are lovely for the river and the slanting light on the tower.'
    ],
    [
      'Can I arrive by boat?',
      'Yes. Perfume River boat tours are a popular way to reach the pagoda; schedules and prices vary by operator.'
    ],
    [
      'Chùa Thiên Mụ có thu vé không?',
      'Không. Việc vào khuôn viên chùa được nhiều nguồn du lịch hiện hành ghi nhận là miễn phí; nên chuẩn bị chi phí riêng cho gửi xe, đi thuyền hoặc dịch vụ cá nhân.'
    ],
    [
      'Thiên Mụ Pagoda ở đâu?',
      'Chùa Thiên Mụ tọa lạc tại Kim Long, Huế, tỉnh Thừa Thiên Huế, Việt Nam, trên bờ bắc sông Hương.'
    ],
    [
      'Giờ mở cửa thế nào?',
      'Khuôn viên thường mở ban ngày, khoảng 08:00–18:00; giờ có thể thay đổi theo sự kiện tôn giáo và quản lý thực tế.'
    ]
  ],

  sourcesKicker: 'Sources',
  sourcesTitle: 'Reviews &amp; references',
  sourcesItems: [
    'Reviews · synced Sep 2026 — source: Google Maps user reviews (Google Maps). Copyright belongs to the original authors and Google Maps.',
    `Google Maps: ${mapsLink('View Chùa Thiên Mụ on Google Maps ↗')}`,
    `Official tourism: ${govtLink('Vietnam National Authority of Tourism ↗')}`
  ],

  footerText: 'Chùa Thiên Mụ · Kim Long, Huế',
  footerDisclaimer:
    'An independent visitor-information page; not the official website of Chùa Thiên Mụ or the heritage authority.'
};

export const guides: Record<Locale, Guide> = { vi, en };
