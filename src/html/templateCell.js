

var templateCell = '<div class="o-feature-content"> '
    + '<div class="o-feature-left">'
    + '<div class="o-feature-brand">{{primaryTitle}}</div>'
    +  '<header class="o-feature-title"> '
    + '{{secondaryTitle}} '
    + '</header> ' + '<div class="o-feature-description"> '
    + '<p>{{description}}</p> ' + '</div>'
    + '{{#ctaUrl}}<div class="o-feature-button clearfix"> '
    + '<a class=\"o-feature-action-button\" href="{{ctaUrl}}" target="_blank"><div>{{ctaText}}<\/div></a> '
    + '</div>{{/ctaUrl}}</div> ' + '<div class="o-feature-right">' + '<div class="o-feature-img-border">'
    + '<img width="160" height="160" src="{{resourceUrl}}">' + '</div>' + '</div>' + '</div>'
    + '<div class="o-feature-clearfix"></div>';
module.exports = templateCell;
