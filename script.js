// 텍스트를 도트처럼 하나씩 감싸기
const dotText = document.getElementById('dotText');
const text = dotText.innerText;
dotText.innerHTML = '';

for (let char of text) {
  const span = document.createElement('span');
  span.textContent = char;
  dotText.appendChild(span);
}

// 팡팡 터지는 효과
dotText.addEventListener('mouseenter', () => {
  const spans = dotText.querySelectorAll('span');
  spans.forEach((span, i) => {
    setTimeout(() => {
      span.style.transform = `scale(${1 + Math.random() * 2}) rotate(${Math.random() * 360}deg)`;
      span.style.opacity = '0';
    }, i * 100);
  });

  setTimeout(() => {
    spans.forEach((span) => {
      span.style.transform = 'scale(1) rotate(0deg)';
      span.style.opacity = '1';
    });
  }, spans.length * 100 + 500);
});
