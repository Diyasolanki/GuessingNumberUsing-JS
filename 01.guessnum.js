let btn = document.getElementById("btn");
        let inner = document.querySelector(".inner");

        btn.addEventListener("click", () => {
            let name = document.getElementById("name").value;
            inner.style.fontSize = "20px"; 

           
            inner.innerHTML = `<h2>Welcome, ${name}!</h2><p>Let's play the Number Guessing Game.</p>`;

            let newbtn = document.createElement("button");
            newbtn.textContent = 'Play Game';
            newbtn.style.background = 'rgb(110, 179, 6)';
            newbtn.style.marginTop = '10px';
            newbtn.style.padding = '6px';
            inner.appendChild(newbtn);

            newbtn.addEventListener('click', function () {
                game(); 
            });
        });

        function game() {
            
                 let userguess = prompt('Enter a number Only : ');
                 let compguess = (Math.floor(Math.random()*100)+1);
            
                    result(userguess, compguess);       
        }

        function result(userguess, compguess) {
            if(userguess === compguess){
                inner.style.marginTop = '80px';
                inner.style.fontSize = '25px';
                inner.innerHTML = 'No one wins its a tie!';

                let newbtn1 = document.createElement("button");
                newbtn1.textContent = 'Try Again';
                newbtn1.style.background = 'rgb(110, 179, 6)';
                newbtn1.style.marginTop = '10px';
                newbtn1.style.padding = '6px';
                inner.appendChild(newbtn1);
                newbtn1.addEventListener('click', function () {
                game(); 
            });
            }
            else if(userguess <= compguess) {
                inner.style.marginTop = '80px';
                inner.style.fontSize = '25px';
                inner.innerHTML = 'You are guessing lower than computer ';
                
                let newbtn1 = document.createElement("button");
                newbtn1.textContent = 'Try Again';
                newbtn1.style.background = 'rgb(110, 179, 6)';
                newbtn1.style.marginTop = '5px';
                newbtn1.style.padding = '6px';
                inner.appendChild(newbtn1);
                newbtn1.addEventListener('click', function () {
                game(); 
            });
            }
            else{
                inner.style.marginTop = '80px';
                inner.style.fontSize = '25px';
                inner.innerHTML = 'You are guessing higher than computer ';

                let newbtn1 = document.createElement("button");
                newbtn1.textContent = 'Try Again';
                newbtn1.style.background = 'rgb(110, 179, 6)';
                newbtn1.style.marginTop = '10px';
                newbtn1.style.padding = '6px';
                inner.appendChild(newbtn1);
                newbtn1.addEventListener('click', function () {
                game(); 
            });

            }
        }