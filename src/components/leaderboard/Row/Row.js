import styled from 'styled-components'

const Row = ({person}) => (
<table>
  <tr>
    {
      Object.keys(person).map(e => {
        return (
          <th>{person[e]}</th>
        )
      })
    }
  </tr>
</table>
)

export default Row