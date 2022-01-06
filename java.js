let lainnya1 = document.querySelector('.lainnya1');
let lain1 = document.querySelector('.lain1');
let lainnya2 = document.querySelector('.lainnya2');
let lain2 = document.querySelector('.lain2');
let lainnya3 = document.querySelector('.lainnya3');
let lain3 = document.querySelector('.lain3');
let kembali1 = document.querySelector('.kembali1');
let kembali2 = document.querySelector('.kembali2');
let kembali3 = document.querySelector('.kembali3');
let lainnyalagi1 = document.querySelector('.lainnyalagi1');
let lainnyalagi2 = document.querySelector('.lainnyalagi2');
let lainnyalagi3 = document.querySelector('.lainnyalagi3');
let span = document.querySelector('.span');
let navigasi = document.querySelector('.navigasi');
let jpeg1 = document.querySelector('.jpeg1');
let jpeglanjutan1 = document.querySelector('.jpeglanjutan1');
let content1h3 = document.querySelector('.product .content1 h3');
let jpeg2 = document.querySelector('.jpeg2');
let jpeglanjutan2 = document.querySelector('.jpeglanjutan2');
let content2h3 = document.querySelector('.product .content2 h3');
let jpeg3 = document.querySelector('.jpeg3');
let jpeglanjutan3 = document.querySelector('.jpeglanjutan3');
let content3h3 = document.querySelector('.product .content3 h3');

span.addEventListener('click', function() {
    span.classList.toggle('active');
    navigasi.classList.toggle('active');
})
document.querySelectorAll('.navigasi a').forEach(n => n.addEventListener('click', function() {
    span.classList.toggle('active');
    navigasi.classList.toggle('active');
}))

lainnya1.addEventListener('click', function() {
    lain1.classList.toggle('active');
    lainnya1.classList.toggle('remove');
    kembali1.classList.toggle('active');
    lainnyalagi1.classList.toggle('active');
    jpeg1.classList.toggle('active');
    jpeglanjutan1.classList.toggle('active');
    content1h3.classList.toggle('active');
})
lainnya2.addEventListener('click', function() {
    lain2.classList.toggle('active');
    lainnya2.classList.toggle('remove');
    kembali2.classList.toggle('active');
    lainnyalagi2.classList.toggle('active');
    jpeg2.classList.toggle('active');
    jpeglanjutan2.classList.toggle('active');
    content2h3.classList.toggle('active');
    
})
lainnya3.addEventListener('click', function() {
    lain3.classList.toggle('active');
    lainnya3.classList.toggle('remove');
    kembali3.classList.toggle('active');
    lainnyalagi3.classList.toggle('active');
    jpeg3.classList.toggle('active');
    jpeglanjutan3.classList.toggle('active');
    content3h3.classList.toggle('active');
})

kembali1.addEventListener('click', function() {
    lain1.classList.toggle('active');
    lainnya1.classList.remove('remove');
    kembali1.classList.toggle('active');
    lainnyalagi1.classList.toggle('active');
    jpeg1.classList.toggle('active');
    jpeglanjutan1.classList.toggle('active');
    content1h3.classList.toggle('active');
})
kembali2.addEventListener('click', function() {
    lain2.classList.toggle('active');
    lainnya2.classList.remove('remove');
    kembali2.classList.toggle('active');
    lainnyalagi2.classList.toggle('active');
    jpeg2.classList.toggle('active');
    jpeglanjutan2.classList.toggle('active');
    content2h3.classList.toggle('active');
})
kembali3.addEventListener('click', function() {
    lain3.classList.toggle('active');
    lainnya3.classList.remove('remove');
    kembali3.classList.toggle('active');
    lainnyalagi3.classList.toggle('active');
    jpeg3.classList.toggle('active');
    jpeglanjutan3.classList.toggle('active');
    content3h3.classList.toggle('active');
})

