export function scroll (id) {
    const view = document.querySelector(`#${id}`);
    view?.scrollIntoView({behavior: "smooth"});

    // const bodyRect = body.getBoundingClientRect()    
    // const viewRect = view.getBoundingClientRect()
}

