// levus-skills || https://github.com/lvivduncan/levus-skills
{
    const skills = document.querySelectorAll('.levus-skills');
    if(skills.length > 0){
        const start = document.documentElement.clientHeight;
        skills && window.addEventListener('scroll', () => {
            const change = Math.floor(skills[0].getBoundingClientRect().top);
            const sum = Math.floor(start - change + 10);
            if (sum === 0 || sum === 1 || sum === 2 || sum === 3 || sum === 4 || sum === 5 || sum === 6 || sum === 7 || sum === 8 || sum === 9 || sum === 10) {
                skills.forEach(skill => delay(skill, skill.dataset.result, skill.dataset.speed));
            }
        });
        function delay(selector, num = 2, speed = 1){
            for (let index = 0; index <= num; index++) {
                setTimeout( () => {
                    selector.innerHTML = index;            
                }, index * speed * 30);
            }
        }
    }
}

// levus-testimonials || https://github.com/lvivduncan/levus-testimonials
{
    // wrapper
    const wrapper = document.getElementById('levus-testimonials');
    if(wrapper){
        // all
        let items = wrapper.querySelectorAll('#levus-testimonials li');
        //
        const ul = wrapper.querySelector('ul');

        // cloned and append elements
        items.forEach(element => ul.append(element.cloneNode(true)));
        // new nodelist
        items = wrapper.querySelectorAll('#levus-testimonials li');
        
        setInterval(() => {
            const last = ul.lastElementChild;
            ul.prepend(last);
            // destroy transition
            ul.style.transition = 'none';
            ul.classList.add('move');
            setTimeout(() => {
                ul.classList.remove('move');
                ul.style.transition = '.5s';
            }, 4000); 
        }, 5000);
    }

}

// https://github.com/lvivduncan/levus-horizontal-scroll
{
    // scroll
    const scroll = document.querySelectorAll('.levus-horizontal-scroll');

    // if exists one scroll
    if (scroll.length === 1) {

        // wrapper
        const ul = scroll[0].querySelector('.levus-horizontal-scroll ul');
        // nodelist
        let li = ul.querySelectorAll('li');

        // if less than 5, cloned 
        if (li.length <= 5) {
            // cloned and append elements
            li.forEach(element => ul.append(element.cloneNode(true)));
            // new nodelist
            li = scroll[0].querySelectorAll('.levus-horizontal-scroll li');
        }

        scroll[0].innerHTML += '<span class="left"></span><span class="right"></span>';

        scroll[0].addEventListener('click', (e) => {
            const ul = scroll[0].querySelector('.levus-horizontal-scroll ul');
            if (e.target.className == 'left') {
                // move last element
                const last = ul.lastElementChild;
                ul.prepend(last);
                // destroy transition
                ul.style.transition = 'none';
                ul.classList.add('to-right');
                setTimeout(() => {
                    ul.classList.remove('to-right');
                    ul.style.transition = '.5s';
                }, 50);
            }
        });

        scroll[0].addEventListener('click', (e) => {
            const ul = scroll[0].querySelector('.levus-horizontal-scroll ul');
            if (e.target.className == 'right') {
                // move first element
                const first = ul.firstElementChild;
                ul.append(first);
                // destroy transition
                ul.style.transition = 'none';
                ul.classList.add('to-left');
                setTimeout(() => {
                    ul.classList.remove('to-left');
                    ul.style.transition = '.5s';
                }, 50);
            }
        });
    }
}

// tabs 
const tabs = document.querySelectorAll('.tabs li');
if(tabs.length > 0){
    const panes = document.querySelectorAll('.tabs .panes > div');
    
    tabs.forEach((tab, i) => tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('active'));
        tabs[i].classList.add('active');
        panes.forEach(pane => pane.classList.remove('active'));
        panes[i].classList.add('active');
    }));
}