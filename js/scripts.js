// Custom Scripts
// Custom scripts
function stepForm() {
    const steps = document.querySelectorAll('.form__step')
    const prevBtn = document.querySelector('.prev__step') 
    const nextBtn = document.querySelector('.next__step')
    const form = document.querySelector('.steps__form')
    const stepNumbers = document.querySelectorAll('.step__number') 
    const progress = document.querySelector('.progress__success')
    const finishBlock = document.querySelector('.finish')
    
    

    form.addEventListener('submit',(e)=>e.preventDefault())
    let fromStepIndex = 0
    prevBtn.addEventListener('click',()=>{
        fromStepIndex--
        stepNumbers[fromStepIndex + 1].classList.remove('active__number')
        updateFromSteps()
    })
    nextBtn.addEventListener('click',()=>{
        if(fromStepIndex < steps.length - 1){
            fromStepIndex++
            updateFromSteps()
        }
        
    })

    function updateFromSteps(){
        steps.forEach((step) =>{
            step.classList.contains('active') && step.classList.remove('active')

        })
        steps[fromStepIndex].classList.add('active')
        stepNumbers[fromStepIndex].classList.add('active__number')
        if(fromStepIndex == 0 ){
            prevBtn.style.display = 'none'
        }
        else{
            prevBtn.style.display = 'block'
        }


        if(fromStepIndex == steps.length - 1 ){
            nextBtn.innerHTML = "Finish"

            nextBtn.addEventListener('click',  ()=>{
                finishBlock.style.display = 'block'
                form.style.display = 'none'
            })
        }else{
            nextBtn.innerHTML = "Next"
        }
    
        const actives = document.querySelectorAll('.active__number')
        const persent = ((actives.length -1 ) / (stepNumbers.length - 1 ) ) * 100 + '%'
    
        progress.style.width = persent
    
    
    }
    updateFromSteps()
}

if (document.querySelector('.form__step')){
    stepForm()

}
