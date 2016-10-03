~function(){
    if(window.pxerDefinePxerConfig['LOAD_START']) return console.warn('Prevent repeat load.');
    var script =document.createElement('script');
    script.src =pxerDefinePxerConfig['URL_ROOT']+'lib/PxerLauncher.class.min.js';
    script.addEventListener('load' ,function(){
        let pl =new PxerLauncher({
            sync:[
                pxerDefinePxerConfig['URL_ROOT']+'lib/pxer.core.min.js',
            ],
            asyn:[
                pxerDefinePxerConfig['URL_ROOT']+'lib/bs.pxer.css',
                pxerDefinePxerConfig['URL_ROOT']+'lib/style.css',
                pxerDefinePxerConfig['URL_ROOT']+'lib/favicon.ico',
            ],
            cache:false,
        });
        pl.load();
    });
    document.head.appendChild(script);
    window.pxerDefinePxerConfig['LOAD_START'] =true;
}();



