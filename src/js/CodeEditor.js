Ext.define('Tualo.monacoeditor.form.field.Code', {    
    extend: 'Ext.field.Input',

    alias: "widget.tualocode",
    language: null,
    minHeight: 250,
    isInputField: true,
 
    /**
     * @property {String} tag
     * The tag name to use for this field's input element. Subclasses should override this
     * property on their class body.  Not intended for instance-level use.
     * @protected
     */
    //tag: 'div',

    inputType: 'hidden',
    hidden: false,
 
 
    focusEl: 'editorElement',
    ariaEl: 'editorElement',
    inputTabIndex: 0,
 
    getBodyTemplate: function() {
        return [
            this.getInputTemplate(),
            {
                tag: 'div',
                reference: 'editorElement',
                tabindex: this.inputTabIndex,
            }
        ];
    },
 
    getInputTemplate: function() {
        return {
            tag: this.tag,
            reference: 'inputElement',
            tabindex: this.inputTabIndex,
            cls: Ext.baseCSSPrefix + 'input-el'
        };
    },
    initialize: function(config){
        this.callParent([config]);
        this.on('resize',this.resizeMonacoEditor,this);
        this.on('painted',this.createEditor,this);
    },
 
    initElement: function() {
        this.callParent();
        
        this.labelElement.dom.setAttribute('for', this.inputElement.id);
    },

   
    resizeMonacoEditor: function(el,width,height){
        if ((typeof this.monacoeditor=='object')&&(typeof this.monacoeditor.layout=='function')){
            if (typeof this.resizeMonacoEditorTimer!='undefined')  Ext.undefer(this.resizeMonacoEditorTimer);
            this.resizeMonacoEditorTimer = Ext.defer(function(o){
                this.monacoeditor.layout(o);
            },100,this,[{
                width: width,
                height: height
            }])
        }
    },
    createEditor: function(){

        if(typeof this.monacoeditor=='undefined')
        this.monacoeditor = monaco.editor.create(  document.getElementById(this.editorElement.dom.id)  , {
            language: this.language,
            automaticLayout: false,
            //roundedSelection: false,
            scrollBeyondLastLine: true,
            readOnly: false,
            theme: "vs",
            value: this._value,
            fontSize: 10,
            useShadows: true,

            // Render vertical arrows. Defaults to false.
            verticalHasArrows: true,
            // Render horizontal arrows. Defaults to false.
            horizontalHasArrows: true,

            // Render vertical scrollbar.
            // Accepted values: 'auto', 'visible', 'hidden'.
            // Defaults to 'auto'
            vertical: 'visible',
            // Render horizontal scrollbar.
            // Accepted values: 'auto', 'visible', 'hidden'.
            // Defaults to 'auto'
            horizontal: 'visible',

            verticalScrollbarSize: 17,
            horizontalScrollbarSize: 17,
            arrowSize: 30

        });
        this.monacoeditor.layout();

        this.monacoeditor.getModel().onDidChangeContent((event) => { 
            /*
            console.log(this.inputValue);
            this.updateValue( this.monacoeditor.getValue(), this._value ); 
            this._value  = this.monacoeditor.getValue(); 
            */
           
            //this._value = this.monacoeditor.getValue();
            
            this.setValue( this.monacoeditor.getValue() ); 
            try{ this.$bindings.value.setValue( this.monacoeditor.getValue() );} catch(e){}
        });
        window.input = this;
    },
    updateDisabled: function(disabled, oldDisabled) {
        this.callParent([disabled, oldDisabled]);
 //       this.inputElement.dom.disabled = !!disabled;
    },
 
    updateValue: function(value, oldValue) {
        // This is to prevent formatting from updating the current
        // value while typing

        if (typeof this.monacoeditor!='undefined'){
            this.monacoeditor.setValue(value);
        }
        this.callParent([value, oldValue]);
        
    },

    /*
    updateInputType: function(newInputType) {
        this.setInputAttribute('type', newInputType);
    },
 
    updateName: function(name, oldName) {
        this.callParent([name, oldName]);
 
        this.setInputAttribute('name', name);
    },
 
    updateReadOnly: function(readOnly) {
        this.setInputAttribute('readonly', readOnly ? true : null);
    },
 

 
    applyInputValue: function(value) {
        return (value != null) ? (value + '') : '';
    },
 
    completeEdit: function() {
        var me = this,
            value = me.getInputValue(),
            parsedValue = me.parseValue(value);
 
        if (parsedValue !== null) {
            me.setInputValue(me.getValue());
        }
    },
 
    updateInputValue: function(value) {
        var inputElement = this.inputElement.dom;
 
        if (inputElement.value !== value) {
            inputElement.value = value;
        }
    },
 
    reset: function() {
        var me = this,
            original = me.originalValue;
 
        if (me.isEqual(original, me.getValue())) {
            me.setInputValue(original);
 
            if (!me.isValid()) {
                me.validate();
            }
        }
        else {
            me.setValue(original);
        }
 
        return me;
    },
 
    privates: {
        canSetInputValue: function() {
            return true;
        },
 
        setInputAttribute: function(attribute, newValue) {
            var inputElement = this.inputElement.dom;
 
            if (!Ext.isEmpty(newValue, true)) {
                inputElement.setAttribute(attribute, newValue);
            }
            else {
                inputElement.removeAttribute(attribute);
            }
        }
    },
    */
});


Ext.define('Tualo.monacoeditor.form.field.CodeSql', {    
    extend: 'Tualo.monacoeditor.form.field.Code',
    alias: "widget.tualocodesql",
    language: "mysql",
});
Ext.define('Tualo.monacoeditor.form.field.CodeJade', {    
    extend: 'Tualo.monacoeditor.form.field.Code',
    alias: "widget.tualocodejade",
    language: "pug",
});
Ext.define('Tualo.monacoeditor.form.field.CodeMarkdown', {    
    extend: 'Tualo.monacoeditor.form.field.Code',
    alias: "widget.tualocodemarkdown",
    language: "markdown",
});
Ext.define('Tualo.monacoeditor.form.field.CodeHtml', {    
    extend: 'Tualo.monacoeditor.form.field.Code',
    alias: "widget.tualocodehtml",
    language: "html",
});