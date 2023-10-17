const que = document.querySelectorAll('.faq__accordion');

que.forEach(el => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;
       
        if (content.style.maxHeight) {
            document.querySelectorAll('.faq__accordion-content').forEach(el => el.style.maxHeight = null)
            document.querySelectorAll('.faq__accordion-content').forEach(el => el.style.marginBottom = null)
        } else {
            document.querySelectorAll('.faq__accordion-content').forEach(el => el.style.maxHeight = null)
            document.querySelectorAll('.faq__accordion-content').forEach(el => el.style.marginBottom = null)
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.marginBottom = 30 + 'px' 
        }

       let cross = el.firstElementChild.nextElementSibling

       if (cross.style.transform) {
        document.querySelectorAll('.faq__cross').forEach(el => el.style.transform = null)
       } else {
        document.querySelectorAll('.faq__cross').forEach(el => el.style.transform = null)
        cross.style.transform = 'rotate(45deg)'
       }


    });
});