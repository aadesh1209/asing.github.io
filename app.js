const profilePic = document.querySelector('#profile-pic');
const heading = document.querySelector('.heading');
const navLinks = document.querySelector('.nav-links');

let tl = new TimelineMax();

tl.fromTo(profilePic,1, {height: '100%',x: 500}, {height: '85vh', x: 0})
.fromTo(heading, 1, {opacity: 0, x: -200,}, {opacity: 1, x:0}, "-=1")
.fromTo(navLinks,1, {y: -70}, {y: 0},"-=1");