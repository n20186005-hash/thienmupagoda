import type { Locale } from '../i18n';

export const pageNotes: Record<Locale, { address: string; privacy: string; diagram: string }> = {
  vi: {
    address: "Maps ghi Kim Long, Huế; đây là tham chiếu khu vực, không phải địa chỉ bưu chính hay cổng vào chính xác đã xác minh. Tìm theo tên chùa và xác nhận điểm đến với đơn vị vận chuyển. Ảnh chụp thủ công từ Google Maps ngày 2026-11-10: 4,6/5 và 20.440 đánh giá.",
    privacy: "Google Analytics 4 tự động tải; có thể dùng cookie và nhận URL, trang giới thiệu, sự kiện, dữ liệu trình duyệt và thiết bị. Trang không có công tắc đồng ý hoặc tắt phân tích và không hứa ẩn danh hoàn toàn. Cloudflare xử lý IP, kết nối, yêu cầu, an ninh và hiệu năng; dịch vụ lưu trữ có thể thêm phép đo truy cập độc lập gồm lượt xem, URL, trang giới thiệu và dữ liệu thiết bị. Việc chèn mã không chứng minh mã đã chạy hay gửi dữ liệu. Đây là luồng riêng với GA và xử lý an ninh tại edge. Một mẫu HTML trang chủ www qua LAX ngày 2026-10-30 không có dấu beacon; không loại trừ các phản hồi khác hoặc thay đổi cấu hình. Liên kết bên ngoài có chính sách riêng. Không có tài khoản, đặt chỗ, thanh toán, biểu mẫu hay yêu cầu vị trí. Bộ nhớ ngoại tuyến cũ chỉ được gỡ khi trình duyệt nhận bản cập nhật; không đảm bảo dữ liệu mới khi ngoại tuyến.",
    diagram: "Minh họa sơ đồ nguyên gốc, không phải ảnh chụp hoặc bản vẽ hiện trạng chính xác."
  },
  en: {
    address: "Maps lists Kim Long, Huế as a place reference, not a verified postal address or exact entrance. Search by the pagoda’s name and confirm the drop-off point with your transport provider. Manual Google Maps snapshot dated 2026-11-10: 4.6/5 and 20,440 reviews.",
    privacy: "Google Analytics 4 loads automatically and may use cookies and receive URLs, referrers, events, browser and device data. This site has no consent or analytics disable switch and does not promise complete anonymity. Cloudflare processes IP, connection, request, security and performance data; hosting may independently add visit measurement involving page views, URLs, referrers and device data. Script injection alone does not prove execution or transmission. This is separate from GA and edge security processing. One www homepage HTML sample via LAX on 2026-10-30 had no beacon marker; it does not exclude other responses or later settings. External links have their own policies. There are no accounts, bookings, payments, forms or location requests. Older offline caches retire only when the browser receives the update; current information is not promised offline.",
    diagram: "Original schematic illustration, not a photograph or an exact survey of the site."
  }
};
