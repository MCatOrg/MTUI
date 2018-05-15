import $ from '../util/util';
import tpl from './showBigPicture.html';

function showBigPicture(options = {}) {



    let $pictures = $(options.el || 'body' + ' .mtui-showBigPicture')

    for(let i of $pictures){
        if(!i.hasBigPicture){
            $(i).on('click',function(){
                this.hasBigPicture == true;
                let that = this,
                    tplOptions = {
                        src: this.src,
                    },
                    lock = false,
                    $bigPicturePopup = $($.render(tpl, tplOptions)),
                    $mask = $bigPicturePopup.find('.mtui-mask'),
                    $bigPicture = $bigPicturePopup.find('.mtui-bigPicture')
                    ;
                    
                $('body').append($bigPicturePopup);

                console.dir($bigPicture[0].naturalHeight)
                console.dir($bigPicture[0].naturalWidth)

                if($bigPicture[0].naturalWidth >= $bigPicture[0].naturalHeight) $bigPicture.css({'width':'80%'})
                else $bigPicture.css({'height':'80%'})
                
                $mask.addClass('mtui-animate-fade-in');
                $bigPicture.addClass('mtui-animate-fade-in');

                $bigPicturePopup.on('click',function(){
                    if(lock) return;
                    lock = true;
                    $mask.addClass('mtui-animate-fade-out');
                    $bigPicture
                    .addClass('mtui-animate-fade-out')
                    .on('animationend webkitAnimationEnd', function () {
                        $bigPicturePopup.remove();
                    });
                })
            })
        }
    }
}

export default showBigPicture;