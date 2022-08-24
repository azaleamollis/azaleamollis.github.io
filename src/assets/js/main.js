// opens external links in a new tab by default
(function () {

    let internal = location.host.replace("www.", "");
    internal = new RegExp(internal, "i");
      
    const a = document.querySelectorAll('a');
  
    a.forEach((i) => {
    
        let href = i.host;
    
        if( !internal.test(href) ) { 

            i.setAttribute('target', '_blank');
            i.setAttribute('rel', 'noopener noreferrer');
        }
    });

})();