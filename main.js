window.onload = function(){
    $('input').on ('click',function(){
        this.classList.add('active');
    });
    $('input').on ('blur',function(){
        this.classList.remove('active');
    });
}