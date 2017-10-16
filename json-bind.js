(function($) {
    $.fn.BindJson = function(fieldData, cssClassPrefix) {
        var selectorPrefix = " ." + cssClassPrefix,
            key = [],
            ctl = null,
            isTextField = false,
            fill = "";
        for (key in fieldData) {
            if (fieldData.hasOwnProperty(key)) {
                ctl = $(selectorPrefix + key, this);
                fill = fieldData[key];
                if (ctl.length != 0) {
                    $(ctl).each(function() {





                        isTextField = ($(this).is("DIV") || $(this).is("SPAN") || $(this).is("LABEL"));



                        if ($(this)[0] != null && $(this)[0].attributes['data-role'] != null) {
                            var compnentType = $(this)[0].attributes['data-role']

                            switch (compnentType) {
                                case "combobox":
                                    var combobox = $(this).data("kendoComboBox");
                                    combobox.value(fill);
                                    combobox.trigger("change");
                                    break;
                                case "dropdownlist":
                                    var dropdownlist = $(this).data("kendoDropDownList");
                                    dropdownlist.value(fill);
                                    dropdownlist.trigger("change");
                                    break;
                                case "autocomplete":
                                    var autocomplete = $(this).data("kendoAutoComplete");
                                    autocomplete.value(fill);
                                    autocomplete.trigger("change");

                                    break;
                                case "multiselect":
                                    var multiselect = ($this).data("kendoMultiSelect");
                                    multiselect.value(fill);
                                    multiselect.trigger("change");
                                    break;
                                default:
                                    break;
                            }




                        } else
                        if (isTextField) {
                            $(this).text(fill);
                        } else if ($(this).prop('type') == 'checkbox') {
                            $(this).attr('checked', (fill == true));
                        } else {
                            $(this).val(fill);
                        }
                    });
                }
            }
        }
    };
})(jQuery);

(function($) {
    $.fn.ClearDataFields = function(clearClass) {
        $(":input", this).each(function() {
            var type = this.type,
                tag = this.tagName.toLowerCase();
            if (type == 'text' || type == 'password' || type == 'tel' || type == 'date' || type == 'email' || tag == 'textarea' || type == 'hidden' || type == 'number') {
                this.value = "";
            } else if (type == 'checkbox' || type == 'radio') {
                this.checked = false;
            } else if (tag == 'select') {
                this.selectedIndex = 0;
            }
        });
        if (clearClass) {
            $("." + clearClass, this).text("");
        }
    };
})(jQuery);