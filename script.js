const toggleExpand = (id) => {
    const el = document.getElementById(id);
    if (!el) {
        return;
    }
    
    if (el.classList.contains('expand')) {
        el.classList.remove('expand');
        el.scrollIntoView(true);
    } else {
        el.classList.add('expand');
    }
};

const applyTheme = (themeName = 'vintage') => {
    const el = document.getElementById('theme-link');
    if (!el) {
        return;
    }

    el.href = `/themes/${themeName}.css`;
};