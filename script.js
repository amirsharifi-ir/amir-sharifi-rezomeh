function animateSkills() {
    document.querySelectorAll('.progress-fill').forEach(fill => {
        const target = fill.getAttribute('data-target');
        if (target && fill.style.width !== target + '%') {
            fill.style.width = target + '%';
        }
    });
}

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateSkills();
        observer.disconnect();
    }
}, { threshold: 0.2 });

const firstSkill = document.querySelector('.skill-item');
if (firstSkill) observer.observe(firstSkill);
else window.addEventListener('load', () => setTimeout(animateSkills, 300));

window.addEventListener('load', () => setTimeout(() => {
    const fills = document.querySelectorAll('.progress-fill');
    let allZero = Array.from(fills).every(f => f.style.width === '0%' || !f.style.width);
    if (allZero) animateSkills();
}, 400));

const latestPostsData = [
    {
        id: 3,
        title: "💡 چگونه اولین پروژه وردپرسی خود را حرفه‌ای راه‌اندازی کنیم؟",
        excerpt: "راهنمای کامل از صفر تا صد راه‌اندازی اولین پروژه وردپرسی، انتخاب قالب مناسب، افزونه‌های ضروری، تنظیمات امنیتی و بهینه‌سازی سئو..."
    },
    {
        id: 2,
        title: "🌾 تجربه طراحی سایت beanswheat.ir از صفر تا صد",
        excerpt: "روایت تجربه شخصی من از طراحی و پیاده‌سازی سایت تخصصی حوزه کشاورزی و حبوبات با وردپرس؛ چالش‌ها، راهکارها و نکات کلیدی..."
    },
    {
        id: 1,
        title: "🚀 آموزش نصب و راه‌اندازی وردپرس در هاست (گام به گام)",
        excerpt: "آموزش کامل نصب وردپرس روی هاست‌های ایرانی و خارجی، تنظیمات اولیه، نکات امنیتی و بهینه‌سازی سرعت. مناسب برای مبتدیان..."
    }
];

const postsGrid = document.getElementById('latestPosts');
if (postsGrid) {
    latestPostsData.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <a href="blog.html#post-${post.id}">
                <div class="post-card-title">${post.title}</div>
                <div class="post-card-excerpt">${post.excerpt}</div>
            </a>
        `;
        postsGrid.appendChild(postCard);
    });
}

const blogLink = document.getElementById('blogLink');
if (blogLink) {
    blogLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'blog.html';
    });
}
