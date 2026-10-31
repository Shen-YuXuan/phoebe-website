// js/components.js

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

// 自動將展開的履歷區塊滑動至畫面中間
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.resume-accordion');
    
    accordions.forEach(acc => {
        acc.addEventListener('toggle', function() {
            // 確保只有在「打開」狀態下才執行滑動
            if (this.open) {
                // 稍微延遲 0.15 秒，讓內容完全向下撐開後再計算高度
                setTimeout(() => {
                    this.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' // 強制將該區塊停在螢幕正中間
                    });
                }, 150); 
            }
        });
    });
});