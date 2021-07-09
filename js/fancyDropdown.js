/* fancyDropdown plugin developed by Santiago Salamanca */

(function ( $ ) {
    $.fn.fancyDropdown = function( options ) {
 
        var settings = $.extend({
            color: "#323232",
            backgroundColor: "#ffffff",
            borderRadius: 3,
            borderColor: "#d8d8d8",
            selectedValue: '',
            selectedText: ''
        }, options );

        var dropdownColor = settings.color ? "color: "+settings.color+"; " : '';
        var dropdownBgcolor = settings.backgroundColor ? "background-color: "+settings.backgroundColor+"; " : '';
        var dropdownBorderradius = settings.borderRadius ? "border-radius: "+settings.borderRadius+"px; " : '';
        var dropdownBordercolor = settings.borderColor ? "border-color: "+settings.borderColor+"; " : '';
        var dropdownStyle = dropdownColor+dropdownBgcolor+dropdownBorderradius+dropdownBordercolor;
        var itemStyle = dropdownColor+dropdownBgcolor;

        var elementId = this.attr('id');
        var elementName = this.attr('name');
        var dropDownElements = "";
        var hiddenInputs = "<span id='"+elementId+"-selected_text'>"+settings.selectedText+"</span><input type='hidden' id='"+elementId+"' name='"+elementId+"' value='"+settings.selectedValue+"'><input type='hidden' id='"+elementId+"-custom_name_field' name='"+elementId+"-custom_name_field'>";
        var selectOptions = this.find('option').each(function() {
            var dropDownElementValue = $(this).val();
            var dropDownElementText = $(this).text();
            dropDownElements += "<li data-value='"+dropDownElementValue+"' style='"+itemStyle+"'>"+dropDownElementText+"</li>";
        });

        var newDropdown = "<div class='fancy_dropdown_options'><ul id='"+elementId+"' name='"+elementName+"'>"+dropDownElements+"</ul></div>";
        var fancyDropdown = "<div class='fancy_dropdown' style='"+dropdownStyle+"'>" + hiddenInputs + newDropdown + "</div>";
        this.replaceWith(fancyDropdown);
    };
}( jQuery ));

$(document).on('click', '.fancy_dropdown', function() {
    $(this).toggleClass('visible');
});

$(document).on('click', '.fancy_dropdown ul li', function() {
    var selectedText = $(this).text();
    var selectedValue = $(this).data('value');
    var elementId = $(this).parent().attr('id');
    var inputField = $("#"+elementId);
    var inputNameField = $("#"+elementId+"-custom_name_field");
    var selectedTextField = $("#"+elementId+"-selected_text");
    selectedTextField.text(selectedText);
    inputField.val(selectedValue);
});

$(document).mouseup(function (e) {
    if ($(e.target).closest(".fancy_dropdown").length === 0) {
        $(".fancy_dropdown").removeClass('visible'); 
    }
}); 