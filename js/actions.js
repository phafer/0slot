document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('contact_sales');
    button.addEventListener('click', function() {
        const href = this.getAttribute('data-href'); // 从数据属性中读取
        window.location.href = href;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('get_start_btn');
    button.addEventListener('click', function() {
        const href = "login.php"
        window.location.href = href;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('create_account');
    button.addEventListener('click', function() {
        const href = this.getAttribute('data-href'); // 从数据属性中读取
        window.location.href = href;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 使用querySelectorAll选择所有目标按钮
    const buttons = document.querySelectorAll('.accelerate-btn'); // 假设所有按钮都有相同的类名 `.accelerate-btn`

    // 遍历按钮并为每个按钮绑定点击事件
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const href = "/#contact";
            window.location.href = href;
        });
    });
});