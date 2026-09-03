const versions = [
  '13.52','13.50','13.02','13.00','12.52','12.50','12.02','12.00',
  '11.52','11.50','11.02','11.00','10.01','10.00','9.60','9.00'
];

const firmwareStatus = v => v === '13.52'
  ? 'Research / incomplete'
  : 'Source path available';

function detectFirmware() {
  // A normal WebKit page cannot reliably read PS4 System Software directly.
  // First try common UA formats, then allow a manual fallback.
  const ua = navigator.userAgent || '';
  const patterns = [
    /PlayStation 4[\s;\/]?(\d+\.\d+(?:\.\d+)?)/i,
    /PS4[\s;\/]?(\d+\.\d+(?:\.\d+)?)/i,
    /Version[\s\/]?(\d+\.\d+(?:\.\d+)?)/i
  ];
  for (const re of patterns) {
    const m = ua.match(re);
    if (m) {
      const found = m[1].split('.').slice(0,2).join('.');
      if (versions.includes(found)) return found;
    }
  }
  return null;
}

function render() {
  const sel = document.getElementById('firmware');
  const msg = document.getElementById('msg');
  const detected = document.getElementById('detected');

  versions.forEach(v => {
    const o = document.createElement('option');
    o.value = v;
    o.textContent = `PS4 ${v} — ${firmwareStatus(v)}`;
    sel.appendChild(o);
  });

  const auto = detectFirmware();
  sel.value = auto || '13.52';

  if (auto) {
    detected.textContent = `تم التعرف تلقائيًا على Firmware: ${auto}`;
    msg.textContent = auto === '13.52'
      ? '13.52: بيانات المسار الحالية غير مكتملة، لذلك لن يتم تشغيل exploit غير متحقق.'
      : `Firmware ${auto}: تم اختيار المسار المطابق تلقائيًا.`;
  } else {
    detected.textContent = 'تعذر قراءة إصدار النظام تلقائيًا من WebKit؛ اختر الإصدار يدويًا.';
  }

  document.getElementById('run').onclick = () => {
    const v = sel.value;
    if (v === '13.52') {
      msg.textContent = '13.52: البيانات الحالية غير مكتملة، لذلك لن يتم تشغيل مسار exploit غير متحقق.';
      return;
    }
    msg.textContent = `Firmware ${v}: تم اختيار المسار الموجود في المشروع.`;
  };
}

render();
