
/* jshint undef:false, newcap: false, unused:false */

(function(API) {
    API.textAlign = function(txt, options, x, y) {
            options = options || {};
            // Use the options align property to specify desired text alignment
            // Param x will be ignored if desired text alignment is 'center'.
            // Usage of options can easily extend the function to apply different text
            // styles and sizes

            // Get current font size
            var fontSize = this.internal.getFontSize();

            // Get page width
            var pageWidth = this.internal.pageSize.width;

            // Get the actual text's width
            // You multiply the unit width of your string by your font size and divide
            // by the internal scale factor. The division is necessary
            // for the case where you use units other than 'pt' in the constructor
            // of jsPDF.

            var txtWidth = this.getStringUnitWidth(txt) * fontSize / this.internal.scaleFactor;

            if (options.align === "center") {

                    // Calculate text's x coordinate
                    x = (pageWidth - txtWidth) / 2;

            } else if (options.align === "centerAtX") { // center on X value

                    x = x - (txtWidth / 2);

            } else if (options.align === "right") {

                    x = x - txtWidth;
            }

            // Draw text at x,y
            this.text(txt, x, y);
    };
    /*
        API.textWidth = function(txt) {
            var fontSize = this.internal.getFontSize();
            return this.getStringUnitWidth(txt)*fontSize / this.internal.scaleFactor;
        };
    */

    API.getLineHeight = function(txt) {
            return this.internal.getLineHeight();
    };

})(jsPDF.API);

(function() {
    "use strict";

    /*
    Refs:
    https://mrrio.github.io/jsPDF/
    https://github.com/MrRio/jsPDF
    https://mrrio.github.io/jsPDF/doc/symbols/jsPDF.html
*/

    // some variables
    var agency_logo = {
                    src: 'data:image/png;base64,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',
                    w: 800,
                    h: 285
            },
            agency_name = 'Travel & Holidays',
            agency_site_url = 'www.travelandholidays.com',
            footer = agency_name + ' - ' + agency_site_url,

            page_size = 'a4',
            page_width = 210, // mm
            page_margin = 10, // mm
            content_width = page_width - (page_margin * 2), // available width for the content

            _y, _x, // drawing coord
            color_array, _string, lineHeight, y_correction, // some variables

            vspace = 10 // standard vertical space between elements

    ;

    // some variables
    var can_display_preview = true, // if true a preview of the PDF can be displayed in the iframe,
            // this value is set to false if the browser can't display the preview
            preview_container = $('#pdf_preview'),
            update_preview_button = $('#flyer_preview_btn'),
            download_button = $('#flyer_download_btn');

    // preview can be displayed?
    if (navigator.msSaveBlob) { // older IE
            update_preview_button.prop('disabled', true);
            can_display_preview = false;
            preview_container.replaceWith(
                    '<div class="no_iframe">' +
                    '<div>' +
                    "The preview can't be displayed" +
                    '</div>' +
                    '</div>'
            );
    }

    // utilities
    var hex2rgb = function(hex_string) {
                    if (/^#/.test(hex_string)) {
                            hex_string = hex_string.substr(1);
                    }
                    if (hex_string.length === 3) {
                            hex_string = hex_string.replace(/\w/, function(match) {
                                    return String(match) + String(match);
                            });
                    }

                    return {
                            red: parseInt(hex_string.substr(0, 2), 16),
                            green: parseInt(hex_string.substr(2, 2), 16),
                            blue: parseInt(hex_string.substr(4, 2), 16)
                    };
            },

            px2mm = function(pixel) {
                    // px to inches
                    var inches = pixel / 72;
                    return inches * 25.4;
            },

            mm2px = function(millimeters) {
                    // mm to inches
                    var inches = millimeters / 25.4;
                    return inches * 72;
            },

            // function to calculate and check img sizes
            imgSizes = function(img_w, img_h, img_mm_w) {
                    /*
        img_w and img_h represent the original image size, in pixel
        img_mm_w is the desidered rendered image size, in millimeters

    */

                    if (img_mm_w > content_width) { // this should be never used...
                            img_mm_w = content_width;
                    }

                    if (mm2px(img_mm_w) > img_w) {
                            throw 'The `img_mm_w` parameter is too big';
                    }

                    var img_mm_h = Math.round((px2mm(img_h) * img_mm_w) / px2mm(img_w));

                    return {
                            w: img_mm_w,
                            h: img_mm_h,
                            centered_x: (page_width - img_mm_w) / 2
                    };
            };

    try {

            // image reading
            // More info at https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
            // for more examples about file api
            // take a look at https://scotch.io/tutorials/use-the-html5-file-api-to-work-with-files-locally-in-the-browser

            var flyer_img = $('#flyer-image'),
                    img_data = null;

            $('#flyer-image').change(function() {

                    // temporary disabling buttons while parsing image
                    update_preview_button.prop('disabled', true);
                    download_button.prop('disabled', true);

                    /*
            getting the file

            flyer_img[0] : transforms the jQuery reference to a DOM object
            files[0]     : refers to the file the the user has chosen

            use `console.log(user_file);` to show some info about the file

        */

                    var user_file = flyer_img[0].files[0];

                    img_data = {
                            type: user_file.type === 'image/jpeg' ? 'JPEG' : 'PNG' // maybe you should add some controls to prevent loading of other file types
                    };

                    var reader = new FileReader();
                    reader.onload = function(event) {
                            img_data.src = event.target.result;

                            // we need this to get img dimensions
                            var user_img = new Image();
                            user_img.onload = function() {
                                    img_data.w = user_img.width;
                                    img_data.h = user_img.height;

                                    // restoring buttons
                                    download_button.prop('disabled', false);
                                    if (can_display_preview) {
                                            update_preview_button.prop('disabled', false);
                                    }
                            };
                            user_img.src = img_data.src;
                    };

                    //when the file is read it triggers the onload event above.
                    reader.readAsDataURL(user_file);
            });

            //!pdf builder
            var createPDF = function(update_preview) {
                    /*
            update_preview:
                ==> true: shows pdf online
                ==> false: downloads the pdf
        */

                    _y = page_margin; // vertical starting point

                    // form data
                    var flyer_title = $('#flyer-title').val(),
                            flyer_title_size = $('#flyer-title-size').val(),
                            flyer_title_color = $('#flyer-title-color').val(),
                            flyer_description = $('#flyer-description').val(),
                            flyer_price = $('#flyer-price').val(),
                            flyer_price_currency = $('#flyer-price-currency').val(),
                            flyer_price_color = $('#flyer-price-color').val();

                    var pdf = new jsPDF('p', 'mm', page_size),
                            text_baseline,

                            // some colors:
                            light_grey = 237,
                            grey = 128,
                            black = 0,
                            white = 255;

                    // Optional - set properties of the document
                    pdf.setProperties({
                            title: flyer_title,
                            subject: footer,
                            author: 'me',
                            creator: 'Flyer Builder & jsPDF'
                    });

                    // !logo
                    var logo_sizes = imgSizes(agency_logo.w, agency_logo.h, 60);
                    pdf.addImage(agency_logo.src, 'PNG', logo_sizes.centered_x, _y, logo_sizes.w, logo_sizes.h);

                    // fonts initializing
                    pdf.setFont("helvetica");
                    pdf.setFontType("bold");

                    // !main title
                    color_array = hex2rgb(flyer_title_color);
                    pdf.setTextColor(color_array.red, color_array.green, color_array.blue);

                    pdf.setFontSize(flyer_title_size);

                    lineHeight = px2mm(pdf.getLineHeight(flyer_title));

                    _y += (logo_sizes.h + vspace + lineHeight);

                    pdf.textAlign(flyer_title, {
                            align: "center"
                    }, 0, _y);

                    _y += vspace;

                    // !user image
                    if (img_data) {
                            var img_sizes = imgSizes(img_data.w, img_data.h, content_width);
                            pdf.addImage(img_data.src, img_data.type, img_sizes.centered_x, _y, img_sizes.w, img_sizes.h);
                            _y += img_sizes.h;

                    } else {
                            // if we haven't an image, a grey box with a text is added

                            var box_height = 80;

                            pdf.setFillColor(light_grey);
                            pdf.roundedRect(page_margin, _y, content_width, box_height, 5, 5, 'F');
                            pdf.setFontSize(60);
                            pdf.setTextColor(white);
                            _string = 'SPECIAL OFFER';
                            lineHeight = px2mm(pdf.getLineHeight(_string));

                            // y_correction: value to be added to y coord of the grey box to have text vertically centered
                            // it is empirically calculated adding 1/3 of text line height to half box height
                            y_correction = box_height / 2 + lineHeight / 3;

                            pdf.textAlign(_string, {
                                    align: "center"
                            }, 0, _y + y_correction);

                            _y += box_height;
                    }

                    // !price
                    // first: creating a circle that overlaps the bottom side of the image
                    var circle_radius = 30;
                    color_array = hex2rgb(flyer_price_color);
                    pdf.setFillColor(color_array.red, color_array.green, color_array.blue);

                    // _x and _y refer to center of the circle
                    _x = content_width - circle_radius; // circle ends at `page_margin` millimeters from the image right side

                    pdf.circle(_x, _y, circle_radius, 'F'); // circle overlaps image for 1/2 of its height

                    pdf.setFontSize(60);
                    pdf.setFont("times");
                    pdf.setFontType("bold");

                    _string = flyer_price_currency + parseInt(flyer_price); // decimals are removed

                    lineHeight = px2mm(pdf.getLineHeight(_string));
                    y_correction = lineHeight / 3;

                    pdf.setTextColor(white);
                    pdf.textAlign(_string, {
                            align: "centerAtX"
                    }, _x, _y + y_correction);

                    // !description
                    if (flyer_description) {
                            pdf.setFontSize(20);
                            pdf.setFont("helvetica");
                            pdf.setFontType("italic");
                            pdf.setTextColor(grey);

                            var lineWidth = content_width - (circle_radius * 2) - (page_margin * 2);
                            _y += page_margin;

                            var line_height = 12; // mm

                            var description_lines = pdf.splitTextToSize(flyer_description, lineWidth);
                            //pdf.text(page_margin, _y, description_lines); // doesn't allows to change line spacing

                            for (var i = 0; i < description_lines.length; i++) {
                                    pdf.text(page_margin, _y, description_lines[i]);
                                    _y += line_height;
                            }

                    }

                    // !footer
                    _y = 287;
                    pdf.setFontSize(9);
                    pdf.setFontType("normal");
                    pdf.setTextColor(black);
                    pdf.textAlign(footer, {
                            align: "center"
                    }, 0, _y);

                    // ****************************
                    // output
                    if (update_preview) {
                            preview_container.attr('src', pdf.output('datauristring'));
                    } else {
                            pdf.save('flyer ' + flyer_title + '.pdf');
                    }

            }; // end createPDF

            // !buttons
            update_preview_button.click(function() {
                    createPDF(true);
            });

            $('#flyer_download_btn').click(function() {
                    createPDF(false);
            });

    } catch (e) {
            console.log(e);
    }

})();












//----------Write text plugin


(function (api, $) {
'use strict';
api.writeText = function (x, y, text, options) {
    options = options || {};

    var defaults = {
        align: 'left',
        width: this.internal.pageSize.width
    }

    var settings = $.extend({}, defaults, options);

    // Get current font size
    var fontSize = this.internal.getFontSize();

    // Get the actual text's width
    /* You multiply the unit width of your string by your font size and divide
     * by the internal scale factor. The division is necessary
     * for the case where you use units other than 'pt' in the constructor
     * of jsPDF.
    */
    var txtWidth = this.getStringUnitWidth(text) * fontSize / this.internal.scaleFactor;

    if (settings.align === 'center')
        x += (settings.width - txtWidth) / 2;
    else if (settings.align === 'right')
        x += (settings.width - txtWidth);

    //default is 'left' alignment
    this.text(text, x, y);

}

})(jsPDF.API, jQuery);