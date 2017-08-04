import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import { addCharacterById } from '../actions'

class CharacterList extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                <h4>Characters</h4>
                <ul className='list-group'>
                    {
                        this.props.characters.map(character => {
                            return (
                                <li  className='list-group-item' key={character.id}>
                                    <div className='list-item'>{character.name}</div>
                                    <div 
                                        className='list-item right-button'
                                        onClick={() => this.props.addCharacterById(character.id)}
                                    >
                                        +
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


//mapStateToProps maps redux state to components props objects
function mapStateToProps(state){
    console.log('state', state)
    return {
        characters: state.characters
    }
}
//mapDispatchToProps binds action creators to props on component  --- so you can use your Action creators on the component to update Store
// function mapDispatchTopProps(dispatch){
//     //binding the addCharacterById then dispatchs to props
//     return bindActionCreators({ addCharacterById }, dispatch)
// }
                                            //was mapdispatch to props, changed to object of the action creator
export default connect(mapStateToProps, { addCharacterById })(CharacterList);