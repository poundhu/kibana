define(function (require) {
  return function VisTypeFactory(Private) {
    // visLib visualization types
    return {
      histogram: Private(require('components/vislib/visualizations/column_chart')),
      pie: Private(require('components/vislib/visualizations/pie_chart')),
      line: Private(require('components/vislib/visualizations/line_chart')),
      tilemap: Private(require('components/vislib/visualizations/tile_map'))
    };
  };

});