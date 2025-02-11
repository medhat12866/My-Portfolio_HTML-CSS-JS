const clickBtn = document.getElementById("click-btn");
const menuBtn = document.getElementById("menu-btn");

// التحقق من وجود العناصر قبل العمل عليها
if (clickBtn && menuBtn) {
  clickBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("active"); // إظهار/إخفاء القائمة
    clickBtn.classList.toggle("ri-menu-line");
    clickBtn.classList.toggle("ri-close-line");

    event.stopPropagation(); // منع انتشار الحدث حتى لا يتم تشغيله على document فورًا
  });

  // إغلاق القائمة عند النقر خارجها
  document.addEventListener("click", (event) => {
    if (!menuBtn.contains(event.target) && !clickBtn.contains(event.target)) {
      menuBtn.classList.remove("active"); // إخفاء القائمة
      clickBtn.classList.add("ri-menu-line"); // إعادة الأيقونة الأصلية
      clickBtn.classList.remove("ri-close-line");
    }
  });
}
