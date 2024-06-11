module.exports = function (handlebars) {
    handlebars.registerHelper('exportType', function (typeName) {
      if (!!typeName && typeName.endsWith) {
        if (!typeName.endsWith('Enum')) {
          return 'type';
        }
      }
      return '';
    });
  };