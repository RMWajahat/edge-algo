let crossbtns = document.querySelectorAll(".viewmore");
        let questions = document.querySelectorAll(".questionblock");

        document.querySelector("body").addEventListener("mouseover", () => {
            questions.forEach((question) => {
                question.classList.remove("active");
            });
        })


        questions.forEach((block) => {

            block.addEventListener("click", () => {

                block.classList.toggle("active");
            });
        })
