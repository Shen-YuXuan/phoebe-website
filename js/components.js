// 1. 導覽列 Web Component
class SiteNavbar extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        
        const navItems = [
            { path: 'index.html', label: '首頁' },
            { path: 'resume.html', label: '個人履歷' },
            { path: 'projects.html', label: '專題作品' },
            { path: 'autobiography.html', label: '自傳' }
        ];

        const linksHtml = navItems.map(item => {
            const isActive = currentPath === item.path ? ' class="active" aria-current="page"' : '';
            return `<a href="${item.path}"${isActive}>${item.label}</a>`;
        }).join('');

        this.innerHTML = `
            <header class="navbar">
                <a href="index.html" class="logo">Phoebe</a>
                <nav class="nav-links" aria-label="主要導覽">
                    ${linksHtml}
                </nav>
            </header>
        `;
    }
}
customElements.define('site-navbar', SiteNavbar);

// 2. 頁尾 Web Component
class SiteFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
            <footer class="footer">
                <p>© ${year} Phoebe｜Personal Website</p>
            </footer>
        `;
    }
}
customElements.define('site-footer', SiteFooter);

// 自動將展開的履歷區塊標題對齊畫面上方
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.resume-accordion');
    
    accordions.forEach(acc => {
        acc.addEventListener('toggle', function() {
            if (this.open) {
                // 延遲一下，等內容完全展開後再捲動
                setTimeout(() => {
                    // 固定導覽列與麵包屑會遮住標題，捲動時要把它們的高度扣掉
                    const nav = document.querySelector('site-navbar');
                    const navHeight = nav ? nav.getBoundingClientRect().height : 0;
                    const crumb = document.querySelector('.breadcrumb');
                    const crumbHeight = crumb ? crumb.getBoundingClientRect().height : 0;
                    this.style.scrollMarginTop = (navHeight + crumbHeight + 16) + 'px';
                    this.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' // 讓該區塊的標題對齊畫面上方
                    });
                }, 150); 
            }
        });
    });
});