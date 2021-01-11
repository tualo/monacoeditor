

insert into  extjs_base_types (id,classname,baseclass,xtype_long_modern,xtype_long_classic,name,vendor) values 
(
    'Tualo.monacoeditor.form.field.Code (widget.tualocodesql)',
    'Tualo.monacoeditor.form.field.Code',
    'Ext.field.Field',
    'widget.tualocode',
    'widget.tualocode',
    'Tualo.monacoeditor.form.field.Code',
    'tualo solutions GmbH'
) 
on duplicate key update xtype_long_modern=values(xtype_long_modern),xtype_long_classic=values(xtype_long_classic);

insert into  extjs_base_types (id,classname,baseclass,xtype_long_modern,xtype_long_classic,name,vendor) values 
(
    'Tualo.monacoeditor.form.field.CodeSql (widget.tualocodesql)',
    'Tualo.monacoeditor.form.field.CodeSql',
    'Tualo.monacoeditor.form.field.Code',
    'widget.tualocodesql',
    'widget.tualocodesql',
    'Tualo.monacoeditor.form.field.CodeSql',
    'tualo solutions GmbH'
) 
on duplicate key update xtype_long_modern=values(xtype_long_modern),xtype_long_classic=values(xtype_long_classic);

insert into  extjs_base_types (id,classname,baseclass,xtype_long_modern,xtype_long_classic,name,vendor) values 
(
    'Tualo.monacoeditor.form.field.CodeJade (widget.tualocodejade)',
    'Tualo.monacoeditor.form.field.CodeJade',
    'Tualo.monacoeditor.form.field.Code',
    'widget.tualocodejade',
    'widget.tualocodejade',
    'Tualo.monacoeditor.form.field.CodeJade',
    'tualo solutions GmbH'
) 
on duplicate key update xtype_long_modern=values(xtype_long_modern),xtype_long_classic=values(xtype_long_classic);

insert into  extjs_base_types (id,classname,baseclass,xtype_long_modern,xtype_long_classic,name,vendor) values 
(
    'Tualo.monacoeditor.form.field.CodeMarkdown (widget.tualocodemarkdown)',
    'Tualo.monacoeditor.form.field.CodeMarkdown',
    'Tualo.monacoeditor.form.field.Code',
    'widget.tualocodemarkdown',
    'widget.tualocodemarkdown',
    'Tualo.monacoeditor.form.field.CodeMarkdown',
    'tualo solutions GmbH'
) 
on duplicate key update xtype_long_modern=values(xtype_long_modern),xtype_long_classic=values(xtype_long_classic);

insert into  extjs_base_types (id,classname,baseclass,xtype_long_modern,xtype_long_classic,name,vendor) values 
(
    'Tualo.monacoeditor.form.field.CodeHtml (widget.tualocodehtml)',
    'Tualo.monacoeditor.form.field.CodeHtml',
    'Tualo.monacoeditor.form.field.Code',
    'widget.tualocodehtml',
    'widget.tualocodehtml',
    'Tualo.monacoeditor.form.field.CodeHtml',
    'tualo solutions GmbH'
) 
on duplicate key update xtype_long_modern=values(xtype_long_modern),xtype_long_classic=values(xtype_long_classic);
