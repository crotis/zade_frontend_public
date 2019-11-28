import React from 'react'
import '../../../style/styles.css'

class SelectBox extends React.Component {
  state = {
    ...this.props,
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items && this.props.items[0],
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems,
    }))
  }

  selectItem = (item) => this.setState({
    selectedItem: item,
    showItems: false,
  })

  render() {
    console.log("Child log:")
    console.log(this.props.data.asset)
    return (
      <div>
        {this.props.data.asset}
      </div>
    )
  }
}

export default SelectBox