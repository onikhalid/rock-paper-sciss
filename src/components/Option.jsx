
const Option = ({src, type, onClick}) => {
  const clas= `option ${type}`

  return (
    <div id={type} className={clas} onClick={onClick}>
      <img  id={type} className='option-img' src={src}alt={type}/>
    </div>
  )
}

export default Option