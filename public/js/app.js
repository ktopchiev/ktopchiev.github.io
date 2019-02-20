window.addEventListener('load', () => {
    const el = $('#app');

    //Compile Handlebars Templates
    const errorTemplate = Handlebars.compile($('#error-template').html());
    const aboutTemplate = Handlebars.compile($('#about-template').html());
    const skillsTemplate = Handlebars.compile($('#skills-template').html());
    const experienceTemplate = Handlebars.compile($('#experience-template').html());
    const educationTemplate = Handlebars.compile($('#education-template').html());

    //Router Declaration
    const router = new Router({
        mode: 'history',
        page404: (path) => {
            const html = errorTemplate({
                title: 'Error 404 - Page NOT Found!',
                message: `The path '/${path}' does not exist on this site`,
            });

            el.html(html);
        },
    });

    router.add('/', () => {
        let html = aboutTemplate();
        el.html(html);
    });

    router.add('/skills', () => {
       let html = skillsTemplate();
       el.html(html);
    });

    router.add('/experience', () => {
        let html = experienceTemplate();
        el.html(html);
    });

    router.add('/education', () => {
        let html = educationTemplate();
        el.html(html);
    });

    //Navigate app to current url
    router.navigateTo(window.location.pathname.toLowerCase());

    //Highlight Active Menu on Refresh/Reload Page
    const link = $(`a[href$='$(window.location.pathname)']`);
    link.addClass('active');

    $('a').on('click', (event) => {
       //Block browser page load
       event.preventDefault();

       //Highlight Active Menu on Click
        const target = $(event.target);
        $('.nav-link').removeClass('active');
        target.addClass('active');

        //Navigate to clicked url
        const href = target.attr('href');
        const path = href.substr(href.lastIndexOf('/'));
        router.navigateTo(path);
    });
});





















