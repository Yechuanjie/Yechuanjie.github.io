/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
import '../scss/index.scss';

// const GistID = 'a5b546db3729a3408815b3793dd7c777';
// console.log('%c Setting Sync ', 'background: #234;color:#bada55;font-size:25px');
// console.warn('1. install Setting Sync \n 2. press shift + alt + d \n 3. input GistID:' + GistID);
$(function() {
	initRelIconAndAvatar();
	initWrapBack();
	console.log(
		'%c叶川杰的个人主页',
		`text-shadow:
		0 1px 0 #ccc,
		0 2px 0 #c9c9c9,
		0 3px 0 #bbb,
		0 4px 0 #b9b9b9,
		0 5px 0 #aaa,
		0 6px 1px rgba(0,0,0,.1),
		0 0 5px rgba(0,0,0,.1),
		0 1px 3px rgba(0,0,0,.3),
		0 3px 5px rgba(0,0,0,.2),
		0 5px 10px rgba(0,0,0,.25),
		0 10px 10px rgba(0,0,0,.2),
		0 20px 20px rgba(0,0,0,.15);
		font-size:30px;
		padding: 30px 30px 30px 30px;
		color:#bada55;`,
		`https://yechuanjie.github.io`
	);
	// console.log(`%c`, `padding:150px 200px;line-height:120px;
	// 	background:url('http://yechuanjie-image.oss-cn-beijing.aliyuncs.com/18-5-31/66337986.jpg') no-repeat;
	// 	background-size:contain;`);
});

function initRelIconAndAvatar() {
	let iconList = [
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/腰果.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/甜甜圈.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/薯片.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/塔可.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/披萨.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/麻薯.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/热狗.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/寿司.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/牛油果.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/蛋黄酥.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/面包.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/马卡龙.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/饼干.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/草莓.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/蛋糕.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/开心果.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/布丁.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/爆米花.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/碧根果.png',
		'https://yechuanjie-image.oss-cn-beijing.aliyuncs.com/blog/棒冰.png'
	];
	let iconIndex = Math.floor(Math.random() * iconList.length);
	$('.avatar').attr('src', iconList[iconIndex]);
	$('[rel=icon]').attr('href', iconList[iconIndex]);
}

function initWrapBack() {
	const i = Math.floor(Math.random());
	$('#wrapper').css('background', `linear-gradient(to left bottom,
	hsl(${(Math.floor(255 * Math.random()) + i)}, 40%, 50%),
	hsl(${(Math.floor(255 * Math.random()) + i)}, 40%, 50%)`);
}