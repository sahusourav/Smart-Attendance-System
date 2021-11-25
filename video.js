'use strict';
        const time = document.getElementById('time');
        const video=document.getElementById('video');
        const canvas=document.getElementById('canvas');
        const errorMsgElement=document.getElementById('span#ErrorMsg');

        const constraints = {
            audio: false,
            video: {
                width:1280, 
                height: 720
            }
        };
        
        async function init(){
            try{
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                handleSuccess(stream);
            }
            catch(e)
            {
                errorMsgElement.innerHTML = `navigator.getUserMedia.error:${e.toString()}`;
            }
        }

        function handleSuccess(stream){
            window.stream = stream;
            video.srcObject = stream;
        }

        init();
