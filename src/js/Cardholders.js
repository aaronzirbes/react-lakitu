//var React = require('react');
/* eslint-disable */
var Cardholder = require('./Cardholder');
/* eslint-enable */

var Cardholders = React.createClass({
  render: function() {
    var eventNodes = this.props.cardholders.map(function(cardholder) {
      return (
        <Cardholder key={cardholder.key}
                    door={cardholder.door}
                    cardholderID={cardholder.cardholderID}
                    firstName={cardholder.forename}
                    middleName={cardholder.middleName}
                    lastName={cardholder.surname}
                    email={cardholder.email}
                    phone={cardholder.phone}
                    credentials={cardholder.credentials}
                    roles={cardholder.roles} />
      );
    });

    return ( <ul className="events collection">{eventNodes}</ul>);

  }
});

module.exports = Cardholders;
