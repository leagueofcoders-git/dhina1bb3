# Getting Started with Create React App

First the js files were not loaded when the ReactJS app started due to single page app. Therefore the recipies images were not loaded

Added this code to every components to force the loading of the js files when the component is called
```
  useEffect(() => {
    let scripts = [
        {src:"assets/vendor/purecounter/purecounter_vanilla.js"},
        {src:"assets/vendor/aos/aos.js"},
        {src:"assets/vendor/bootstrap/js/bootstrap.bundle.min.js"},
        {src:"assets/vendor/glightbox/js/glightbox.min.js"},
        {src:"assets/vendor/isotope-layout/isotope.pkgd.min.js"},
        {src:"assets/vendor/swiper/swiper-bundle.min.js"},
        {src:"assets/js/main.js"},
    ]
    //Append the script element on each iteration
    scripts.map(item => { 
        const script = document.createElement("script")
        script.src = item.src
        script.async = false
        script.defer = false
        document.body.appendChild(script)
    }) 
},[])
```
This line of code was commented out
```
 // let randomReceipes = [...Array(142)].map(_ => Math.random() * products.length | 0)
  //console.log(randomReceipes);
```

The page would display an error first before the page would load as normal. In order for the page to not to show any error on the page, in the main.js this section was commented out

```
  // on('click', '.scrollto', function(e) {
  //   if (select(this.hash)) {
  //     e.preventDefault()

  //     let navbar = select('#navbar')
  //     if (navbar.classList.contains('navbar-mobile')) {
  //       navbar.classList.remove('navbar-mobile')
  //       let navbarToggle = select('.mobile-nav-toggle')
  //       navbarToggle.classList.toggle('bi-list')
  //       navbarToggle.classList.toggle('bi-x')
  //     }
  //     scrollto(this.hash)
  //   }
  // }, true)
```
