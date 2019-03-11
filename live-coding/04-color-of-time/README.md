const vegaEmbed = require("vega-embed@3");

const colorOfTime = vegaEmbed({
  "$schema": "https://vega.github.io/schema/vega/v4.json",
  "title": "Color of Time",
  "width": 600,
  "height": 500,
  "padding": 5,

  "data": [
    {
      "name": "timesheet",
      "url": "data/20190213-harvest-time-report-export.csv",
      "format": {
        "type": "csv",
        "parse": {
          "Date": "date:'%Y-%m-%d'",
          "Hours": "number",
          "Started At": "date:'%H:%M'",
          "Ended At": "date:'%H:%M'"
        }
      },
      "transform": [
        {
          "type": "formula", "as": "Day",
          "expr": "timeFormat( datum['Date'], '%a %0d.%0m')"
        },
        {
          "type": "formula", "as": "Started",
          "expr": "timeFormat( datum['Started At'], '%0H.%0M')"
        },
        {
          "type": "formula", "as": "Ended",
          "expr": "timeFormat( datum['Ended At'], '%0H.%0M')"
        },
        {
          "type": "stack", "as": [ "y0", "y1" ],
          "groupby": [ "Day" ],
          "field": "Hours",
          "sort": { "field": "Ended", "order": "ascending" },
          "offset": "normalize"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "xscale",
      "type": "band",
      "domain": { "data": "timesheet", "field": "Day" },
      "range": "width",
      "round": true
    },
    {
      "name": "yscale",
      "type": "linear",
      "domain": {"data": "timesheet", "field": "y1" },
      "range": "height",
      "round": true
    },
    {
      "name": "color",
      "type": "ordinal",
      "domain": { "data": "timesheet", "field": "Task" },
      "range": { "scheme": "category20b" }
    }
  ],

  "axes": [
    { "orient": "bottom", "scale": "xscale" },
    { "orient": "left", "scale": "yscale" }
  ],

  "marks": [
    {
      "type": "rect",
      "from": { "data": "timesheet" },
      "encode": {
        "enter": {
          "x": { "scale": "xscale", "field": "Day" },
          "width": { "scale": "xscale", "band": 1, "offset": -1},
          "y": { "scale": "yscale", "field": "y0" },
          "y2": { "scale": "yscale", "field": "y1" },
          "fill": { "scale": "color", "field": "Task" },
          "stroke": { "value": "#ffffff"},
          "strokeWidth": { "value": 0.5 },
          "tooltip": { "field": "Task" }
        },
        "update": {
          "fillOpacity": { "value": 1 }
        },
        "hover": {
          "fillOpacity": { "value": 0.5 }
        }
      }
    }
  ]
});