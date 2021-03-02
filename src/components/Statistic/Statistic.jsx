import React from 'react'
import { connect } from "react-redux";
import { resetGame, createNewGame } from '../../redux/gameReducer'

const Statistic = (props) => {

  return (
    <table className='statWrap'>
      <thead>
        <tr>
            <th>Место</th>
            <th>Победил</th>
            <th>Ходы</th>
            <th>Минуты</th>
            <th>Секунды</th>
        </tr>
      </thead>
    <tbody>
    {/* {
      arrStat.map((item, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item}</td>
          <td>{item}</td>
        </tr>
      ))
    } */}
    </tbody>
  </table>
  )
}

const mapStateToProps = (state) => {
  return {
    totalMove: state.gamePage.totalMove,
  }
}

export default connect(mapStateToProps,
   {resetGame, createNewGame })(Statistic);