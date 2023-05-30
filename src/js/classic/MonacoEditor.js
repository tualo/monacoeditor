Ext.define('Tualo.monacoeditor.form.field.Code', {
    extend: 'Ext.form.field.TextArea',
    alias: ['widget.tualocode'],
    language: null,

    height: 300,

    fieldSubTpl: [ // note: {id} here is really {inputId}, but {cmpId} is available 
      '<textarea id="{id}" data-ref="inputEl" type="{type}" {inputAttrTpl}',
          ' size="1"', // allows inputs to fully respect CSS widths across all browsers 
          '<tpl if="name"> name="{name}"</tpl>',
          '<tpl if="placeholder"> placeholder="{placeholder}"</tpl>',
          '{%if (values.maxLength !== undefined){%} maxlength="{maxLength}"{%}%}',
          '<tpl if="readOnly"> readonly="readonly"</tpl>',
          '<tpl if="disabled"> disabled="disabled"</tpl>',
          '<tpl if="tabIdx != null"> tabindex="{tabIdx}"</tpl>',
          '<tpl if="fieldStyle"> style="{fieldStyle}"</tpl>',
          '<tpl foreach="inputElAriaAttributes"> {$}="{.}"</tpl>',
      ' class="{fieldCls} {typeCls} {typeCls}-{ui} {editableCls} {inputCls}" autocomplete="off"/>',
      '<tpl if="value">{[Ext.util.Format.htmlEncode(values.value)]}"</tpl>',
      '</textarea>',
      {
          disableFormats: true
      }
    ],
    
    
    initComponent: function(){
      var me = this;
      me.callParent();
      window.mEditor = this;
      
    },
  
    afterRender: function () {
      var me = this;
      me.callParent(arguments);
      try{
        me.createEditor();
      }catch(e){
        console.error(e);
      }
    },
    
    createEditor: function(){
        let o = {
            width: this.getWidth() - this.labelWidth - 17,
            height: this.getHeight() - 2
        };
        
        if(typeof this.monacoeditor=='undefined'){
            document.getElementById( this.id+'-inputEl' ).style.display='none';

            this.monacoeditor = monaco.editor.create(  document.getElementById( this.id+'-inputEl' ).parentNode  , {
                language: this.language,
                automaticLayout: true,
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
            this.monacoeditor.layout(o);

            this.up().on('resize',this.resizeMonacoEditor,this);
            this.monacoeditor.getModel().onDidChangeContent(this.onDidChangeContent.bind(this));
        }
    },
    onDestroy: function(){
        this.monacoeditor.dispose();
        this.callParent();
    },
    resizeMonacoEditor: function(el,width,height){
        console.log('resizeMonacoEditor',this.$className,arguments);
        if ((typeof this.monacoeditor=='object')&&(typeof this.monacoeditor.layout=='function')){
            if (typeof this.resizeMonacoEditorTimer!='undefined')  Ext.undefer(this.resizeMonacoEditorTimer);
            this.resizeMonacoEditorTimer = Ext.defer(function(o){
                console.log('resizeMonacoEditor 1',o);
                this.monacoeditor.layout(o);
            },100,this,[{}])

            Ext.defer(function(o){
                console.log('resizeMonacoEditor 2',o);
                this.monacoeditor.layout(o);
            },300,this,[{
                height: this.getHeight() - 2,
                width: this.getWidth() - this.labelWidth - 17
            }])

        }
    },
    onDidChangeContent: function(event){
        //console.log(this.$className,'onDidChangeContent',event,this.monacoeditor.getValue());
        this.setValue( this.monacoeditor.getValue() ); 
    },
    
    setRawValue: function(value) {
        //console.log('setRawValue',this.$className);
        this.callParent([value]);
        if (typeof this.monacoeditor!='undefined'){
            if (this.monacoeditor.getValue()!=value){
                this.monacoeditor.setValue(value);
            }
        }
    },
    setValue: function(value) {
        //console.log('setValue',this.$className);
        this.callParent([value]);
    }
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
    FileList
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
Ext.define('Tualo.monacoeditor.form.field.CodePhp', {    
    extend: 'Tualo.monacoeditor.form.field.Code',
    alias: "widget.tualocodephp",
    language: "php",
});