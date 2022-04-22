let slideIndex = 1;

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName('mySlides');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i += 1) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}

showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

let myIndex = 0;

function carousel() {
  let i;
  const x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i += 1) {
    x[i].style.display = 'none';
  }
  myIndex += 1;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = 'block';

  setTimeout(carousel, 2500); // Change image every 2.5 seconds
}

carousel();

export default plusDivs;
