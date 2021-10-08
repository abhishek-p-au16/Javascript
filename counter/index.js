let count = 0;

const value = document.querySelector('#count')

const btns = document.querySelectorAll(".btn")


btns.forEach((btns) => {
    btns.addEventListener("click", (e) =>{
        const styles = e.currentTarget.classList;
        //console.log(styles)
        if(styles.contains('btn-decrease')){
            count--;
        }
        else if(styles.contains('btn-increase')){
            count++;
        }
        else{
            count = 0;
        }
        value.textContent=count
    })
    
    

})