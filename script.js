// دالة طلب عرض السعر للتجار
function requestWholesale(productName) {
    // ضع رقم واتساب العميل هنا (لقد أخذته من الصورة)
    const phoneNumber = "905454116144"; 
    
    const message = `مرحباً Flora For Fashion،\nأنا تاجر وأرغب في طلب عرض سعر جملة للمنتج التالي:\n- ${productName}\n\nأرجو إرسال قائمة الأسعار وشروط الجملة.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}