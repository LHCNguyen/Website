$(document).ready(function () {
  // Khởi tạo WOW.js
  const wow = new WOW({
      boxClass: 'wow', // Class để kích hoạt WOW.js
      animateClass: 'animate__animated', // Class animation từ Animate.css
      offset: 100, // Khoảng cách từ dưới lên để kích hoạt hiệu ứng (pixels)
      mobile: true, // Cho phép chạy trên thiết bị di động
      live: true, // Tự động kiểm tra các phần tử mới được thêm vào DOM
      callback: function (box) {
          console.log(`${box.className} vừa được kích hoạt animation!`); // Ghi log khi animation chạy
      }
  });
  wow.init();

  // Thêm hiệu ứng khi cuộn để làm nổi bật header
  $(window).on('scroll', function () {
      const header = $('header');
      if ($(window).scrollTop() > 50) {
          header.addClass('scrolled');
      } else {
          header.removeClass('scrolled');
      }
  });

  // Smooth scroll cho các link điều hướng
  $('a[href*="#"]').not('[href="#"]').click(function (event) {
      if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
      ) {
          event.preventDefault();
          const target = $(this.hash);
          $('html, body').animate({
              scrollTop: target.offset().top - 60 // Điều chỉnh khoảng cách từ header
          }, 800, 'easeInOutExpo');
          return false;
      }
  });

  // Hiệu ứng cho nút "Back to Top"
  const backToTopBtn = $('.backtop');
  $(window).on('scroll', function () {
      if ($(window).scrollTop() > 300) {
          backToTopBtn.fadeIn(300);
      } else {
          backToTopBtn.fadeOut(300);
      }
  });

  // Thêm hiệu ứng hover cho các menu item
  $('.menu ul li a').hover(
      function () {
          $(this).addClass('animate__pulse'); // Hiệu ứng pulse khi hover
      },
      function () {
          $(this).removeClass('animate__pulse');
      }
  );

  // Thêm hiệu ứng cho các box sản phẩm (nếu có)
  $('.box').each(function () {
      $(this).on('mouseenter', function () {
          $(this).addClass('animate__tada'); // Hiệu ứng rung nhẹ khi hover
      });
  });

  // Tự động thêm WOW animation cho các phần tử mới
  const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
          $(mutation.addedNodes).each(function () {
              if ($(this).hasClass('wow')) {
                  wow.sync(); // Đồng bộ WOW.js với các phần tử mới
              }
          });
      });
  });

  // Quan sát các thay đổi trong DOM
  observer.observe(document.body, {
      childList: true,
      subtree: true
  });
});