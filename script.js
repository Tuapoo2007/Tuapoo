// ฟังก์ชันสำหรับสร้างดอกซากุระ
function createSakura() {
    const container = document.getElementById('sakura-container');
    const petal = document.createElement('div');
    petal.classList.add('sakura-petal');

    // --- สุ่มการตั้งค่าต่างๆ ของแต่ละกลีบ ---

    // สุ่มตำแหน่งเริ่มต้นตามแนวแกน X (0% - 100% ของความกว้างหน้าจอ)
    petal.style.left = Math.random() * 100 + 'vw';

    // สุ่มขนาดดอก (5px - 15px)
    const size = Math.random() * 10 + 5 + 'px';
    petal.style.width = size;
    petal.style.height = size;

    // สุ่มระยะเวลาในการตก (5วินาที - 15วินาที)
    const duration = Math.random() * 10 + 5;
    petal.style.animationDuration = duration + 's';

    // สุ่มความเบลอเล็กน้อยเพื่อให้ดูมีมิติหน้าหลัง
    const blurAmount = Math.random() * 2;
    petal.style.filter = `blur(${blurAmount}px)`;

    // ใส่กลีบดอกลงใน Container
    container.appendChild(petal);

    // ลบกลีบดอกทิ้งเมื่อตกถึงพื้นเพื่อไม่ให้หนักเครื่อง
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// สร้างดอกซากุระใหม่ทุกๆ 300 มิลลิวินาที (ปรับตัวเลขนี้เพื่อให้ดอกหนาแน่นขึ้นหรือน้อยลง)
setInterval(createSakura, 300);

// เริ่มสร้างเมื่อโหลดหน้าเว็บ
window.addEventListener('load', () => {
    // สร้างสัก 10 ดอกก่อนเพื่อให้มีบนหน้าจอทันที
    for(let i = 0; i < 10; i++) {
        createSakura();
    }
});