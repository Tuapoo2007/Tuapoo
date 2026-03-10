// ฟังก์ชันสำหรับสร้างธนบัตรตกลงมา
function createMoney() {
    const container = document.getElementById('sakura-container'); 
    const moneyElement = document.createElement('img');
    
    // รูปภาพแบงก์ทอง
    moneyElement.src = 'gold-bill.png'; 
    
    moneyElement.classList.add('money-bill');
    moneyElement.style.position = 'absolute';

    // สุ่มตำแหน่งเริ่มต้น
    moneyElement.style.left = Math.random() * 100 + 'vw';

    // สุ่มขนาดให้ต่างกัน 
    const width = Math.random() * 50 + 50 + 'px';
    moneyElement.style.width = width;
    moneyElement.style.height = 'auto';

    // สุ่มระยะเวลาตกให้ช้าลงนิดนึงจะได้ดูพริ้วๆ (6 - 14 วินาที)
    const duration = Math.random() * 8 + 6;
    moneyElement.style.animationDuration = duration + 's';

    // สุ่มเลือกท่าตก 3 แบบ (ส่ายไปมาเหมือนใบไม้)
    const animations = ['flutter1', 'flutter2', 'flutter3'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    moneyElement.style.animationName = randomAnimation;

    // 👇 ไฮไลท์: เปลี่ยนเป็น 'linear' แล้วครับ แบงก์จะไหลลื่นไม่กระตุกเบรก 👇
    moneyElement.style.animationTimingFunction = 'linear';
    moneyElement.style.animationIterationCount = 'infinite';

    // สุ่มความเบลอเล็กน้อยให้ดูมีมิติ
    const blurAmount = Math.random() * 1.5;
    moneyElement.style.filter = `blur(${blurAmount}px)`;

    container.appendChild(moneyElement);

    // ลบทิ้งเมื่อตกถึงพื้น
    setTimeout(() => {
        moneyElement.remove();
    }, duration * 1000);
}

// สร้างแบงก์ใหม่ทุกๆ 400 มิลลิวินาที 
setInterval(createMoney, 400);

// เริ่มสร้างเมื่อโหลดหน้าเว็บ
window.addEventListener('load', () => {
    // สร้างแบงก์ลอยไว้ก่อน 12 ใบ
    for(let i = 0; i < 12; i++) {
        createMoney();
    }
});