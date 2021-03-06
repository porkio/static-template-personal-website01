// loading
var loder = document.getElementsByClassName('loder-box')[0];

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        if (loder) {
            loder.style.display = 'none';
        }
    }
}

// 平滑滚动
function scroll_to(eleId) {
    var eleTop = document.getElementById(eleId).offsetTop;
    window.scrollTo({
        top: eleTop,
        behavior: 'smooth'
    });
}

// 基础布局逻辑，主要是客户端尺寸判断处理
var viewWidth = document.body.clientWidth || document.body.offsetWidth,
    viewHeight = document.body.clientHeight || document.body.offsetHeight;
var baseTimer = setInterval(function () {
    viewWidth = document.body.clientWidth || document.body.offsetWidth;
    viewHeight = document.body.clientHeight || document.body.offsetHeight;
}, 1000);

// 首页banner背景图片切换逻辑
var bannerImg = document.getElementById('home');

if (viewWidth <= 768) {
    bannerImg.style.background = 'url(./images/home-bg-mobile01.jpg) no-repeat center center/cover';
}

if (bannerImg) {
    var bannerTimer = setInterval(function () {
        if (viewWidth <= 768) {
            if (bannerImg.style.animation === '3s ease 0s 1 normal none running banner-img-move-mobile') {
                bannerImg.style.animation = '3s ease 0s 1 normal none running banner-img-move-reverse-mobile';
                bannerImg.style.background = 'url(./images/home-bg-mobile01.jpg) no-repeat center center/cover';
            } else {
                bannerImg.style.animation = '3s ease 0s 1 normal none running banner-img-move-mobile';
                bannerImg.style.background = 'url(./images/home-bg-mobile02.jpg) no-repeat center center/cover';
            }
        } else {
            if (bannerImg.style.animation === '3s ease 0s 1 normal none running banner-img-move') {
                bannerImg.style.animation = '3s ease 0s 1 normal none running banner-img-move-reverse';
                bannerImg.style.background = 'url(./images/home-bg01.jpg) no-repeat center center/cover';
            } else {
                bannerImg.style.animation = '3s ease 0s 1 normal none running banner-img-move';
                bannerImg.style.background = 'url(./images/home-bg02.jpg) no-repeat center center/cover';
            }
        }
    }, 9000);
}

// What can i do 选中逻辑

var activedEle = document.getElementsByClassName('item-active')[0];

if (viewWidth >= 768) {
    if (activedEle) {
        activedEle.style.backgroundColor = '#f6f6f6';
        activedEle.getElementsByTagName('i')[0].style.color = '#f6f6f6';
        activedEle.getElementsByTagName('i')[0].style.backgroundColor = '#6aa426';
    }
}

function activeThis(ele) {
    if (ele) {
        var icon = ele.getElementsByTagName('i')[0];
        var parent = ele.parentNode;
        var items = parent.getElementsByTagName('div');
        for (var i = 0; i < items.length; ++i) {
            items[i].style.backgroundColor = '';
            items[i].getElementsByTagName('i')[0].style.color = '';
            items[i].getElementsByTagName('i')[0].style.backgroundColor = '';
        }
        ele.style.backgroundColor = '#f6f6f6';
        icon.style.color = '#f6f6f6';
        icon.style.backgroundColor = '#6aa426';
    }
}

// 页脚微信图标点击浮动二维码逻辑
var wechatLayer = document.getElementsByClassName('wechat-layer')[0];
var wechatIcon = document.getElementById('wechat-icon');
wechatLayer.style.display = 'none';

wechatIcon.addEventListener('mouseenter', function () {
    wechatLayer.style.display = 'block';
}, false);
wechatIcon.addEventListener('mouseleave', function () {
    wechatLayer.style.display = 'none';
}, false);


function alertWechatLayer() {
    if (wechatLayer.style.opacity === '0') {
        wechatLayer.style.opacity = '1';
    } else {
        wechatLayer.style.opacity = '0';
    }
}
