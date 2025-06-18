document.addEventListener("DOMContentLoaded", () => {
  const books = [
    {
      title: "모든 삶은 흐른다",
      author: "허지원",
      image: "https://images.unsplash.com/photo-1526304640581-02b8c1aa04a1?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "지구 끝의 온실",
      author: "김초엽",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "마음의 온도",
      author: "김소영",
      image: "https://images.unsplash.com/photo-1588776814546-38e07aa1c62a?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "문과 남자의 과학 공부",
      author: "유시민",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "잠들기 전 5분 심리학",
      author: "이사카와 유스케",
      image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "불편한 편의점",
      author: "김호연",
      image: "https://images.unsplash.com/photo-1476958526483-36efcaa80aa4?auto=format&fit=crop&w=500&q=80"
    }
  ];

  // 랜덤하게 정렬
  const shuffledBooks = books.sort(() => 0.5 - Math.random());

  const bookRow = document.getElementById("bookRow");

  shuffledBooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" />
      <div class="info">
        <div class="title">${book.title}</div>
        <div class="author">${book.author}</div>
      </div>
    `;
    bookRow.appendChild(card);
  });
});
