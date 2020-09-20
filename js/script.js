// levus-skills || https://github.com/lvivduncan/levus-skills
{
    const skills = document.querySelectorAll('.levus-skills');
    const start = document.documentElement.clientHeight;
    window.addEventListener('scroll', () => {
        const change = Math.floor(skills[0].getBoundingClientRect().top);
        const sum = Math.floor(start - change + 10);
        if (sum === 0 || sum === 1 || sum === 2 || sum === 3 || sum === 4 || sum === 5 || sum === 6 || sum === 7) {
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

// 