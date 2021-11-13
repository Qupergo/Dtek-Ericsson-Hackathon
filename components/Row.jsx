const Row = ({person}) => (
  <tr className="bg-primaryLighter border-b border-gray-600">
    {
      Object.keys(person).map(e => {
        return (
          <td className="px-4 py-3">{person[e]}</td>
        )
      })
    }
  </tr>
)

export default Row