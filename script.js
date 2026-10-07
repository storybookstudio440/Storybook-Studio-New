const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{menu.classList.toggle('open');nav.classList.toggle('open')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu?.classList.remove('open');nav.classList.remove('open')}));
const form=document.getElementById('bookingForm');
form?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=`Hello Storybook Studio, I would like to make a booking enquiry.\n\nName: ${d.get('name')}\nWhatsApp: ${d.get('phone')}\nWedding Date: ${d.get('date')}\nLocation: ${d.get('location')}\nService: ${d.get('service')}\nMessage: ${d.get('message')||'Not specified'}`;window.open('https://wa.me/918927116305?text='+encodeURIComponent(msg),'_blank');});
