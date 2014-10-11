/** @jsx React.DOM */

'use strict';

var F     = require('fkit'),
    React = require('react');

/**
 * Represents a list of properties.
 *
 * @class PropertiesComponent
 */
module.exports = React.createClass({
  displayName: 'PropertiesComponent',

  render: function() {
    return this.props.properties ? (
      /* jshint ignore:start */
      <section className="properties">
        <h4>Parameters</h4>
        <table className="table table-bordered table-condensed">
          <tbody>{this.renderProperties(this.props.properties)}</tbody>
        </table>
      </section>
      /* jshint ignore:end */
    ) : null;
  },

  renderProperties: F.map(function(property, i) {
    return (
      /* jshint ignore:start */
      <tr key={'term-' + i}>
        <td className="name"><code>{property.name}</code></td>
        <td className="description" dangerouslySetInnerHTML={{__html: property.description}}></td>
      </tr>
      /* jshint ignore:end */
    );
  }),
});
