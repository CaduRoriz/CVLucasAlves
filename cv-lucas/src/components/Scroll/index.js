export function scroll (id) {
    // const view = document.querySelector(`#${id}`);
    // view?.scrollIntoView({behavior: "smooth"});

    const scrollDiv = document.querySelector(`#${id}`).offsetTop;
    if(id == "contact"){
         window.scrollTo({top:scrollDiv - 450, behavior: 'smooth'});
    } else{
        window.scrollTo({top:scrollDiv - 90, behavior: 'smooth'});
    }
    
}

