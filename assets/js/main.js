const html = document.querySelector("html");

$(document).ready(function () {
  $('.menu-toggle').on('click', function () {
    $('.anak-toggle1').toggleClass('rotate-[45deg] bg-yellow-500');
    $('.anak-toggle2').toggleClass('scale-0 opacity-0');
    $('.anak-toggle3').toggleClass('-rotate-[45deg] bg-yellow-500');
    $('.navbar-nav').toggleClass('translate-x-full');
    $('.navbar-nav').toggleClass('opacity-0');
  })

  $('.navbar-link').on('click', function () {
    $('.navbar-link').removeClass('text-yellow-500 dark:text-yellow-500')
    $(this).addClass('text-yellow-500 dark:text-yellow-500')
  });

  // Scrolling Navbar Link
  $('.navbar-link').on('click', function (e) {

    // Ambil href
    var tujuan = $(this).attr('href');

    // Tangkap element ybs
    var elemenTujuan = $(tujuan);

    // console.log(elemenTujuan);

    // Pindahkan scroll
    $('.html').animate({
      scrollTop: elemenTujuan.offset().top - 50
    }, 1000, "easeInOutCirc");

    e.preventDefault();
  });

  $(".btn-close").on('click', function() {
    $(".alert").toggleClass("hidden");
  })
});

window.onscroll = function () { scrollFunction() };

// AOS.init();

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").classList.add("nav-fixed");
    document.querySelector(".navbar").classList.add("dark:bg-slate-900");
    document.querySelector(".top-top").classList.remove("hidden");

  } else {
    document.querySelector(".navbar").classList.remove("dark:bg-slate-900");
    document.querySelector(".top-top").classList.add("hidden");
    document.querySelector(".navbar").classList.remove("nav-fixed");
  }
}

const darkToggle = document.querySelector("#dark-toggle");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});

// Contact Us Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbwdjkOyCAscs9Swxm4o6A49vJp5A4ggLZUwHgjcXznjwHz99jyfq0X7f0PIyaNljq1FKQ/exec';
const form = document.forms['submit-to-google-sheet'];
const btnLoading = document.querySelector(".btn-loading");
const btnActive = document.querySelector(".btn-active");

form.addEventListener('submit', e => {
  e.preventDefault()
  btnLoading.classList.toggle("hidden");
  btnActive.classList.toggle("hidden");
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      btnLoading.classList.toggle("hidden");
      btnActive.classList.toggle("hidden");
      document.querySelector(".alert").classList.toggle("hidden");
      document.querySelector(".alert").classList.add("flex");
      form.reset();
      console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message))
})