document.addEventListener('DOMContentLoaded', function () {
    let circles = document.querySelectorAll('.circle');

    circles.forEach(function (circle) {
        circle.addEventListener('click', function () {
            let voto = this.id;
            let answer = document.getElementById('answer');
            answer.innerHTML = (`You selected ${voto} out of 5`);


            circles.forEach(function (circle) {
                circle.style.backgroundColor = ''; 
            });

            
            this.style.backgroundColor = 'gray';
        });
    });
});

function showResult() {
    let result = document.getElementById('tks');
    let vote = document.getElementById('vote');
    result.style.display = 'flex';
    vote.style.display = 'none';
}
