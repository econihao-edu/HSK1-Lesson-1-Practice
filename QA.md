# QA — Online Practice buổi 01 V2

## Kiểm tra tự động

- `node --test tests/core.test.cjs`: 6/6 pass. Kiểm tra 24 câu chính, đáp án/thứ tự hợp lệ, tính điểm, dữ liệu lưu hỏng, khôi phục tiến độ và 4 ví dụ tách khỏi câu tính điểm.
- `node --check app.js`: pass.
- FFmpeg giải mã toàn bộ 21 MP3: pass.
- Không còn nhãn Online Worksheet hoặc cụm “tự biên soạn” trong giao diện HTML/JS. Giữ thuật ngữ Paper Worksheet khi dẫn chiếu phiếu giấy.

## Kiểm tra trên trình duyệt

- Đăng nhập bằng tên học viên thử và econihao; nội dung V2 khởi tạo tiến độ mới.
- Đã phát và trả lời cả 4 ví dụ. Ví dụ thanh điệu được thử sai rồi đúng, có phản hồi tương ứng. Hoàn thành ví dụ không cộng câu/điểm vào bài chính: vẫn 0/24.
- Ví dụ chỉ mở lựa chọn khi audio kết thúc. Khi đóng ví dụ, audio dừng; bài chính vẫn giữ tiến độ.
- Đã thử các câu chính được sửa về người mở đầu, 您/大家/你们, điền 好/们 và nối lượt chào; đã trả lời 8/24 câu sửa và tải lại trang: giữ đúng tiến độ 8/24. Không có lỗi console trong lần kiểm tra.
- Giao diện được kiểm tra mô phỏng trên viewport 390×844 và 320×740; desktop 1280×900. Xem ảnh bàn giao.

## Giới hạn

- Chưa thử trên iPhone/Android vật lý, chưa thử lớp học thực tế.
- Lượt chạy đầy đủ 24 câu và phép thử 23/24 đã thực hiện ở V1; V2 giữ bộ chấm, bổ sung kiểm thử tự động và kiểm tra các luồng/câu thay đổi. Không gọi đây là đánh giá độ tin cậy của bài kiểm tra độc lập.
- Audio gốc, cắt theo nguồn đã đối chiếu, chưa có người duyệt phát âm độc lập.
- Mật khẩu chung phía trình duyệt; kết quả lưu tại thiết bị, chưa có bảng điểm giáo viên hoặc tự nộp.
- Chưa đưa lên GitHub hoặc phát hành công khai.
