import React, {PropTypes} from 'react'
import map from 'lodash/collection/map'
import sortBy from 'lodash/collection/sortBy'
import Table from 'react-bootstrap/lib/Table'


export default class ArrInTable extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    primary: PropTypes.string
  };

  constructor (props) {
    super(props);

    this.state = {
      sortProperty: props.primary || 'id',
      isNormalDirection: true // 'reverse'
    }
  }
  onChangeSort(ev) {
    const changes = {
      sortProperty: ev.currentTarget.innerText
    };
    if(changes.sortProperty === this.state.sortProperty) {
      changes.isNormalDirection = !this.state.isNormalDirection
    }
    this.setState(changes);
  }

  render() {
    const {sortProperty, isNormalDirection} = this.state;
    const {children} = this.props;
    var arr = sortBy(children, sortProperty);

    if(!isNormalDirection) {
      arr = arr.reverse()
    }

    const onChangeSort = this.onChangeSort.bind(this);

    return (<Table striped bordered condensed hover responsive>
      <thead>
      <tr>
        {Object.keys(arr[0]).map(function (key) {
          return (<th key={key} onClick={onChangeSort} style={{cursor: 'pointer'}}>{key}</th>)
        })}
      </tr>
      </thead>
      <tbody>{map(arr, function (el, i) {
        return (<tr key={i}>
          {map(el, function (value, key) {
            return (<td key={key}>{value}</td>)
          })}
        </tr>)
      })}</tbody>
    </Table>)
  }
}