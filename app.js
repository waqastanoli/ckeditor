import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';

import fullSizeIcon from '@ckeditor/ckeditor5-core/theme/icons/object-center.svg';

//import frameIcon from '@ckeditor/ckeditor5-core/theme/icons/object-right.svg';
import frameIcon from './images/frame.svg';
import polaroidIcon from './images/picture.svg';
import gradient1 from './images/gradient-1.svg';
import gradient2 from './images/gradient-2.svg';
import glimmer from './images/subtitles.svg';
import tinted from './images/layers.svg';
import './theme/style.css';
ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Essentials, Paragraph, Bold, Italic,Image, ImageToolbar, ImageCaption, ImageStyle ],
        toolbar: [ 'bold', 'italic' ],
        image: {
            // You need to configure the image toolbar, too, so it uses the new style buttons.
            toolbar: [ 'imageStyle:polaroid', 'imageStyle:frame', 'imageStyle:gradient1', 'imageStyle:gradient2', 'imageStyle:glimmer','imageStyle:tinted' ],

            styles: [
                // A completely custom full size style with no class, used as a default.
        { name: 'polaroid', title: 'Polaroid', icon: polaroidIcon, className:'polaroid' },

        { name: 'frame', title: 'Frame', icon: frameIcon, className: 'frame-1'},

        { name: 'gradient1', title: 'Gradient pink', icon: gradient1, className: 'gradient-1'},
        { name: 'gradient2', title: 'Gradient blue', icon: gradient2, className: 'gradient-2'},
        { name: 'glimmer', title: 'Glimmer', icon: glimmer, className: 'glimmer'},
        { name: 'tinted', title: 'Tinted', icon: tinted, className: 'tinted'},
            ]
        }
    } )
    .then( editor => {
        
        CKEditorInspector.attach( editor );
        
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );