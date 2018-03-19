function Button(text) {
    this.text = text || 'Default text';
}
Button.prototype = {
    create: function () {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function () {
            alert(self.text);
        })
        $('body').append(this.$element);
    }
}
var btn1 = new Button('przyciskus');
btn1.create();
btn1.create();
btn1.create();