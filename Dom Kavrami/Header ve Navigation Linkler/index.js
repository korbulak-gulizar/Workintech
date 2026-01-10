const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  title: 'Workintech',
  logo: 'https://i.ibb.co/gysPB8V/logo.png',
  links: [
    {
      href: 'programlarimiz.html',
      text: 'Programlarımız',
    },
    {
      href: 'blog.html',
      text: 'Blog',
    },
    {
      href: 'sorulariniz.html',
      text: 'Sorularınız',
    },
    {
      href: 'hakkimizda.html',
      text: 'Hakkımızda',
    },
  ],
};

/* Kodlar Buradan aşağıya */

const logoImg = document.getElementById('logo-img');
logoImg.src = siteContent.logo;

const titleTag = document.getElementsByTagName('title');
titleTag[0].textContent = siteContent.title;

const navLinks = document.querySelectorAll('header nav a');
siteContent.links.forEach((link, index) => {
  navLinks[index].textContent = link.text;
  navLinks[index].href = link.href;
});
