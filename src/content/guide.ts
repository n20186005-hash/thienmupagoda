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

export const guides: Record<Locale, Guide> = {
  "vi": {
    "metaTitle": "Chùa Thiên Mụ, Huế: lịch sử, giờ cần xác nhận và đường đi",
    "metaDescription": "Chùa Thiên Mụ, còn gọi là Linh Mụ, nằm trên đồi Hà Khê bên sông Hương ở Huế. Đây là nơi sinh hoạt Phật giáo: hãy ưu tiên không gian thờ tự khi tham quan.",
    "ogTitle": "Chùa Thiên Mụ, Huế: lịch sử, giờ cần xác nhận và đường đi",
    "ogDescription": "Google Maps hiển thị đóng cửa lúc 17:30 khi kiểm tra ngày 2026-10-30. Đây chỉ là ảnh chụp thông tin của bên thứ ba, không phải lịch hằng tuần được nhà chùa xác nhận. Hãy hỏi lại trước khi đi, nhất là vào ngày lễ, khóa lễ hoặc bảo trì.",
    "heroKicker": "Kim Long · Huế · Việt Nam",
    "heroTitle": "Chùa Thiên Mụ",
    "heroSub": "Chùa Thiên Mụ, còn gọi là Linh Mụ, nằm trên đồi Hà Khê bên sông Hương ở Huế. Đây là nơi sinh hoạt Phật giáo: hãy ưu tiên không gian thờ tự khi tham quan.",
    "heroRating": "★ 4,6 · 20.388 đánh giá",
    "heroFree": "Xác nhận điều kiện vào chùa",
    "heroHeritage": "Nơi sinh hoạt Phật giáo",
    "heroMapsNote": "Ảnh chụp thủ công từ Google Maps ngày 2026-10-30: 4,6/5 và 20.388 đánh giá. Không tự động cập nhật; đây không phải đánh giá do trang này thu thập.",
    "introKicker": "Cốt cách xứ Huế",
    "introTitle": "Từ năm 1601 đến biểu tượng Phước Duyên",
    "introBody": "Nguồn du lịch chính thức ghi nhận chùa được khởi dựng năm 1601, gắn với chúa Nguyễn Hoàng. Tháp Phước Duyên bảy tầng, cao 21 m, là công trình xây sau đó; không nên hiểu tháp hiện nay có từ năm 1601.",
    "quickInfoTitle": "Thông tin nhanh",
    "quickInfo": [
      {
        "label": "Khu vực",
        "value": "Kim Long, Huế"
      },
      {
        "label": "Giờ hiển thị trên Maps",
        "value": "2026-10-30 · 17:30"
      },
      {
        "label": "Phí hiện hành",
        "value": "Chưa xác minh"
      }
    ],
    "aboutKicker": "Cẩm nang tham quan",
    "aboutTitle": "Về Chùa Thiên Mụ",
    "aboutBody1": "Maps ghi Kim Long, Huế; đây là tham chiếu khu vực, không phải địa chỉ bưu chính hay cổng vào chính xác đã xác minh. Tìm theo tên chùa và xác nhận điểm đến với đơn vị vận chuyển.",
    "aboutBreadcrumb": "Chùa Thiên Mụ → Huế → Việt Nam",
    "aboutBody2": "Maps đánh dấu có lối vào hỗ trợ tiếp cận ngày 2026-10-30. Điều này không xác nhận mọi bậc thang, sân, điện thờ hay nhà vệ sinh đều không có bậc; hỏi rõ tuyến đường phù hợp nhu cầu của bạn.",
    "aboutQuickTitle": "Thông tin tóm tắt",
    "aboutQuick": [
      {
        "label": "Tên khác",
        "value": "Linh Mụ"
      },
      {
        "label": "Bối cảnh",
        "value": "Đồi Hà Khê, sông Hương"
      },
      {
        "label": "Phạm vi",
        "value": "Chùa và các công trình trong khuôn viên"
      }
    ],
    "aboutGovt": "Đối chiếu bản đồ với nguồn du lịch chính thức; nhãn địa chỉ có thể khác nhau.",
    "spacesKicker": "Một vòng tham quan",
    "spacesTitle": "Những lớp không gian đáng dừng lại",
    "spaces": [
      {
        "n": "01",
        "title": "Phước Duyên",
        "body": "Tháp bảy tầng, cao 21 m, được nguồn du lịch Huế phân biệt với thời điểm khởi dựng chùa."
      },
      {
        "n": "02",
        "title": "Không gian thờ tự",
        "body": "Gợi ý ứng xử chung, không phải bản nội quy đã được nhà chùa xác nhận: ăn mặc kín đáo, nói nhỏ, không gián đoạn nghi lễ; xin phép trước khi chụp người hoặc không gian hạn chế. Làm theo biển báo, không chạm đồ thờ hoặc lễ vật."
      },
      {
        "n": "03",
        "title": "Bến sông và bậc lên",
        "body": "Tư liệu du lịch số của Huế ghi nhận bến sông và các bậc lên. Không xem đó là bảo đảm thuyền đang hoạt động hoặc tuyến không có bậc."
      }
    ],
    "visitKicker": "Tham quan",
    "visitCards": [
      {
        "kicker": "Giờ tham quan",
        "title": "Hỏi lại trước khi đi",
        "body": "Google Maps hiển thị đóng cửa lúc 17:30 khi kiểm tra ngày 2026-10-30. Đây chỉ là ảnh chụp thông tin của bên thứ ba, không phải lịch hằng tuần được nhà chùa xác nhận. Hãy hỏi lại trước khi đi, nhất là vào ngày lễ, khóa lễ hoặc bảo trì."
      },
      {
        "kicker": "Chi phí",
        "title": "Chưa xác minh giá hiện hành",
        "body": "Chưa xác minh được thông báo giá vé hiện hành rõ ràng của nhà chùa. Không coi giá tour, thuyền hay gửi xe là phí vào chùa; xác nhận riêng từng dịch vụ và điều kiện tiếp cận."
      },
      {
        "kicker": "Thời tiết",
        "title": "Theo điều kiện thực tế",
        "body": "Trang không cung cấp thời tiết trực tiếp. Kiểm tra dự báo và cảnh báo của cơ quan khí tượng Việt Nam trước khi đi; mưa, nắng nóng và mặt bậc trơn có thể ảnh hưởng chuyến viếng."
      }
    ],
    "transportKicker": "Chi tiết giao thông",
    "transportTitle": "Xác nhận lối vào và dịch vụ vận chuyển",
    "transportItems": [
      {
        "b": "Đường bộ:",
        "text": "Dùng tên chùa trên bản đồ, xác nhận điểm trả khách và lối vào. Không hứa thời gian, khoảng cách hay tình trạng giao thông từ mọi điểm xuất phát."
      },
      {
        "b": "Đường sông:",
        "text": "Bến sông được ghi trong tư liệu du lịch số; hỏi đơn vị vận chuyển về chuyến đi, giá, điều kiện thời tiết và khả năng tiếp cận. Không mặc định có chuyến hằng ngày."
      }
    ],
    "parkingKicker": "Gửi xe & ứng xử",
    "parkingTitle": "Gửi xe quanh lối vào",
    "parkingBody": "Chưa xác minh bãi xe, giá hoặc chỗ trống hiện hành. Hỏi đơn vị vận chuyển và đọc biển tại chỗ; không đỗ chắn lối sinh hoạt hoặc thờ tự.",
    "etiquetteTitle": "Ứng xử tại nơi thờ tự",
    "etiquetteBody": "Gợi ý ứng xử chung, không phải bản nội quy đã được nhà chùa xác nhận: ăn mặc kín đáo, nói nhỏ, không gián đoạn nghi lễ; xin phép trước khi chụp người hoặc không gian hạn chế. Làm theo biển báo, không chạm đồ thờ hoặc lễ vật.",
    "foodKicker": "Quanh Kim Long",
    "foodTitle": "Ẩm thực nên tìm sau khi vãn cảnh",
    "foods": [
      {
        "title": "Tìm quán đang phục vụ",
        "body": "Không có chi nhánh hay giờ quán cụ thể được xác minh trong đợt này; kiểm tra trực tiếp trước khi đưa vào lịch trình."
      },
      {
        "title": "Nhu cầu ăn uống",
        "body": "Nếu cần đồ chay hoặc có dị ứng, hỏi thành phần và cách chế biến; không suy ra mọi món gần chùa đều phù hợp."
      }
    ],
    "nearbyKicker": "Điểm lân cận",
    "nearbyTitle": "Các điểm riêng trong hành trình Huế",
    "nearbyItems": [
      {
        "title": "Kinh thành Huế",
        "body": "Điểm di sản riêng; cần kiểm tra vé, thời gian và di chuyển riêng, không phải khu vực thuộc chùa."
      },
      {
        "title": "Sông Hương",
        "body": "Bối cảnh địa lý của chùa, không phải bảo đảm tour thuyền hoặc lối đi ven sông được mở suốt tuyến."
      }
    ],
    "nearbyNote": "",
    "reviewsKicker": "Đánh giá từ Google Maps",
    "faqTitle": "Câu hỏi thường gặp",
    "reviewsTitle": "20.388 đánh giá trên Maps",
    "reviewsBody": "Ảnh chụp thủ công từ Google Maps ngày 2026-10-30: 4,6/5 và 20.388 đánh giá. Không tự động cập nhật; đây không phải đánh giá do trang này thu thập.",
    "reviewsCta": "Xem tất cả đánh giá trên Google Maps ↗",
    "faqs": [
      [
        "Chùa nằm ở đâu?",
        "Maps ghi Kim Long, Huế; đây là tham chiếu khu vực, không phải địa chỉ bưu chính hay cổng vào chính xác đã xác minh. Tìm theo tên chùa và xác nhận điểm đến với đơn vị vận chuyển."
      ],
      [
        "Giờ mở cửa là bao nhiêu?",
        "Google Maps hiển thị đóng cửa lúc 17:30 khi kiểm tra ngày 2026-10-30. Đây chỉ là ảnh chụp thông tin của bên thứ ba, không phải lịch hằng tuần được nhà chùa xác nhận. Hãy hỏi lại trước khi đi, nhất là vào ngày lễ, khóa lễ hoặc bảo trì."
      ],
      [
        "Có phải mua vé không?",
        "Chưa xác minh được thông báo giá vé hiện hành rõ ràng của nhà chùa. Không coi giá tour, thuyền hay gửi xe là phí vào chùa; xác nhận riêng từng dịch vụ và điều kiện tiếp cận."
      ],
      [
        "Tháp có từ năm 1601 không?",
        "Nguồn du lịch chính thức ghi nhận chùa được khởi dựng năm 1601, gắn với chúa Nguyễn Hoàng. Tháp Phước Duyên bảy tầng, cao 21 m, là công trình xây sau đó; không nên hiểu tháp hiện nay có từ năm 1601."
      ],
      [
        "Có tuyến không bậc không?",
        "Maps đánh dấu có lối vào hỗ trợ tiếp cận ngày 2026-10-30. Điều này không xác nhận mọi bậc thang, sân, điện thờ hay nhà vệ sinh đều không có bậc; hỏi rõ tuyến đường phù hợp nhu cầu của bạn."
      ],
      [
        "Nên ứng xử thế nào?",
        "Gợi ý ứng xử chung, không phải bản nội quy đã được nhà chùa xác nhận: ăn mặc kín đáo, nói nhỏ, không gián đoạn nghi lễ; xin phép trước khi chụp người hoặc không gian hạn chế. Làm theo biển báo, không chạm đồ thờ hoặc lễ vật."
      ],
      [
        "Đánh giá có tự động cập nhật không?",
        "Ảnh chụp thủ công từ Google Maps ngày 2026-10-30: 4,6/5 và 20.388 đánh giá. Không tự động cập nhật; đây không phải đánh giá do trang này thu thập."
      ]
    ],
    "sourcesKicker": "Nguồn tham khảo",
    "sourcesTitle": "Đánh giá & tài liệu tham khảo",
    "sourcesItems": [
      "<a class=\"underline\" href=\"https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0\">Visit Hue — vị trí, tháp và bối cảnh lịch sử</a>",
      "<a class=\"underline\" href=\"https://vietnam.travel/de/plan-your-trip/recommended-trip/heritage-sites-vietnam/\">Vietnam Tourism — sông Hương và năm khởi dựng</a>",
      "<a class=\"underline\" href=\"https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm\">Huế — tư liệu du lịch số của khuôn viên</a>",
      "<a class=\"underline\" href=\"https://nchmf.gov.vn/\">Cơ quan khí tượng Việt Nam: dự báo và cảnh báo</a>"
    ],
    "footerText": "Nguồn và ảnh chụp thông tin được đối chiếu ngày 2026-10-30.",
    "footerDisclaimer": "Cẩm nang du lịch và phổ biến kiến thức độc lập, phi lợi nhuận, không chính thức; không đại diện nhà chùa, chính quyền, cơ quan di sản hay Google."
  },
  "en": {
    "metaTitle": "Thien Mu Pagoda, Hue: history, hours to confirm and access",
    "metaDescription": "Thiên Mụ, also called Linh Mụ, stands on Hà Khê Hill beside the Perfume River in Huế. It remains a Buddhist religious setting: give worship and ceremonies priority during a visit.",
    "ogTitle": "Thien Mu Pagoda, Hue: history, hours to confirm and access",
    "ogDescription": "Google Maps showed closing at 17:30 when checked on 2026-10-30. This is a third-party snapshot, not a weekly schedule confirmed by the pagoda. Check again before travelling, especially around ceremonies, holidays or maintenance.",
    "heroKicker": "Kim Long · Huế · Vietnam",
    "heroTitle": "Thien Mu Pagoda",
    "heroSub": "Thiên Mụ, also called Linh Mụ, stands on Hà Khê Hill beside the Perfume River in Huế. It remains a Buddhist religious setting: give worship and ceremonies priority during a visit.",
    "heroRating": "★ 4.6 · 20,388 reviews",
    "heroFree": "Confirm admission conditions",
    "heroHeritage": "A Buddhist religious place",
    "heroMapsNote": "Manual Google Maps snapshot dated 2026-10-30: 4.6/5 and 20,388 reviews. It does not update automatically; these are not reviews collected here.",
    "introKicker": "The spirit of Huế",
    "introTitle": "From 1601 to the symbol of Phước Duyên",
    "introBody": "Official tourism sources date the pagoda’s founding to 1601 and associate it with Nguyễn Hoàng. The seven-tier, 21 m Phước Duyên Tower is a later structure; the visible tower should not be dated to 1601.",
    "quickInfoTitle": "Quick info",
    "quickInfo": [
      {
        "label": "Area reference",
        "value": "Kim Long, Huế"
      },
      {
        "label": "Maps closing snapshot",
        "value": "2026-10-30 · 17:30"
      },
      {
        "label": "Current admission",
        "value": "Not verified"
      }
    ],
    "aboutKicker": "Visitor guide",
    "aboutTitle": "About Thien Mu Pagoda",
    "aboutBody1": "Maps lists Kim Long, Huế as a place reference, not a verified postal address or exact entrance. Search by the pagoda’s name and confirm the drop-off point with your transport provider.",
    "aboutBreadcrumb": "Thien Mu Pagoda → Huế → Vietnam",
    "aboutBody2": "Maps marked an accessible entrance on 2026-10-30. This does not establish step-free access to every stairway, courtyard, worship hall or toilet; confirm the route appropriate to your needs.",
    "aboutQuickTitle": "Quick facts",
    "aboutQuick": [
      {
        "label": "Also called",
        "value": "Linh Mụ"
      },
      {
        "label": "Setting",
        "value": "Hà Khê Hill, Perfume River"
      },
      {
        "label": "Scope",
        "value": "Pagoda and its compound"
      }
    ],
    "aboutGovt": "Compare the map listing with official tourism sources; address labels can differ.",
    "spacesKicker": "A walk through the grounds",
    "spacesTitle": "Spaces worth pausing at",
    "spaces": [
      {
        "n": "01",
        "title": "Phước Duyên",
        "body": "The seven-tier, 21 m tower is distinguished from the pagoda’s founding date by Hue tourism sources."
      },
      {
        "n": "02",
        "title": "Worship spaces",
        "body": "General courtesy guidance, rather than a verified temple rulebook: dress modestly, speak quietly and avoid interrupting worship. Ask before photographing people or restricted spaces. Follow signs and do not touch offerings or religious objects."
      },
      {
        "n": "03",
        "title": "River landing and steps",
        "body": "Hue’s digital tourism record depicts a river landing and steps. That does not confirm a boat service is operating or that the route is step-free."
      }
    ],
    "visitKicker": "Visiting",
    "visitCards": [
      {
        "kicker": "Visiting hours",
        "title": "Confirm before visiting",
        "body": "Google Maps showed closing at 17:30 when checked on 2026-10-30. This is a third-party snapshot, not a weekly schedule confirmed by the pagoda. Check again before travelling, especially around ceremonies, holidays or maintenance."
      },
      {
        "kicker": "Admission",
        "title": "Current tariff unverified",
        "body": "No clearly pagoda-specific current admission notice was verified. Do not treat a tour, boat or parking price as temple admission; confirm each service and its access conditions separately."
      },
      {
        "kicker": "Weather",
        "title": "Plan for actual conditions",
        "body": "This guide has no live weather feed. Check Vietnam’s official meteorological forecasts and warnings before travelling; rain, heat and slippery steps can affect a visit."
      }
    ],
    "transportKicker": "Getting there",
    "transportTitle": "Confirm the entrance and transport service",
    "transportItems": [
      {
        "b": "By road:",
        "text": "Use the pagoda’s name on the map and confirm the drop-off point and entrance. No fixed journey time, distance or traffic conditions are promised."
      },
      {
        "b": "By river:",
        "text": "The river landing appears in the digital tourism record; ask a provider about departures, prices, weather and accessibility. Do not assume daily operation."
      }
    ],
    "parkingKicker": "Parking & conduct",
    "parkingTitle": "Parking near the entrance",
    "parkingBody": "Current parking locations, tariffs and availability were not verified. Ask your transport provider and follow on-site signs; do not block residents or worship access.",
    "etiquetteTitle": "Conduct at a place of worship",
    "etiquetteBody": "General courtesy guidance, rather than a verified temple rulebook: dress modestly, speak quietly and avoid interrupting worship. Ask before photographing people or restricted spaces. Follow signs and do not touch offerings or religious objects.",
    "foodKicker": "Around Kim Long",
    "foodTitle": "Food to seek after your visit",
    "foods": [
      {
        "title": "Find an operating venue",
        "body": "No particular branch or current restaurant hours were verified in this review; check directly before adding one to your itinerary."
      },
      {
        "title": "Dietary needs",
        "body": "For vegetarian food or allergies, ask about ingredients and preparation; proximity to a temple does not guarantee suitability."
      }
    ],
    "nearbyKicker": "Nearby",
    "nearbyTitle": "Separate destinations in a Hue itinerary",
    "nearbyItems": [
      {
        "title": "Huế Imperial City",
        "body": "A separate heritage destination; check its own tickets, hours and travel arrangements. It is not part of the pagoda compound."
      },
      {
        "title": "Perfume River",
        "body": "The pagoda’s riverside setting does not guarantee an operating boat tour or an open continuous riverbank path."
      }
    ],
    "reviewsKicker": "Reviews from Google Maps",
    "faqTitle": "Frequently asked questions",
    "reviewsTitle": "20,388 reviews on Maps",
    "reviewsBody": "Manual Google Maps snapshot dated 2026-10-30: 4.6/5 and 20,388 reviews. It does not update automatically; these are not reviews collected here.",
    "reviewsCta": "See all reviews on Google Maps ↗",
    "faqs": [
      [
        "Where is the pagoda?",
        "Maps lists Kim Long, Huế as a place reference, not a verified postal address or exact entrance. Search by the pagoda’s name and confirm the drop-off point with your transport provider."
      ],
      [
        "What are the opening hours?",
        "Google Maps showed closing at 17:30 when checked on 2026-10-30. This is a third-party snapshot, not a weekly schedule confirmed by the pagoda. Check again before travelling, especially around ceremonies, holidays or maintenance."
      ],
      [
        "Is there an admission charge?",
        "No clearly pagoda-specific current admission notice was verified. Do not treat a tour, boat or parking price as temple admission; confirm each service and its access conditions separately."
      ],
      [
        "Does the tower date to 1601?",
        "Official tourism sources date the pagoda’s founding to 1601 and associate it with Nguyễn Hoàng. The seven-tier, 21 m Phước Duyên Tower is a later structure; the visible tower should not be dated to 1601."
      ],
      [
        "Is the route step-free?",
        "Maps marked an accessible entrance on 2026-10-30. This does not establish step-free access to every stairway, courtyard, worship hall or toilet; confirm the route appropriate to your needs."
      ],
      [
        "How should visitors behave?",
        "General courtesy guidance, rather than a verified temple rulebook: dress modestly, speak quietly and avoid interrupting worship. Ask before photographing people or restricted spaces. Follow signs and do not touch offerings or religious objects."
      ],
      [
        "Does the rating update automatically?",
        "Manual Google Maps snapshot dated 2026-10-30: 4.6/5 and 20,388 reviews. It does not update automatically; these are not reviews collected here."
      ]
    ],
    "sourcesKicker": "Sources",
    "sourcesTitle": "Reviews & references",
    "sourcesItems": [
      "<a class=\"underline\" href=\"https://visithue.vn/ghe-tham-nhung-ngoi-chua-co-kinh-noi-tieng-o-hue/?pid=MjI5NDF8Y3NkbGRs0\">Visit Hue — location, tower and historical setting</a>",
      "<a class=\"underline\" href=\"https://vietnam.travel/de/plan-your-trip/recommended-trip/heritage-sites-vietnam/\">Vietnam Tourism — riverside setting and founding date</a>",
      "<a class=\"underline\" href=\"https://csdlsdl.hue.gov.vn/dulichso/chuathienmu.htm\">Huế — digital tourism record of the compound</a>",
      "<a class=\"underline\" href=\"https://nchmf.gov.vn/\">Vietnam meteorological centre: forecasts and warnings</a>"
    ],
    "footerText": "Sources and manual snapshot reviewed on 2026-10-30.",
    "footerDisclaimer": "An independent, unofficial, nonprofit tourism and educational guide; it does not represent the pagoda, government, heritage authority or Google.",
    "nearbyNote": ""
  }
};
